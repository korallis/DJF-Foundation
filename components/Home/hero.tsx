"use client";
import { useState, useRef } from "react";
import Image from "next/image";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [frequency, setFrequency] = useState<"SINGLE" | "MONTHLY">("MONTHLY");
  const [amount, setAmount] = useState<number | "other">(10);

  return (
    <div ref={container} className="relative w-full bg-white">
      <section className="relative w-full flex flex-col overflow-hidden bg-[#1e6cf5]">
        
        {/* TOP IMAGE AREA */}
        <div className="relative w-full h-[600px] md:h-[900px] shrink-0">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/40 to-transparent z-30" />
          

          <div className="hero-image absolute inset-0 w-full h-full">
            <Image
              src="/models.svg"
              alt="David James Foundation"
              fill
              priority
              className="object-cover"
            />
          </div>

          <div className="relative z-20 flex flex-col items-center pt-16 md:pt-32 px-6">
            <div className="hero-logo mb-6">
              <Image
                src="/logo.svg"
                alt="Logo"
                width={600}
                height={160}
                className="w-56 sm:w-72 md:w-[620px] h-auto"
              />
            </div>
            <p className="hero-text text-center text-white text-[25px] md:text-[30px] font-brandButton">
              “Transforming lives through faith,<br />compassion and purpose”
            </p>
          </div>

          {/* CURVE - Behind the card but on top of image */}
          <div className="absolute -bottom-0.5 left-0 w-full z-30 pointer-events-none">
            <svg
              viewBox="0 0 1440 320"
              preserveAspectRatio="none"
              className="w-full h-[120px] md:h-[300px]"
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

        {/* BOTTOM CARD AREA - Overlap Logic applied here */}
        <div className="relative w-full flex justify-center pb-32 px-6 z-40 bg-[#1e6cf5]">
          {/* -mt-16 / -mt-24 pulls the card up 10% into the image area */}
          <div className="donation-card w-full max-w-xl -mt-16 md:-mt-24 transition-all duration-300">
            <div className="bg-[#eaf1ff] rounded-[45px] p-6 md:p-14 shadow-2xl">
              
              <div className="bg-white rounded-full p-1.5 flex mb-6">
                {["SINGLE", "MONTHLY"].map((f) => (
                  <button
                    key={f}
                    onClick={() => setFrequency(f as any)}
                    className={`flex-1 py-3 rounded-full text-sm font-brandButton tracking-widest transition-colors ${
                      frequency === f ? "bg-[#1e6cf5] text-white" : "text-[#1e6cf5]"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="bg-white rounded-full p-1.5 flex flex-wrap justify-center gap-2 mb-8">
                {[5, 10, 15].map((v) => (
                  <button
                    key={v}
                    onClick={() => setAmount(v)}
                    className={`px-6 md:px-12 py-2.5 rounded-full text-sm font-brandButton transition-colors ${
                      amount === v ? "bg-[#1e6cf5] text-white" : "text-[#1e6cf5]"
                    }`}
                  >
                    £{v}
                  </button>
                ))}
              </div>

              <p className="text-center text-[#1e6cf5] text-[20px] leading-relaxed mb-8 font-brandButton">
                Support young people who feel lost or at risk.<br />
                Share faith in a real and accessible way.<br />
                Help people find direction, purpose and hope.
              </p>

              <div className="bg-white rounded-full p-1.5 flex items-center mb-10 border-2 border-transparent focus-within:border-[#1e6cf5]">
                <div className="w-12 h-10 rounded-full bg-[#1e6cf5] text-white font-bold flex items-center justify-center text-sm shrink-0">
                  £
                </div>
                <input
                  type="text"
                  placeholder="Or enter other amount"
                  className="flex-1 min-w-0 px-4 bg-transparent text-sm text-[#1e6cf5] font-bold outline-none"
                />
              </div>

              <button className="w-full bg-[#f26a26] text-white font-bold tracking-[0.25em] py-4 md:py-5 rounded-full shadow-lg uppercase text-lg transition-transform hover:scale-[1.02] active:scale-95">
                SUBMIT
              </button>
            </div>
          </div>
        </div>
        {/* <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#8DB4F0] via-white/20 to-transparent z-50 pointer-events-none" /> */}
      </section>
    </div>
  );
}
