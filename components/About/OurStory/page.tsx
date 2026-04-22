"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function OurStory() {
  const sectionRef = useRef(null);
  const contentRef = useRef(null);
  const imageRef = useRef(null);


  return (
    <section 
      ref={sectionRef}
      className="relative w-full bg-[#a9b9d3] pt-20 md:pt-50 pb-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10" ref={contentRef}>
        {/* HEADER */}
        <div className="text-center mb-12 md:mb-20">
          <h2 className="text-[50px] md:text-[120px] font-brandHeader text-[#0259DE] leading-none">
            Our Story
          </h2>
          <div className="w-32 md:w-128 h-[6px] bg-brand-orange mx-auto mt-2 rounded-full"></div>
        </div>

        <div className="relative z-20 pb-20">
          <h3 className="text-[35px] md:text-[90px] font-brandHeader text-brand-orange leading-[0.9] mb-6 max-w-[90%] md:max-w-none">
            The David James Foundation
          </h3>

          <p className="text-[20px] md:text-[50px] text-brand-orange mb-8 md:mb-10 leading-tight">
            exists to continue something real.
          </p>

          {/* BULLET SECTION */}
          <div className="flex gap-4 md:gap-6 mb-10">
            <div className="w-[3px] bg-brand-orange"></div>
            <div className="text-[#0259DE] text-lg md:text-[30px] leading-snug font-brandBody">
              <p>A life that was changed.</p>
              <p>A faith that was lived out.</p>
              <p>A belief that no one is ever too far gone.</p>
            </div>
          </div>

          {/* BODY */}
          <p className="text-[#0259DE] text-sm md:text-[20px] leading-[1.6] mb-12 max-w-[85%] md:max-w-none">
            An encounter with Jesus that reshaped his life and gave him a new purpose,<br className="hidden md:block"/>
            to show up for people, especially those who felt overlooked, lost or written off.<br className="hidden md:block"/>
            That same heart drives us today. We’re here to reach people where they are,<br className="hidden md:block"/>
            restore direction and remind them that their story isn’t over.
          </p>

          <Link
            href="#"
            className="inline-block bg-brand-orange text-white px-8 md:px-12 py-3 md:py-4 rounded-full font-brandButton text-base md:text-lg uppercase tracking-wider transition-transform hover:scale-105 active:scale-95"
          >
            Get Involved
          </Link>
        </div>
      </div>

      {/* FOUNDER IMAGE - Adjusted w/h for mobile visibility */}
      <div 
        ref={imageRef}
        className="absolute bottom-0 right-0 w-[60%] h-[40%] md:w-[55%] md:h-[75%] pointer-events-none z-0"
      >
        <Image
          src="/David-James.svg"
          alt="David James"
          fill
          priority
          className="object-contain object-right-bottom"
        />
      </div>
    </section>
  );
}
