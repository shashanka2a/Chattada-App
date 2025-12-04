"use client";

import { useState } from "react";
import { Search, Send, MoreVertical, ArrowLeft } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const mockConversations = [
  {
    id: 1,
    name: 'Priya Sharma',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200',
    lastMessage: 'That sounds great! Looking forward to it.',
    timestamp: '2m ago',
    unread: 2,
    online: true
  },
  {
    id: 2,
    name: 'Ananya Reddy',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200',
    lastMessage: 'Thank you for connecting!',
    timestamp: '1h ago',
    unread: 0,
    online: false
  },
  {
    id: 3,
    name: 'Meera Patel',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200',
    lastMessage: 'Would love to know more about your interests',
    timestamp: '3h ago',
    unread: 1,
    online: true
  }
];

const mockMessages = [
  {
    id: 1,
    text: 'Hi! Nice to connect with you.',
    sender: 'them',
    timestamp: '10:30 AM'
  },
  {
    id: 2,
    text: 'Hello! Thank you for reaching out.',
    sender: 'me',
    timestamp: '10:32 AM'
  },
  {
    id: 3,
    text: 'I saw you enjoy traveling. What are some of your favorite destinations?',
    sender: 'them',
    timestamp: '10:35 AM'
  },
  {
    id: 4,
    text: "I love exploring new cultures! Recently visited Japan and it was amazing. How about you?",
    sender: 'me',
    timestamp: '10:38 AM'
  },
  {
    id: 5,
    text: 'That sounds great! Looking forward to it.',
    sender: 'them',
    timestamp: '10:40 AM'
  }
];

export function Messages() {
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [messageText, setMessageText] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Handle send message
      setMessageText('');
    }
  };

  if (selectedChat) {
    const conversation = mockConversations.find(c => c.id === selectedChat);
    
    return (
      <div className="h-full bg-[#F5F3F0] flex flex-col">
        {/* Chat Header */}
        <div className="flex-shrink-0 bg-white border-b border-[#E8E6E3] px-4 py-3 flex items-center gap-3">
          <button
            onClick={() => setSelectedChat(null)}
            className="p-2 hover:bg-[#F5F3F0] rounded-lg transition-colors"
          >
            <ArrowLeft size={20} className="text-[#1A1A1A]" />
          </button>
          <div className="relative">
            <ImageWithFallback
              src={conversation!.image}
              alt={conversation!.name}
              className="w-10 h-10 rounded-full object-cover"
            />
            {conversation!.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#D4AF37] border-2 border-white rounded-full"></div>
            )}
          </div>
          <div className="flex-1">
            <h3 className="text-[#1A1A1A]">{conversation!.name}</h3>
            <p className="text-[#6B6B6B]">
              {conversation!.online ? 'Online' : 'Offline'}
            </p>
          </div>
          <button className="p-2 hover:bg-[#F5F3F0] rounded-lg transition-colors">
            <MoreVertical size={20} className="text-[#1A1A1A]" />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-auto p-4 space-y-4">
          {mockMessages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                  message.sender === 'me'
                    ? 'bg-[#1A1A1A] text-white'
                    : 'bg-white text-[#1A1A1A] border border-[#E8E6E3]'
                }`}
              >
                <p>{message.text}</p>
                <p
                  className={`text-xs mt-1 ${
                    message.sender === 'me' ? 'text-[#D4AF37]' : 'text-[#6B6B6B]'
                  }`}
                >
                  {message.timestamp}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Message Input */}
        <form onSubmit={handleSendMessage} className="flex-shrink-0 p-4 border-t border-[#E8E6E3] bg-white">
          <div className="flex gap-2">
            <input
              type="text"
              value={messageText}
              onChange={(e) => setMessageText(e.target.value)}
              placeholder="Type a message..."
              className="flex-1 px-4 py-3 border border-[#E8E6E3] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37] bg-[#F5F3F0] text-[#1A1A1A] placeholder:text-[#6B6B6B]"
            />
            <button
              type="submit"
              disabled={!messageText.trim()}
              className="w-12 h-12 bg-[#1A1A1A] text-white rounded-full flex items-center justify-center hover:bg-[#2A2A2A] transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
            >
              <Send size={20} />
            </button>
          </div>
        </form>
      </div>
    );
  }

  return (
    <div className="h-full bg-[#F5F3F0] flex flex-col">
      {/* Header */}
      <div className="flex-shrink-0 bg-white/80 backdrop-blur-md border-b border-[#E8E6E3] px-6 py-4 sticky top-0 z-10">
        <h2 className="text-[#1A1A1A]">Messages</h2>
      </div>

      {/* Search */}
      <div className="flex-shrink-0 px-6 py-4 border-b border-[#E8E6E3] bg-white">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B6B6B]" size={20} />
          <input
            type="text"
            placeholder="Search conversations..."
            className="w-full pl-12 pr-4 py-3 bg-[#F5F3F0] border border-[#E8E6E3] rounded-full focus:outline-none focus:ring-2 focus:ring-[#D4AF37] text-[#1A1A1A] placeholder:text-[#6B6B6B]"
          />
        </div>
      </div>

      {/* Conversations List */}
      <div className="flex-1 overflow-auto">
        {mockConversations.map((conversation) => (
          <button
            key={conversation.id}
            onClick={() => setSelectedChat(conversation.id)}
            className="w-full px-6 py-4 hover:bg-white transition-colors flex items-center gap-4 border-b border-[#E8E6E3]"
          >
            <div className="relative flex-shrink-0">
              <ImageWithFallback
                src={conversation.image}
                alt={conversation.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              {conversation.online && (
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#D4AF37] border-2 border-white rounded-full"></div>
              )}
            </div>
            
            <div className="flex-1 text-left min-w-0">
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-[#1A1A1A] truncate">{conversation.name}</h3>
                <span className="text-[#6B6B6B] text-sm flex-shrink-0 ml-2">{conversation.timestamp}</span>
              </div>
              <p className="text-[#6B6B6B] truncate">{conversation.lastMessage}</p>
            </div>

            {conversation.unread > 0 && (
              <div className="flex-shrink-0 w-6 h-6 bg-[#D4AF37] text-[#1A1A1A] rounded-full flex items-center justify-center shadow-sm">
                <span className="text-xs">{conversation.unread}</span>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
