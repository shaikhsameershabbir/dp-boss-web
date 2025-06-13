

export default function Footer() {
  return (
    <div className="fixed bottom-0 left-0 w-full py-2 px-4 flex justify-between items-center z-50 shadow-md">
      {/* Left Button */}
      <button className="bg-[#039] text-white text-sm font-bold italic px-3 py-1 rounded-md shadow cursor-pointer">
        Matka Play
      </button>

      {/* Center Button */}
      <button className="bg-[#039] text-white text-sm font-bold italic px-3 py-1 rounded-md shadow cursor-pointer">
        Result Api
      </button>

      {/* Right Button */}
      <button className="bg-[#039] text-white text-sm font-bold px-3 py-1 rounded-md shadow cursor-pointer">
        REFRESH
      </button>
    </div>
  );
}
