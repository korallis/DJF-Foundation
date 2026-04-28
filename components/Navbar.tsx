"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "@/constants/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ease-in-out ${
        isScrolled 
          ? "bg-white shadow-md py-4 text-brand-Blue"
          : "bg-transparent py-8 text-white"         
      }`}
    >
      <div className="max-w-[1440px] mx-auto flex justify-between items-center px-6 md:px-12">
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
          {/* Label color follows the nav text color automatically */}
          <span>{isOpen ? "Close" : "Menu"}</span>
          <div className="flex flex-col gap-1.5 w-6">
            {/* Hamburger bars: change from white to brand-Blue based on scroll */}
            <span className={`h-[2px] transition-all duration-300 ${isScrolled ? "bg-brand-Blue" : "bg-white"} ${isOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`h-[2px] transition-all duration-300 ${isScrolled ? "bg-brand-Blue" : "bg-white"} ${isOpen ? "opacity-0" : ""}`} />
            <span className={`h-[2px] transition-all duration-300 ${isScrolled ? "bg-brand-Blue" : "bg-white"} ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* MOBILE FULLSCREEN OVERLAY */}
      <div
        className={`fixed inset-0 bg-white z-[105] flex flex-col items-center justify-center gap-8 md:hidden transition-transform duration-500 ease-in-out text-brand-Blue ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        {NAV_LINKS.map((link, index) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            style={{ transitionDelay: `${index * 50}ms` }}
            className={`text-3xl font-brandHeader hover:text-brand-orange transition-all duration-500 ${
              isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
