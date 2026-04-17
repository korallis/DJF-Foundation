export default function Footer() {
  return (
    <footer className="text-white mt-20 md:mt-[200px] max-w-[1440px] mx-auto">
      {/* TOP SECTION */}
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between items-start lg:items-end mb-20 px-6 md:px-0">
        <h2 className="text-5xl md:text-[120px] font-brandHeader leading-[0.9]">
          Contact Us
        </h2>

        <div className="flex w-full max-w-md bg-white rounded-full p-1.5 font-brandBody">
          <input
            placeholder="Enter Your Email Address"
            className="flex-1 px-6 py-3 text-black outline-none text-sm md:text-[18px] bg-transparent"
          />
          <button className="bg-orange-500 hover:bg-orange-600 transition-colors px-8 py-3 text-white rounded-full font-brandButton text-sm md:text-[18px] uppercase">
            SUBSCRIBE
          </button>
        </div>
      </div>

      {/* GRID SECTION - Weighted first column to prevent text leak */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 px-6 md:px-0 mb-24">
        
        {/* BIGGER COLUMN */}
        <div className="space-y-4">
          <h4 className="font-brandBody text-[20px] opacity-60 tracking-wider">CONTACT INFORMATION</h4>
          <div className="space-y-2 font-brandBody text-[18px]">
            <p className="hover:text-orange-500 cursor-pointer transition-colors break-all md:break-normal">
              hello@thedavidjamesfoundation.org.uk
            </p>
            <p>0121 285 6418</p>
          </div>
        </div>

        <div className="space-y-4">
          <h4 className="font-brandBody text-[20px] opacity-60 tracking-wider">HOME</h4>
          <ul className="space-y-3 font-brandBody text-[18px]">
            {["Our Story", "What We Do", "Get Involved", "Impact", "Contact Us"].map((link) => (
              <li key={link} className="hover:text-orange-500 cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="font-brandBody text-[20px] opacity-60 tracking-wider">HELP</h4>
          <ul className="space-y-3 font-brandBody text-[18px]">
            {["FAQ", "Help Centre", "Support"].map((link) => (
              <li key={link} className="hover:text-orange-500 cursor-pointer transition-colors">{link}</li>
            ))}
          </ul>
        </div>

        {/* FOLLOW US SECTION */}
        <div className="space-y-4">
          <h4 className="font-brandBody text-[20px] opacity-60 tracking-wider">FOLLOW US</h4>
          <div className="flex gap-4">
            {[
              { src: "/icons/Instagram.svg", alt: "Instagram", href: "https://www.instagram.com/thedavidjamesfoundation/" },
              { src: "/icons/Facebook.svg", alt: "Facebook", href: "https://www.facebook.com/profile.php?id=61573349836902" },
              { src: "/icons/Linkedin.svg", alt: "LinkedIn", href: "https://www.linkedin.com/company/the-david-james-foundation" }
            ].map((social, i) => (
              <a 
                key={i} 
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 hover:bg-orange-500 rounded-full flex items-center justify-center transition-all duration-300 border border-white/5 group"
              >
                <img 
                  src={social.src} 
                  alt={social.alt} 
                  className="w-10 h-10 object-contain brightness-0 invert group-hover:scale-110 transition-transform" 
                />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* BOTTOM SECTION */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 py-10 px-6 md:px-0 font-brandBody text-[16px] opacity-80">
        <p>© 2026 The David James Foundation. All Rights Reserved.</p>

        <div className="flex gap-8">
          <p className="hover:text-white cursor-pointer transition-colors">Privacy</p>
          <p className="border-b border-orange-500 cursor-pointer hover:text-orange-500 transition-colors">Terms & Conditions</p>
        </div>
      </div>
    </footer>
  );
}
