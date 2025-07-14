import {
  getMarketResult,
  getStarlineResult,
  getTodayLuckyNumber,
} from "@/app/api/api";
import LandingPageHandler from "./rootComponents/LandingPageHandler";

// Force dynamic rendering to prevent caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Alternative: Use ISR with short revalidation time
// export const revalidate = 30; // Revalidate every 30 seconds

export default async function Page() {
  const [initialData, starlineResult, luckyNumberData] = await Promise.all([
    getMarketResult(),
    getStarlineResult(),
    getTodayLuckyNumber(),
  ]);

// console.log(initialData, starlineResult, luckyNumberData);

  return (
    <>
      <LandingPageHandler
        initialData={initialData}
        starlineResult={starlineResult}
        luckyNumberData={luckyNumberData}
      />
    </>
  );
}
