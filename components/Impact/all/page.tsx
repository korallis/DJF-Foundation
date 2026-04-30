"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { IMPACT_PROJECTS } from "./../../../constants/impact-projects";

export default function ImpactLayout() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(10);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(Math.max(10, progress));
    }
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#a9b9d3] via-white to-[#0259DE] py-12 md:py-20 px-4 md:px-6 overflow-hidden">
      
      {/* 1. HEADER (Resizes for mobile) */}
      <div className="flex flex-col items-center mt-20 mb-10 md:mb-16">
        <div className="relative inline-block">
          <h2 className="text-[#0259DE] text-[50px] md:text-[120px] font-brandHeader italic leading-tight">
            Impact
          </h2>
          <div className="absolute -bottom-1 left-0 w-full h-1.5 md:h-2 bg-[#f26a26] rounded-full" />
        </div>
      </div>

      {/* 2. MAIN CONTENT AREA */}
      <div className="max-w-5xl mx-auto flex gap-4 md:gap-10 h-[500px] md:h-[600px]">
        
        {/* SCROLLABLE CARDS COLUMN */}
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex-1 space-y-6 md:space-y-8 overflow-y-auto snap-y snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <style jsx>{`div::-webkit-scrollbar { display: none; }`}</style>

          {IMPACT_PROJECTS.map((item, i) => (
            <div 
              key={i} 
              className="snap-start flex flex-col md:flex-row bg-white rounded-[30px] md:rounded-[45px] overflow-hidden shadow-lg border border-blue-50/50 min-h-[380px] md:min-h-[240px] w-full"
            >
              {/* Image (Smaller & Responsive) */}
              <div className="w-full md:w-[35%] relative h-48 md:h-auto">
                <Image src={item.img} alt={item.title} fill className="object-cover" />
              </div>

              {/* Text (Scales down for small screens) */}
              <div className="w-full md:w-[65%] p-6 md:p-10 flex flex-col justify-center">
                <h3 className="text-[#0259DE] text-[24px] md:text-[35px] font-brandBody mb-2 md:mb-4 uppercase md:normal-case">
                  {item.title}
                </h3>
                <p className="text-[#1e6cf5] text-[15px] md:text-[17px] font-brandBody leading-snug md:leading-relaxed mb-4 md:mb-6">
                  {item.text}
                </p>
                <button className="text-[#0259DE] text-[14px] md:text-[16px] font-brandButton underline underline-offset-8 text-left hover:text-[#f26a26] transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
          {/* Bottom spacer for snap-alignment */}
          <div className="h-[200px] md:h-[300px]" /> 
        </div>

        {/* 3. DYNAMIC SCROLL INDICATOR (Hidden on small mobile) */}
        <div className="hidden sm:flex flex-col items-center w-3 h-full py-4">
          <div className="w-1.5 h-full bg-white/40 rounded-full relative">
            <div 
              className="absolute top-0 w-full bg-[#0259DE] rounded-full transition-all duration-300 ease-out" 
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
