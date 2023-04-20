import { NextApiRequest, NextApiResponse } from "next";
import { times } from "../../../../app/staticData/times";
import { PrismaClient } from "@prisma/client";
import moment from "moment";
import { findAvailableTables } from "../../../../services/advisor/findAvailableTables";

const prisma = new PrismaClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if(req.method === "GET"){
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
      return res.status(400).json({
        erroreMessage: `This advisor does not exist: Id = ${parseInt(advisorId)}`,
      });
    }
  
    const searchTimesWithOpening = await findAvailableTables({
      time,
      day,
      res,
      advisor
    });
  
    if (!searchTimesWithOpening) {
      return res.status(400).json({
        errorMessage: "Invalid data provided",
      });
    }
  
    const availabilities = searchTimesWithOpening
      .map((t) => {
        const sumSeats = t.tables.reduce((sum, table) => {
          return sum + table.seats;
        }, 0);
  
        return {
          time: t.time,
          available: sumSeats > 0,
        };
      })
  
      .filter((availability) => {
        const startDateTime = `${day}T${advisor.start_time}`;
        const endDateTime = `${day}T${advisor.end_time}`;
        const dateTimeFormat = "YYYY-MM-DDTHH:mm:ss.SSSZ";
  
        const startDate = moment(startDateTime, dateTimeFormat).toDate();
        const endDate = moment(endDateTime, dateTimeFormat).toDate();
        const timeIsAfterStartingHour =
          new Date(`${day}T${availability.time}`) >= startDate;
        const timeIsBeforeEndingHour =
          new Date(`${day}T${availability.time}`) <= endDate;
  
        return timeIsAfterStartingHour && timeIsBeforeEndingHour;
      });
  
    return res.json(availabilities);
  }
}

// http://localhost:3000/api/advisor/12/availability?day=2023-04-24&time=22:00:00.000Z&partySize=1
