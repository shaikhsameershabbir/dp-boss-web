import React from "react";

export const KalyanTable = () => {
    const data = [
        {
            day: "सोम",
            sets: [["3", "689", "5", "366", "7", "223", "8", "666"], ["", "35", "", "53", "", "78", "", "87"]],
        },
        {
            day: "मंगल",
            sets: [["2", "156", "7", "467", "8", "477", "9", "333"], ["", "27", "", "72", "", "89", "", "98"]],
        },
        {
            day: "बुध",
            sets: [["3", "779", "7", "359", "8", "134", "9", "478"], ["", "37", "", "73", "", "89", "", "98"]],
        },
        {
            day: "गुरु",
            sets: [["3", "779", "5", "168", "7", "133", "9", "388"], ["", "35", "", "53", "", "79", "", "97"]],
        },
        {
            day: "शुक्र",
            sets: [["5", "122", "6", "277", "7", "269", "8", "189"], ["", "56", "", "65", "", "78", "", "87"]],
        },
        {
            day: "शनि",
            sets: [["2", "138", "5", "122", "7", "467", "9", "234"], ["", "25", "", "52", "", "79", "", "97"]],
        },
    ];

    return (
        <div className="overflow-x-auto p-2">
            <div className="bg-yellow-300 border border-black">
                <h3 className="border border-black text-[#00f] text-[24px] justify-center items-center flex font-bold italic">कल्याण</h3>
                <table className="w-full table-fixed border border-black text-center font-bold">
                    <tbody>
                        {data.map((row, rowIndex) => (
                            <tr key={rowIndex} className="bg-[#ffcaa6] border border-red-500">
                                <td className="border border-red-500 text-[20px] italic text-black">{row.day}</td>
                                {row.sets[0].map((topValue, i) => {
                                    const bottomValue = row.sets[1][i];
                                    const hasBoth = topValue && bottomValue;

                                    return (
                                        <td key={i} className="border border-red-500 text-[22px] font-extrabold p-0 text-black">
                                            <div className={`flex flex-col ${hasBoth ? "divide-y divide-red-500" : ""}`}>
                                                {topValue && (
                                                    <div className={`${['3', '5', '7', '8','2','9','6'].includes(topValue) ? 'text-[30px] font-bold text-black' : 'text-[16px]'}`}>
                                                        {topValue}
                                                    </div>
                                                )}
                                                {bottomValue && (
                                                    <div className={`${['3', '5', '7', '8'].includes(bottomValue) ? 'text-[24px] font-bold text-red-600' : 'text-[16px]'}`}>
                                                        {bottomValue}
                                                    </div>
                                                )}
                                            </div>
                                        </td>
                                    );
                                })}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
};
