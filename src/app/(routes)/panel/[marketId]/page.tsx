/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { getJodiResult } from "@/app/api/api";
// import { panel } from "@/app/constant/constant";
import { gameConfigurtion } from "@/app/constant/constant";
import { ScrollButtons } from "./ScrollButtons";
import RefreshButton from "@/app/Compontes/StaticPage/RefreshButton";

// Force dynamic rendering to prevent caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Define a type for the API response
interface PanelDay {
  main: string;
  open?: string;
  close?: string;
}
interface PanelWeek {
  resultId: number;
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

interface PanelResponse {
  marketName: string;
  results: PanelWeek[];
  isSunday: boolean;
}

// Helper function to parse JSON string to PanelDay object
function parsePanelDay(dayValue: string | null): PanelDay | null {

  if (!dayValue) return null;

  try {
    const parsed = JSON.parse(dayValue);
    return {
      main: parsed.main || "",
      open: parsed.open || "",
      close: parsed.close || "",
    };
  } catch (error) {
    console.error("Error parsing panel day:", error);
    return null;
  }
}

export default async function Panel({
  params,
}: {
  params: Promise<{ marketId: string }>;
}) {
  const { marketId } = await params;

  let panelData: PanelWeek[] = [];
  let marketName = "";
  let lastResult = "";
  let isSunday = false;
  try {
    const response: PanelResponse = await getJodiResult(marketId);
    if (response && response.marketName && response.results) {
      marketName = response.marketName;
      isSunday = response.isSunday;
      panelData = response.results;
    }
  } catch (error) {
    console.error("Error fetching panel result:", error);
  }

  // Calculate last result
  if (panelData.length > 0) {
    // Flatten all days into a single array with their values
    const allResults = panelData
      .flatMap((week) => [
        parsePanelDay(week.monday),
        parsePanelDay(week.tuesday),
        parsePanelDay(week.wednesday),
        parsePanelDay(week.thursday),
        parsePanelDay(week.friday),
        parsePanelDay(week.saturday),
        parsePanelDay(week.sunday),
      ])
      .filter((res) => res && res.main);

    if (allResults.length > 0) {
      const last = allResults[allResults.length - 1];
      if (last) {
        lastResult = [last.open, last.main, last.close]
          .filter(Boolean)
          .join("-");
      }
    }
  }

  const redHighlightedNumbers: string[] = [
    "00",
    "11",
    "22",
    "33",
    "44",
    "55",
    "66",
    "77",
    "88",
    "99",
  ];
  const allDays: (keyof Omit<PanelWeek, "startDate" | "endDate">)[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const allDayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Filter days based on isSunday value
  const days = isSunday ? allDays : allDays.filter(day => day !== "sunday");
  const dayLabels = isSunday ? allDayLabels : allDayLabels.filter((_, index) => index < 6);

  return (
    <>
      <div className="bg-[#fc9] min-h-screen py-1">
        <div className="border-3 border-[#ff0016] flex justify-center items-center rounded-lg shadow-md bg-[#fc9]">
          <Link href="/">
            <img
              src={`/${gameConfigurtion.gameLogo}`}
              height={250}
              width={300}
            />
          </Link>
        </div>

        <div className="text-lg font-bold border-1 border-black mt-1 p-1">
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center text-[#00094d]">{marketName}</p>
          <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-center text-[#880e4f]">{lastResult}</p>
          <div className="flex justify-center items-center">
            <RefreshButton title="Refresh Result" />
          </div>
        </div>

        <ScrollButtons position="top" />

        {/* ⬇️ Matka Table Starts Here ⬇️ */}
        <div className="w-full overflow-x-auto mt-2 px-1 sm:px-2">
          <div className="max-w-[98%] sm:max-w-[95%] md:max-w-[85%] lg:max-w-[70%] mx-auto">
            <div className="text-center font-bold text-white bg-[#414eb0] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] p-1 sm:p-2">
              {marketName} PANEL RECORD 2019 - 2025
            </div>
            <div className="overflow-x-auto">
              <table
                className="w-full border-2 border-[#414eb0] text-center"
                style={{ tableLayout: "fixed", width: "100%" }}
              >
                <thead>
                  <tr className="bg-[#ffc338] text-black">
                    <th
                      className="border-2 border-[#414eb0] bg-[#ffc338] text-black text-[10px] sm:text-[11px] md:text-sm lg:text-base px-0 sm:px-1"
                      style={{ padding: 0 }}
                    >
                      Date
                    </th>
                    {dayLabels.map((day) => (
                      <th
                        key={day}
                        className="border-2 border-[#414eb0] bg-[#ffc338] text-black text-[10px] sm:text-[11px] md:text-sm lg:text-base px-0 sm:px-1"
                        style={{ padding: 0 }}
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-black">
                  {panelData.map((week, i) => (
                    <tr key={i}>
                      <td
                        className="border-2 border-[#414eb0] text-[8px] sm:text-[10px] md:text-xs lg:text-sm font-bold whitespace-pre-line align-middle p-0"
                        style={{ width: "80px", height: "60px" }}
                      >
                        <div className="w-full h-full flex items-center justify-center flex-col">
                          {new Date(week.startDate).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit'
                          })}
                          <br />
                          to
                          <br />
                          {new Date(week.endDate).toLocaleDateString('en-GB', {
                            day: '2-digit',
                            month: '2-digit',
                            year: '2-digit'
                          })}
                        </div>
                      </td>
                      {days.map((day, idx) => {
                        // Calculate the date for this cell
                        const cellDate = new Date(week.startDate);
                        cellDate.setDate(cellDate.getDate() + idx);
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);
                        if (cellDate > today) return null; // Do not render future cells

                        const value = parsePanelDay(week[day] as string | null);
                        const isStarPattern =
                          !value ||
                          (!value.open &&
                            (!value.main || value.main === "**") &&
                            !value.close);

                        // Check if this cell is for today
                        const isToday = cellDate.getTime() === today.getTime();

                        if (isStarPattern) {
                          // If it's today and has no result, show empty box instead of stars
                          if (isToday) {
                            return (
                              <td
                                key={day}
                                className="border-2 border-[#414eb0] p-0 text-[8px] sm:text-[10px] md:text-xs lg:text-sm align-middle"
                                style={{ width: "80px", height: "60px" }}
                              >
                                <div className="w-full h-full flex items-center justify-center">
                                  {/* Empty box for today */}
                                </div>
                              </td>
                            );
                          }

                          // Star pattern cell for past dates
                          return (
                            <td
                              key={day}
                              className="border-2 border-[#414eb0] p-0 text-[8px] sm:text-[10px] md:text-xs lg:text-sm align-middle"
                              style={{ width: "80px", height: "60px" }}
                            >
                              <div className="w-full h-full flex flex-col items-center justify-center">
                                <div className="flex flex-row justify-between w-full">
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "16px",
                                      textAlign: "center",
                                    }}
                                  >
                                    *
                                  </span>
                                  <span style={{ width: "28px" }}></span>
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "16px",
                                      textAlign: "center",
                                    }}
                                  >
                                    *
                                  </span>
                                </div>
                                <div className="flex flex-row justify-between w-full">
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "16px",
                                      textAlign: "center",
                                    }}
                                  >
                                    *
                                  </span>
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "28px",
                                      textAlign: "center",
                                    }}
                                  >
                                    **
                                  </span>
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "16px",
                                      textAlign: "center",
                                    }}
                                  >
                                    *
                                  </span>
                                </div>
                                <div className="flex flex-row justify-between w-full">
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "16px",
                                      textAlign: "center",
                                    }}
                                  >
                                    *
                                  </span>
                                  <span style={{ width: "28px" }}></span>
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "16px",
                                      textAlign: "center",
                                    }}
                                  >
                                    *
                                  </span>
                                </div>
                              </div>
                            </td>
                          );
                        }

                        // Normal open/main/close cell
                        const isRed = redHighlightedNumbers.includes(
                          value?.main || ""
                        );
                        return (
                          <td
                            key={day}
                            className="border-2 border-[#414eb0] p-0 text-[8px] sm:text-[10px] md:text-xs lg:text-sm align-middle"
                            style={{ width: "80px", height: "60px" }}
                          >
                            <div
                              className={`w-full h-full flex flex-row items-center justify-center ${isRed ? "text-red-600" : ""
                                }`}
                            >
                              {/* Open vertical */}
                              <div className="flex flex-col items-center justify-center flex-1 leading-none">
                                {(value?.open || "").split("").map((ch, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] font-extrabold leading-none"
                                    style={{ lineHeight: "1.1" }}
                                  >
                                    {ch}
                                  </span>
                                ))}
                              </div>
                              {/* Main */}
                              <div className="flex flex-col items-center justify-center flex-1">
                                <span
                                  className={`text-[14px] sm:text-[16px] md:text-[18px] lg:text-[21px] font-bold`}
                                  style={{
                                    lineHeight: "1",
                                    textAlign: "center",
                                  }}
                                >
                                  {value?.main}
                                </span>
                              </div>
                              {/* Close vertical */}
                              <div className="flex flex-col items-center justify-center flex-1 leading-none">
                                {(value?.close || "")
                                  .split("")
                                  .map((ch, idx) => (
                                    <span
                                      key={idx}
                                      className="text-[8px] sm:text-[10px] md:text-[11px] lg:text-[13px] font-extrabold leading-none"
                                      style={{ lineHeight: "1.1" }}
                                    >
                                      {ch}
                                    </span>
                                  ))}
                              </div>
                            </div>
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
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] text-center text-[#00094d]">{marketName}</p>
          <p className="text-[17px] sm:text-[19px] md:text-[21px] lg:text-[23px] text-center text-[#880e4f]">{lastResult}</p>
          <div className="flex justify-center items-center">
            <RefreshButton title="Refresh Result" />
          </div>
        </div>

        <ScrollButtons position="bottom" />
        <p className="text-center font-bold mt-2 text-black text-[12px] sm:text-[14px] md:text-[16px]">108</p>

        <div className="bg-[#fff] text-lg font-bold border-2 border-[#800080] mt-2 p-1">
          <h1 className="text-[25px] sm:text-[30px] md:text-[35px] text-center text-[#007bff]">
            www.dsbossnet.net
          </h1>
          <h2 className="text-[18px] sm:text-[22px] md:text-[25px] text-center text-[#ff0000]">
            All Rights Reseved®
          </h2>
          <h2 className="text-[18px] sm:text-[22px] md:text-[25px] text-center text-[#ff0000]">
            (1998-2024)
          </h2>
          <h2 className="text-[18px] sm:text-[22px] md:text-[25px] text-center text-[#ff0000]">
            Contact <span className="text-[#007bff]">(Astrologer-DsBoss)</span>
          </h2>
        </div>
      </div>
    </>
  );
}
