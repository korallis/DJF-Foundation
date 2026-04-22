"use client";

import Image from "next/image";

export function Community() {
    return(
      <div className="absolute bottom-0 left-0 w-full">
        <div className="relative w-full h-[220px] md:h-[300px] overflow-hidden">
          <Image
            src="/impact-bottom.svg"
            alt="community"
            fill
            className="object-cover"
          />

          {/* CURVE OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0259DE] via-transparent to-transparent opacity-70" />
        </div>

        {/* SVG CURVE */}
        <svg
          viewBox="0 0 1440 200"
          className="w-full block -mt-1"
          preserveAspectRatio="none"
        >
          <path
            d="M0,100 C400,0 1000,200 1440,80 L1440,200 L0,200 Z"
            fill="#a9b9d3"
          />
        </svg>
      </div>
    )
}