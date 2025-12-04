\"use client\";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Heart,
  X,
  MapPin,
  Briefcase,
  GraduationCap,
  GitBranch,
  Share2,
  Crown,
  Sparkles,
  Shield,
  Star as StarIcon,
} from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface HomeProps {
  user: any;
}

// Mock data for mutual matches
const mockMatches = [
  {
    id: 1,
    name: 'Priya Sharma',
    age: 26,
    location: 'Mumbai, Maharashtra',
    education: 'MBA, IIM Bangalore',
    profession: 'Marketing Manager',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800',
    verified: true,
    bio: 'Traditional values with modern outlook. Love travel and exploring new cultures.',
    height: '5\'5"',
    gothram: 'Bharadwaja',
    nakshatram: 'Rohini',
    nativePlace: 'Tirupati, AP',
    matchedOn: '2 days ago'
  },
  {
    id: 2,
    name: 'Lakshmi Devi',
    age: 24,
    location: 'Udupi, Karnataka',
    profession: 'Doctor',
    education: 'MBBS, MD',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800',
    verified: true,
    bio: 'Passionate about healthcare and helping people. Enjoy classical music and reading.',
    height: '5\'4"',
    gothram: 'Kashyapa',
    nakshatram: 'Ashwini',
    nativePlace: 'Udupi, Karnataka',
    matchedOn: '5 days ago'
  },
  {
    id: 3,
    name: 'Anjali Reddy',
    age: 26,
    location: 'Hyderabad, Telangana',
    profession: 'Software Engineer',
    education: 'B.Tech CSE, IIT Madras',
    image: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800',
    verified: true,
    bio: 'Tech enthusiast and creative problem solver. Love cooking traditional recipes.',
    height: '5\'6"',
    gothram: 'Vatsa',
    nakshatram: 'Pushya',
    nativePlace: 'Guntur, AP',
    matchedOn: '1 week ago'
  }
];

