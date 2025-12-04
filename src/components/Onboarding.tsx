"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Shield, Search, Heart, ChevronRight, Check } from "lucide-react";

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      icon: Shield,
      title: 'Verified Onboarding',
      subtitle: 'Digital Gatepass for Authenticity',
      features: [
        'Secure OTP verification',
        'Gothram, Nakshatram & Native Place',
        'Mandatory ID verification'
      ],
      visual: (
        <div className="relative w-40 h-40 mx-auto mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-[#D4AF37] opacity-20 rounded-full"
          ></motion.div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-3 border-2 border-[#D4AF37] opacity-30 rounded-full"
          ></motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-2xl">
              <Shield className="text-[#D4AF37]" size={40} strokeWidth={1.5} />
            </div>
          </div>
        </div>
      )
    },
    {
      icon: Search,
      title: 'Smart Sangam Discovery',
      subtitle: 'Algorithm-Driven Compatibility',
      features: [
        'Auto-filter Sagothram matches',
        'Swipe Right for Interest (Sammatham)',
        'Swipe Up to Shortlist'
      ],
      visual: (
        <div className="relative w-40 h-40 mx-auto mb-6">
          <motion.div
            initial={{ x: 0, rotate: 0 }}
            animate={{ x: [-8, 8, -8], rotate: [-4, 4, -4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-white border border-[#E8E6E3] rounded-2xl shadow-lg"
          ></motion.div>
          <motion.div
            initial={{ x: 0, rotate: 0 }}
            animate={{ x: [8, -8, 8], rotate: [4, -4, 4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
            className="absolute inset-1.5 bg-white border border-[#D4AF37] rounded-2xl shadow-xl flex items-center justify-center"
          >
            <Search className="text-[#D4AF37]" size={40} strokeWidth={1.5} />
          </motion.div>
        </div>
      )
    },
    {
      icon: Heart,
      title: 'Family-First Connection',
      subtitle: 'Traditional Values, Modern Approach',
      features: [
        'Mutual interest triggers "Subham"',
        'Share profiles via WhatsApp',
        'Privacy-first contact sharing'
      ],
      visual: (
        <div className="relative w-40 h-40 mx-auto mb-6">
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-[#D4AF37] opacity-10 rounded-full blur-2xl"
          ></motion.div>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              className="w-20 h-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-2xl"
            >
              <Heart className="text-[#D4AF37]" size={40} fill="#D4AF37" strokeWidth={1.5} />
            </motion.div>
          </div>
        </div>
      )
    }
  ];

  const handleNext = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      onComplete();
    }
  };

  const handleSkip = () => {
    onComplete();
  };

  return (
    <div className="fixed inset-0 bg-[#F5F3F0] flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 px-6 pt-6 pb-4">
        <div className="flex items-center justify-between max-w-xl mx-auto">
          <div>
            <h3 className="text-[#1A1A1A]">Welcome to</h3>
            <p className="text-[#1A1A1A] tracking-[0.15em] -mt-1">CHATTADA</p>
          </div>
          <button
            onClick={handleSkip}
            className="text-[#6B6B6B] hover:text-[#1A1A1A] transition-colors px-4 py-2"
          >
            Skip
          </button>
        </div>
      </div>

      {/* Content - Scrollable */}
      <div className="flex-1 overflow-auto px-6">
        <div className="max-w-xl mx-auto pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col items-center"
            >
              {/* Visual */}
              <div className="pt-8 pb-6">
                {slides[currentSlide].visual}
              </div>

              {/* Small Gold Dot */}
              <div className="flex items-center justify-center gap-2.5 mb-6">
                <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
                <span className="text-[#6B6B6B] tracking-[0.25em] text-xs uppercase font-medium">
                  Step {currentSlide + 1} of {slides.length}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-center text-[#1A1A1A] mb-3 px-4 leading-tight text-3xl">
                {slides[currentSlide].title}
              </h1>

              {/* Subtitle */}
              <p className="text-center text-[#D4AF37] mb-10 italic tracking-wide text-lg">
                {slides[currentSlide].subtitle}
              </p>

              {/* Features List */}
              <div className="w-full bg-white rounded-2xl p-7 shadow-sm border border-[#E8E6E3] max-w-md">
                <ul className="space-y-4">
                  {slides[currentSlide].features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
                      className="flex items-center gap-3.5"
                    >
                      <div className="flex-shrink-0 w-5 h-5 bg-[#D4AF37] rounded-full flex items-center justify-center">
                        <Check className="text-[#1A1A1A]" size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[#1A1A1A] flex-1 leading-relaxed">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom Navigation - Fixed */}
      <div className="flex-shrink-0 bg-white border-t border-[#E8E6E3] px-6 py-5 safe-bottom">
        <div className="max-w-xl mx-auto">
          {/* Progress Dots */}
          <div className="flex gap-2 justify-center mb-4">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'w-8 bg-[#D4AF37]' 
                    : 'w-2 bg-[#E8E6E3] hover:bg-[#D4AF37]/50'
                }`}
              />
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="w-full px-6 py-3.5 bg-[#1A1A1A] text-white rounded-full hover:bg-[#2A2A2A] transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <span>{currentSlide === slides.length - 1 ? 'Get Started' : 'Continue'}</span>
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}