"use client";

import React, { useEffect, useRef, useState } from "react";
import Clock from "./clock";
import moment from "moment-timezone";

interface Props {
  timezone?: string;
  sessionName: string;
  onControls: (methods: { [x: string]: any }) => void;
}
export default function TradingSession({
  timezone,
  sessionName,
  onControls,
}: Props) {
  const clockRef = useRef<any>(null);

  const [_moment, setMoment] = useState(
    timezone ? moment().tz(timezone) : moment()
  );

  useEffect(() => {
    const id = setInterval(() => {
      setMoment(timezone ? moment().tz(timezone) : moment());
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (clockRef.current) onControls(clockRef.current);
  }, []);

  return (
    <div className="py-4 flex-1  flex justify-center items-center flex-col gap-3">
      <div className="mb-3 py-2 flex flex-col gap-1 justify-center text-center font-medium">
        <h2 className="text-2xl font-medium mb-2"> {sessionName} </h2>
        <p className="text-sm"> {_moment.format("LLLL")} </p>
        <p className="text-sm"> {_moment.format("zz UTC Z")} </p>
      </div>
      <Clock zoneDate={_moment} ref={clockRef} />
    </div>
  );
}
