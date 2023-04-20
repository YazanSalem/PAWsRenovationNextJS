import { PrismaClient } from "@prisma/client";
import { times } from "../../app/staticData/times";
import { NextApiResponse } from "next";

const prisma = new PrismaClient();

export const findAvailableTables = async ({
    time,
    day,
    res,
    advisorId
}: {
    time: string;
    day: string;
    res: NextApiResponse;
    advisorId: string
}) => {
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
}