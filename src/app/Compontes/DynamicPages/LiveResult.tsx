"use client"

/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { liveResult } from "@/app/constant/constant";

// Define the interface for the result item
interface ResultItem {
    title: string;
    result?: string;
    hindiLine?: string;
}

// Temporary data for demonstration
const temporaryResults: ResultItem[] = [
    {
        title: "KALYAN MORNING",
        result: "123-45-678",
        hindiLine: "आज का मटका रिजल्ट"
    },
    {
        title: "MILAN DAY",
        result: "234-56-789",
        hindiLine: "सबसे तेज़ रिजल्ट"
    },
    {
        title: "RAJDHANI NIGHT",
        result: "345-67-890",
        hindiLine: "धमाकेदार जोड़ी"
    },
    {
        title: "MAIN BAZAR",
        result: "456-78-901",
        hindiLine: "आज का स्पेशल"
    }
];

export default function LiveResult() {
    const [results] = useState<ResultItem[]>(temporaryResults);

    return (
        <>
            <div className="rounded-lg shadow-md mx-2 bg-[#fc9] border-3 border-[#ff0016] p-1 mt-2">
                <div className="text-xl font-bold border-2 border-white rounded-[20px] bg-[#ff00a2] p-1">
                    <h3 className="text-white italic font-bold text-center" style={{ textShadow: '2px 2px 4px black' }}>{liveResult.title.toUpperCase()}</h3>
                </div>
                <p className="text-black italic font-bold text-center text-[20px]">
                    Sabse Tezz Live Result Yahi Milega
                </p>

                {results.map((item, idx) => (
                    <div key={idx} className="border-t-2 border-[#ff0016] text-center">
                        <h3 className="text-xl italic font-bold text-[#000066]">{item.title.toUpperCase()}</h3>
                        <p className="text-[18px] italic font-bold text-[#cc0044]">
                            {item.result || <span className="italic text-[#a00000]">Loading...</span>}
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
        </>
    );
}
