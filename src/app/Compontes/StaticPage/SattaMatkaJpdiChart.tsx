import Link from "next/link";

interface MarketResult {
  marketId: string;
  marketName: string;
}

export const SattaMatkaJpdiChart = ({ marketResults }: { marketResults: MarketResult[] }) => {
  return (
    <div className="max-w-full mx-auto p-2">
      <div className="border-[2px] border-[#c20094] rounded-[14px] overflow-hidden">
        <div className="text-2xl font-bold border-3 border-[#ffff] rounded-[10px] bg-[#ff00a2]">
          <h3
            className="text-white italic font-bold text-center"
            style={{ textShadow: "2px 2px 4px black" }}
          >
            SATTA MATKA JODI CHART
          </h3>
        </div>
        <ul className="bg-[#ffcaa6] border-t border-[#c20094]">
          {marketResults.map((market: MarketResult, index: number) => (
            <Link href={`/jodi/${market.marketId}`} key={index}>
              <li className="border-t-2 border-[#460a74] text-center text-[20px] italic font-bold text-[#1a237e]">
                {market.marketName} Jodi
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};
