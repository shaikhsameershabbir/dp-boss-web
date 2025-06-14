"use client";

import { getStarlineResultById } from "@/app/api/api";
import React, { useEffect, useState, use } from "react";

interface StarlineResult {
  [date: string]: {
    [time: string]: string;
  };
}

interface TableRow {
  date: string;
  results: string[];
}

function formatDate(dateString: string) {
  const date = new Date(dateString);
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
}

function Page({ params }: { params: Promise<{ starlineId: string }> }) {
  const resolvedParams = use(params);
  const { starlineId } = resolvedParams;
  const [starlineResult, setStarlineResult] = useState<StarlineResult | null>(
    null
  );
  const [tableRows, setTableRows] = useState<TableRow[]>([]);
  const [allTimes, setAllTimes] = useState<string[]>([]);

  useEffect(() => {
    const fetchStarlineResult = async () => {
      const response = await getStarlineResultById(starlineId);
      console.log("data------------", response);
      setStarlineResult(response);
    };
    fetchStarlineResult();
  }, [starlineId]);

  useEffect(() => {
    if (!starlineResult) return;
    console.log("starlineResult in effect:", starlineResult);
    const dateKeys = Object.keys(starlineResult).sort(); // sort dates ascending
    console.log("Date keys:", dateKeys);
    // Collect all unique times
    const timesSet = new Set<string>();
    dateKeys.forEach((date) => {
      const keys = Object.keys(starlineResult[date]);
      console.log("Keys for date", date, ":", keys);
      keys.forEach((key) => {
        // Only add keys that match time format and exclude starLineId and starLineName
        if (
          /\d{2}:\d{2} [AP]M/.test(key) &&
          key !== "starLineId" &&
          key !== "starLineName"
        ) {
          timesSet.add(key);
        }
      });
    });
    const times = Array.from(timesSet).sort((a, b) => {
      // Sort by hour/minute
      const parse = (t: string) => {
        const match = t.match(/(\d{2}):(\d{2}) ([AP]M)/);
        if (!match) return 0;
        const [h, m, ampm] = [parseInt(match[1]), parseInt(match[2]), match[3]];
        return ((h % 12) + (ampm === "PM" ? 12 : 0)) * 60 + m;
      };
      return parse(a) - parse(b);
    });
    console.log("Sorted times:", times);
    setAllTimes(times);

    // Build table rows
    const rows = dateKeys.map((date) => {
      const dayData = starlineResult[date];
      const row = {
        date,
        results: times.map((time) => dayData[time] ?? ""),
      };
      console.log("Created row:", row);
      return row;
    });
    setTableRows(rows);
  }, [starlineResult]);

  return (
    <div className="m-4">
      <div
        className="text-2xl font-bold italic text-center mb-2"
        style={{ color: "#2196f3", textShadow: "1px 1px 2px #fff" }}
      >
        MILAN STAR LINE CHART
      </div>
      <div className="w-full max-w-full box-border overflow-x-auto">
        <table className="min-w-max w-full border-collapse text-xs sm:text-base font-bold italic text-center text-black table-fixed">
          <thead className="text-black">
            <tr>
              <th
                className="border-2 border-[#414eb0] bg-[#ffc338] text-black text-xs sm:text-base px-1 py-1"
                style={{ width: "80px" }}
              >
                DATE
              </th>
              {allTimes.map((time) => (
                <th
                  key={time}
                  className="border-2 border-[#414eb0] bg-[#ffc338] text-black text-xs sm:text-base px-1 py-1"
                  style={{
                    width: `${Math.floor(100 / (allTimes.length + 1))}vw`,
                  }}
                >
                  {time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-black">
            {tableRows.map((row, idx) => (
              <tr key={idx} className="bg-[#ffcc99] text-black">
                <td
                  className="border-2 border-[#414eb0] font-bold text-xs sm:text-base italic text-black px-1 py-1 whitespace-nowrap"
                  style={{ width: "80px" }}
                >
                  {formatDate(row.date)}
                </td>
                {row.results.map((result: string, i: number) => (
                  <td
                    key={i}
                    className="border-2 border-[#414eb0] text-xs sm:text-base text-black px-1 py-1"
                    style={{
                      width: `${Math.floor(100 / (allTimes.length + 1))}vw`,
                    }}
                  >
                    {result}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Page;
