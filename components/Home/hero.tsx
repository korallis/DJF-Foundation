"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const [frequency, setFrequency] = useState<"SINGLE" | "MONTHLY">("MONTHLY");
  const [amount, setAmount] = useState<number | "other">(10);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power4.out", duration: 1.8 } });

    tl.from(".hero-image", { scale: 1.1, duration: 3 })
      .from(".hero-logo", { y: -50, opacity: 0 }, "-=2.2")
      .from(".hero-text", { y: 30, opacity: 0 }, "-=1.8")
      .from(".curve-path", { y: 200, opacity: 0 }, "-=1.8")
      .from(".donation-card", { y: 200, opacity: 0 }, "-=1.6");
  }, { scope: container });

  return (
    <div ref={container} className="relative w-full bg-white">

      {/* SECTION */}
      <section className="relative min-h-[100svh] md:h-[1050px] w-screen left-1/2 -translate-x-1/2 overflow-hidden flex flex-col">

        {/* TOP FADE */}
        <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white via-white/40 to-transparent z-30" />

        {/* BG IMAGE */}
        <div className="hero-image absolute inset-0 w-full h-full">
          <Image
            src="/models.svg"
            alt="David James Foundation"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* CONTENT */}
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

          <p className="hero-text text-center text-white text-[25px] sm:text-[25px] md:text-[32px] font-brandHeader">
            “Transforming lives through faith,<br />compassion and purpose”
          </p>
        </div>

        {/* CURVE */}
        <div className="curve-path absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
            className="w-full h-[160px] sm:h-[260px] md:h-[550px]"
          >
            <path
              d="M0,80 C480,400 960,400 1440,240 L1440,320 L0,320 Z"
              fill="#1e6cf5"
            />
          </svg>
        </div>

        {/* 🔑 MOBILE FLOW (NO CUT OFF) */}
        <div className="donation-card relative md:absolute md:-bottom-40 left-1/2 -translate-x-1/2 w-[94%] sm:w-[90%] max-w-xl z-50 mt-10 md:mt-0">
          <div className="bg-[#eaf1ff] rounded-[45px] p-6 md:p-14 shadow-2xl">

            <div className="bg-white rounded-full p-1.5 flex mb-6">
              {["SINGLE", "MONTHLY"].map((f) => (
                <button
                  key={f}
                  onClick={() => setFrequency(f as any)}
                  className={`flex-1 py-3 rounded-full text-sm font-bold tracking-widest ${
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
                  className={`px-6 md:px-12 py-2.5 rounded-full text-sm font-bold ${
                    amount === v ? "bg-[#1e6cf5] text-white" : "text-[#1e6cf5]"
                  }`}
                >
                  £{v}
                </button>
              ))}
            </div>

            <p className="text-center text-[#1e6cf5] text-[15px] leading-relaxed mb-8 font-semibold">
              Support young people who feel lost or at risk.<br />
              Share faith in a real and accessible way.<br />
              Help people find direction, purpose and hope.
            </p>

            <div className="bg-white rounded-full p-1.5 flex items-center mb-10">
              <div className="w-12 h-10 rounded-full bg-[#1e6cf5] text-white font-bold flex items-center justify-center text-sm">
                £0
              </div>
              <input
                type="text"
                placeholder="Or enter other amount"
                className="flex-1 min-w-0 px-4 bg-transparent text-sm text-[#1e6cf5] font-bold outline-none"
              />
            </div>

            <button className="w-full bg-[#f26a26] text-white font-bold tracking-[0.25em] py-4 md:py-5 rounded-full shadow-lg uppercase text-lg">
              SUBMIT
            </button>

          </div>
        </div>

      </section>
    </div>
  );
}