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

  try {
    const response = await getStarlineResultById(starlineId);
    console.log(response);

    starlineResult = response;

    if (starlineResult) {
      const processed = processStarlineData(starlineResult);
      times = processed.times;
      tableRows = processed.rows;
    }
  } catch (error) {
    console.error("Error fetching starline result:", error);
  }

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
              {times.map((time) => (
                <th
                  key={time}
                  className="border-2 border-[#414eb0] bg-[#ffc338] text-black text-xs sm:text-base px-1 py-1"
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
                      width: `${Math.floor(100 / (times.length + 1))}vw`,
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
