"use client";
/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { getJodiResult } from "@/app/api/api";
import { panel } from "@/app/constant/constant";
import { gameConfigurtion } from "@/app/constant/constant";
import { useEffect, use, useState } from "react";

// Define a type for the API response
interface PanelDay {
  main: string;
  open?: string;
  close?: string;
}
interface PanelWeek {
  startDate: string;
  endDate: string;
  monday: PanelDay | null;
  tuesday: PanelDay | null;
  wednesday: PanelDay | null;
  thursday: PanelDay | null;
  friday: PanelDay | null;
  saturday: PanelDay | null;
  sunday: PanelDay | null;
}

export default function Panel({
  params,
}: {
  params: Promise<{ marketId: any }>;
}) {
  const resolvedParams = use(params);
  const { marketId } = resolvedParams;
  const [panelData, setPanelData] = useState<PanelWeek[]>([]);

  useEffect(() => {
    const fetchPanelResult = async () => {
      const response = await getJodiResult(marketId);
      if (response.success && response.data && response.data.results) {
        setPanelData(response.data.results);
      }
    };
    fetchPanelResult();
  }, [marketId]);

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
  const days: (keyof Omit<PanelWeek, "startDate" | "endDate">)[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  const dayLabels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  return (
    <>
      <div className="bg-[#fc9] min-h-screen py-1">
        <div className="border-3 border-[#ff0016] flex justify-center items-center rounded-lg shadow-md bg-[#fc9]">
          <Link href="/">
            <img src={gameConfigurtion.gameLogo} height={250} width={300} />
          </Link>
        </div>

        <div className="text-lg font-bold border-3 border-[#ffff] bg-[#ff00a2] mt-1 p-1">
          <h3
            className="text-white italic font-bold text-center"
            style={{ textShadow: "2px 2px 4px black" }}
          >
            {panel.paneltitle}
          </h3>
        </div>

        <div className="text-lg font-bold border-3 border-[#ff0016] mt-1 p-1">
          <p className="text-sm text-center text-[#00094d]">
            {panel.panelheading}
          </p>
          <p className="text-xs text-center text-[#00094d]">
            {panel.panelsubtitle}
          </p>
        </div>

        <div className="text-lg font-bold border-1 border-black mt-1 p-1">
          <p className="text-[22px] text-center text-[#00094d]">
            {panel.matkaName}
          </p>
          <p className="text-[21px] text-center text-[#880e4f]">
            {panel.winningNumber}
          </p>
          <button className="bg-[#522f92] px-4 py-1 mx-auto block text-[12px] text-white">
            Refresh Result
          </button>
        </div>

        <button
          className="bg-[#a0d5ff] px-12 py-3 mx-auto block text-[14px] text-[#220c82] mt-2 font-bold"
          style={{
            textShadow: "1px 1px #00bcd4",
            boxShadow:
              "0 8px 10px 0 rgba(0,0,0,.2), 0 6px 8px 0 rgba(0,0,0,.19)",
          }}
        >
          Go to Bottom
        </button>

        {/* ⬇️ Matka Table Starts Here ⬇️ */}
        <div className="w-full overflow-x-auto mt-2 px-2">
          <div className="max-w-[95%] md:max-w-[70%] mx-auto">
            <div className="text-center font-bold text-white bg-[#414eb0] text-[14px] sm:text-[16px] p-2">
              MILAN MORNING MATKA PANEL RECORD 2019 - 2025
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-2 border-[#414eb0] text-center">
                <thead>
                  <tr className="bg-[#ffc338] text-black font-bold">
                    <th
                      className="border-2 border-[#414eb0] text-xs sm:text-sm px-1 py-1 whitespace-nowrap"
                      style={{ minWidth: "60px" }}
                    >
                      Date
                    </th>
                    {dayLabels.map((day) => (
                      <th
                        key={day}
                        className="border-2 border-[#414eb0] text-xs sm:text-sm px-1 py-1 whitespace-nowrap"
                        style={{ minWidth: "45px" }}
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
                        className="border-2 border-[#414eb0] text-xs sm:text-sm font-bold whitespace-pre-line px-1 py-1 align-middle"
                        style={{ minWidth: "60px" }}
                      >
                        {new Date(week.startDate).toLocaleDateString()}
                        <br />
                        to
                        <br />
                        {new Date(week.endDate).toLocaleDateString()}
                      </td>
                      {days.map((day, idx) => {
                        const value = week[day];
                        const isStarPattern =
                          !value ||
                          (!value.open &&
                            (!value.main || value.main === "**") &&
                            !value.close)
                            ? true
                            : false;
                        if (!value) {
                          // If value is null, show star pattern
                          return (
                            <td
                              key={day}
                              className="border-2 border-[#414eb0] p-0 text-xs sm:text-sm align-middle"
                              style={{
                                width: "60px",
                                height: "60px",
                                padding: 0,
                              }}
                            >
                              <div className="flex flex-col items-center justify-center h-full w-full">
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
                                <div className="flex flex-row justify-center w-full">
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "60px",
                                      textAlign: "center",
                                    }}
                                  >
                                    ***
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
                        if (isStarPattern) {
                          return (
                            <td
                              key={day}
                              className="border-2 border-[#414eb0] p-0 text-xs sm:text-sm align-middle"
                              style={{
                                width: "60px",
                                height: "60px",
                                padding: 0,
                              }}
                            >
                              <div className="flex flex-col items-center justify-center h-full w-full">
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
                                <div className="flex flex-row justify-center w-full">
                                  <span
                                    className="text-red-600 font-extrabold"
                                    style={{
                                      width: "60px",
                                      textAlign: "center",
                                    }}
                                  >
                                    ***
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
                        return (
                          <td
                            key={day}
                            className="border-2 border-[#414eb0] px-0 py-0 text-xs sm:text-sm align-middle"
                            style={{
                              minWidth: "45px",
                              height: "60px",
                              padding: 0,
                            }}
                          >
                            <div className="flex flex-row items-stretch justify-center h-full w-full">
                              {/* Open vertical */}
                              <div className="flex flex-col items-center justify-center flex-1 leading-none">
                                {(value.open || "").split("").map((ch, idx) => (
                                  <span
                                    key={idx}
                                    className="text-[11px] sm:text-[13px] font-extrabold leading-none"
                                    style={{ lineHeight: "1.1" }}
                                  >
                                    {ch}
                                  </span>
                                ))}
                              </div>
                              {/* Main */}
                              <div className="flex flex-col items-center justify-center flex-1">
                                <span
                                  className={`text-[18px] sm:text-[21px] font-bold`}
                                  style={{
                                    lineHeight: "1",
                                    textAlign: "center",
                                    color: redHighlightedNumbers.includes(
                                      value.main
                                    )
                                      ? "#d32f2f"
                                      : "#222",
                                  }}
                                >
                                  {value.main}
                                </span>
                              </div>
                              {/* Close vertical */}
                              <div className="flex flex-col items-center justify-center flex-1 leading-none">
                                {(value.close || "")
                                  .split("")
                                  .map((ch, idx) => (
                                    <span
                                      key={idx}
                                      className="text-[11px] sm:text-[13px] font-extrabold leading-none"
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
          <p className="text-[22px] text-center text-[#00094d]">
            {panel.matkaName}
          </p>
          <p className="text-[21px] text-center text-[#880e4f]">
            {panel.winningNumber}
          </p>
          <button className="bg-[#522f92] px-4 py-1 mx-auto block text-[12px] text-white">
            Refresh Result
          </button>
        </div>
        <div className="bg-[#fff] text-lg font-bold border-2 border-[#800080] mt-2 p-1 text-black">
          <p className="text-[12px] text-center">
            When you choose DPBoss Services to play your Milan Morning, you will
            get the game support of professionally trained gamblers. They can
            help you understand the game rules as well as its payouts
            thoroughly. They are not only skilled mentors but also very friendly
            and prepared to always engage with gamblers. Players can make use of
            the website&apos;s chat function each game to communicate with them,
            thus they can add a personal touch to their gambling experience.
          </p>
          <p className="text-[12px] text-center">
            On this Satta Matka website, you will be capable of finding and
            playing an enormous variety of online betting games. The wide range
            of these games is another reason for the fame of the DPBoss Services
            betting platform. Whether it is the excitement of Milan Morning or
            any other Satta Matka game, there is something to outfit the taste
            of every gambler.
          </p>
          <h5 className="text-[15px] text-center text-[#ff0000]">
            Get Milan Morning Jodi Chart Records Online
          </h5>
          <p className="text-[12px] text-center">
            On DPBoss Services, you will be capable of experiencing the
            strategic profundity of the unique attraction of every Satta Matka
            game. This Satta Matka website also features trending betting games,
            guaranteeing there is something for every novice as well as a
            veteran gambler. Moreover, all types of Satta Matka games on DPBoss
            Services will take you to an exciting new level.
          </p>
          <h5 className="text-[15px] text-center text-[#ff0000]">
            Frequently Asked Questions (FAQs):
          </h5>
          <p className="text-[12px] text-center">
            Q1. How the Milan Morning on DPBoss Services is designed?
          </p>
          <p className="text-[12px] text-center">
            The Milan Morning on this Satta Matka betting platform has been
            designed to offer a show-style gaming experience to all players with
            a whirlwind of entertainment and excitement.
          </p>
          <p className="text-[12px] text-center">
            Q2. What is the attractive feature of DPBoss Services&apos;s Milan
            Morning?
          </p>
          <p className="text-[12px] text-center">
            The Milan Morning features colourful graphics and engaging gameplay
            with a mixture of interactive entertainment and the odds to win
            hefty money, making every instant thrilling for players.
          </p>
        </div>

        <button
          className="bg-[#a0d5ff] px-12 py-3 mx-auto block text-[14px] text-[#220c82] mt-2 font-bold"
          style={{
            textShadow: "1px 1px #00bcd4",
            boxShadow:
              "0 8px 10px 0 rgba(0,0,0,.2), 0 6px 8px 0 rgba(0,0,0,.19)",
          }}
        >
          Go to top
        </button>
        <p className="text-center font-bold mt-2 text-black">108</p>

        <div className="bg-[#fff] text-lg font-bold border-2 border-[#800080] mt-2 p-1">
          <h1 className="text-[35px] text-center text-[#007bff]">
            DPBOSS.BOSTON
          </h1>
          <h2 className="text-[25px] text-center text-[#ff0000]">
            All Rights Reseved®
          </h2>
          <h2 className="text-[25px] text-center text-[#ff0000]">
            (1998-2024)
          </h2>
          <h2 className="text-[25px] text-center text-[#ff0000]">
            Contact <span className="text-[#007bff]">(Astrologer-Dpboss)</span>
          </h2>
        </div>
      </div>
    </>
  );
}