export function Home({ user }: HomeProps) {
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [showLineage, setShowLineage] = useState(false);

  if (mockMatches.length === 0) {
    return (
      <div className="h-full flex items-center justify-center p-6 text-center bg-[#F5F3F0]">
        <div>
          <Heart className="mx-auto mb-4 text-[#D4AF37]" size={64} />
          <h2 className="mb-2 text-[#1A1A1A]">No Matches Yet</h2>
          <p className="text-[#6B6B6B] mb-6">Start exploring profiles to find your perfect match!</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#F5F3F0] overflow-auto">
      {/* Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#E8E6E3] px-6 py-5 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-1.5">
            <h1 className="tracking-[0.3em] text-[#1A1A1A]">CHATTADA</h1>
            <div className="flex items-center gap-2 bg-[#D4AF37]/10 px-4 py-2 rounded-full border border-[#D4AF37]/20">
              <Sparkles className="text-[#D4AF37]" size={16} />
              <span className="text-[#1A1A1A] text-sm">{mockMatches.length} Subham</span>
            </div>
          </div>
          <p className="text-[#6B6B6B] text-sm">Mutual interests • Your matches</p>
        </div>
      </div>

      {/* Matches Grid */}
      <div className="px-6 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockMatches.map((match) => (
            <motion.div
              key={match.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              onClick={() => setSelectedProfile(match)}
              className="bg-white rounded-[28px] overflow-hidden shadow-lg hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.25)] transition-all cursor-pointer border border-[#E8E6E3] group"
            >
              {/* Profile Image */}
              <div className="relative h-80">
                <ImageWithFallback
                  src={match.image}
                  alt={match.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/60"></div>
                
                {/* Top Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-start justify-between">
                  <div className="bg-white/95 backdrop-blur-sm text-[#1A1A1A] px-3 py-1.5 rounded-full flex items-center gap-2 shadow-lg">
                    <Heart size={14} className="text-[#D4AF37]" fill="#D4AF37" />
                    <span className="text-sm">{match.matchedOn}</span>
                  </div>

                  {match.verified && (
                    <div className="bg-[#D4AF37] text-[#1A1A1A] px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                      <div className="w-1.5 h-1.5 bg-[#1A1A1A] rounded-full"></div>
                      <span className="text-sm">Verified</span>
                    </div>
                  )}
                </div>

                {/* Bottom Gradient with Name */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <h3 className="text-white mb-1.5 drop-shadow-lg">{match.name}, {match.age}</h3>
                  <p className="text-white/95 flex items-center gap-1.5 text-sm drop-shadow-md">
                    <MapPin size={14} strokeWidth={2.5} />
                    {match.location}
                  </p>
                </div>
              </div>

              {/* Quick Info */}
              <div className="p-5 space-y-3.5">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <GraduationCap size={18} className="text-[#D4AF37]" strokeWidth={2} />
                  </div>
                  <span className="text-sm text-[#1A1A1A] truncate">{match.education}</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 bg-[#D4AF37]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Briefcase size={18} className="text-[#D4AF37]" strokeWidth={2} />
                  </div>
                  <span className="text-sm text-[#1A1A1A] truncate">{match.profession}</span>
                </div>

                {/* View Profile Button */}
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedProfile(match);
                  }}
                  className="w-full mt-4 py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] active:scale-[0.98] transition-all text-sm shadow-lg"
                >
                  View Full Profile
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Profile Detail Modal */}
      {selectedProfile && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={() => setSelectedProfile(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-auto"
          >
            {/* Header Image */}
            <div className="relative h-96">
              <ImageWithFallback
                src={selectedProfile.image}
                alt={selectedProfile.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/70"></div>
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedProfile(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all shadow-lg"
              >
                <X size={20} className="text-[#1A1A1A]" />
              </button>

              {/* Verified Badge */}
              {selectedProfile.verified && (
                <div className="absolute top-4 left-4 bg-[#D4AF37] text-[#1A1A1A] px-4 py-2 rounded-full flex items-center gap-2 shadow-lg">
                  <Shield size={16} />
                  <span>Verified</span>
                </div>
              )}

              {/* Name at Bottom */}
              <div className="absolute bottom-6 left-6 right-6">
                <h2 className="text-white mb-2">{selectedProfile.name}, {selectedProfile.age}</h2>
                <p className="text-white/90 flex items-center gap-2">
                  <MapPin size={18} />
                  {selectedProfile.location}
                </p>
              </div>
            </div>

            {/* Profile Content */}
            <div className="p-6 space-y-6">
              {/* Bio */}
              <div>
                <h3 className="text-[#1A1A1A] mb-3">About</h3>
                <p className="text-[#6B6B6B] leading-relaxed">{selectedProfile.bio}</p>
              </div>

              {/* Professional Details */}
              <div>
                <h3 className="text-[#1A1A1A] mb-3">Professional Background</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Education</p>
                    <p className="text-[#1A1A1A]">{selectedProfile.education}</p>
                  </div>
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Profession</p>
                    <p className="text-[#1A1A1A]">{selectedProfile.profession}</p>
                  </div>
                </div>
              </div>

              {/* Heritage & Physical Details */}
              <div>
                <h3 className="text-[#1A1A1A] mb-3">Heritage & Details</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Height</p>
                    <p className="text-[#1A1A1A]">{selectedProfile.height}</p>
                  </div>
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Gothram</p>
                    <p className="text-[#1A1A1A]">{selectedProfile.gothram}</p>
                  </div>
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Nakshatram</p>
                    <p className="text-[#1A1A1A]">{selectedProfile.nakshatram}</p>
                  </div>
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Native Place</p>
                    <p className="text-[#1A1A1A]">{selectedProfile.nativePlace}</p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowLineage(true)}
                  className="flex-1 py-3 bg-[#F5F3F0] border border-[#E8E6E3] rounded-xl text-[#1A1A1A] hover:bg-[#E8E6E3] transition-all flex items-center justify-center gap-2"
                >
                  <GitBranch size={20} className="text-[#D4AF37]" />
                  <span>View Lineage</span>
                </button>
                <button className="flex-1 py-3 bg-[#1A1A1A] text-white rounded-xl hover:bg-[#2A2A2A] transition-all flex items-center justify-center gap-2 shadow-lg">
                  <Share2 size={20} />
                  <span>Share Profile</span>
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Lineage Modal */}
      {showLineage && selectedProfile && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] p-4"
          onClick={() => setShowLineage(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 max-w-md w-full max-h-[80vh] overflow-auto"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="flex items-center gap-2 text-[#1A1A1A]">
                <GitBranch className="text-[#D4AF37]" />
                Vamsha Vriksham
              </h3>
              <button
                onClick={() => setShowLineage(false)}
                className="p-2 hover:bg-[#F5F3F0] rounded-full transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            <div className="space-y-6">
              {/* Grandparents */}
              <div>
                <p className="text-[#6B6B6B] mb-3 text-sm">Grandparents</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Paternal</p>
                    <p className="text-[#1A1A1A]">Rama Krishna Sharma</p>
                    <p className="text-[#6B6B6B] text-xs mt-1">Tirupati, AP</p>
                  </div>
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Maternal</p>
                    <p className="text-[#1A1A1A]">Venkata Rao</p>
                    <p className="text-[#6B6B6B] text-xs mt-1">Chennai, TN</p>
                  </div>
                </div>
              </div>

              {/* Parents */}
              <div>
                <p className="text-[#6B6B6B] mb-3 text-sm">Parents</p>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Father</p>
                    <p className="text-[#1A1A1A]">Suresh Sharma</p>
                    <p className="text-[#6B6B6B] text-xs mt-1">Business Owner</p>
                  </div>
                  <div className="bg-[#F5F3F0] p-4 rounded-xl border border-[#E8E6E3]">
                    <p className="text-[#6B6B6B] mb-1 text-sm">Mother</p>
                    <p className="text-[#1A1A1A]">Lakshmi Devi</p>
                    <p className="text-[#6B6B6B] text-xs mt-1">Homemaker</p>
                  </div>
                </div>
              </div>

              {/* Current Profile */}
              <div>
                <p className="text-[#6B6B6B] mb-3 text-sm">Profile</p>
                <div className="bg-[#D4AF37]/10 p-4 rounded-xl border-2 border-[#D4AF37]">
                  <p className="text-[#1A1A1A]">{selectedProfile.name}</p>
                  <div className="mt-2 space-y-1">
                    <p className="text-[#1A1A1A] text-sm flex items-center gap-2">
                      <Shield size={14} className="text-[#D4AF37]" />
                      Gothram: {selectedProfile.gothram}
                    </p>
                    <p className="text-[#1A1A1A] text-sm flex items-center gap-2">
                      <StarIcon size={14} className="text-[#D4AF37]" />
                      Nakshatram: {selectedProfile.nakshatram}
                    </p>
                    <p className="text-[#1A1A1A] text-sm flex items-center gap-2">
                      <MapPin size={14} className="text-[#D4AF37]" />
                      {selectedProfile.nativePlace}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-[#F5F3F0] border border-[#E8E6E3] p-4 rounded-xl">
                <p className="text-[#1A1A1A] flex items-center gap-2 mb-2 text-sm">
                  <Heart size={16} className="text-[#D4AF37]" fill="#D4AF37" />
                  <span>Full Lineage Unlocked</span>
                </p>
                <p className="text-[#6B6B6B] text-sm">
                  This information is available because of your mutual Subham connection
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}