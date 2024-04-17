import React from "react";

export default function Footer() {
  return (
    <div className="absolute bottom-0 w-full shadow-lg">
      <div className="h-10 max-w-[1200px] mx-auto flex items-center ">
        <div className="text-center w-full text-sm font-semibold text-gray-700">
          <p>
            This is an Open-Source Project, so feel free to do what you want
            with it. You can find it{" "}
            <span className="font-bold underline hover:text-blue-500">
              <a
                target="_blank"
                href="https://github.com/katongole-isaac/forex-clock"
              >
                @katongole-isaac
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
