"use client";

import Image from "next/image";

export default function ImpactSection() {
  const items = [
    {
      title: "The Kweli Project",
      img: "/kvell.svg",
      text: "This Kweli Project is a volunteer-led initiative providing children with the Thai-Burma border with more green displaced by conflict.",
    },
    {
      title: "Ecarma Earth",
      img: "/Ecarma.svg",
      text: "Ecarma Earth is our commitment to measurable environmental impact, funding verified initiatives like tree planting and ocean restoration",
    },
    {
      title: "Kindness Project",
      img: "/Kindness.svg",
      text: "The Kindness Project is about making small, tangible changes through simple, meaningful acts of care and support.",
    },
  ];

  return (
    <section className="bg-[#a9b9d3] text-center py-20 px-6 relative overflow-hidden">

      {/* TITLE */}
      <h2 className="text-start text-[40px] md:text-[120px] font-brandHeader text-[#0259DE] mb-16">
        Our Impact
      </h2>

      {/* CARDS */}
      <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-20">
        {items.map((item, i) => (
          <div key={i} className="flex flex-col items-center text-center">
            
            {/* IMAGE */}
            <div className="w-44 h-44 md:w-90 md:h-90 relative rounded-full overflow-hidden mb-6">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover"
              />
            </div>

            {/* TITLE */}
            <h3 className="text-[#0259DE] text-[25px] font-brandBody font-[600] mb-3">
              {item.title}
            </h3>

            {/* TEXT */}
            <p className="text-[18px] text-[#1e3a8a] font-brandBody max-w-xs mb-3">
              {item.text}
            </p>

            {/* LINK */}
            <button className="text-[#0259DE] text-[20px] underline underline-offset-20 font-brandButton font-[500]">
              Learn More
            </button>
          </div>
        ))}
      </div>

      {/* QUOTE */}
      <div className="max-w-5xl mx-auto text-[#0259DE] relative mb-20 px-4">
        <p className="text-lg md:text-[45px] leading-relaxed font-brandBody font-[600]">
          We’re here to reach people <br/>where they are, restore direction and <br/>remind them that their story isn’t over.
        </p>

        {/* QUOTES */}
        <span className="absolute -left-4 top-0 text-[190px] font-brandBody">“</span>
        <span className="absolute -right-4 bottom-0 text-[190px] font-brandBody">”</span>
      </div>


    </section>
  );
}