/* eslint-disable jsx-a11y/alt-text */

import { gameoptions } from "@/app/constant/constant";

/* eslint-disable @next/next/no-img-element */
export default function Gameoptions() {
    return (

        <>
            <div className="rounded-lg shadow-md mx-2 border-3 border-[#b80000] p-1 mt-2">
                <p className="text-[#001699] italic font-bold text-center text-[15px]">{gameoptions.options}</p>
            </div>
        </>
    );
}
