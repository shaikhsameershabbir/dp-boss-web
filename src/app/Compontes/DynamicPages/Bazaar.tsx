"use client";

import { useState, useEffect } from "react";
import { Bazzar } from "@/app/constant/constant";
import Link from "next/link";

const convertTo24HourFormat = (time12h: string): string => {
  if (!time12h) return "00:00";
  const [time, modifier] = time12h.split(" ");
  const [initialHours, minutes] = time.split(":");
  let hours = initialHours;

  if (hours === "12") {
    hours = "00";
  }

  if (modifier && modifier.toUpperCase() === "PM") {
    hours = (parseInt(hours, 10) + 12).toString();
  }

  return `${hours.padStart(2, "0")}:${minutes}`;
};

interface ResultItem {
  marketId: string;
  marketName: string;
  result: string;
  openTime: string;
  closeTime: string;
  yellowEnable: number;
  bgColor?: string;
}

interface BazaarProps {
  marketResults: ResultItem[];
}

export default function Bazaar({ marketResults }: BazaarProps) {
  const [results, setResults] = useState<ResultItem[]>([]);

  useEffect(() => {
    if (marketResults && marketResults.length > 0) {
      const processedResults = marketResults
        .map((market) => ({
          ...market,
          marketId: String(market.marketId),
          bgColor: market.yellowEnable === 1 ? "#ffff33" : "#fc9",
        }))
        .sort((a, b) => {
          const timeA = convertTo24HourFormat(a.openTime);
          const timeB = convertTo24HourFormat(b.openTime);
          return timeA.localeCompare(timeB);
        });
      setResults(processedResults);
    }
  }, [marketResults]);

  return (
    <>
      <div className="text-xl font-bold border-2 border-white rounded-[10px] bg-[#ff00a2] p-1 m-2">
        <h3
          className="text-white italic font-bold text-center"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          {Bazzar.title.toUpperCase()}
        </h3>
      </div>

      {results.map((item, idx) => (
        <div
          key={idx}
          className="mx-2 p-2 border-2 border-[#ff0016] relative"
          style={{
            backgroundColor: item.bgColor || "#fc9",
            borderTopColor: "#aa00aa",
            borderTopWidth: "2px",
          }}
        >
          {/* Left Button */}
          <Link href={`/jodi/${item.marketId}`}>
            <button className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#522f92] text-white text-[12px] font-bold px-3 py-[2px] rounded-[7px] italic cursor-pointer">
              Jodi
            </button>
          </Link>

          {/* Right Button */}
          <Link href={`/panel/${item.marketId}`}>
            <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#522f92] text-white text-[12px] font-bold px-3 py-[2px] rounded-[7px] italic cursor-pointer">
              Panel
            </button>
          </Link>

          {/* Center Content */}
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="text-2xl italic font-bold text-[#000066]" style={{ textShadow: "1px 1px 2px white" }}>
              {item.marketName}
            </h3>
            <p className="text-[25px] italic font-bold text-[#880e4f]">
              {item.result}
            </p>
            <div className="flex gap-5 mt-x text-black italic font-bold text-sm">
              <p className="text-[15px] font-semibold">{item.openTime}</p>
              <p className="text-[15px] font-semibold">{item.closeTime}</p>
            </div>
          </div>
        </div>
      ))}
      <div className="text-xl font-bold border-2 border-[#ff0016] rounded-[10px] bg-[#ffff] mr-2 ml-2 p-1">
        <h3
          className="text-black italic font-bold text-center"
          style={{ textShadow: "2px 2px 4px white" }}
        >
          Email for any inquiries or support:{" "}
          <button
            style={{
              backgroundImage: "radial-gradient(circle, #ffe500, #ff9800)",
            }}
            className="text-black font-bold px-3 rounded-[14px] cursor-pointer"
          >
            support@bazar.com
          </button>
        </h3>
      </div>
    </>
  );
}
