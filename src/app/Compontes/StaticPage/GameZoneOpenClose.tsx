
const gameData = [
    {
        title: "MILAN MORNING",
        mainNumbers: "2-7-5-0",
        tripleNumbers: "237-179-258-235-118",
        doubleNumbers: "20-25-70-75-52-57-02-07",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    {
        title: "KALYAN MORNING",
        mainNumbers: "4-9-1-6",
        tripleNumbers: "680-289-126-290-240",
        doubleNumbers: "41-46-91-96-14-19-64-69",
    },
    // Add more blocks here...
];

export const GameZoneOpenClose = () => {
    return (
        <>
            <div className="text-xl font-bold border-3 border-[#ffff] rounded-[10px] bg-[#ff00a2] m-2 p-1">
                <h3
                    className="text-white italic font-bold text-center"
                    style={{ textShadow: "2px 2px 4px black" }}
                >
                    FREE GAME ZONE OPEN-CLOSE
                </h3>
            </div>
            <div className="rounded-lg shadow-md mx-2 bg-[#fc9] border-3 border-[#ff00a2] mt-2">
                <div className="text-[27px] font-bold rounded-[10px] border-3 border-[#ff00a2] m-2">
                    <p className="italic font-bold text-center text-[22px] text-[#000b65]">✔DATE:↬ : 26/05/2025 ↫</p>
                    <p className="italic font-bold text-center text-[22px] text-black">FREE GUESSING DAILY</p>
                    <p className="italic font-bold text-center text-[22px] text-black">OPEN TO CLOSE FIX ANK</p>
                </div>
                <div className="text-[27px] font-bold rounded-[10px] border-3 border-[#00d309] m-2">
                    <div className="grid grid-cols-2 p-2">
                        {gameData.map((item, index) => (
                            <div key={index} className="border-1 border-[#00d309] bg-[#ffd4ac]">
                                <div
                                    className="text-white px-4 py-2 flex items-center justify-center m-2"
                                    style={{
                                        clipPath:
                                            "polygon(0 0, 97% 0, 100% 48%, 100% 80%, 100% 100%, 3% 100%, 0 46%, 0 20%)",
                                        background: "linear-gradient(to bottom, #00d309, #004503)",
                                    }}  
                                >
                                    <span className="text-[20px] font-bold">↪ {item.title}</span>
                                </div>
                                <div className="p-2 text-center text-blue-900 font-bold text-[18px] space-y-2">
                                    <p>{item.mainNumbers}</p>
                                    <p>{item.tripleNumbers}</p>
                                    <p>{item.doubleNumbers}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>

        </>
    )
}