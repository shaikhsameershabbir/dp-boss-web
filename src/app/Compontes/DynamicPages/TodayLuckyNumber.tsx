"use client";

import { lucknumber } from "@/app/constant/constant";
import { useEffect, useState, useRef } from "react";

interface LuckyNumberData {
  goldenAnk: string;
  finalAnkMessages: string[];
}

interface LuckyNumberApiData {
  goldenNumbers?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  finalNumbers?: Record<string, string>;
}

interface TodayLuckyNumberProps {
  initialData?: LuckyNumberApiData | null;
}

export default function TodayLuckyNumber({
  initialData,
}: TodayLuckyNumberProps) {
  const [luckyData, setLuckyData] = useState<LuckyNumberData>({
    goldenAnk: "",
    finalAnkMessages: [],
  });

  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const processLuckyNumberData = () => {
      try {
        const data = initialData;
        if (data && data.goldenNumbers && data.finalNumbers) {
          const goldenAnk = `${data.goldenNumbers.first}-${data.goldenNumbers.second}-${data.goldenNumbers.third}-${data.goldenNumbers.fourth}`;
          const finalAnkMessages = Object.entries(data.finalNumbers).map(
            ([market, number]) => `${market} - ${number}`
          );
          setLuckyData({
            goldenAnk,
            finalAnkMessages,
          });
        } else {
          console.warn(
            "[TodayLuckyNumber] API data missing expected fields:",
            initialData
          );
          // Set fallback data
          setLuckyData({
            goldenAnk: "1-6-3-8",
            finalAnkMessages: [
              "MILAN MORNING - 0",
              "SRIDEVI - 0",
              "KALYAN MORNING - 6",
              "MADHURI - 4",
              "SRIDEVI MORNING - 6",
              "KARNATAKA DAY - 4",
              "TIME BAZAR - 8",
              "MILAN DAY - 6",
              "KALYAN - 6",
              "SRIDEVI NIGHT - 4",
              "MADHURI NIGHT - 8",
              "MILAN NIGHT - 8",
              "RAJDHANI NIGHT - 6",
              "MAIN BAZAR - 4",
              "BOMBAY DAY - 6",
              "MUMBAI MORNING - 6",
              "KALYAN NIGHT - 4",
              "NAMASTHE - 8",
              "OLD MAIN MUMBAI - 0",
              "MADHUR DAY - 0",
              "MADHUR NIGHT - 8",
            ],
          });
        }
      } catch (error) {
        console.error(
          "[TodayLuckyNumber] Error processing lucky numbers:",
          error
        );
        // Set fallback data on error
        setLuckyData({
          goldenAnk: "1-6-3-8",
          finalAnkMessages: [
            "MILAN MORNING - 0",
            "SRIDEVI - 0",
            "KALYAN MORNING - 6",
            "MADHURI - 4",
            "SRIDEVI MORNING - 6",
            "KARNATAKA DAY - 4",
            "TIME BAZAR - 8",
            "MILAN DAY - 6",
            "KALYAN - 6",
            "SRIDEVI NIGHT - 4",
            "MADHURI NIGHT - 8",
            "MILAN NIGHT - 8",
            "RAJDHANI NIGHT - 6",
            "MAIN BAZAR - 4",
            "BOMBAY DAY - 6",
            "MUMBAI MORNING - 6",
            "KALYAN NIGHT - 4",
            "NAMASTHE - 8",
            "OLD MAIN MUMBAI - 0",
            "MADHUR DAY - 0",
            "MADHUR NIGHT - 8",
          ],
        });
      }
    };

    // Process data when component mounts or initialData changes
    if (initialData) {
      processLuckyNumberData();
    }
  }, [initialData]);

  return (
    <div className="rounded-lg shadow-md mx-2 bg-[#fc9] border-4 border-[#ff0016] p-1 mt-2">
      <div className="text-xl font-bold border-2 border-white rounded-[20px] bg-[#ff00a2] p-1">
        <h3
          className="text-white italic font-bold text-center"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          {lucknumber.title}
        </h3>
      </div>
      <div className="flex justify-between items-stretch mt-2 px-2 py-2">
        {/* Golden Ank */}
        <div className="w-[40%] text-center border-r border-red-600 pr-4">
          <p className="text-xl font-[Helvetica,sans-serif] italic font-bold text-[#001699]">
            {lucknumber.leftheading}
          </p>
          <h4 className="text-2xl font-extrabold text-[#001699]">
            {luckyData.goldenAnk}
          </h4>
        </div>

        {/* Final Ank with Marquee */}
        <div className="w-[60%] text-center pl-4">
          <p className="text-2xl font-[Helvetica,sans-serif] italic font-bold text-[#001699]">
            {lucknumber.rightheading}
          </p>

          {/* Marquee container */}
          <div className="h-10 overflow-hidden relative rounded-md">
            {/* Marquee content */}
            <div
              ref={marqueeRef}
              className="absolute w-full"
              style={{ animation: "marqueeUpward 80s linear infinite" }}
            >
              {luckyData.finalAnkMessages.map((message, index) => (
                <div
                  key={index}
                  className="py-1 text-sm font-semibold text-[#001699]"
                >
                  {message}
                </div>
              ))}
            </div>
          </div>

          {/* CSS for the marquee animation */}
          <style jsx>{`
            @keyframes marqueeUpward {
              0% {
                transform: translateY(0%);
              }
              100% {
                transform: translateY(
                  -${luckyData.finalAnkMessages.length * 24}px
                );
              }
            }
          `}</style>
        </div>
      </div>
    </div>
  );
}
