"use client";

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { GET_INVOLVED_TABS } from '@/constants/get-involved';

const GetInvolvedSection = () => {
  const [activeId, setActiveId] = useState('Volunteer');

  const activeData = useMemo(() => 
    GET_INVOLVED_TABS.find(tab => tab.id === activeId) || GET_INVOLVED_TABS[1]
  , [activeId]);

  // Arrow logic for 3-column desktop grid
  const activeIndex = GET_INVOLVED_TABS.findIndex(tab => tab.id === activeId);
  const column = activeIndex % 3;
  const arrowPosition = (column * 33.33) + 16.66;

  return (
    <section className="bg-[#005FF9] py-12 md:py-24 px-4 md:px-6 flex flex-col items-center overflow-hidden">
      
      {/* Header - Scaled for mobile */}
      <div className="mb-10 md:mb-16 pt-10 md:pt-20 text-center w-full max-w-fit">
        <h2 className="text-white text-[50px] sm:text-[80px] md:text-[120px] font-brandHeader leading-tight">
          Get Involved
        </h2>
        <div className="h-[4px] md:h-[6px] w-full bg-[#FF6B35] mt-1 rounded-full"></div>
      </div>

      {/* Tabs Grid - Responsive column switching */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl">
        {GET_INVOLVED_TABS.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveId(tab.id)}
            className={`h-20 md:h-24 px-4 rounded-[25px] md:rounded-[30px] border-[3px] md:border-4 border-white text-[18px] md:text-[22px] font-brandBody transition-all duration-300
              ${activeId === tab.id ? 'bg-white text-[#005FF9] shadow-lg scale-[1.02]' : 'bg-transparent text-white hover:bg-white/10'}`}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <div className="relative mt-8 md:mt-12 w-full max-w-5xl">
        {/* Sliding Arrow - Hidden on Mobile/Tablet Grid changes */}
        <motion.div 
          initial={false}
          animate={{ left: `${arrowPosition}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="absolute -top-5 w-0 h-0 -ml-[20px] border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-b-[20px] border-b-[#D8E6FF] hidden md:block" 
        />
        
        {/* Content Card - Padding and corners adjusted for mobile */}
        <div className="bg-[#D8E6FF] rounded-[30px] md:rounded-[40px] p-8 md:p-16 text-[#005FF9] shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeId}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Title - Responsive sizing */}
              <h3 className="text-[40px] sm:text-[60px] md:text-[100px] lg:text-[120px] italic font-brandHeader mb-4 md:mb-6 leading-none">
                {activeData.title}
              </h3>
              
              <p className="text-[16px] md:text-[20px] font-brandBody leading-relaxed max-w-3xl mb-8 md:mb-10">
                {activeData.description}
              </p>
              
              {/* Button - Full width on tiny screens */}
              <Link 
                href={activeData.formUrl}
                className="inline-block w-full sm:w-auto text-center bg-[#FF6B35] text-white px-10 py-4 rounded-full text-sm font-brandButton tracking-[0.2em] uppercase shadow-lg active:scale-95 transition-transform"
              >
                {activeData.buttonText}
              </Link>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default GetInvolvedSection;
