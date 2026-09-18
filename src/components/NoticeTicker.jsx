import React from 'react';
import { Bell, ArrowRight, Bus } from 'lucide-react';

export default function NoticeTicker({ onOpenAdmission }) {
  return (
    <div className="bg-orange-600 text-white py-2.5 px-4 shadow-xs border-b border-orange-700/30 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4 text-xs sm:text-sm font-bold">
        
        {/* Fixed Left Tag */}
        <div className="flex items-center gap-1.5 bg-blue-950 text-white px-3 py-1 rounded text-xs font-black uppercase tracking-wider shrink-0 z-10 shadow-sm">
          <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
          <span>NOTICE</span>
        </div>

        {/* Moving Marquee Container */}
        <div className="flex-1 min-w-0 overflow-hidden relative">
          <div className="inline-block whitespace-nowrap animate-marquee font-semibold text-xs sm:text-sm tracking-wide">
            <span className="mx-4">🎓 <strong>Admissions Open (2026–27)</strong> for Nursery to Class 8th (English Medium - CBSE Pattern)</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🚌 <strong>Safe Van Transport:</strong> Door-to-Door Maruti Omni Coverage Across Nearby Villages</span>
            <span className="mx-4">|</span>
            <span className="mx-4">🎯 <strong>Special Exam Coaching:</strong> Jawahar Navodaya, Sainik & Netarhat Entrance Guidance</span>
            <span className="mx-4">|</span>
            <span className="mx-4">💻 <strong>Smart Classes & Computer Lab:</strong> Practical Digital Literacy & Science Kits</span>
          </div>
        </div>

        {/* Fixed Right Action Button */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button
            onClick={onOpenAdmission}
            className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-xs transition-colors text-xs cursor-pointer"
          >
            <span>Apply Online</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>

      {/* Inline CSS animation for smooth ticker movement */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 22s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
