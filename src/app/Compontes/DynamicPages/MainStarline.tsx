"use client";

import { useEffect, useState } from "react";

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

  // Split time slots into two columns
  const middle = Math.ceil(timeSlots.length / 2);
  const leftColumn = timeSlots.slice(0, middle);
  const rightColumn = timeSlots.slice(middle);

  return (
    <>
      <div className="text-xl font-bold border-2 border-[#000] rounded-[10px] bg-[#ffd902] m-2 p-1">
        <h3
          className="text-black italic font-bold text-center"
          style={{ textShadow: "2px 2px 4px white" }}
        >
          {data.starLineName.toUpperCase()}
        </h3>
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
                  {leftColumn[index] ? data[leftColumn[index]] || "XXX-X" : ""}
                </td>
                {/* Right Column */}
                <td className="border border-red-500">
                  {rightColumn[index] || ""}
                </td>
                <td className="border border-red-500">
                  {rightColumn[index]
                    ? data[rightColumn[index]] || "XXX-X"
                    : ""}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
