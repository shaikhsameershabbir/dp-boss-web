"use client";
export default function SpicalGameZone() {
    // Dummy data with optional links (you can update the hrefs)
    const items = [
        { label: "Dpboss Guessing Forum (Post)", href: "#" },
        { label: "All market free fix game", href: "#" },
        { label: "Ratan Khatri Fix Panel Chart", href: "#" },
        { label: "Matka Final Number Trick Chart", href: "#" },
        { label: "EverGreen Trick Zone And Matka Tricks By DpBoss", href: "#" },
    ];

    // CSS for RGB animation
    const rgbAnimationStyle = {
        background: "linear-gradient(to right, #ff0000,rgb(195, 0, 255), #0000ff, #ff0000)",
        backgroundSize: "200% auto",
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        color: "transparent",
        animation: "rgbFlow 1s linear infinite",
    };

    return (
        <div className="border-[3px] border-[#2c2c54] overflow-x-auto rounded-[10px] m-2">
            {/* Red Banner Header */}
            <div
                className="text-white font-bold text-center"
                style={{
                    background: "#ff1731",
                    color: "#fff",
                    borderRadius: "10px",
                    fontSize: "25px",
                    padding: "3px 5px",
                    textShadow: "1px 1px 2px #000",
                    clipPath:
                        "polygon(0 0, 97% 0, 100% 48%, 100% 80%, 100% 100%, 3% 100%, 0 46%, 0 20%)",
                }}
            >
                <h4
                    className="block mx-0 font-bold italic"
                    style={{
                        unicodeBidi: "isolate",
                        fontFamily: "Helvetica, sans-serif",
                    }}
                >
                    Dpboss Special Game Zone
                </h4>
            </div>

            {/* List Section */}
            <div className="text-center text-[20px] font-semibold italic font-[Helvetica,sans-serif]">
                {items.map((item, index) => (
                    <div
                        key={index}
                        className={`py-2 px-2 border-b-2 border-red-500 ${
                            index % 2 === 0 ? "bg-[#fed7aa]" : "bg-[#fcd9aa]"
                        }`}
                    >
                        <a
                            href={item.href}
                            style={rgbAnimationStyle}
                        >
                            {item.label}
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
