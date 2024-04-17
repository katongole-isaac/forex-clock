"use client";

import moment, { Moment } from "moment-timezone";
import React, { useCallback, useEffect, useImperativeHandle, useRef } from "react";

interface Props {
  zoneDate?: Moment;
}

const Clock = React.forwardRef<any, Props>((props, ref) => {
  const { zoneDate } = props;

  const clockRef = useRef<HTMLDivElement>(null);
  const hourHand = useRef<HTMLDivElement>(null);
  const minuteHand = useRef<HTMLDivElement>(null);
  const secondHand = useRef<HTMLDivElement>(null);
  const mainClockBar = useRef<HTMLDivElement[]>([]);
  const minorClockBar = useRef<HTMLDivElement[]>([]);

  const calculateDegress = useCallback(() => {
    const now = zoneDate ? zoneDate : moment();
    const hours = now.get("hours");
    const minutes = now.get("minutes");
    const seconds = now.get("seconds");

    const hourDegrees = (hours % 12) * 30 + (minutes / 60) * 30; // we express both minutes & hours in terms of degrees i.e @hour moves 30deg

    const minuteDegrees = (minutes % 60) * 6 + (seconds / 60) * 6; // we express both mins & seconds in terms of degree i.e 360/60 = 6;

    const secondDegress = seconds * 6;

    hourHand.current!.style.transform = `rotate(${hourDegrees}deg)`;
    minuteHand.current!.style.transform = `rotate(${minuteDegrees}deg)`;
    secondHand.current!.style.transform = `rotate(${secondDegress}deg)`;
  },[zoneDate])

 
  useEffect(() => {
    calculateDegress();
  }, [zoneDate, calculateDegress]);

  const addClockShape = (shape: string) => {
    clockRef.current.classList.forEach(
      (_token) =>
        _token.includes("rounded") && clockRef.current.classList.remove(_token)
    );

    clockRef.current.classList.add(shape);
  };

  useImperativeHandle(ref, () => {
    return {
      showDropShadow: () => clockRef.current.classList.toggle("drop-shadow-lg"),
      showShadow: () => clockRef.current.classList.toggle("shadow-lg"),

      circleClock: () => addClockShape("rounded-full"),
      rectangleClock: () => addClockShape("rounded-none"),
      roundCornerClock: () => addClockShape("rounded-2xl"),

      hideHourHand: () => hourHand.current.classList.toggle("hidden"),
      hideClockBorder: () => clockRef.current.classList.toggle("ring-1"),
      hideMinuteHand: () => minuteHand.current.classList.toggle("hidden"),
      hideSecondHand: () => secondHand.current.classList.toggle("hidden"),
      hideMainClockBars: () =>
        mainClockBar.current.forEach((div) => div.classList.toggle("hidden")),
      hideMinorClockBars: () =>
        minorClockBar.current.forEach((div) => div.classList.toggle("hidden")),
    };
  });

  return (
    <div>
      <div
        ref={clockRef}
        className="w-[250px] h-[250px] rounded-full ring-[#222121] flex justify-center items-center relative overflow-hidden "
      >
        {/* Hand board */}
        <div className="z-20 w-[200px] h-[200px] relative bg-stone-50 rounded-full flex justify-center items-center">
          <div className="bg-black w-2 h-2 rounded-full"></div>
          <div ref={hourHand} className="hands hour-hand "></div>
          <div ref={minuteHand} className=" hands minute-hand "></div>
          <div ref={secondHand} className=" hands second-hand "></div>
        </div>
       
        <div
          ref={(el) => {
            mainClockBar.current[0] = el;
          }}
          className="main-clock-bar main-bar-1"
        ></div>
        <div
          ref={(el) => {
            mainClockBar.current[1] = el;
          }}
          className="main-clock-bar main-bar-2"
        ></div>
        <div
          ref={(el) => {
            mainClockBar.current[2] = el;
          }}
          className="main-clock-bar main-bar-3"
        ></div>
        <div
          ref={(el) => {
            mainClockBar.current[3] = el;
          }}
          className="main-clock-bar main-bar-4"
        ></div>
        <div
          ref={(el) => {
            mainClockBar.current[4] = el;
          }}
          className="main-clock-bar main-bar-5"
        ></div>

        <div
          ref={(el) => {
            minorClockBar.current[0] = el;
          }}
          className="minor-clock-bar minor-bar-1"
        ></div>
        <div
          ref={(el) => {
            minorClockBar.current[1] = el;
          }}
          className="minor-clock-bar minor-bar-2"
        ></div>
        <div
          ref={(el) => {
            minorClockBar.current[2] = el;
          }}
          className="minor-clock-bar minor-bar-3"
        ></div>
        <div
          ref={(el) => {
            minorClockBar.current[3] = el;
          }}
          className="minor-clock-bar minor-bar-4"
        ></div>
        <div
          ref={(el) => {
            minorClockBar.current[4] = el;
          }}
          className="minor-clock-bar minor-bar-5"
        ></div>
        <div
          ref={(el) => {
            minorClockBar.current[5] = el;
          }}
          className="minor-clock-bar minor-bar-6"
        ></div>
        <div
          ref={(el) => {
            minorClockBar.current[6] = el;
          }}
          className="minor-clock-bar minor-bar-7"
        ></div>
        <div
          ref={(el) => {
            minorClockBar.current[7] = el;
          }}
          className="minor-clock-bar minor-bar-8"
        ></div>
      </div>
    </div>
  );
});

export default Clock;
Clock.displayName = "Clock"