"use client";
import { useEffect, useState } from "react";
import Bazaar from "../../../Compontes/DynamicPages/Bazaar";
import { KalyanNight } from "../../../Compontes/DynamicPages/KalyanNight";
import { KalyanTable } from "../../../Compontes/DynamicPages/KalyanTable";
import LiveResult from "../../../Compontes/DynamicPages/LiveResult";
import MainStarline from "../../../Compontes/DynamicPages/MainStarline";
import MrStarlineResult from "../../../Compontes/DynamicPages/MrStarlineResult";
import TodayLuckyNumber from "../../../Compontes/DynamicPages/TodayLuckyNumber";
import { Disclamer } from "../../../Compontes/StaticPage/Disclamier";
import Download from "../../../Compontes/StaticPage/Download";
import Footer from "../../../Compontes/StaticPage/Footer";
import Gameoptions from "../../../Compontes/StaticPage/Gameoptions";
import { GameZoneOpenClose } from "../../../Compontes/StaticPage/GameZoneOpenClose";
import Header from "../../../Compontes/StaticPage/Header";
import { Introduction } from "../../../Compontes/StaticPage/Introduction";
import { MatakaPanelChart } from "../../../Compontes/StaticPage/MatakaPanelChart";
import { Matka } from "../../../Compontes/StaticPage/Matka";
import MatkajodiList from "../../../Compontes/StaticPage/MatkaJodiList";
import Notice from "../../../Compontes/StaticPage/Notice";
import { PowerdBy } from "../../../Compontes/StaticPage/PowerdBy";
import { QNA } from "../../../Compontes/StaticPage/QNA";
import { SattaMatkaJpdiChart } from "../../../Compontes/StaticPage/SattaMatkaJpdiChart";
import { ScrollingDiv } from "../../../Compontes/StaticPage/ScrollingDiv";
import SpicalGameZone from "../../../Compontes/StaticPage/SpicalGameZone";
import { WeeklyJodi } from "../../../Compontes/StaticPage/WeeklyJodi";
import { WeeklyLine } from "../../../Compontes/StaticPage/WeeklyLine";
import { WeeklyPatti } from "../../../Compontes/StaticPage/WeeklyPatti";
import { Wheel } from "../../../Compontes/StaticPage/wheel";
import { Wheel2 } from "../../../Compontes/StaticPage/wheel2";

/* eslint-disable @next/next/no-img-element */
interface LandingPageHandlerProps {
  initialData: any;
}

export default function LandingPageHandler({
  initialData,
}: LandingPageHandlerProps) {
  const [result, setResult] = useState<any>(initialData);

  useEffect(() => {
    console.log(initialData);
    // Update state when initialData changes
    setResult(initialData);
  }, [initialData]);

  return (
    <>
      <div className="bg-[#fc9] min-h-screen py-2">
        {/* <Header />  first three box */}
        <Header />
        {/* Today Lucky Number */}
        <TodayLuckyNumber />
        <Download />
        <LiveResult />
        <Notice />
        <Gameoptions />
        <Bazaar />
        <MainStarline />
        <Wheel />
        <MrStarlineResult />
        <Wheel2 />
        <SpicalGameZone />
        <MatkajodiList />
        <WeeklyPatti />
        <WeeklyLine />
        <WeeklyJodi />
        <GameZoneOpenClose />
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
