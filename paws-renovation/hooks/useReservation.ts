import { useState } from "react";
import axios from "axios";

export default function useReservation() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const createReservation = async ({
    userId,
    advisorId,
    day,
    time,
    partySize,
    bookerLocation,
    bookerDescription,
  }: {
    userId: number;
    advisorId: number;
    day: string;
    time: string;
    partySize: number
    bookerLocation: string;
    bookerDescription: string;
  }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        // http://localhost:3000/api/advisor/12/reserve?day=2023-04-24&time=18:00:00.000Z
        `http://localhost:3000/api/advisor/${userId}/${advisorId}/reserve`,
        { bookerLocation, bookerDescription },
        {
          params: {
            day,
            time,
            partySize
          },
        }
      );

      console.log(advisorId, day, time);
      setLoading(false);
      return response.data;

    } catch (error: any) {
      setLoading(false);
      console.log(userId, advisorId, day, time);
      console.log(error.response.data.errorMessage);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, createReservation };
}
