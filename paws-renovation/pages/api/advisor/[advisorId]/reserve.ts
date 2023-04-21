import { PrismaClient } from "@prisma/client";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";
import { findAvailableTables } from "../../../../services/advisor/findAvailableTables";
import { fetchProfileCard } from "../../../../functions/fetchData";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const {userId, advisorId, day, time, partySize } = req.query as {
      userId: string;
      advisorId: string;
      day: string;
      time: string;
      partySize: string;
    };

    const {
      bookerLocation,
      bookerDescription,
    } = req.body;

    if(!bookerLocation){
      return res.status(400).json({
        errorMessage: "Please enter a location"
      })
    }

    // if(bookerLocation !== "IN-PERSON" || bookerLocation !== "ONLINE"){
    //   return res.status(400).json({
    //     errorMessage: "Please make sure the Location input is IN-PERSON or ONLINE (case sensitive)"
    //   })
    // }

    const advisor = await prisma.advisor.findUnique({
      where: {
        id: parseInt(advisorId),
      },
      select: {
        id: true,
        start_time: true,
        end_time: true,
        tables: true,
      },
    });

    if (!advisor) {
      return res.status(400).json({
        erroreMessage: `This advisor does not exist: Id = ${parseInt(
          advisorId
        )}`,
      });
    }

    //   const startDateTime = `${day} ${advisor.start_time}`;
    //   const endDateTime = `${day} ${advisor.end_time}`;
    //   const dateTimeFormat = 'YYYY-MM-DD HH:mm';

    //   const startDate = moment(startDateTime, dateTimeFormat).toDate();
    //   const endDate = moment(endDateTime, dateTimeFormat).toDate();

    //   if (
    //     new Date(`${day}T${time}`) > startDate ||
    //     new Date(`${day}T${time}`) > endDate
    //   ) {
    //     return res.status(400).json({
    //         erroreMessage: `Advisor is not available at that time`,
    //       });
    //   }

    const searchTimesWithOpening = await findAvailableTables({
      time,
      day,
      res,
      advisor,
    });

    if (!searchTimesWithOpening) {
      return res.status(400).json({
        errorMessage: "Invalid data provided",
      });
    }

    const searchTimeWithTables = searchTimesWithOpening.find((t) => {
      return t.date.toISOString() === new Date(`${day}T${time}`).toISOString();
    });

    if (!searchTimeWithTables) {
      return res.status(400).json({
        errorMessage: "No availability, cannot book",
      });
    }

    const tablesCount: {
      1: number[];
    } = {
      1: [],
    };

    searchTimeWithTables.tables.forEach((table) => {
      if (table.seats === 1) {
        tablesCount[1].push(table.id);
      }
    });

    const tablesToBook: number[] = [];
    let seatsRemaining = parseInt(partySize);

    while (seatsRemaining > 0) {
      if (seatsRemaining >= 1) {
        if (tablesCount[1].length) {
          tablesToBook.push(tablesCount[1][0]);
          tablesCount[1].shift();
          seatsRemaining = seatsRemaining - 1;
        }
      }
    }

    const user = await fetchProfileCard(parseInt(userId));
    
    if(user === null){
      return res.status(400).json({
        errorMessage: "This user doesn't exist",
      });
    }

    const bookerFirstName = user.first_name;
    const bookerLastName = user.last_name;
    const bookerEmail = user.email;
    const bookerPhone = user.phone;

    const booking = await prisma.booking.create({
      data: {
        booking_num_of_people: 1,
        booking_time: new Date(`${day}T${time}`),
        booker_email: bookerEmail,
        booker_phone: bookerPhone,
        booker_first_name: bookerFirstName,
        booker_last_name: bookerLastName,
        booker_description: bookerDescription,
        booker_location: bookerLocation,
        advisor_id: advisor.id,
      },
    });

    const bookingsOnTablesData = tablesToBook.map(table_id => {
        return {
            table_id,
            booking_id: booking.id
        }
    })

    await prisma.bookingsOnTables.createMany({
      data: bookingsOnTablesData,
    });

    return res.json({
      booking,
    });
  }
}

// http://localhost:3000/api/advisor/12/reserve?day=2023-04-24&time=18:00:00.000Z&partySize=1
