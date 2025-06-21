/* eslint-disable jsx-a11y/alt-text */
import { gameConfigurtion } from "../../constant/constant";

/* eslint-disable @next/next/no-img-element */
export default function Header() {
    return (

        <>
            <div>
                <div className="border-3 border-[#ff0016] flex justify-center items-center rounded-lg shadow-md mr-2 ml-2 bg-[#fc9]">
                    <img src={gameConfigurtion.gameLogo} height={250} width={300}></img>
                </div>
                <div className="flex justify-center items-center mt-2 mb-2">
                    <div className="flex w-full justify-between items-center rounded-lg shadow-md mr-2 ml-2 bg-[#fc9] border-3 border-[#ff0016] p-1">
                        <div className="flex-shrink-0">
                            <img src={gameConfigurtion.godImg} alt="Logo" height={60} width={90} />
                        </div>
                        <div className="ml-6 text-left">
                            <p className="text-md mt-2 text-center font-[Helvetica,sans-serif] italic font-bold text-black">
                                !! Welcome toDsBoss international !! Satta Matka Fast Result
                            </p>
                        </div>

                    </div>
                </div>
                <div className="flex justify-center items-center mt-2 text-center">
                    <div className="w-full rounded-lg shadow-md mx-2 bg-[#fc9] border-3 border-[#ff0016] p-1">
                        <h6 className="font-[Helvetica,sans-serif] italic font-bold text-black">{gameConfigurtion.resultMsg}</h6>
                        <p className="font-[Helvetica,sans-serif] italic font-bold text-[#444] text-[14px]">{gameConfigurtion.resultinfo}</p>
                    </div>
                </div>
            </div>
        </>
    );
}
