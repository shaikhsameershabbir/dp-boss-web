import { getMarketResult, getStarlineResult } from "@/app/api/api";
import LandingPageHandler from "./rootComponents/LandingPageHandler";

// Force dynamic rendering to prevent caching
export const dynamic = "force-dynamic";
export const revalidate = 0;

// Alternative: Use ISR with short revalidation time
// export const revalidate = 30; // Revalidate every 30 seconds

export default async function Page() {
  const initialData = await getMarketResult();
  const starlineResult = await getStarlineResult();
  return (
    <>
      <LandingPageHandler
        initialData={initialData}
        starlineResult={starlineResult}
      />
    </>
  );
}
