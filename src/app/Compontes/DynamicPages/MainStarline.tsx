"use client";

import { useEffect, useState } from "react";
import { Wheel } from "../StaticPage/wheel";
import Link from "next/link";

interface StarlineData {
  starLineName: string;
  [key: string]: string | null;
}

interface MainStarlineProps {
  data: StarlineData;
}

export default function MainStarline({ data }: MainStarlineProps) {
  // Get all time slots from the data
  const timeSlots = Object.keys(data).filter((key) => key !== "starLineName");
  const [lastNumber, setLastNumber] = useState<string | null>(null);
  // Split time slots into two columns
  const middle = Math.ceil(timeSlots.length / 2);
  const leftColumn = timeSlots.slice(0, middle);
  const rightColumn = timeSlots.slice(middle);

  useEffect(() => {
    // Find the last non-null result
    for (let i = timeSlots.length - 1; i >= 0; i--) {
      if (data[timeSlots[i]] !== null) {
        setLastNumber(data[timeSlots[i]]);
        break;
      }
    }
  }, [data, timeSlots]);

  return (
    <>
      <div className="text-xl font-bold border-2 border-[#000] rounded-[10px] bg-[#ffd902] m-2 p-1">
        <div className="flex">
          <div className="w-3/2">
            <h3
              className="text-black italic font-bold text-center"
              style={{ textShadow: "2px 2px 4px white" }}
            >
              {data.starLineName.toUpperCase()}
            </h3>
          </div>
          <div>
            <Link href={`/starlinePanel/${data.starLineId}`}>
              <button className=" bg-black text-white text-[12px] font-bold px-3 py-[3px] rounded-[7px] italic cursor-pointer">
                Chart
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-1 border-red-500 overflow-x-auto m-2">
        {/* Table */}
        <table className="w-full border-collapse text-lg font-bold italic text-center">
          <thead className="bg-white text-[18px] text-black">
            <tr>
              <th className="border border-red-500">Time</th>
              <th className="border border-red-500">Result</th>
              <th className="border border-red-500">Time</th>
              <th className="border border-red-500">Result</th>
            </tr>
          </thead>
          <tbody>
            {Array.from({ length: middle }).map((_, index) => (
              <tr
                key={index}
                className="bg-gradient-to-b from-[#ffe0b2] to-[#fca] text-black"
              >
                {/* Left Column */}
                <td className="border border-red-500">
                  {leftColumn[index] || ""}
                </td>
                <td className="border border-red-500">
                  {leftColumn[index] ? data[leftColumn[index]] || "" : ""}
                </td>
                {/* Right Column */}
                <td className="border border-red-500">
                  {rightColumn[index] || ""}
                </td>
                <td className="border border-red-500">
                  {rightColumn[index] ? data[rightColumn[index]] || "" : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* pass the last existing number to the wheel */}
      {lastNumber && <Wheel lastNumber={lastNumber} />}
    </>
  );
}
