import { Dispatch, SetStateAction, useState } from "react";
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
    setDidBook
  }: {
    userId: number;
    advisorId: number;
    day: string;
    time: string;
    partySize: number
    bookerLocation: string;
    bookerDescription: string;
    setDidBook: Dispatch<SetStateAction<boolean>>
  }) => {
    setLoading(true);

    try {
      const response = await axios.post(
        `http://localhost:3000/api/advisor/${advisorId}/${userId}/reserve`,
        { bookerLocation, bookerDescription },
        {
          params: {
            day,
            time,
            partySize
          },
        }
      );

      setLoading(false);
      setDidBook(true);
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
