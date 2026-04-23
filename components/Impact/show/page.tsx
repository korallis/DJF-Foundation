"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ImpactShowPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [galleryIndex, setGalleryIndex] = useState(0);
  
  const allImages = [
    "/impact-kvell.png", "/impact-kvell-2.png", "/impact-kvell-3.png"
  ];

  // Logic for carousel count
  const nextGallery = () => {
    if (galleryIndex + 1 < allImages.length) setGalleryIndex(prev => prev + 1);
  };
  const prevGallery = () => {
    if (galleryIndex > 0) setGalleryIndex(prev => prev - 1);
  };

  const handleInternalScroll = () => {
    if (scrollRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
      const progress = (scrollTop / (scrollHeight - clientHeight)) * 100;
      setScrollProgress(progress);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-[#a9b9d3] via-[#4A90E2] to-[#0259DE] py-6 md:py-10 px-4">
      
      {/* 1. Header */}
      <div className="flex justify-center mt-12 md:mt-20 mb-6 md:mb-8">
        <h1 className="text-[#0259DE] text-[50px] sm:text-[80px] md:text-[120px] font-brandHeader italic leading-none">
          Impact
        </h1>
      </div>

      {/* 2. MAIN CARD */}
      <div className="max-w-4xl mx-auto relative mb-12">
        {/* Scroll Progress Bar (Desktop Only) */}
        <div className="absolute -right-6 top-10 bottom-10 w-1.5 bg-white/20 rounded-full hidden md:block">
          <div 
            className="w-full bg-[#0259DE] rounded-full transition-all duration-200"
            style={{ height: `${Math.max(10, scrollProgress)}%` }}
          />
        </div>

        <div className="bg-white rounded-[30px] md:rounded-[40px] shadow-2xl overflow-hidden flex flex-col h-[500px]">
          <div className="p-8 md:p-12 pb-4 shrink-0 flex flex-col sm:flex-row justify-between items-start gap-2">
            <h2 className="text-[#0259DE] text-[28px] md:text-[45px] font-brandBody leading-tight">
              The Kvell Project
            </h2>
            <span className="text-[#1e6cf5] font-brandBody text-sm font-bold">8 March 2026</span>
          </div>

          <div 
            ref={scrollRef}
            onScroll={handleInternalScroll}
            className="flex-1 overflow-y-auto px-8 md:px-12 pb-12 scrollbar-hide"
          >
             <div className="text-[#1e6cf5] font-brandBody text-[17px] md:text-[19px] leading-relaxed space-y-6">
                <p>
                  In 2008 we visited the Thai-Burma Border for the first time, meeting Paw Lu Lu and her husband, Nandoe. 
                  Nandoe and Paw Lu Lu have a history of helping refugees who have fled Burma into Thailand.
                </p>
                <p>
                  Paw Lu Lu is was also a well known advocate for women and ethnic minority rights. We learnt that Nandoe and Paw Lu Lu had both fled war in Burma and from these compromising circumstances, they started the orphanage for the children of refugees in 2006.
                </p>
                <p>
                  Since then that orphanage has grown into the Huaymalai Children’s Home that is now the home to more than 25 Karen, Thai and Mon children. The more we learn about the needs of the Children’s Home, the more we feel a burden to help.
                </p>
                <p>
                  Since our first trip, friends from all over the world have returned on a yearly basis to visit and work with the children; and from this, it has slowly developed into a small initiative that we now call The Kvell Project.
                </p>
             </div>
          </div>
        </div>
      </div>

      {/* 3. GALLERY CAROUSEL */}
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2 md:gap-6">
        <button onClick={prevGallery} className="text-white disabled:opacity-30" disabled={galleryIndex === 0}>
          <ChevronLeft className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
        </button>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Mobile: Show 1 | Desktop: Show 3 images starting from galleryIndex */}
          {allImages.slice(galleryIndex, galleryIndex + (typeof window !== 'undefined' && window.innerWidth < 640 ? 1 : 3)).map((img, i) => (
            <motion.div 
              key={`${img}-${i}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-56 md:h-64 rounded-[30px] overflow-hidden shadow-xl border-4 border-white"
            >
              <Image src={img} alt="Gallery" fill className="object-cover" />
            </motion.div>
          ))}
        </div>

        <button onClick={nextGallery} className="text-white disabled:opacity-30" disabled={galleryIndex + 3 >= allImages.length}>
          <ChevronRight className="w-12 h-12 md:w-16 md:h-16" strokeWidth={1} />
        </button>
      </div>

      {/* 4. FOOTER LINK */}
      <div className="flex justify-center mt-12 mb-10">
        <button className="text-white font-brandButton underline underline-offset-8 text-lg hover:text-[#f26a26] transition-colors">
          Back to Impact
        </button>
      </div>
    </main>
  );
}
