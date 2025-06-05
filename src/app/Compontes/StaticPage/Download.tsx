import { Redbox } from "@/app/constant/constant";
 
export default function Download() {
    return (

        <>
            <div>
                <div className="flex justify-center items-center mt-2 text-center bg-[#b80000] m-2 rounded-lg">
                    <div className="w-full p-1">
                        <h6 className="font-[Helvetica,sans-serif] italic font-bold text-white m-1">{Redbox.redBoxTitle}</h6>
                        <button className="bg-[#061a73] border-2 border-[#ffff] px-3 py-1 rounded-[14px] cursor-pointer text-white m-1 text-bold">{Redbox.downloadBtnText}</button>
                        <p className="font-[Helvetica,sans-serif] italic font-bold text-[#fff] text-[16px] m-1">{Redbox.downloadmsg}</p>
                        <p className="font-[Helvetica,sans-serif] italic font-bold text-[#fff] text-[16px] m-1">{Redbox.downloadmsg2}</p>
                    </div>
                </div>
            </div>
        </>
    );
}