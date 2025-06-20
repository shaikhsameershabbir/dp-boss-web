import Link from "next/link";
import { copywrite, gameConfigurtion } from "@/app/constant/constant";
import { getJodiResult } from "@/app/api/api";
import Image from "next/image";

// Force dynamic rendering to prevent caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define a type for the API response
interface JodiResult {
  id: number;
  userId: number;
  marketId: number;
  startDate: string;
  endDate: string;
  monday: string | null;
  tuesday: string | null;
  wednesday: string | null;
  thursday: string | null;
  friday: string | null;
  saturday: string | null;
  sunday: string | null;
  createdAt: string;
}

interface JodiResponse {
  marketName: string;
  results: JodiResult[];
}

// Helper function to parse JSON string to JodiDay object
function parseJodiDay(dayValue: string | null): { main: string; open?: string; close?: string } | null {
  if (!dayValue) return null;

  try {
    const parsed = JSON.parse(dayValue);
    return {
      main: parsed.main || "",
      open: parsed.open || "",
      close: parsed.close || "",
    };
  } catch (error) {
    console.error("Error parsing jodi day:", error);
    return null;
  }
}

// Define a type for the days
type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

// Define a type for the row data
type DayData = {
  [key in Day]: string;
};

const isFutureDay = (weekStartDate: string, dayIndex: number) => {
  const today = new Date();
  const weekDate = new Date(weekStartDate);
  const dayDate = new Date(weekDate);
  dayDate.setDate(weekDate.getDate() + dayIndex);
  return dayDate > today;
};

