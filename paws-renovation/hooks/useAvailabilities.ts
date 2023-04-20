import { useState } from "react";
import axios from "axios";


export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState<{time: string, available: boolean}[] | null>(null);

  const fetchAvailabilities = async ({
    advisorId,
    day,
    time,
    partySize
  }: {
    advisorId: number;
    day: string;
    time: string;
    partySize: string
  }) => {
    setLoading(true);

    try {
      const response = await axios.get(
        //http://localhost:3000/api/advisor/12/availability?day=2023-04-24&time=22:00:00.000Z&partySize=1
        `http://localhost:3000/api/advisor/${advisorId}/availability?day=${day}&time=${time}&partySize=${partySize}`
      );

      console.log(advisorId, day, time)
      setLoading(false);
      setData(response.data);
    } catch (error: any) {
      setLoading(false);
      console.log(advisorId, day, time)
      console.log(error);
      setError(error.response.data.errorMessage);
    }
  };

  return { loading, error, data, fetchAvailabilities };
}
