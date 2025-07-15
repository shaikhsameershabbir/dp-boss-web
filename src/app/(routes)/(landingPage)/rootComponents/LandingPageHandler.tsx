"use client";
import { useEffect, useState } from "react";
import Bazaar from "../../../Compontes/DynamicPages/Bazaar";

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
import ScrollToTop from "../../../Compontes/StaticPage/ScrollToTop";

interface MarketResult {
  marketName: string;
  result: string;
  openTime: string;
  closeTime: string;
  yellowEnable: number;
  marketId: string;
}

interface MarketData {
  inTimeRange: MarketResult[];
  rest: MarketResult[];
}

interface StarlineData {
  starLineName: string;
  [key: string]: string | null;
}

interface LuckyNumberData {
  goldenNumbers?: {
    first: string;
    second: string;
    third: string;
    fourth: string;
  };
  finalNumbers?: Record<string, string>;
}

interface LandingPageHandlerProps {
  initialData: MarketData | null;
  starlineResult: StarlineData[] | Record<string, StarlineData>;
  luckyNumberData: LuckyNumberData | null;
}

export default function LandingPageHandler({
  initialData,
  starlineResult,
  luckyNumberData,
}: LandingPageHandlerProps) {
  const [marketResults, setMarketResults] = useState<MarketData | null>(null);
  const [starlineResults, setStarlineResults] = useState<
    StarlineData[] | Record<string, StarlineData>
  >([]);

  useEffect(() => {
    if (initialData && initialData.rest) {
      setMarketResults(initialData);
    }
    if (Array.isArray(starlineResult)) {
      setStarlineResults(starlineResult);
    } else {
      setStarlineResults(starlineResult);
    }
  }, [initialData, starlineResult]);
  console.log(marketResults);

  return (
    <>
      <div className="bg-[#fc9] min-h-screen py-2">
        {/* <Header />  first three box */}
        <Header />
        {/* Today Lucky Number */}
        <TodayLuckyNumber initialData={luckyNumberData} />
        <Download />
        {/* live result */}
        <LiveResult resultLiveForDate={marketResults?.inTimeRange || []} />
        <Notice />
        <Gameoptions />
        {/* All result market */}
        <Bazaar marketResults={marketResults?.rest || []} />
        {/* Starline Results */}
        {Array.isArray(starlineResults)
          ? starlineResults.map((starline) => (
            <MainStarline key={starline.starLineName} data={starline} />
          ))
          : starlineResults &&
          Object.values(starlineResults as Record<string, StarlineData>).map(
            (starline) => (
              <MainStarline
                key={(starline as StarlineData).starLineName}
                data={starline as StarlineData}
              />
            )
          )}
        {/* <KalyanTable /> */}
        {/* <KalyanNight /> */}
        <SattaMatkaJpdiChart marketResults={marketResults?.rest || []} />
        <MatakaPanelChart marketResults={marketResults?.rest || []} />
        <Introduction />
        <ScrollingDiv />
        <QNA />
        <Matka />
        <Disclamer />
        <PowerdBy />
        <Footer />
        {/* Floating Scroll to Top Button */}
        <ScrollToTop />
      </div>
    </>
  );
}
