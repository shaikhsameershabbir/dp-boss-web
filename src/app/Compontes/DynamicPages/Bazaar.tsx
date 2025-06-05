"use client";

import { useState } from "react";
import { Bazzar } from "@/app/constant/constant";
import Link from 'next/link';

interface ResultItem {
    title: string;
    result?: string;
    openTime?: string;
    closeTime?: string;
    bgColor?: string; // Add this line to allow admin-controlled background
}

const temporaryResults: ResultItem[] = [
    { title: "MILAN MORNING", result: "579-14-347", openTime: "10:30 AM", closeTime: "11:30 AM", bgColor: "#fc9" },
    { title: "SRIDEVI", result: "144-96-277", openTime: "11:35 AM", closeTime: "12:35 PM", bgColor: "#fc9" },
    { title: "MAIN BAZAR MORNING", result: "223-73-120", openTime: "11:15 AM", closeTime: "12:15 PM", bgColor: "#fc9" },
    { title: "KALYAN MORNING", result: "490-35-249", openTime: "11:00 AM", closeTime: "12:02 PM", bgColor: "#fc9" },
    { title: "PADMAVATHI", result: "456-53-166", openTime: "11:40 AM", closeTime: "12:40 PM", bgColor: "#fc9" },
    { title: "MADHURI", result: "145-02-156", openTime: "11:45 AM", closeTime: "12:45 PM", bgColor: "#ffff33" },
    { title: "RAJDHANI MORNING [main]", result: "128-13-788", openTime: "11:25 AM", closeTime: "12:55 PM", bgColor: "#fc9" },
    { title: "SRIDEVI MORNING", result: "120-35-357", openTime: "10:00 AM", closeTime: "11:00 AM", bgColor: "#fc9" },
];

export default function Bazaar() {
    const [results] = useState<ResultItem[]>(temporaryResults);

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
                        backgroundColor: item.bgColor || "#fc9", // Fallback to default
                        borderTopColor: "#aa00aa",
                        borderTopWidth: "2px",
                    }}
                >
                    {/* Left Button */}
                    <Link href="/jodi">
                    <button className="absolute left-1 top-1/2 -translate-y-1/2 bg-[#522f92] text-white text-[12px] font-bold px-3 py-[2px] rounded-[7px] italic cursor-pointer">
                        Jodi
                    </button>
                    </Link>

                    {/* Right Button */}
                    <Link href="/panel">
                    <button className="absolute right-1 top-1/2 -translate-y-1/2 bg-[#522f92] text-white text-[12px] font-bold px-3 py-[2px] rounded-[7px] italic cursor-pointer">
                        Panel
                    </button>
                    </Link>

                    {/* Center Content */}
                    <div className="flex flex-col items-center justify-center text-center">
                        <h3 className="text-xl italic font-bold text-[#000066]">
                            {item.title}
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
