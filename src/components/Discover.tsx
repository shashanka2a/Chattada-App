\"use client\";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  X,
  MapPin,
  GraduationCap,
  Briefcase,
  SlidersHorizontal,
  Star,
  Shield,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockDiscoverProfiles = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 26,
    location: 'Mumbai, Maharashtra',
    education: 'MBA, IIM Bangalore',
    profession: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
    verified: true
  },
  {
    id: 2,
    name: 'Ananya Reddy',
    age: 24,
    location: 'Bangalore, Karnataka',
    profession: 'Software Engineer',
    education: 'B.Tech CSE, IIT Madras',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
    verified: true
  },
  {
    id: 3,
    name: 'Meera Patel',
    age: 27,
    location: 'Ahmedabad, Gujarat',
    profession: 'Doctor',
    education: 'MBBS, MD',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800',
    verified: true
  },
  {
    id: 4,
    name: 'Kavya Iyer',
    age: 25,
    location: 'Chennai, Tamil Nadu',
    profession: 'Architect',
    education: 'B.Arch, SPA Delhi',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800',
    verified: true
  },
  {
    id: 5,
    name: 'Riya Desai',
    age: 28,
    location: 'Pune, Maharashtra',
    profession: 'Financial Analyst',
    education: 'MBA Finance, XLRI',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800',
    verified: true
  }
];

