export const Wheel2 = ({ lastNumber }: { lastNumber: string }) => {
  return (
    <>
      <div className="rounded-lg shadow-md mx-2 bg-[#fc9] border-3 border-[#b80000] mt-2">
        <div className="bg-[#ebe68f] flex justify-center items-center relative">
          <img
            src="gif/sridevi.gif"
            alt="Sridevi"
            height="300px"
            width="350px"
          />
          <span
            className="absolute text-[#ed143d] text-5xl font-bold top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 italic"
            style={{ textShadow: "1px 0px 4px #03c800" }}
          >
            {lastNumber}
          </span>
        </div>
      </div>
    </>
  );
};
