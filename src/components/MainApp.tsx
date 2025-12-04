\"use client\";

import { useState } from "react";
import { Home } from "./Home";
import { Discover } from "./Discover";
import { Messages } from "./Messages";
import { FamilyTree } from "./FamilyTree";
import { Profile } from "./Profile";
import { HomeIcon, Compass, MessageCircle, GitBranch, User } from "lucide-react";

interface MainAppProps {
  user: any;
  onLogout: () => void;
}

export function MainApp({ user, onLogout }: MainAppProps) {
  const [activeTab, setActiveTab] = useState<'home' | 'discover' | 'messages' | 'tree' | 'profile'>('home');

  return (
    <div className="fixed inset-0 bg-[#F5F3F0] flex flex-col">
      {/* Main Content */}
      <div className="flex-1 overflow-auto pb-20">
        {activeTab === 'home' && <Home user={user} />}
        {activeTab === 'discover' && <Discover />}
        {activeTab === 'messages' && <Messages />}
        {activeTab === 'tree' && <FamilyTree />}
        {activeTab === 'profile' && <Profile user={user} onLogout={onLogout} />}
      </div>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-md border-t border-[#E8E6E3] safe-bottom shadow-lg">
        <div className="flex justify-around items-center h-16 max-w-lg mx-auto">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${
              activeTab === 'home' ? 'text-[#D4AF37] scale-110' : 'text-[#6B6B6B]'
            }`}
          >
            <HomeIcon size={24} />
            <span className="text-xs">Home</span>
          </button>

          <button
            onClick={() => setActiveTab('discover')}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${
              activeTab === 'discover' ? 'text-[#D4AF37] scale-110' : 'text-[#6B6B6B]'
            }`}
          >
            <Compass size={24} />
            <span className="text-xs">Discover</span>
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-all relative ${
              activeTab === 'messages' ? 'text-[#D4AF37] scale-110' : 'text-[#6B6B6B]'
            }`}
          >
            <MessageCircle size={24} />
            <span className="text-xs">Messages</span>
            <span className="absolute top-1 right-3 w-2 h-2 bg-[#D4AF37] rounded-full animate-pulse"></span>
          </button>

          <button
            onClick={() => setActiveTab('tree')}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${
              activeTab === 'tree' ? 'text-[#D4AF37] scale-110' : 'text-[#6B6B6B]'
            }`}
          >
            <GitBranch size={24} />
            <span className="text-xs">Tree</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-1 px-4 py-2 transition-all ${
              activeTab === 'profile' ? 'text-[#D4AF37] scale-110' : 'text-[#6B6B6B]'
            }`}
          >
            <User size={24} />
            <span className="text-xs">Profile</span>
          </button>
        </div>
      </nav>
    </div>
  );
}