export function Discover() {
  const [profiles, setProfiles] = useState(mockDiscoverProfiles);
  const [showFilters, setShowFilters] = useState(false);
  const [animating, setAnimating] = useState(false);
  const [exitDirection, setExitDirection] = useState<'left' | 'right' | null>(null);

  const currentProfile = profiles[0];

  const handleInterested = () => {
    if (animating) return;
    setAnimating(true);
    setExitDirection('right');
    setTimeout(() => {
      setProfiles(profiles.slice(1));
      setAnimating(false);
      setExitDirection(null);
    }, 400);
  };

  const handleNotInterested = () => {
    if (animating) return;
    setAnimating(true);
    setExitDirection('left');
    setTimeout(() => {
      setProfiles(profiles.slice(1));
      setAnimating(false);
      setExitDirection(null);
    }, 400);
  };

  if (profiles.length === 0) {
    return (
      <div className="h-full flex items-center justify-center p-6 text-center bg-[#F5F3F0]">
        <div>
          <Star className="mx-auto mb-4 text-[#D4AF37]" size={64} />
          <h2 className="mb-2 text-[#1A1A1A]">No More Profiles</h2>
          <p className="text-[#6B6B6B] mb-6">You've seen all available profiles. Check back later for new matches!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#F5F3F0] flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-white/95 backdrop-blur-md border-b border-[#E8E6E3] px-6 py-5 sticky top-0 z-10">
        <div className="flex items-center justify-between max-w-md mx-auto">
          <div>
            <h1 className="tracking-[0.3em] text-[#1A1A1A]">DISCOVER</h1>
            <p className="text-[#6B6B6B] text-sm mt-0.5">{profiles.length} profiles available</p>
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#E8E6E3] rounded-xl hover:border-[#D4AF37] hover:bg-[#F5F3F0] transition-all shadow-sm"
          >
            <SlidersHorizontal size={18} className="text-[#D4AF37]" />
            <span className="text-[#1A1A1A] text-sm">Filters</span>
          </button>
        </div>
      </div>

      {/* Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="flex-shrink-0 bg-white/95 backdrop-blur-md border-b border-[#E8E6E3] overflow-hidden"
          >
            <div className="px-6 py-5">
              <div className="max-w-md mx-auto space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1A1A1A] mb-2 text-sm">Age Range</label>
                    <div className="flex gap-2 items-center">
                      <input
                        type="number"
                        defaultValue={22}
                        className="w-full px-3 py-2.5 border border-[#E8E6E3] rounded-xl bg-white text-[#1A1A1A] focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent focus:outline-none transition-all"
                        min="18"
                        max="50"
                      />
                      <span className="text-[#6B6B6B]">-</span>
                      <input
                        type="number"
                        defaultValue={32}
                        className="w-full px-3 py-2.5 border border-[#E8E6E3] rounded-xl bg-white text-[#1A1A1A] focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent focus:outline-none transition-all"
                        min="18"
                        max="50"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#1A1A1A] mb-2 text-sm">Location</label>
                    <select className="w-full px-3 py-2.5 border border-[#E8E6E3] rounded-xl bg-white text-[#1A1A1A] focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent focus:outline-none transition-all">
                      <option>All Locations</option>
                      <option>Mumbai</option>
                      <option>Bangalore</option>
                      <option>Delhi</option>
                    </select>
                  </div>
                </div>
                <button className="w-full px-4 py-2.5 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all shadow-sm">
                  Apply Filters
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Profile Card Container - Desktop Responsive */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-6 overflow-hidden">
        <div className="w-full max-w-md h-full flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentProfile.id}
              initial={{ opacity: 0, scale: 0.92, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ 
                opacity: 0,
                x: exitDirection === 'right' ? 300 : exitDirection === 'left' ? -300 : 0,
                scale: 0.9,
                transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] }
              }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
              className="w-full bg-white rounded-[28px] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col max-h-[calc(100vh-180px)]"
            >
              {/* Profile Image Section */}
              <div className="relative flex-shrink-0">
                <div className="aspect-[3/4] w-full">
                  <ImageWithFallback
                    src={currentProfile.image}
                    alt={currentProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60"></div>
                
                {/* Verified Badge */}
                {currentProfile.verified && (
                  <div className="absolute top-5 right-5 bg-[#D4AF37] text-[#1A1A1A] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                    <Shield size={16} />
                    <span className="text-sm">Verified</span>
                  </div>
                )}

                {/* Name Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 pb-7">
                  <h2 className="text-white mb-1.5 drop-shadow-lg">{currentProfile.name}, {currentProfile.age}</h2>
                  <p className="text-white/95 flex items-center gap-2 drop-shadow-md">
                    <MapPin size={18} strokeWidth={2.5} />
                    <span>{currentProfile.location}</span>
                  </p>
                </div>
              </div>

              {/* Profile Info Section - Simplified */}
              <div className="flex-shrink-0 px-6 pt-6 pb-5 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={22} className="text-[#D4AF37]" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#6B6B6B] text-xs mb-0.5">Education</p>
                    <p className="text-[#1A1A1A] truncate">{currentProfile.education}</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase size={22} className="text-[#D4AF37]" strokeWidth={2} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#6B6B6B] text-xs mb-0.5">Profession</p>
                    <p className="text-[#1A1A1A] truncate">{currentProfile.profession}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons - Enhanced */}
              <div className="flex-shrink-0 px-6 pb-6 pt-2">
                <div className="flex gap-3">
                  <button
                    onClick={handleNotInterested}
                    disabled={animating}
                    className="flex-1 py-4 bg-white border-2 border-[#E8E6E3] rounded-[18px] hover:bg-[#F5F3F0] hover:border-[#D4D4D4] active:scale-[0.97] transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-sm"
                  >
                    <X size={24} className="text-[#6B6B6B]" strokeWidth={2.5} />
                    <span className="text-[#1A1A1A]">Not Interested</span>
                  </button>
                  
                  <button
                    onClick={handleInterested}
                    disabled={animating}
                    className="flex-1 py-4 bg-[#D4AF37] rounded-[18px] hover:bg-[#C49F2F] active:scale-[0.97] transition-all flex items-center justify-center gap-3 shadow-[0_4px_16px_rgba(212,175,55,0.35)] disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Heart size={24} className="text-[#1A1A1A]" fill="currentColor" strokeWidth={2} />
                    <span className="text-[#1A1A1A]">Interested</span>
                  </button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}