"use client";

import Link from "next/link";
import { useState, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Our Story", href: "OurStory" },
  { name: "What We Do", href: "WhatWeDo" },
  { name: "Get Involved", href: "GetInvolved" },
  { name: "Impact", href: "Impact" },
  { name: "Contact Us", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // 1. Sticky Scroll Animation
  useGSAP(() => {
    ScrollTrigger.create({
      trigger: "body",
      start: "top -50",
      onEnter: () => {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255, 255, 255, 1)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          duration: 0.4,
        });
      },
      onLeaveBack: () => {
        gsap.to(navRef.current, {
          backgroundColor: "rgba(255, 255, 255, 0)",
          boxShadow: "none",
          paddingTop: "2rem",
          paddingBottom: "1.5rem",
          duration: 0.4,
        });
      },
    });
  }, { scope: navRef });

  // 2. Mobile Menu Animation
  useGSAP(() => {
    if (isOpen) {
      gsap.to(menuRef.current, {
        clipPath: "circle(150% at 100% 0%)",
        duration: 0.8,
        ease: "power4.inOut",
      });
      gsap.fromTo(".mobile-link", 
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.1, delay: 0.3 }
      );
    } else {
      gsap.to(menuRef.current, {
        clipPath: "circle(0% at 100% 0%)",
        duration: 0.6,
        ease: "power4.inOut",
      });
    }
  }, [isOpen]);

  return (
    <nav 
      ref={navRef}
      className="fixed top-0 left-0 w-full z-[100] transition-colors duration-300 pt-8 pb-6 text-brand-Blue"
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-12">
        {/* LOGO Placeholder (Optional but recommended for layout balance) */}
        <div className="text-2xl font-brandHeader md:hidden">DJF</div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex flex-1 justify-center gap-12 lg:gap-[60px] text-[22px] font-brandButton">
          {NAV_LINKS.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-brand-orange transition-colors">
              {link.name}
            </Link>
          ))}
        </div>

        {/* MOBILE TRIGGER */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-[110] md:hidden flex items-center gap-3 font-brandButton uppercase tracking-widest text-sm"
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <div className="flex flex-col gap-1.5 w-6">
            <span className={`h-[2px] bg-brand-Blue transition-all ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-[2px] bg-brand-Blue transition-all ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] bg-brand-Blue transition-all ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE FULLSCREEN OVERLAY */}
      <div 
        ref={menuRef}
        style={{ clipPath: "circle(0% at 100% 0%)" }}
        className="fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-8 md:hidden"
      >
        {NAV_LINKS.map((link) => (
          <Link 
            key={link.name} 
            href={link.href} 
            onClick={() => setIsOpen(false)}
            className="mobile-link text-3xl font-brandHeader hover:text-brand-orange"
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
