import { getStarlineResultById } from "@/app/api/api";
import React from "react";

interface StarlineResult {
  [date: string]: {
    [time: string]: string;
  };
}

interface TableRow {
  date: string;
  results: string[];
}

// Force dynamic rendering to prevent caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

function formatDate(dateString: string) {
  // Safely parse YYYY-MM-DD without timezone issues
  const [year, month, day] = dateString.split("-");
  return `${day}-${month}-${year}`;
}

function processStarlineData(starlineResult: StarlineResult) {
  const dateKeys = Object.keys(starlineResult).sort(); // sort dates ascending

  // Collect all unique times
  const timesSet = new Set<string>();
  dateKeys.forEach((date) => {
    const keys = Object.keys(starlineResult[date]);
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

  // Build table rows
  const rows = dateKeys.map((date) => {
    const dayData = starlineResult[date];
    return {
      date,
      results: times.map((time) => dayData[time] ?? ""),
    };
  });

  return { times, rows };
}

async function Page({ params }: { params: Promise<{ starlineId: string }> }) {
  const { starlineId } = await params;

  let starlineResult: StarlineResult | null = null;
  let times: string[] = [];
  let tableRows: TableRow[] = [];
  let starlineName = "";
  try {
    const response = await getStarlineResultById(starlineId);
    console.log(response);

    starlineResult = response;
    console.log("starlineResult", starlineResult);

    if (starlineResult) {
      // Get the first date key to extract starline name
      const firstDateKey = Object.keys(starlineResult)[0];
      if (firstDateKey && starlineResult[firstDateKey]) {
        starlineName = starlineResult[firstDateKey].starLineName || "";
      }

      const processed = processStarlineData(starlineResult);
      times = processed.times;
      tableRows = processed.rows;
    }
  } catch (error) {
    console.error("Error fetching starline result:", error);
  }

  return (
    <div className="m-2 sm:m-3 md:m-4 lg:m-6">
      <div
        className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold italic text-center mb-2 sm:mb-3 md:mb-4"
        style={{ color: "#2196f3", textShadow: "1px 1px 2px #fff" }}
      >
        {starlineName}
      </div>
      <div className="w-full max-w-full box-border overflow-x-auto">
        <div className="min-w-max max-w-[95vw] sm:max-w-[90vw] md:max-w-[85vw] lg:max-w-[80vw] mx-auto">
          <table className="w-full border-collapse text-[10px] sm:text-xs md:text-sm lg:text-base font-bold italic text-center text-black table-fixed">
            <thead className="text-black">
              <tr>
                <th
                  className="border-2 border-[#414eb0] bg-[#ffc338] text-black text-[10px] sm:text-xs md:text-sm lg:text-base px-1 py-1 sm:px-2 sm:py-2"
                  style={{ width: "80px" }}
                >
                  DATE
                </th>
                {times.map((time) => (
                  <th
                    key={time}
                    className="border-2 border-[#414eb0] bg-[#ffc338] text-black text-[10px] sm:text-xs md:text-sm lg:text-base px-1 py-1 sm:px-2 sm:py-2"
                    style={{
                      width: `${Math.floor(100 / (times.length + 1))}vw`,
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
                    className="border-2 border-[#414eb0] font-bold text-[10px] sm:text-xs md:text-sm lg:text-base italic text-black px-1 py-1 sm:px-2 sm:py-2 whitespace-nowrap"
                    style={{ width: "80px" }}
                  >
                    {formatDate(row.date)}
                  </td>
                  {row.results.map((result: string, i: number) => (
                    <td
                      key={i}
                      className="border-2 border-[#414eb0] text-[10px] sm:text-xs md:text-sm lg:text-base text-black px-1 py-1 sm:px-2 sm:py-2"
                      style={{
                        width: `${Math.floor(100 / (times.length + 1))}vw`,
                      }}
                    >
                      {result || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Page;
