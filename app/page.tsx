"use client";

import Hero from '@/components/Home/hero';
import ImpactSection from '@/components/Home/impact';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#a9b9d3]">
      <Hero />
      
      {/* SEAMLESS BLEND: Fades Hero Blue (#1e6cf5) into Impact Grey (#a9b9d3) */}
      <div className="h-40 w-full bg-gradient-to-b from-[#1e6cf5] to-[#a9b9d3]" />
      
      <ImpactSection />
    </main>
  );
}
