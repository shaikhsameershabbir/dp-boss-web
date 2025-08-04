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
  // sort in decending order by date
  const dateKeys = Object.keys(starlineResult).sort((a, b) => {
    const dateA = new Date(a);
    const dateB = new Date(b);
    return dateB.getTime() - dateA.getTime();
  }); // sort dates ascending
  // console.log(dateKeys)
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


    starlineResult = response;


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
    <div className="min-h-screen  py-4 px-1 sm:px-4">
      <div className="max-w-full w-full mx-auto mb-4">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-blue-600 mb-2" style={{ textShadow: '1px 1px 2px #fff' }}>{starlineName}</h1>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="w-full min-w-max bg-[#fc9] border border-black text-xs sm:text-sm md:text-base text-black">
          <thead className="sticky top-0 z-10 bg-[#fc9]">
            <tr>
              <th className="border border-[#414eb0] px-2 py-2 font-semibold text-center  whitespace-nowrap">DATE</th>
              {times.map((time) => (
                <th
                  key={time}
                  className="border border-[#414eb0] px-2 py-2 font-semibold text-center  whitespace-nowrap"
                >
                  {time}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, idx) => (
              <tr key={idx} className="even:[#fc9]">
                <td className="border border-[#414eb0] px-2 py-2 font-medium text-center whitespace-nowrap font-bold">{formatDate(row.date)}</td>
                {row.results.map((result: string, i: number) => (
                  <td
                    key={i}
                    className="border border-[#414eb0] px-2 py-2 text-center whitespace-nowrap  font-bold"
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
  );
}

export default Page;
