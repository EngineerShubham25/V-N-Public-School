import React from 'react';
import { Bell, ArrowRight, Bus } from 'lucide-react';

export default function NoticeTicker({ onOpenAdmission }) {
  return (
    <div className="bg-orange-500 text-white py-2 px-4 shadow-xs border-b border-orange-600/30 font-sans">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3 text-xs font-bold">
        
        {/* Left Side Notice Tag & Highlight */}
        <div className="flex items-center gap-2 flex-1 min-w-0">
          <div className="flex items-center gap-1.5 bg-blue-950 text-white px-2.5 py-0.5 rounded text-[11px] font-black uppercase tracking-wider shrink-0">
            <Bell className="w-3.5 h-3.5 text-amber-400 animate-bounce" />
            <span>NOTICE</span>
          </div>

          <div className="text-white font-bold truncate text-xs sm:text-sm">
            Admissions Open (2026–27) • Nursery to Class VIII
          </div>
        </div>

        {/* Right Side Transport & Apply Now CTA */}
        <div className="flex items-center gap-3 shrink-0 text-[11px] sm:text-xs">
          <div className="hidden sm:flex items-center gap-1.5 text-slate-100 font-semibold">
            <Bus className="w-4 h-4 text-white" />
            <span>Transport Available: Safe Van Service</span>
          </div>

          <button
            onClick={onOpenAdmission}
            className="bg-blue-950 hover:bg-blue-900 text-white font-bold px-3 py-1 rounded-lg flex items-center gap-1 shadow-xs transition-colors text-xs"
          >
            <span>Apply Now</span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
          </button>
        </div>

      </div>
    </div>
  );
}
