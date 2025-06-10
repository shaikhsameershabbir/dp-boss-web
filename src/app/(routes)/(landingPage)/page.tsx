import { getMarketResult, getStarlineResult } from "@/app/api/api";
import LandingPageHandler from "./rootComponents/LandingPageHandler";

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
