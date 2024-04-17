"use client";

import React, { useState } from "react";
import Navbar from "../components/navbar";
import { Metadata } from "next";
import TradingSession from "../components/tradingSession";

import Footer from "../components/footer";
import { MyContext } from "../context/myContext";

import "react-tooltip/dist/react-tooltip.css";

export const metadata: Metadata = {
  title: "Forex Session Clocks",
  description: "This is an Open-Source Project focused to show the Major Trading Session"
}

export default function Page() {
  const [controls, setControls] = useState<{ [x: string]: any }[]>([
    {},
    {},
    {},
  ]);

  const _setControls = (index: number, ctrl: any) => {
    setControls((prevControls) => {
      const updatedControls = [...prevControls];
      updatedControls[index] = ctrl;
      return updatedControls;
    });
  };

  return (
    <MyContext.Provider value={{ controls }}>
      <div className="relative font-quickSand">
        <Navbar />
        <div className="bg-stone-50 min-h-[calc(100vh-3.5rem)]">
          <div className="m-auto container ">
            <div className="font-semibold container text-xl py-8 mb-4 flex justify-center">
              <div className="text-center">
                <h1>Major Forex Trading Session Time </h1>
              </div>
            </div>

            <div className="flex justify-center lg:justify-center items-center gap-4 flex-wrap ">
              <TradingSession
                onControls={(methods) => _setControls(0, methods)}
                timezone="Asia/Tokyo"
                sessionName="Tokyo"
              />
              <TradingSession
                onControls={(methods) => _setControls(1, methods)}
                timezone="Europe/London"
                sessionName="London"
              />
              <TradingSession
                sessionName="New York"
                timezone="America/New_York"
                onControls={(methods) => _setControls(2, methods)}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </MyContext.Provider>
  );
}
