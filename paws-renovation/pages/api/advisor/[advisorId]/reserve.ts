import { PrismaClient } from "@prisma/client";
import moment from "moment";
import { NextApiRequest, NextApiResponse } from "next";

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

  const advisor = await prisma.advisor.findUnique({
    where: {
      id: parseInt(advisorId),
    },
    select: {
      start_time: true,
      end_time: true,
    },
  });

  if (!advisor) {
    return res.status(400).json({
      erroreMessage: `This advisor does not exist: Id = ${parseInt(advisorId)}`,
    });
  }

  const startDateTime = `${day} ${advisor.start_time}`;
  const endDateTime = `${day} ${advisor.end_time}`;
  const dateTimeFormat = 'YYYY-MM-DD HH:mm';
  
  const startDate = moment(startDateTime, dateTimeFormat).toDate();
  const endDate = moment(endDateTime, dateTimeFormat).toDate();

  console.log(startDate);
  console.log(endDate);
  
  if (
    new Date(`${day}T${time}`) < startDate ||
    new Date(`${day}T${time}`) > endDate
  ) {
    return res.status(400).json({
        erroreMessage: `Advisor is not available at that time`,
      });
  }

  return res.json({
    advisorId,
    day,
    time,
    partySize,
  });
}

// http://localhost:3000/api/advisor/12/reserve?day=2023-04-24&time=19:00:00.000Z&partySize=1
