import { getMarketResult } from "@/app/api/api";
import LandingPageHandler from "./rootComponents/LandingPageHandler";

export default async function Page() {
  const initialData = await getMarketResult();

  return (
    <>
      <LandingPageHandler initialData={initialData} />
    </>
  );
}
