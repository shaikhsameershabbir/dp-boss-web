"use client";

import { liveResult } from "@/app/constant/constant";

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
          <h3 className="text-xl italic font-bold text-[#000066]">
            {item.marketName.toUpperCase()}
          </h3>
          <p className="text-[18px] italic font-bold text-[#cc0044]">
            {item.result || (
              <span className="italic text-[#a00000]">{item.result}</span>
            )}
          </p>
          <button className="m-1 text-white bg-[#522f92] text-[12px] font-bold px-3 rounded-[7px] p-1 cursor-pointer">
            Refresh
          </button>
          {item.hindiLine && (
            <p className="text-[20px] text-black font-bold">{item.hindiLine}</p>
          )}
        </div>
      ))}
    </div>
  );
}
