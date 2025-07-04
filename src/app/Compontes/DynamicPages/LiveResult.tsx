"use client";

import { liveResult } from "@/app/constant/constant";
import RefreshButton from "../StaticPage/RefreshButton";

// Define the interface for the result item
interface ResultItem {
  result?: string;
  hindiLine?: string;
  marketName: string;
}

export default function LiveResult({
  resultLiveForDate,
}: {
  resultLiveForDate: ResultItem[];
}) {
  return (
    <div className="rounded-lg shadow-md mx-2 bg-[#fc9] border-3 border-[#ff0016] p-1 mt-2">
      <div className="text-xl font-bold border-2 border-white rounded-[20px] bg-[#ff00a2] p-1">
        <h3
          className="text-white italic font-bold text-center"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          {liveResult.title.toUpperCase()}
        </h3>
      </div>
      <p className="text-black italic font-bold text-center text-[20px]">
        Sabse Tezz Live Result Yahi Milega
      </p>

      {resultLiveForDate.map((item, idx) => (
        <div key={idx} className="border-t-2 border-[#ff0016] text-center">
          <h3 className="text-2xl italic font-bold text-[#000066]" style={{ textShadow: "1px 1px 2px white" }}>
            {item.marketName.toUpperCase()}
          </h3>
          <p className="text-[25px] italic font-bold text-[#cc0044]">
            {item.result || (
              <span className="italic text-[#a00000]">{item.result}</span>
            )}
          </p>
          <div className="flex justify-center items-center">
          <RefreshButton title="Refresh" />
        </div>
          {item.hindiLine && (
            <p className="text-[20px] text-black font-bold">{item.hindiLine}</p>
          )}
        </div>
      ))}
    </div>
  );
}
