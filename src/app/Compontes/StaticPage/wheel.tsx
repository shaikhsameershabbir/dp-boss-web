import Image from "next/image";

export const Wheel = ({ lastNumber }: { lastNumber: string }) => {
  return (
    <>
      <div className="rounded-lg shadow-md mx-2 bg-[#fc9] border-3 border-[#b80000] mt-2">
        <div className="bg-[#9c0000] flex justify-center items-center relative">
          <Image
            src="/gif/rajshree.gif"
            alt="Rajshree"
            height={300}
            width={350}
          />
          <span
            className="absolute text-[#0c0fb9] text-5xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 italic bg-white px-6 py-1 rounded-xl"
            style={{ textShadow: "3px 3px 0px #fcc700" }}
          >
            {lastNumber}
          </span>
        </div>
      </div>
    </>
  );
};
