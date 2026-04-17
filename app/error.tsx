"use client";

import { useRef } from 'react';
import Link from "next/link";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Error() {

      // 1. Specify HTMLDivElement and initialize with null
  const container = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 2. Add a guard to ensure the ref is current
    if (!container.current) return;

    const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

    tl.from(".animate-text", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      stagger: 0.2,
      skewY: 2,
    })
    .to(".animate-button", {
      y: -10,
      repeat: -1,
      yoyo: true,
      duration: 2,
      ease: "sine.inOut"
    }, "-=0.5");

  }, { scope: container }); // GSAP handles the .current internally here

  return (
    <div ref={container} className="px-6 md:px-0 mt-40 md:mt-60 text-[var(--color-brand-Blue)]">
      <h1 className="animate-text text-4xl md:text-[110px] font-brandHeader mb-4">
        Error 501: Not Available
      </h1>
      
      <p className="animate-text text-brand-white font-brandBody md:text-[30px] leading-[1.6] mb-10">
        This feature isn’t available right now. Our team has been notified and is working to resolve the issue. Please try again shortly or get in touch if you need immediate support.
      </p>
      
      <div className="animate-text">
        <Link 
          href="/" 
          className="animate-button inline-block bg-brand-orange text-white px-14 py-3 rounded-full font-brandButton text-[25px] hover:scale-105 transition-transform"
        >
          HOME
        </Link>
      </div>
    </div>
  );
}