"use client";

import React from 'react';

export default function VolunteerForm() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#D8E6FF] via-[#8DB4F0] to-[#005FF9] py-20 px-6 flex flex-col items-center font-sans">
      <h1 className="text-[#005FF9] text-[60px] md:text-[110px] font-brandHeader mb-12 mt-12">
        Volunteer With Us
      </h1>

      <form className="w-full max-w-4xl space-y-6">
        {/* Personal Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Full Name" className="w-full h-14 bg-white rounded-full px-8 outline-none text-[#005FF9]" />
          <input type="text" placeholder="Phone" className="w-full h-14 bg-white rounded-full px-8 outline-none text-[#005FF9]" />
          <input type="email" placeholder="Email" className="w-full h-14 bg-white rounded-full px-8 outline-none text-[#005FF9]" />
          <input type="text" placeholder="Location" className="w-full h-14 bg-white rounded-full px-8 outline-none text-[#005FF9]" />
        </div>

        {/* Involvement Options */}
        <div className="pt-4">
          <p className="text-[#005FF9] font-bold mb-4 ml-4">How would you like to get involved?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Mentoring', 'Outreach', 'Events', 'Admin'].map((option) => (
              <label key={option} className="flex items-center justify-between w-full h-14 bg-white rounded-full px-8 cursor-pointer group">
                <span className="text-[#005FF9] opacity-60 group-hover:opacity-100 transition-opacity">{option}</span>
                <input type="checkbox" className="hidden peer" />
                <div className="w-6 h-6 rounded-full border-2 border-[#8DB4F0] peer-checked:bg-[#005FF9] peer-checked:border-[#005FF9] transition-all" />
              </label>
            ))}
          </div>
        </div>

        {/* Availability */}
        <div className="pt-4">
          <p className="text-[#005FF9] font-bold mb-4 ml-4">Availability?</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {['Occasionally', 'Weekly', 'Monthly', 'Flexible'].map((time) => (
              <label key={time} className="flex items-center justify-between w-full h-14 bg-white rounded-full px-8 cursor-pointer group">
                <span className="text-[#005FF9] opacity-60 group-hover:opacity-100 transition-opacity">{time}</span>
                <input type="radio" name="availability" className="hidden peer" />
                <div className="w-6 h-6 rounded-full border-2 border-[#8DB4F0] peer-checked:bg-[#005FF9] peer-checked:border-[#005FF9] transition-all" />
              </label>
            ))}
          </div>
        </div>

        {/* Text Area and Consent */}
        <input type="text" placeholder="Tell Us About Yourself" className="w-full h-14 rounded-full px-8 outline-none text-[#005FF9]" />
        
        <label className="flex items-center justify-between w-full h-14 bg-white rounded-full px-8 cursor-pointer">
          <span className="text-[#005FF9] text-sm md:text-base opacity-60">I agree to be contacted about volunteering opportunities</span>
          <input type="checkbox" className="hidden peer" />
          <div className="w-6 h-6 rounded-full border-2 border-[#8DB4F0] peer-checked:bg-[#005FF9] transition-all" />
        </label>

        <button type="submit" className="bg-[#FF6B35] text-white px-12 py-4 rounded-full font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
          Submit
        </button>
      </form>
    </div>
  );
}
