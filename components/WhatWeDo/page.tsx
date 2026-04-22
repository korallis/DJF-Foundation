"use client";

import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import BookingModal from '../BookingModal';
import { WhatWeDoProps, DEFAULT_WHATWEDO_PROPS } from '@/constants/WhatWeDo';

const WhatWeDo = ({
  heading = DEFAULT_WHATWEDO_PROPS.heading,
  cards = DEFAULT_WHATWEDO_PROPS.cards,
}: WhatWeDoProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.6, ease: "easeOut" } 
    }
  };

  return (
    <section id="WhatWeDo" className="font-brand overflow-hidden px-6 md:px-0 mt-40 md:mt-60 text-[var(--color-brand-Blue)]">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-[1300px] mx-auto"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-brand-Blue text-[50px] leading-[1] font-brandHeader font-[700] mb-30 text-center md:text-[80px] lg:text-[114px]"
        >
          {heading}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          {cards.map((card, index) => {
            const isActive = activeIndex === index;
            
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -5 }}
                className={`cursor-pointer p-8 lg:p-12 rounded-[40px] lg:rounded-[60px] transition-all duration-500 ease-in-out border-2 ${
                  isActive
                    ? "bg-brand-orange text-white border-brand-orange scale-[1.02]"
                    : "bg-white lg:bg-white text-brand-Blue border-transparent hover:border-brand-orange/20"
                }`}
              >
                <h3 className="text-[28px] leading-tight font-brandBody font-[500] mb-4 md:text-[36px] lg:text-[44px] text-center">
                  {card.title}
                </h3>
                <p className={`text-[18px] font-brandBody font-[400] leading-relaxed md:text-[22px] lg:text-[25px] text-center ${
                  isActive ? "text-white/90" : "text-brand-Blue"
                }`}>
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <motion.div variants={itemVariants} className="mt-16 flex justify-center">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="inline-block rounded-full bg-brand-orange px-10 py-3 text-[16px] lg:text-[20px] font-brandBody font-[500] uppercase tracking-[0.08em] text-white shadow-lg transition-all hover:brightness-110 active:scale-95"
          >
            HOW CAN I HELP
          </button>
        </motion.div>
      </motion.div>

      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        serviceTitle={cards[activeIndex]?.title || ""} 
        formTitle="Our Difference Inquiry"
      />
    </section>
  );
};

export default WhatWeDo;