"use client";

import { useState } from "react";
import {
  Settings,
  Edit,
  LogOut,
  Shield,
  Camera,
  ChevronRight,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase,
  GraduationCap,
  Heart,
  Calendar,
  Ruler,
  Users,
  Scroll,
  Star,
} from "lucide-react";

interface ProfileProps {
  user: any;
  onLogout: () => void;
}

export function Profile({ user, onLogout }: ProfileProps) {
  const [isEditing, setIsEditing] = useState(false);

  // Helper function to format education
  const formatEducation = (education: string) => {
    const educationMap: { [key: string]: string } = {
      'high_school': 'High School',
      'bachelors': "Bachelor's Degree",
      'masters': "Master's Degree",
      'doctorate': 'Doctorate',
      'diploma': 'Diploma'
    };
    return educationMap[education] || education;
  };

  // Helper function to format marital status
  const formatMaritalStatus = (status: string) => {
    const statusMap: { [key: string]: string } = {
      'never_married': 'Never Married',
      'divorced': 'Divorced',
      'widowed': 'Widowed'
    };
    return statusMap[status] || status;
  };

  // Helper function to format height
  const formatHeight = (height: string) => {
    if (!height) return 'Not specified';
    // Convert format like "5ft6in" to "5'6""
    const match = height.match(/(\d+)ft(\d+)in/);
    if (match) {
      return `${match[1]}'${match[2]}"`;
    }
    return height;
  };

  // Helper function to format work experience
  const formatWorkExperience = (exp: string) => {
    const expMap: { [key: string]: string } = {
      'fresher': 'Fresher',
      '1-3': '1-3 years',
      '3-5': '3-5 years',
      '5-10': '5-10 years',
      '10+': '10+ years'
    };
    return expMap[exp] || exp;
  };

  return (
    <div className="h-full bg-[#F5F3F0] overflow-auto">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white px-6 pt-6 pb-24">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-white">Profile</h2>
          <button
            onClick={onLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-lg hover:bg-white/20 transition-colors border border-white/20"
          >
            <LogOut size={20} />
            <span>Logout</span>
          </button>
        </div>

        {/* Profile Picture */}
        <div className="flex flex-col items-center">
          <div className="relative">
            <div className="w-32 h-32 bg-[#2A2A2A] rounded-full flex items-center justify-center border-4 border-[#D4AF37]/20">
              <User size={48} className="text-[#D4AF37]" />
            </div>
            <button className="absolute bottom-0 right-0 w-10 h-10 bg-[#D4AF37] border-2 border-white rounded-full flex items-center justify-center hover:bg-[#B8941F] transition-colors shadow-lg">
              <Camera size={18} className="text-[#1A1A1A]" />
            </button>
          </div>
          <h2 className="text-white mt-4">{user.name}</h2>
          {user.age && (
            <p className="text-white/80">{user.age} years • {user.gender === 'male' ? 'Male' : 'Female'}</p>
          )}
          <div className="flex items-center gap-2 mt-2">
            <Shield className="text-[#D4AF37]" size={16} />
            <span className="text-[#D4AF37]">Verified Profile</span>
          </div>
        </div>

        {/* Profile Completion */}
        <div className="mt-6">
          <div className="flex justify-between mb-2">
            <span className="text-white/90">Profile Completion</span>
            <span className="text-white">{user.profileComplete}%</span>
          </div>
          <div className="w-full bg-white/10 backdrop-blur-sm rounded-full h-2 overflow-hidden border border-white/20">
            <div
              className="bg-[#D4AF37] h-2 rounded-full transition-all shadow-lg"
              style={{ width: `${user.profileComplete}%` }}
            ></div>
          </div>
        </div>
      </div>

      {/* Profile Content */}
      <div className="px-6 -mt-12 pb-6">
        {/* Quick Stats */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 grid grid-cols-3 gap-4 border border-[#E8E6E3]">
          <div className="text-center">
            <div className="text-[#D4AF37] mb-1">12</div>
            <div className="text-[#6B6B6B]">Matches</div>
          </div>
          <div className="text-center border-x border-[#E8E6E3]">
            <div className="text-[#D4AF37] mb-1">5</div>
            <div className="text-[#6B6B6B]">Shortlist</div>
          </div>
          <div className="text-center">
            <div className="text-[#D4AF37] mb-1">8</div>
            <div className="text-[#6B6B6B]">Interests</div>
          </div>
        </div>

        {/* Personal Information */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-[#E8E6E3]">
          <div className="flex justify-between items-center mb-4">
            <h3>Personal Information</h3>
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="text-[#D4AF37] hover:text-[#B8941F] p-2 hover:bg-[#F5F3F0] rounded-lg transition-all"
            >
              <Edit size={20} />
            </button>
          </div>

          <div className="space-y-4">
            {user.email && (
              <div className="flex items-start gap-3">
                <Mail className="text-[#6B6B6B] mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-[#6B6B6B]">Email</p>
                  <p className="text-[#1A1A1A]">{user.email}</p>
                </div>
              </div>
            )}

            {user.phone && (
              <div className="flex items-start gap-3">
                <Phone className="text-[#6B6B6B] mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-[#6B6B6B]">Phone</p>
                  <p className="text-[#1A1A1A]">{user.phone}</p>
                </div>
              </div>
            )}

            {user.dob && (
              <div className="flex items-start gap-3">
                <Calendar className="text-[#6B6B6B] mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-[#6B6B6B]">Date of Birth</p>
                  <p className="text-[#1A1A1A]">{new Date(user.dob).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                </div>
              </div>
            )}

            {user.height && (
              <div className="flex items-start gap-3">
                <Ruler className="text-[#6B6B6B] mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-[#6B6B6B]">Height</p>
                  <p className="text-[#1A1A1A]">{formatHeight(user.height)}</p>
                </div>
              </div>
            )}

            {user.maritalStatus && (
              <div className="flex items-start gap-3">
                <Users className="text-[#6B6B6B] mt-1" size={20} />
                <div className="flex-1">
                  <p className="text-[#6B6B6B]">Marital Status</p>
                  <p className="text-[#1A1A1A]">{formatMaritalStatus(user.maritalStatus)}</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Professional Information */}
        {(user.education || user.profession || user.workExperience) && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-[#E8E6E3]">
            <h3 className="mb-4">Professional Information</h3>

            <div className="space-y-4">
              {user.education && (
                <div className="flex items-start gap-3">
                  <GraduationCap className="text-[#6B6B6B] mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-[#6B6B6B]">Education</p>
                    <p className="text-[#1A1A1A]">{formatEducation(user.education)}</p>
                  </div>
                </div>
              )}

              {user.profession && (
                <div className="flex items-start gap-3">
                  <Briefcase className="text-[#6B6B6B] mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-[#6B6B6B]">Profession</p>
                    <p className="text-[#1A1A1A]">{user.profession}</p>
                  </div>
                </div>
              )}

              {user.workExperience && (
                <div className="flex items-start gap-3">
                  <Briefcase className="text-[#6B6B6B] mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-[#6B6B6B]">Work Experience</p>
                    <p className="text-[#1A1A1A]">{formatWorkExperience(user.workExperience)}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Community Information */}
        {(user.gothram || user.nakshatram || user.nativePlace) && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-[#E8E6E3]">
            <div className="flex items-center gap-2 mb-4">
              <Scroll className="text-[#D4AF37]" size={24} />
              <h2 className="text-[#1A1A1A]">Heritage & Lineage</h2>
            </div>

            <div className="space-y-4">
              {user.gothram && (
                <div className="flex items-start gap-3">
                  <Shield className="text-[#6B6B6B] mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-[#6B6B6B]">Gothram</p>
                    <p className="text-[#1A1A1A]">{user.gothram.charAt(0).toUpperCase() + user.gothram.slice(1)}</p>
                  </div>
                </div>
              )}

              {user.nakshatram && (
                <div className="flex items-start gap-3">
                  <Star className="text-[#6B6B6B] mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-[#6B6B6B]">Nakshatram</p>
                    <p className="text-[#1A1A1A]">{user.nakshatram.charAt(0).toUpperCase() + user.nakshatram.slice(1)}</p>
                  </div>
                </div>
              )}

              {user.nativePlace && (
                <div className="flex items-start gap-3">
                  <MapPin className="text-[#6B6B6B] mt-1" size={20} />
                  <div className="flex-1">
                    <p className="text-[#6B6B6B]">Native Place</p>
                    <p className="text-[#1A1A1A]">{user.nativePlace}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Preferences */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-[#E8E6E3]">
          <h3 className="mb-4">Partner Preferences</h3>
          
          <div className="space-y-3">
            <button className="w-full flex items-center justify-between p-3 hover:bg-[#F5F3F0] rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <Heart className="text-[#D4AF37]" size={20} />
                <span className="text-[#1A1A1A]">Age Range</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B6B6B]">
                <span>24 - 30</span>
                <ChevronRight size={20} />
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-[#F5F3F0] rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <MapPin className="text-[#D4AF37]" size={20} />
                <span className="text-[#1A1A1A]">Location</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B6B6B]">
                <span>India</span>
                <ChevronRight size={20} />
              </div>
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-[#F5F3F0] rounded-xl transition-colors">
              <div className="flex items-center gap-3">
                <GraduationCap className="text-[#D4AF37]" size={20} />
                <span className="text-[#1A1A1A]">Education</span>
              </div>
              <div className="flex items-center gap-2 text-[#6B6B6B]">
                <span>Graduate</span>
                <ChevronRight size={20} />
              </div>
            </button>
          </div>
        </div>

        {/* Settings */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-[#E8E6E3]">
          <h3 className="mb-4">Settings</h3>
          
          <div className="space-y-2">
            <button className="w-full flex items-center justify-between p-3 hover:bg-[#F5F3F0] rounded-lg transition-colors">
              <span className="text-[#1A1A1A]">Privacy Settings</span>
              <ChevronRight className="text-[#6B6B6B]" size={20} />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-[#F5F3F0] rounded-lg transition-colors">
              <span className="text-[#1A1A1A]">Notifications</span>
              <ChevronRight className="text-[#6B6B6B]" size={20} />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-[#F5F3F0] rounded-lg transition-colors">
              <span className="text-[#1A1A1A]">Help & Support</span>
              <ChevronRight className="text-[#6B6B6B]" size={20} />
            </button>

            <button className="w-full flex items-center justify-between p-3 hover:bg-[#F5F3F0] rounded-lg transition-colors">
              <span className="text-[#1A1A1A]">Terms & Conditions</span>
              <ChevronRight className="text-[#6B6B6B]" size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}