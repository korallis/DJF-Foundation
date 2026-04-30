"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import { sendServiceEmail } from "@/lib/actions/booking";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
  formTitle: string;
}

export default function BookingModal({ isOpen, onClose, serviceTitle, formTitle }: BookingModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true);
    formData.append("form_title", formTitle);
    
    const result = await sendServiceEmail(formData);
    setIsSubmitting(false);

    if (result.success) {
      alert("Enquiry sent successfully!");
      onClose();
    } else {
      alert("Error: " + (result.error || "Failed to send"));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-[500px] overflow-hidden rounded-[30px] bg-white p-8 shadow-2xl sm:p-12 text-black"
          >
            <button
              onClick={onClose}
              className="absolute right-6 top-6 text-gray-400 hover:text-black transition-colors"
            >
              <X size={24} />
            </button>

            <h4 className="text-2xl font-brand-bold font-[700] text-brand-orange uppercase">
              Enquire Now
            </h4>
            <p className="mt-2 text-gray-600 font-brand">
              Enter your email to request a booking for this service.
            </p>

            <form action={handleSubmit} className="mt-8 space-y-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Service
                </label>
                <input
                  type="text"
                  name="Service*"
                  readOnly
                  value={serviceTitle}
                  className="w-full rounded-xl bg-gray-100 px-4 py-3 font-brand-bold text-sm text-gray-700 outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  name="Email Address*"
                  required
                  placeholder="example@email.com"
                  className="w-full rounded-xl border-2 border-gray-100 px-4 py-3 outline-none focus:border-brand-teal transition-colors text-black"
                />
              </div>

              <button
                disabled={isSubmitting}
                className="w-full rounded-full bg-brand-orange py-4 font-brand-bold font-[700] uppercase tracking-widest text-white shadow-lg hover:brightness-110 transition-all disabled:opacity-50"
              >
                {isSubmitting ? "Sending..." : "Confirm Interest"}
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}