/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { panel, gameConfigurtion } from "../../constant/constant";

// Define a type for the days
type DayData = {
  main: string;
  sub1: string;
  sub2: string;
  sub3: string;
};

// Define a type for the row data
type MatkaRecord = {
  dateRange: string;
  Mon: DayData;
  Tue: DayData;
  Wed: DayData;
  Thu: DayData;
  Fri: DayData;
  Sat: DayData;
  Sun: DayData;
};

export default function Panel() {
  // Numbers to highlight in red
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
  const matkaData: MatkaRecord[] = [
    {
      dateRange: "22-04-2019\nTo\n28-04-2019",
      Mon: { main: "84", sub1: "2", sub2: "8", sub3: "1" },
      Tue: { main: "12", sub1: "2", sub2: "4", sub3: "1" },
      Wed: { main: "30", sub1: "4", sub2: "8", sub3: "1" },
      Thu: { main: "44", sub1: "2", sub2: "3", sub3: "1" },
      Fri: { main: "35", sub1: "7", sub2: "8", sub3: "1" },
      Sat: { main: "64", sub1: "4", sub2: "0", sub3: "1" },
      Sun: { main: "95", sub1: "1", sub2: "8", sub3: "1" },
    },
    {
      dateRange: "29-04-2019\nTo\n05-05-2019",
      Mon: { main: "12", sub1: "1", sub2: "2", sub3: "1" },
      Tue: { main: "50", sub1: "1", sub2: "4", sub3: "1" },
      Wed: { main: "63", sub1: "5", sub2: "7", sub3: "1" },
      Thu: { main: "38", sub1: "6", sub2: "8", sub3: "1" },
      Fri: { main: "47", sub1: "2", sub2: "6", sub3: "1" },
      Sat: { main: "99", sub1: "2", sub2: "7", sub3: "1" },
      Sun: { main: "65", sub1: "5", sub2: "6", sub3: "1" },
    },
    {
      dateRange: "06-05-2019\nTo\n12-05-2019",
      Mon: { main: "39", sub1: "6", sub2: "7", sub3: "1" },
      Tue: { main: "15", sub1: "4", sub2: "6", sub3: "1" },
      Wed: { main: "84", sub1: "3", sub2: "4", sub3: "1" },
      Thu: { main: "02", sub1: "1", sub2: "3", sub3: "1" },
      Fri: { main: "04", sub1: "4", sub2: "8", sub3: "1" },
      Sat: { main: "61", sub1: "5", sub2: "6", sub3: "1" },
      Sun: { main: "87", sub1: "2", sub2: "6", sub3: "1" },
    },
    {
      dateRange: "13-05-2019\nTo\n19-05-2019",
      Mon: { main: "51", sub1: "2", sub2: "5", sub3: "1" },
      Tue: { main: "36", sub1: "1", sub2: "2", sub3: "1" },
      Wed: { main: "47", sub1: "4", sub2: "5", sub3: "1" },
      Thu: { main: "30", sub1: "3", sub2: "6", sub3: "1" },
      Fri: { main: "05", sub1: "4", sub2: "6", sub3: "1" },
      Sat: { main: "28", sub1: "3", sub2: "4", sub3: "1" },
      Sun: { main: "93", sub1: "1", sub2: "7", sub3: "1" },
    },
    {
      dateRange: "20-05-2019\nTo\n26-05-2019",
      Mon: { main: "10", sub1: "4", sub2: "7", sub3: "1" },
      Tue: { main: "54", sub1: "5", sub2: "7", sub3: "1" },
      Wed: { main: "29", sub1: "3", sub2: "4", sub3: "1" },
      Thu: { main: "86", sub1: "1", sub2: "2", sub3: "1" },
      Fri: { main: "37", sub1: "7", sub2: "9", sub3: "1" },
      Sat: { main: "91", sub1: "1", sub2: "2", sub3: "1" },
      Sun: { main: "77", sub1: "5", sub2: "6", sub3: "1" },
    },
    {
      dateRange: "27-05-2019\nTo\n02-06-2019",
      Mon: { main: "37", sub1: "1", sub2: "3", sub3: "1" },
      Tue: { main: "80", sub1: "4", sub2: "5", sub3: "1" },
      Wed: { main: "43", sub1: "1", sub2: "3", sub3: "1" },
      Thu: { main: "60", sub1: "5", sub2: "8", sub3: "1" },
      Fri: { main: "44", sub1: "4", sub2: "6", sub3: "1" },
      Sat: { main: "05", sub1: "1", sub2: "3", sub3: "1" },
      Sun: { main: "88", sub1: "1", sub2: "4", sub3: "1" },
    },
    {
      dateRange: "03-06-2019\nTo\n09-06-2019",
      Mon: { main: "20", sub1: "2", sub2: "4", sub3: "1" },
      Tue: { main: "84", sub1: "4", sub2: "6", sub3: "1" },
      Wed: { main: "19", sub1: "4", sub2: "0", sub3: "1" },
      Thu: { main: "30", sub1: "1", sub2: "2", sub3: "1" },
      Fri: { main: "66", sub1: "2", sub2: "8", sub3: "1" },
      Sat: { main: "15", sub1: "7", sub2: "4", sub3: "1" },
      Sun: { main: "71", sub1: "3", sub2: "4", sub3: "1" },
    },
    {
      dateRange: "10-06-2019\nTo\n16-06-2019",
      Mon: { main: "55", sub1: "6", sub2: "9", sub3: "1" },
      Tue: { main: "91", sub1: "1", sub2: "5", sub3: "1" },
      Wed: { main: "40", sub1: "2", sub2: "9", sub3: "1" },
      Thu: { main: "00", sub1: "3", sub2: "8", sub3: "1" },
      Fri: { main: "02", sub1: "5", sub2: "7", sub3: "1" },
      Sat: { main: "80", sub1: "6", sub2: "7", sub3: "1" },
      Sun: { main: "88", sub1: "4", sub2: "6", sub3: "1" },
    },
    {
      dateRange: "17-06-2019\nTo\n23-06-2019",
      Mon: { main: "76", sub1: "3", sub2: "7", sub3: "1" },
      Tue: { main: "55", sub1: "3", sub2: "4", sub3: "1" },
      Wed: { main: "85", sub1: "7", sub2: "8", sub3: "1" },
      Thu: { main: "27", sub1: "2", sub2: "4", sub3: "1" },
      Fri: { main: "12", sub1: "8", sub2: "9", sub3: "1" },
      Sat: { main: "42", sub1: "1", sub2: "2", sub3: "1" },
      Sun: { main: "32", sub1: "1", sub2: "5", sub3: "1" },
    },
    {
      dateRange: "24-06-2019\nTo\n30-06-2019",
      Mon: { main: "89", sub1: "2", sub2: "6", sub3: "1" },
      Tue: { main: "02", sub1: "1", sub2: "8", sub3: "1" },
      Wed: { main: "47", sub1: "3", sub2: "4", sub3: "1" },
      Thu: { main: "63", sub1: "4", sub2: "6", sub3: "1" },
      Fri: { main: "30", sub1: "5", sub2: "9", sub3: "1" },
      Sat: { main: "93", sub1: "1", sub2: "3", sub3: "1" },
      Sun: { main: "19", sub1: "6", sub2: "8", sub3: "1" },
    },
    {
      dateRange: "01-07-2019\nTo\n07-07-2019",
      Mon: { main: "25", sub1: "1", sub2: "4", sub3: "1" },
      Tue: { main: "08", sub1: "4", sub2: "5", sub3: "1" },
      Wed: { main: "67", sub1: "4", sub2: "5", sub3: "1" },
      Thu: { main: "44", sub1: "3", sub2: "4", sub3: "1" },
      Fri: { main: "35", sub1: "6", sub2: "8", sub3: "1" },
      Sat: { main: "14", sub1: "3", sub2: "3", sub3: "1" },
      Sun: { main: "79", sub1: "2", sub2: "5", sub3: "1" },
    },
  ];
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
                    {[
                      "Date",
                      "Mon",
                      "Tue",
                      "Wed",
                      "Thu",
                      "Fri",
                      "Sat",
                      "Sun",
                    ].map((day) => (
                      <th
                        key={day}
                        className="border-2 border-[#03a9f4a8] text-xs sm:text-sm px-1 sm:px-2 py-1 whitespace-nowrap"
                      >
                        {day}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="text-black">
                  {matkaData.map((row, i) => (
                    <tr key={i}>
                      <td className="border-2 border-[#03a9f4a8] text-xs sm:text-sm font-bold whitespace-pre-line px-1 sm:px-2 py-1">
                        {row.dateRange}
                      </td>
                      {(
                        [
                          "Mon",
                          "Tue",
                          "Wed",
                          "Thu",
                          "Fri",
                          "Sat",
                          "Sun",
                        ] as const
                      ).map((day) => (
                        <td
                          key={day}
                          className="border-2 border-[#03a9f4a8] px-1 sm:px-2 py-1 text-xs sm:text-sm"
                        >
                          <div className="flex items-center justify-between h-full gap-0.5 xs:gap-1 sm:gap-2">
                            {/* Left Side */}
                            <div className="flex flex-col text-[8px] xs:text-[10px] sm:text-[13px] font-extrabold">
                              <div>{row[day].sub1}</div>
                              <div>{row[day].sub2}</div>
                              <div>{row[day].sub3}</div>
                            </div>

                            {/* Center Main */}
                            <div
                              className={`text-[14px] xs:text-[16px] sm:text-[23px] font-bold ${
                                redHighlightedNumbers.includes(row[day].main)
                                  ? "text-red-600"
                                  : "text-black"
                              }`}
                            >
                              {row[day].main}
                            </div>

                            {/* Right Side */}
                            <div className="flex flex-col text-[8px] xs:text-[10px] sm:text-[13px] font-extrabold items-end">
                              <div>{row[day].sub1}</div>
                              <div>{row[day].sub2}</div>
                              <div>{row[day].sub3}</div>
                            </div>
                          </div>
                        </td>
                      ))}
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
