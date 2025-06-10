/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */

import Link from "next/link";
import { copywrite, gameConfigurtion } from "@/app/constant/constant";

// Define a type for the days
type Day = "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun";

// Define a type for the row data
type DayData = {
  [key in Day]: string;
};

export default function Jodi({ params }: { params: { marketId: string } }) {
  const { marketId } = params;
  console.log("---------->>", marketId);
  const tempData: DayData[] = [
    {
      Mon: "84",
      Tue: "12",
      Wed: "30",
      Thu: "44",
      Fri: "35",
      Sat: "64",
      Sun: "95",
    },
    {
      Mon: "12",
      Tue: "50",
      Wed: "63",
      Thu: "38",
      Fri: "47",
      Sat: "99",
      Sun: "65",
    },
    {
      Mon: "39",
      Tue: "15",
      Wed: "84",
      Thu: "02",
      Fri: "04",
      Sat: "61",
      Sun: "87",
    },
    {
      Mon: "51",
      Tue: "36",
      Wed: "47",
      Thu: "30",
      Fri: "05",
      Sat: "28",
      Sun: "93",
    },
    {
      Mon: "10",
      Tue: "54",
      Wed: "29",
      Thu: "86",
      Fri: "37",
      Sat: "91",
      Sun: "77",
    },
    {
      Mon: "37",
      Tue: "80",
      Wed: "43",
      Thu: "60",
      Fri: "44",
      Sat: "05",
      Sun: "88",
    },
    {
      Mon: "20",
      Tue: "84",
      Wed: "19",
      Thu: "30",
      Fri: "66",
      Sat: "15",
      Sun: "71",
    },
    {
      Mon: "55",
      Tue: "91",
      Wed: "40",
      Thu: "00",
      Fri: "02",
      Sat: "80",
      Sun: "88",
    },
    {
      Mon: "76",
      Tue: "55",
      Wed: "85",
      Thu: "27",
      Fri: "12",
      Sat: "42",
      Sun: "32",
    },
    {
      Mon: "89",
      Tue: "02",
      Wed: "47",
      Thu: "63",
      Fri: "30",
      Sat: "93",
      Sun: "19",
    },
    {
      Mon: "25",
      Tue: "08",
      Wed: "67",
      Thu: "44",
      Fri: "35",
      Sat: "14",
      Sun: "79",
    },
    {
      Mon: "13",
      Tue: "61",
      Wed: "13",
      Thu: "02",
      Fri: "98",
      Sat: "77",
      Sun: "98",
    },
    {
      Mon: "44",
      Tue: "78",
      Wed: "99",
      Thu: "61",
      Fri: "04",
      Sat: "98",
      Sun: "25",
    },
  ];

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
            MILAN MORNING JODI CHART
          </h3>
        </div>

        <div className="text-lg font-bold border-3 border-[#ff0016] mt-1 p-1">
          <p className="text-sm text-center text-[#00094d]">
            MILAN MORNING JODI RESULT CHART RECORDS
          </p>
          <p className="text-xs text-center text-[#00094d]">
            Dpboss MILAN MORNING jodi chart, MILAN MORNING jodi chart, old MILAN
            MORNING jodi chart, dpboss MILAN MORNING chart...
          </p>
        </div>

        <div className="text-lg font-bold border-1 border-black mt-1 p-1">
          <p className="text-[22px] text-center text-[#00094d]">
            MILAN MORNING
          </p>
          <p className="text-[21px] text-center text-[#880e4f]">580-37-557</p>
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
                  {tempData.map((row, i) => (
                    <tr key={i}>
                      {days.map((day) => (
                        <td
                          key={day}
                          className={`border-2 border-blue-800 px-2 text-[24px] font-bold py-1 ${
                            HighlightedNumbers.includes(row[day])
                              ? "text-red-600 font-semibold"
                              : ""
                          }`}
                        >
                          {row[day]}
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
            MILAN MORNING
          </p>
          <p className="text-[21px] text-center text-[#880e4f]">580-37-557</p>
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
    </>
  );
}
