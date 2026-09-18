import React from 'react';
import { Bell, ArrowRight } from 'lucide-react';

export default function NoticeTicker({ onOpenAdmission }) {
  const noticeItems = (
    <div className="flex items-center shrink-0">
      <span className="mx-3">🎓 <strong>Admissions Open (2026–27)</strong> for Nursery to Class 8th (CBSE Pattern)</span>
      <span className="mx-2 text-amber-200">•</span>
      <span className="mx-3">🚌 <strong>Safe Van Transport:</strong> Door-to-Door Pick & Drop Coverage Across Nearby Villages</span>
      <span className="mx-2 text-amber-200">•</span>
      <span className="mx-3">🎯 <strong>Entrance Exam Coaching:</strong> Navodaya, Sainik, Netarhat & Simultala Guidance</span>
      <span className="mx-2 text-amber-200">•</span>
      <span className="mx-3">💻 <strong>Smart Class & Computer Lab:</strong> IT Workstations & Science Practical Kits</span>
      <span className="mx-2 text-amber-200">•</span>
    </div>
  );

  return (
    <div className="bg-orange-600 text-white py-2.5 px-4 shadow-xs border-b border-orange-700/30 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 text-xs sm:text-sm font-bold">
        
        {/* Fixed Left Notice Tag */}
        <div className="flex items-center gap-1.5 bg-blue-950 text-white px-3 py-1 rounded text-xs font-black uppercase tracking-wider shrink-0 z-10 shadow-sm">
          <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
          <span>NOTICE</span>
        </div>

        {/* 0-Delay Instant Visible Infinite Moving Marquee Ticker */}
        <div className="flex-1 min-w-0 overflow-hidden relative">
          <div className="flex whitespace-nowrap animate-instant-ticker font-semibold text-xs sm:text-sm tracking-wide">
            {noticeItems}
            {noticeItems}
          </div>
        </div>

        {/* Fixed Right Action Button */}
        <div className="flex items-center gap-2 shrink-0 z-10">
          <button
            onClick={onOpenAdmission}
            className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-3.5 py-1 rounded-lg flex items-center gap-1 shadow-xs transition-colors text-xs cursor-pointer"
          >
            <span>Apply Online</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>

      {/* Inline CSS animation for 0-delay instant seamless infinite scrolling */}
      <style>{`
        @keyframes instantTicker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-instant-ticker {
          display: flex;
          width: max-content;
          animation: instantTicker 24s linear infinite;
        }
        .animate-instant-ticker:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}
