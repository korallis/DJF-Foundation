"use client";

import Image from "next/image";

export function OurFounders() {
  const founders = [
    "/david.svg",
    "/david.svg",
    "/david.svg",
    "/david.svg",
  ];

  return (
    <section className="relative w-full bg-[#7ea1d6] py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-[50px] md:text-[120px] font-brandHeader text-white mb-12 md:mb-16 text-start">
          Our Founders
        </h2>

        <div className="grid grid-cols-2 md:flex md:flex-wrap justify-center items-center gap-4 md:gap-10 mb-16">
          {founders.map((img, i) => (
            <div key={i} className="aspect-square w-full max-w-[150px] md:max-w-[240px] relative rounded-full overflow-hidden">
              <Image
                src={img}
                alt="Founder"
                fill
                className="object-cover"
              />
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto">
          <p className="text-[#0259DE] text-center text-sm md:text-[20px] leading-[1.8]">
            The foundation is led by four brothers, David, Bobby, John and Simon Swali.
            Raised in Handsworth, Birmingham, they have built successful healthcare businesses
            across the UK and internationally. But for them, it’s not just about success,
            it’s about purpose. They believe what they’ve built is a gift from God,
            meant to be used to make a difference. Through the foundation, they are giving
            back by using their experience and resources to support young people who need
            guidance and direction. For them, this is not charity, it is a responsibility.
          </p>
        </div>

      </div>
    </section>
  );
}
