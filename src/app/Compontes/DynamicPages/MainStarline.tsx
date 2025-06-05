
"use client";

import { useEffect, useState } from "react";

interface StarlineResult {
    time: string;
    result: string;
}

export default function MainStarline() {
    const [data, setData] = useState<StarlineResult[]>([]);

    // Dummy data (replace with API call later)
    useEffect(() => {
        const dummyData: StarlineResult[] = [
            { time: "09:05 AM", result: "589-2" },
            { time: "10:05 AM", result: "389-0" },
            { time: "11:05 AM", result: "550-0" },
            { time: "12:05 PM", result: "370-0" },
            { time: "01:05 PM", result: "489-1" },
            { time: "02:05 PM", result: "779-3" },
            { time: "03:05 PM", result: "223-7" },
            { time: "04:05 PM", result: "349-6" },
            { time: "05:05 PM", result: "XXX-X" },
            { time: "06:05 PM", result: "XXX-X" },
            { time: "07:05 PM", result: "XXX-X" },
            { time: "08:05 PM", result: "XXX-X" },
        ];
        setData(dummyData);
    }, []);

    // Split the data into two columns
    const middle = Math.ceil(data.length / 2);
    const left = data.slice(0, middle);
    const right = data.slice(middle);

    return (
        <>
            <div className="text-xl font-bold border-2 border-[#000] rounded-[10px] bg-[#ffd902] m-2 p-1">
                <h3
                    className="text-black italic font-bold text-center"
                    style={{ textShadow: "2px 2px 4px white" }}
                >
                    MAIN STARLINE
                </h3>
            </div>
            <div className=" border-1 border-red-500 overflow-x-auto m-2">
                {/* Table */}
                <table className="w-full border-collapse text-lg font-bold italic text-center">
                    <thead className="bg-white text-[18px] text-black">
                        <tr>
                            <th className="border border-red-500">Time</th>
                            <th className="border border-red-500">Result</th>
                            <th className="border border-red-500">Time</th>
                            <th className="border border-red-500">Result</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: middle }).map((_, i) => (
                            <tr
                                key={i}
                                className="bg-gradient-to-b from-[#ffe0b2] to-[#fca] text-black "
                            >
                                <td className="border border-red-500">
                                    {left[i]?.time || ""}
                                </td>
                                <td className="border border-red-500">
                                    {left[i]?.result || ""}
                                </td>
                                <td className="border border-red-500">
                                    {right[i]?.time || ""}
                                </td>
                                <td className="border border-red-500">
                                    {right[i]?.result || ""}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>

    );
}
