import Link from "next/link"

export const PowerdBy = () => {
    return (
        <>
            <div className="max-w-full mx-auto p-1">
                <div className="text-lg font-bold border-3 border-[#ffff] rounded-[10px] bg-[#ff00a2] m-1 p-2" >
                    <h3
                        className="text-white italic font-bold text-center"
                        style={{ textShadow: "2px 2px 4px black" }}
                    >
                        POWERD BY dpboss.boston
                    </h3>
                </div>
                <div className="border-[2px] border-[#a50031] rounded-[14px] overflow-hidden">

                    <div>
                        <p className="m-1 text-[#a50031] text-[10px] text-center">© 2011 - 2025 dpboss.boston</p>
                        <p className="m-1 text-[#000b65] text-[10px] text-center font-semibold"><Link href="/about"><span>About us</span></Link> | <Link href='/contact'><span>Contact us</span></Link></p>                        
                        <p className="m-1 text-[#000b65] text-[11px] text-center font-semibold">Privacy & policy | Term And Conditions</p>
                    </div>
                </div>

            </div>
        </>
    )
}