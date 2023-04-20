import { NextApiRequest, NextApiResponse } from "next";
import { times } from "../../../../app/staticData/times";
import { PrismaClient } from "@prisma/client";
import moment from "moment";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { advisorId, day, time, partySize } = req.query as {
    advisorId: string;
    day: string;
    time: string;
    partySize: string;
  };

  if (!day || !time || !partySize) {
    return res.status(400).json({
      errorMessage: "Invalid data provided",
    });
  }

  const searchTimes = times.find((t) => {
    return t.time === time;
  })?.searchTimes;

  if (!searchTimes) {
    return res.status(400).json({
      errorMessage: "Invalid data provided",
    });
  }

  const bookings = await prisma.booking.findMany({
    where: {
      booking_time: {
        gte: new Date(`${day}T${searchTimes[0]}`),
        lte: new Date(`${day}T${searchTimes[searchTimes.length - 1]}`),
      },
    },
    select: {
      booking_time: true,
      booking_num_of_people: true,
      tables: true,
    },
  });

  const bookingTablesObj: { [key: string]: { [key: number]: true } } = {};

  bookings.forEach((booking) => {
    bookingTablesObj[booking.booking_time.toISOString()] =
      booking.tables.reduce((obj, table) => {
        return {
          ...obj,
          [table.table_id]: true,
        };
      }, {});
  });

  const advisor = await prisma.advisor.findUnique({
    where: {
      id: parseInt(advisorId),
    },
    select: {
      start_time: true,
      end_time: true,
      tables: true,
    },
  });

  if (!advisor) {
    console.log("Cannot find advisor")
    return res.status(400).json({
      errorMessage: "Invalid data provided",
    });
  }

  const tables = advisor.tables;

  const searchTimesWithOpening = searchTimes.map((searchTime) => {
    return {
      date: new Date(`${day}T${searchTime}`),
      time: searchTime,
      tables,
    };
  });

  searchTimesWithOpening.forEach((t) => {
    t.tables = t.tables.filter((opening) => {
      if (bookingTablesObj[t.date.toISOString()]) {
        if (bookingTablesObj[t.date.toISOString()][opening.id]) return false;
      }
      return true;
    });
  });

  const availabilities = searchTimesWithOpening.map((t) => {
    const sumSeats = t.tables.reduce((sum, table) => {
      return sum + table.seats;
    }, 0);

    return {
      time: t.time,
      available: sumSeats > 0,
    };
  }).filter(availability => {
    const startDateTime = `${day}T${advisor.start_time}`;
    const endDateTime = `${day}T${advisor.end_time}`;
    const dateTimeFormat = 'YYYY-MM-DDTHH:mm:ss.SSSZ';

    const startDate = moment(startDateTime, dateTimeFormat).toDate();
    const endDate = moment(endDateTime, dateTimeFormat).toDate();
    const timeIsAfterStartingHour = new Date(`${day}T${availability.time}`) >= startDate
    const timeIsBeforeEndingHour = new Date(`${day}T${availability.time}`) <= endDate

    return timeIsAfterStartingHour && timeIsBeforeEndingHour
  })

  return res.json(availabilities);
}

// http://localhost:3000/api/advisor/12/availability?day=2023-04-24&time=22:00:00.000Z&partySize=1
