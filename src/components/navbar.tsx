import React from "react";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Customizations from "./customization";

export default function Navbar() {
  return (
    <div className="bg-stone-50">
      <div className="sticky top-0 shadow-md h-14">
        <div className="max-w-[1200px] mx-auto  h-full flex items-center px-2 justify-between">
          <h1 className="text-xl font-semibold">Forex Trading Session</h1>
          <a data-tooltip-id="customize" data-event="click focus">
            <MdOutlineDashboardCustomize className="text-xl cursor-pointer" />
          </a>
          <ReactTooltip
            id="customize"
            openOnClick
            clickable
            style={{ zIndex: 1000, background: "#fff", color: "black" }}
            opacity={1}
          >
            <Customizations />
          </ReactTooltip>
        </div>
      </div>
    </div>
  );
}
