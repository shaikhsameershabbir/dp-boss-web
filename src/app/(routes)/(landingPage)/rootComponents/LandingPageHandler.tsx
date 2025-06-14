"use client";
import { useEffect, useState } from "react";
import Bazaar from "../../../Compontes/DynamicPages/Bazaar";
import { KalyanNight } from "../../../Compontes/DynamicPages/KalyanNight";
import { KalyanTable } from "../../../Compontes/DynamicPages/KalyanTable";
import LiveResult from "../../../Compontes/DynamicPages/LiveResult";
import MainStarline from "../../../Compontes/DynamicPages/MainStarline";
import TodayLuckyNumber from "../../../Compontes/DynamicPages/TodayLuckyNumber";
import { Disclamer } from "../../../Compontes/StaticPage/Disclamier";
import Download from "../../../Compontes/StaticPage/Download";
import Footer from "../../../Compontes/StaticPage/Footer";
import Gameoptions from "../../../Compontes/StaticPage/Gameoptions";
import Header from "../../../Compontes/StaticPage/Header";
import { Introduction } from "../../../Compontes/StaticPage/Introduction";
import { MatakaPanelChart } from "../../../Compontes/StaticPage/MatakaPanelChart";
import { Matka } from "../../../Compontes/StaticPage/Matka";
import Notice from "../../../Compontes/StaticPage/Notice";
import { PowerdBy } from "../../../Compontes/StaticPage/PowerdBy";
import { QNA } from "../../../Compontes/StaticPage/QNA";
import { SattaMatkaJpdiChart } from "../../../Compontes/StaticPage/SattaMatkaJpdiChart";
import { ScrollingDiv } from "../../../Compontes/StaticPage/ScrollingDiv";

interface MarketResult {
  marketName: string;
  result: string;
  openTime: string;
  closeTime: string;
  yellowEnable: number;
  marketId: string;
}

interface MarketResults {
  inTimeRange: MarketResult[];
  rest: MarketResult[];
}

interface StarlineData {
  starLineName: string;
  [key: string]: string | null;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: MarketResults;
}

interface StarlineResponse {
  success: boolean;
  message: string;
  data: StarlineData[];
}

interface LandingPageHandlerProps {
  initialData: any;
  starlineResult: any;
}

export default function LandingPageHandler({
  initialData,
  starlineResult,
}: LandingPageHandlerProps) {
  const [marketResults, setMarketResults] = useState<any>(null);
  const [starlineResults, setStarlineResults] = useState<StarlineData[]>([]);

  useEffect(() => {
    if (initialData && initialData.rest) {
      setMarketResults(initialData);
    }
    if (Array.isArray(starlineResult)) {
      setStarlineResults(starlineResult);
    }
  }, [initialData, starlineResult]);

  return (
    <>
      <div className="bg-[#fc9] min-h-screen py-2">
        {/* <Header />  first three box */}
        <Header />
        {/* Today Lucky Number */}
        <TodayLuckyNumber />
        <Download />
        {/* live result */}
        <LiveResult resultLiveForDate={marketResults?.inTimeRange || []} />
        <Notice />
        <Gameoptions />
        {/* All result market */}
        <Bazaar marketResults={marketResults?.rest || []} />
        {/* Starline Results */}
        {starlineResults.map((starline) => (
          <MainStarline key={starline.starLineName} data={starline} />
        ))}
        <KalyanTable />
        <KalyanNight />
        <SattaMatkaJpdiChart />
        <MatakaPanelChart />
        <Introduction />
        <ScrollingDiv />
        <QNA />
        <Matka />
        <Disclamer />
        <PowerdBy />
        <Footer />
      </div>
    </>
  );
}