export default async function Jodi({
  params,
}: {
  params: Promise<{ marketId: string }>;
}) {
  const { marketId } = await params;

  let jodiData: DayData[] = [];
  let marketName = "";
  let lastResult: {
    open?: string;
    main: string;
    close?: string;
  } | null = null;
  let rawResults: JodiResult[] = [];

  try {
    const response: JodiResponse = await getJodiResult(marketId);
    if (response && response.marketName && response.results) {
      marketName = response.marketName;
      rawResults = response.results;

      // Transform the API data into our display format
      const transformedData = response.results.map((week: JodiResult) => {
        return {
          Mon: isFutureDay(week.startDate, 0) ? "" : parseJodiDay(week.monday)?.main || "**",
          Tue: isFutureDay(week.startDate, 1) ? "" : parseJodiDay(week.tuesday)?.main || "**",
          Wed: isFutureDay(week.startDate, 2)
            ? ""
            : parseJodiDay(week.wednesday)?.main || "**",
          Thu: isFutureDay(week.startDate, 3)
            ? ""
            : parseJodiDay(week.thursday)?.main || "**",
          Fri: isFutureDay(week.startDate, 4) ? "" : parseJodiDay(week.friday)?.main || "**",
          Sat: isFutureDay(week.startDate, 5)
            ? ""
            : parseJodiDay(week.saturday)?.main || "**",
          Sun: isFutureDay(week.startDate, 6) ? "" : parseJodiDay(week.sunday)?.main || "**",
        };
      });
      jodiData = transformedData;

      // Find the last existing result
      const allResults = response.results
        .flatMap((week: JodiResult) => [
          {
            day: "monday",
            data: week.monday,
            date: new Date(week.startDate),
          },
          {
            day: "tuesday",
            data: week.tuesday,
            date: new Date(
              new Date(week.startDate).setDate(
                new Date(week.startDate).getDate() + 1
              )
            ),
          },
          {
            day: "wednesday",
            data: week.wednesday,
            date: new Date(
              new Date(week.startDate).setDate(
                new Date(week.startDate).getDate() + 2
              )
            ),
          },
          {
            day: "thursday",
            data: week.thursday,
            date: new Date(
              new Date(week.startDate).setDate(
                new Date(week.startDate).getDate() + 3
              )
            ),
          },
          {
            day: "friday",
            data: week.friday,
            date: new Date(
              new Date(week.startDate).setDate(
                new Date(week.startDate).getDate() + 4
              )
            ),
          },
          {
            day: "saturday",
            data: week.saturday,
            date: new Date(
              new Date(week.startDate).setDate(
                new Date(week.startDate).getDate() + 5
              )
            ),
          },
          {
            day: "sunday",
            data: week.sunday,
            date: new Date(
              new Date(week.startDate).setDate(
                new Date(week.startDate).getDate() + 6
              )
            ),
          },
        ])
        .filter(
          (result: {
            day: string;
            data: string | null;
            date: Date;
          }) => {
            const today = new Date();
            return result.data !== null && result.date <= today;
          }
        );

      if (allResults.length > 0) {
        const last = allResults[allResults.length - 1].data;
        if (last) {
          const parsedLast = parseJodiDay(last);
          if (parsedLast) {
            lastResult = {
              open: parsedLast.open,
              main: parsedLast.main,
              close: parsedLast.close,
            };
          }
        }
      }
    }
  } catch (error) {
    console.error("Error fetching jodi result:", error);
  }

  const days: Day[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const HighlightedNumbers = [
    "44",
    "50",
    "05",
    "99",
    "61",
    "77",
    "66",
    "00",
    "88",
  ];

  return (
    <div className="bg-[#fc9] min-h-screen py-1">
      <div className="border-3 border-[#ff0016] flex justify-center items-center rounded-lg shadow-md bg-[#fc9]">
        <Link href="/">
          <Image
            src={`/${gameConfigurtion.gameLogo}`}
            height={250}
            width={300}
            alt="game logo"
          />
        </Link>
      </div>

      <div className="text-lg font-bold border-3 border-[#ffff] bg-[#ff00a2] mt-1 p-1">
        <h3
          className="text-white italic font-bold text-center"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          {marketName.toUpperCase()} JODI CHART
        </h3>
      </div>

      <div className="text-lg font-bold border-3 border-[#ff0016] mt-1 p-1">
        <p className="text-sm text-center text-[#00094d]">
          {marketName.toUpperCase()} JODI RESULT CHART RECORDS
        </p>
        <p className="text-xs text-center text-[#00094d]">
          Dpboss {marketName.toUpperCase()} jodi chart,{" "}
          {marketName.toUpperCase()} jodi chart, old {marketName.toUpperCase()}
          jodi chart, dpboss {marketName.toUpperCase()} chart...
        </p>
      </div>

      <div className="text-lg font-bold border-1 border-black mt-1 p-1">
        <p className="text-[22px] text-center text-[#00094d]">
          {marketName.toUpperCase()}
        </p>
        {lastResult && (
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-[18px] text-[#880e4f]">
              {lastResult.open || "**"}
            </span>
            <span className="text-[21px] text-[#880e4f] font-bold">-</span>
            <span className="text-[21px] text-[#880e4f] font-bold">
              {lastResult.main}
            </span>
            <span className="text-[21px] text-[#880e4f] font-bold">-</span>
            <span className="text-[18px] text-[#880e4f]">
              {lastResult.close || "**"}
            </span>
          </div>
        )}
        <button className="bg-[#522f92] px-4 py-1 mx-auto block text-[12px] text-white mt-2">
          Refresh Result
        </button>
      </div>

      <button
        className="bg-[#a0d5ff] px-12 py-3 mx-auto block text-[14px] text-[#220c82] mt-2 font-bold"
        style={{
          textShadow: "1px 1px #00bcd4",
          boxShadow: "0 8px 10px 0 rgba(0,0,0,.2), 0 6px 8px 0 rgba(0,0,0,.19)",
        }}
      >
        Go to Bottom
      </button>

      {/* ⬇️ Matka Table Starts Here ⬇️ */}
      <div className="w-full overflow-x-auto mt-2 px-2">
        <div className="max-w-[90%] sm:max-w-[80%] md:max-w-[70%] lg:max-w-[60%] xl:max-w-[50%] mx-auto">
          <div className="text-center font-bold text-white bg-[#414eb0] text-[16px]">
            MILAN MORNING MATKA JODI RECORD 2019 - 2025
          </div>
          <div className="overflow-auto">
            <table className="min-w-full border border-blue-800 text-center text-sm sm:text-base">
              <thead>
                <tr className="bg-yellow-400 text-black font-bold">
                  {days.map((day) => (
                    <th key={day} className="border-2 border-blue-800 px-2">
                      {day}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-black bg-orange-200">
                {jodiData.map((row, i) => (
                  <tr key={i}>
                    {days.map((day, dayIdx) => {
                      // Calculate the date for this cell
                      const week = rawResults[i] || null;
                      let cellDate: Date | null = null;
                      if (week) {
                        const weekStart = new Date(week.startDate);
                        cellDate = new Date(weekStart);
                        cellDate.setDate(weekStart.getDate() + dayIdx);
                      }
                      const today = new Date();
                      today.setHours(0, 0, 0, 0);
                      const isFuture = cellDate && cellDate > today;
                      const isToday =
                        cellDate && cellDate.getTime() === today.getTime();
                      const value = row[day];
                      return (
                        <td
                          key={day}
                          className={`border-2 border-blue-800 px-2 text-[24px] font-bold py-1 ${HighlightedNumbers.includes(value)
                            ? "text-red-600 font-semibold"
                            : ""
                            }`}
                        >
                          {isFuture ? (
                            ""
                          ) : isToday ? (
                            value && value !== "**" ? (
                              value
                            ) : (
                              ""
                            )
                          ) : value && value !== "**" ? (
                            value
                          ) : (
                            <span className="text-red-600">**</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* ⬆️ Matka Table Ends Here ⬆️ */}
      <div className="text-lg font-bold border-1 border-black mt-5 p-1">
        <p className="text-[22px] text-center text-[#00094d]">
          {marketName.toUpperCase()}
        </p>
        {lastResult && (
          <div className="flex justify-center items-center gap-2 mt-2">
            <span className="text-[18px] text-[#880e4f]">
              {lastResult.open || "**"}
            </span>
            <span className="text-[21px] text-[#880e4f] font-bold">-</span>
            <span className="text-[21px] text-[#880e4f] font-bold">
              {lastResult.main}
            </span>
            <span className="text-[21px] text-[#880e4f] font-bold">-</span>
            <span className="text-[18px] text-[#880e4f]">
              {lastResult.close || "**"}
            </span>
          </div>
        )}
        <button className="bg-[#522f92] px-4 py-1 mx-auto block text-[12px] text-white">
          Refresh Result
        </button>
      </div>
      <div className="bg-[#fff] text-lg font-bold border-2 border-[#800080] mt-2 p-1 text-black">
        <p className="text-[12px] text-center">
          When you choose DPBoss Services to play your Milan Morning, you will
          get the game support of professionally trained gamblers. They can help
          you understand the game rules as well as its payouts thoroughly. They
          are not only skilled mentors but also very friendly and prepared to
          always engage with gamblers. Players can make use of the
          website&apos;s chat function each game to communicate with them, thus
          they can add a personal touch to their gambling experience.
        </p>
        <p className="text-[12px] text-center">
          On this Satta Matka website, you will be capable of finding and
          playing an enormous variety of online betting games. The wide range of
          these games is another reason for the fame of the DPBoss Services
          betting platform. Whether it is the excitement of Milan Morning or any
          other Satta Matka game, there is something to outfit the taste of
          every gambler.
        </p>
        <h5 className="text-[15px] text-center text-[#ff0000]">
          Get Milan Morning Jodi Chart Records Online
        </h5>
        <p className="text-[12px] text-center">
          On DPBoss Services, you will be capable of experiencing the strategic
          profundity of the unique attraction of every Satta Matka game. This
          Satta Matka website also features trending betting games, guaranteeing
          there is something for every novice as well as a veteran gambler.
          Moreover, all types of Satta Matka games on DPBoss Services will take
          you to an exciting new level.
        </p>
        <h5 className="text-[15px] text-center text-[#ff0000]">
          Frequently Asked Questions (FAQs):
        </h5>
        <p className="text-[12px] text-center">
          Q1. How the Milan Morning on DPBoss Services is designed?
        </p>
        <p className="text-[12px] text-center">
          The Milan Morning on this Satta Matka betting platform has been
          designed to offer a show-style gaming experience to all players with a
          whirlwind of entertainment and excitement.
        </p>
        <p className="text-[12px] text-center">
          Q2. What is the attractive feature of DPBoss Services&apos;s Milan
          Morning?
        </p>
        <p className="text-[12px] text-center">
          The Milan Morning features colourful graphics and engaging gameplay
          with a mixture of interactive entertainment and the odds to win hefty
          money, making every instant thrilling for players.
        </p>
      </div>

      <button
        className="bg-[#a0d5ff] px-12 py-3 mx-auto block text-[14px] text-[#220c82] mt-2 font-bold"
        style={{
          textShadow: "1px 1px #00bcd4",
          boxShadow: "0 8px 10px 0 rgba(0,0,0,.2), 0 6px 8px 0 rgba(0,0,0,.19)",
        }}
      >
        Go to top
      </button>
      <p className="text-center font-bold mt-2 text-black">108</p>

      <div className="bg-[#fff] text-lg font-bold border-2 border-[#800080] mt-2 p-1">
        <h1 className="text-[35px] text-center text-[#007bff]">
          {copywrite.title}
        </h1>
        <h2 className="text-[25px] text-center text-[#ff0000]">
          {copywrite.message}
        </h2>
        <h2 className="text-[25px] text-center text-[#ff0000]">
          {copywrite.year}
        </h2>
        <h2 className="text-[25px] text-center text-[#ff0000]">
          {copywrite.contact} (<span>{copywrite.sub1}</span>
          <span className="text-[#007bff]">{copywrite.sub2}</span>)
        </h2>
      </div>
    </div>
  );
}
