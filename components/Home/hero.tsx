"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import { 
  DONATION_FREQUENCIES, 
  DONATION_AMOUNTS, 
  HERO_CONTENT, 
  HERO_ASSETS 
} from "@/constants/hero";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [frequency, setFrequency] = useState<typeof DONATION_FREQUENCIES[number]>("MONTHLY");
  const [amount, setAmount] = useState<number | "other">(10);

  return (
    <div ref={container} className="relative w-full bg-white">
      <section className="relative w-full flex flex-col overflow-hidden bg-[#1e6cf5]">
        
        {/* TOP IMAGE AREA - Let content define height but keep a healthy minimum */}
        <div className="relative w-full min-h-[550px] md:min-h-[750px] flex flex-col shrink-0">
          
          <div className="hero-image absolute inset-0 w-full h-full">
            <Image
              src={HERO_ASSETS.background.src}
              alt={HERO_ASSETS.background.alt}
              fill
              priority
              className="object-cover"
            />
            {/* MAIN DARK OVERLAY */}
            <div className="absolute inset-0 bg-black/40 z-10" /> 
          </div>

          {/* Content Area - Generous top/bottom padding to stop the "squeezed" feeling */}
          <div className="relative z-20 flex flex-col items-center pt-24 pb-32 md:pt-32 md:pb-48 px-6">
            <div className="hero-logo mb-8 w-full flex justify-center">
              <Image
                src={HERO_ASSETS.logo.src}
                alt={HERO_ASSETS.logo.alt}
                width={HERO_ASSETS.logo.width}
                height={HERO_ASSETS.logo.height}
                className="w-full max-w-[300px] sm:max-w-[450px] md:max-w-[600px] h-auto"
              />
            </div>
            <p className="hero-text text-center text-white text-xl md:text-2xl lg:text-[28px] font-brandButton whitespace-pre-line leading-tight max-w-4xl">
              {HERO_CONTENT.quote}
            </p>
          </div>

          {/* CURVE - Increased height for a more dramatic sweep */}
          <div className="absolute -bottom-1 left-0 w-full z-30 pointer-events-none">
            <svg
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="w-full h-[120px] md:h-[280px]"
              fill="none"
              xmlns="http://w3.org"
            >
              <path
                d="M0,0 C400,300 1100,450 1440,120 V320 H0 V0 Z"
                fill="#1e6cf5"
              />
            </svg>
          </div>
        </div>


        {/* BOTTOM CARD AREA */}
        <div className="relative w-full flex justify-center pb-32 px-6 z-40 bg-[#1e6cf5]">
          {/* Card is allowed to be wide (max-w-2xl) so it doesn't look squashed */}
          <div className="donation-card w-full max-w-2xl -mt-20 md:-mt-32 transition-all duration-300">
            <div className="bg-[#eaf1ff] rounded-[40px] md:rounded-[50px] p-8 md:p-14 shadow-2xl">
              
              {/* Frequency Selector */}
              <div className="bg-white rounded-full p-1.5 flex mb-8">
                {DONATION_FREQUENCIES.map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f)}
                    className={`flex-1 py-3.5 rounded-full text-xs md:text-sm font-brandButton tracking-[0.15em] transition-colors ${
                      frequency === f ? "bg-[#1e6cf5] text-white" : "text-[#1e6cf5]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              {/* Amount Selector */}
              <div className="bg-white rounded-[30px] md:rounded-full p-2 flex flex-wrap justify-center gap-3 mb-10">
                {DONATION_AMOUNTS.map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmount(v)}
                    className={`min-w-[70px] md:min-w-[100px] py-3 rounded-full text-sm md:text-base font-brandButton transition-colors ${
                      amount === v ? "bg-[#1e6cf5] text-white" : "text-[#1e6cf5]"
                    }`}
                  >
                    £{v}
                  </button>
                ))}
              </div>

              {/* Support Text */}
              <p className="text-center text-[#1e6cf5] text-lg md:text-[22px] leading-relaxed mb-10 font-brandButton">
                {HERO_CONTENT.supportText.map((line, idx) => (
                  <span key={idx}>
                    {line}
                    {idx < HERO_CONTENT.supportText.length - 1 && <br />}
                  </span>
                ))}
              </p>

              {/* Input Area */}
              <div className="bg-white rounded-full p-2 flex items-center mb-10 border-2 border-transparent focus-within:border-[#1e6cf5]">
                <div className="w-12 h-12 rounded-full bg-[#1e6cf5] text-white font-bold flex items-center justify-center text-lg shrink-0">
                  £
                </div>
                <input
                  type="text"
                  placeholder="Or enter other amount"
                  className="flex-1 min-w-0 px-6 bg-transparent text-lg text-[#1e6cf5] font-bold outline-none placeholder:text-[#1e6cf5]/50"
                />
              </div>

              <button className="w-full bg-[#f26a26] text-white font-bold tracking-[0.25em] py-5 md:py-6 rounded-full shadow-lg uppercase text-lg md:text-xl transition-transform hover:scale-[1.01] active:scale-95">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
