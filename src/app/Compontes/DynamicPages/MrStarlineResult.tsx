
"use client";

import { useEffect, useState } from "react";

interface StarlineResult {
    time: string;
    result: string;
}

export default function MrStarlineResult() {
    const [data, setData] = useState<StarlineResult[]>([]);

    // Dummy data (replace with API call later)


    // Split the data into two columns
    const middle = Math.ceil(data.length / 2);
    const left = data.slice(0, middle);
    const right = data.slice(middle);

    return (
        <>
            <div className="text-xl font-bold border-2 border-[#ffff] rounded-[10px] bg-[#ff00a2] m-2 p-1">
                <h3
                    className="text-white italic font-bold text-center"
                    style={{ textShadow: "2px 2px 4px black" }}
                >
                   Mumbai Rajshree Star Line Result
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
                                className="bg-gradient-to-b from-[#ffe0b2] to-[#fca] text-black"
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
