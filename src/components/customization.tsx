"use client";

import React from "react";
import { useMyContext } from "../context/myContext";

interface ControlButtonProps {
  id: string;
  label: string;
  click?: () => void;
}

export default function Customizations() {
  const { controls: _ctrls }: { controls: { [x: string]: any }[] } =
    useMyContext();

  const runControls = (key: string) => {
    _ctrls.forEach((ctl) => {
      Object.keys(ctl).forEach((_key) => {
        _key.toLowerCase() === key.toLowerCase() && ctl[_key]();
      });
    });
  };

  const controls = [
    {
      id: "border",
      label: "Border",
      click: () => runControls("hideClockBorder"),
    },
    {
      id: "hour_hand",
      label: "Hour Hand",
      click: () => runControls("hideHourHand"),
    },
    {
      id: "minute_hand",
      label: "Minute Hand",
      click: () => runControls("hideMinuteHand"),
    },
    {
      id: "second_hand",
      label: "Second Hand",
      click: () => runControls("hideSecondHand"),
    },
    {
      id: "main_clock_bars",
      label: "Main Clock Bars",
      click: () => runControls("hideMainClockBars"),
    },
    {
      id: "minor_clock_bars",
      label: "Minor Clock Bars",
      click: () => runControls("hideMinorClockBars"),
    },
    {
      id: "drop_shadow",
      label: "Drop Shadow",
      click: () => runControls("showDropShadow"),
    },
    {
      id: "shadow",
      label: "Shadow",
      click: () => runControls("showShadow"),
    },
  ];

  const clockShapes = [
    {
      id: "circle",
      label: "Circle",
      click: () => runControls("circleClock"),
    },
    {
      id: "rectangle",
      label: "Rectangle",
      click: () => runControls("rectangleClock"),
    },
    {
      id: "round_corner",
      label: "Round Corner",
      click: () => runControls("roundCornerClock"),
    },
  ];

  return (
    <div className="">
      <div className="w-[400px] min-h-[200px] px-3 py-4">
        <div className="flex flex-col gap-2 mb-3">
          <p className="font-semibold">Clock Settings</p>
          <hr className="border border-[#ccc]" />
        </div>

        <div className="flex gap-4 flex-wrap mb-3 ">
          {controls.map((controls) => (
            <ControlButton
              key={controls.id}
              id={controls.id}
              label={controls.label}
              click={controls.click}
            />
          ))}
        </div>

        <div className="flex flex-col gap-2 mb-2">
          <div className="">
            <p className="font-bold text-sm text-gray-800">Clock Shapes</p>
          </div>

          <div className="flex flex-wrap gap-3">
            {clockShapes.map((controls) => (
              <ControlRadioButton
                key={controls.id}
                id={controls.id}
                label={controls.label}
                click={controls.click}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const ControlButton: React.FC<ControlButtonProps> = ({ id, label, click }) => {
  return (
    <div className="flex gap-2 items-center" role="button">
      <input
        onClick={() => (click ? click() : null)}
        type="checkbox"
        id={id}
        className="cursor-pointer"
      />
      <label htmlFor={id} className="cursor-pointer text-sm select-none">
        {label}
      </label>
    </div>
  );
};

const ControlRadioButton: React.FC<ControlButtonProps> = ({
  id,
  label,
  click,
}) => {
  return (
    <div className="flex gap-2 items-center" role="button">
      <input
        type="radio"
        onClick={() => (click ? click() : null)}
        id={id}
        name="clock_shape"
        className="cursor-pointer"
      />
      <label htmlFor={id} className="cursor-pointer text-sm select-none">
        {label}
      </label>
    </div>
  );
};
