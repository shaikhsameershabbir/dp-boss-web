

import { notice } from "@/app/constant/constant";


export default function Notice() {
  return (
    <div className="rounded-lg shadow-md mx-2 bg-[#fc9] border-3 border-[#b80000] p-1 mt-2">
      <div className="text-xl font-bold bg-[#b80000]">
        <h3
          className="text-white italic font-bold text-center"
          style={{ textShadow: "2px 2px 4px black" }}
        >
          {notice.title}
        </h3>
      </div>
      <p className="text-black italic font-bold text-center text-[16px]">
        {notice.subtitle}
      </p>
      <p className="text-black italic font-bold text-center text-[16px]">
        {notice.info}
      </p>
      <p className="italic font-bold text-center text-[16px] text-[#522f92]">
        {notice.email}
      </p>
      <p className="text-black italic font-bold text-center text-[16px]">
        {notice.rules}
      </p>
    </div>
  );
}
