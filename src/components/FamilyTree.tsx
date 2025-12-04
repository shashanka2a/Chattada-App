\"use client\";

import { GitBranch, Bell } from "lucide-react";

export function FamilyTree() {
  return (
    <div className="h-full bg-[#F5F3F0] flex items-center justify-center p-6">
      <div className="max-w-md text-center">
        {/* Icon */}
        <div className="relative inline-block mb-8">
          <div className="absolute inset-0 bg-[#D4AF37]/10 blur-3xl rounded-full"></div>
          <div className="relative w-20 h-20 bg-[#1A1A1A] rounded-2xl flex items-center justify-center shadow-2xl">
            <GitBranch size={40} strokeWidth={1.5} className="text-[#D4AF37]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="mb-3 text-[#1A1A1A]">
          Vamsha Vriksham
        </h1>

        {/* Coming Soon Badge */}
        <div className="inline-flex items-center gap-2 bg-white text-[#D4AF37] px-4 py-2 rounded-full mb-6 border border-[#E8E6E3] shadow-sm">
          <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full"></div>
          <span>Coming Soon</span>
        </div>

        {/* Description */}
        <p className="text-[#6B6B6B] mb-8">
          Interactive three-generation family lineage with privacy controls. Verify ancestral roots and connect with heritage.
        </p>

        {/* Features List */}
        <div className="bg-white border border-[#E8E6E3] rounded-2xl p-6 mb-6 text-left shadow-sm">
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
              <span className="text-[#1A1A1A]">Interactive family tree visualization</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
              <span className="text-[#1A1A1A]">Privacy-first - names revealed after mutual connection</span>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-1.5 h-1.5 bg-[#D4AF37] rounded-full mt-2"></div>
              <span className="text-[#1A1A1A]">Heritage stories and traditions</span>
            </li>
          </ul>
        </div>

        {/* Notify Button */}
        <button className="w-full px-6 py-3.5 bg-[#1A1A1A] text-white rounded-full hover:bg-[#2A2A2A] transition-all shadow-lg flex items-center justify-center gap-2">
          <Bell size={20} />
          <span>Notify Me</span>
        </button>
      </div>
    </div>
  );
}
