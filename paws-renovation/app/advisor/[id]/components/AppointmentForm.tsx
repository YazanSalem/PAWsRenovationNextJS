"use client";

import { times } from "../../../staticData/times";
import { useState } from "react";
import DatePicker from "react-datepicker";
import useAvailabilities from "../../../../hooks/useAvailabilities";
import { CircularProgress } from "@mui/material";
import Link from "next/link";
import { getTimeString } from "../../../../functions/convertToDisplayTime";

export default function AppointmentForm({
  userId,
  startTime,
  endTime,
  advisorId,
}: {
  userId: string;
  startTime: string;
  endTime: string;
  advisorId: number;
}) {
  const { data, loading, error, fetchAvailabilities } = useAvailabilities();

  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(startTime);
  const [day, setDay] = useState(new Date().toISOString().split("T")[0]);

  const handleChangeDate = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split("T")[0]);
      return setSelectedDate(date);
    }

    return setSelectedDate(null);
  };

  const handleClick = () => {
    console.log("This is the advisorId in appointmentForm " + advisorId)
    fetchAvailabilities({
      advisorId,
      day,
      time,
      partySize: '1',
    });

    console.log(data)
  };
  const filterTimeByAdvisorWindow = () => {
    const timesInWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === startTime) {
        isWithinWindow = true;
      }

      if (isWithinWindow) {
        timesInWindow.push(time);
      }

      if (time.time === endTime) {
        isWithinWindow = false;
      }
    });

    return timesInWindow;
  };

  return (
    <>
      <div className="m-auto">
        <div className="flex justify-between mb-6">
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Date</label>
            <DatePicker
              selected={selectedDate}
              onChange={handleChangeDate}
              className="py-3 border-b font-light text-reg w-32"
              dateFormat="MMMM d"
              wrapperClassName="w-[48%]"
            />
          </div>
          <div className="flex flex-col w-[48%]">
            <label htmlFor="">Time</label>
            <select
              name=""
              id=""
              className="py-3 border-b font-light w-32"
              value={time}
              onChange={(e) => setTime(e.target.value)}
            >
              {filterTimeByAdvisorWindow().map((time) => (
                <option value={time.time}>{time.displayTime}</option>
              ))}
            </select>
          </div>
        </div>
        {/* <div className="inline-block relative w-64 mb-6 mt-2">
          <label className="ml-1 mb-3">Location</label>
          <select className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
            <option>Online</option>
            <option>In Person</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            ></svg>
          </div>
        </div>

        <div className="relative mb-6" data-te-input-wrapper-init>
          <textarea
            className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black-200 dark:placeholder:text-black-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
            id="exampleFormControlTextarea13"
            rows={3}
            placeholder="Message"
          ></textarea>
          <label
            htmlFor="exampleFormControlTextarea13"
            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-black-200 dark:peer-focus:text-primary"
          >
            Description of Appointment
          </label>
        </div> */}
        <button
          className="uppercase bg-yellow-600 w-full text-white p-3 hover:bg-yellow-500 rounded text-sm mb-5"
          onClick={handleClick}
          disabled={loading}
        >
          {loading ? <CircularProgress color="inherit" /> : "Find A Time"}
        </button>
        {data && data.length ? (
        <div className="mt-4">
          <p className="text-reg">Select a Time</p>
          <div className="flex flex-wrap mt-2">
            {
              data.map(time => {
                return  time.available? <Link href={`/reserve/${userId}/${advisorId}?date=${day}T${time.time}`}
                className="bg-yellow-500 cursor-pointer p-2 w-24 text-center text-white mb-3 roundedd mr-3">
                  <p className="text-sm font-bold">{getTimeString(time.time)}</p>
                </Link> : <p className="bg-gray-300 p-2 w-24 mb-3 rounded mr-3"></p>
              })
            }
          </div>
        </div> ): null}
      </div>
    </>
  );
}
