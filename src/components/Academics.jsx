import React, { useState } from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';

export default function Academics({ onOpenAdmission }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth * 0.75;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveIndex(Math.min(Math.max(0, index), grades.length - 1));
  };

  const grades = [
    {
      title: 'Pre-Primary (Nursery, LKG, UKG)',
      desc: 'Play-way learning, phonics, numbers, nursery rhymes, drawing, and fine motor skills development.',
      color: 'bg-amber-50 border-amber-200 text-amber-900'
    },
    {
      title: 'Primary School (Class 1st to 5th)',
      desc: 'NCERT standard curriculum in English Grammar, Mathematics, Hindi, Science, Social Studies, and Computers.',
      color: 'bg-blue-50 border-blue-200 text-blue-900'
    },
    {
      title: 'Middle School (Class 6th to 8th)',
      desc: 'Advanced problem solving, computer lab practicals, science concepts, spoken English, and competitive guidance.',
      color: 'bg-emerald-50 border-emerald-200 text-emerald-900'
    }
  ];

  return (
    <section id="academics" className="py-12 sm:py-16 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Academic Programs</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-heading font-black text-slate-900">
            Classes Offered (Nursery to Class 8th)
          </h2>
        </div>

        {/* Mobile Horizontal Swipable Carousel & Desktop 3-Column Grid */}
        <div 
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 pb-2 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          {grades.map((g, idx) => (
            <div 
              key={idx} 
              className={`w-[84%] sm:w-[300px] shrink-0 snap-center md:w-auto p-5 sm:p-6 rounded-2xl border ${g.color} space-y-3 flex flex-col justify-between shadow-xs hover:shadow-md transition-all`}
            >
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 mb-2">
                  {g.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <button
                onClick={onOpenAdmission}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs w-full text-center mt-3 shadow-xs hover:shadow-md transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4 text-white" />
                <span>Apply for Admission</span>
              </button>
            </div>
          ))}
        </div>

        {/* Carousel Indicator Dots directly below cards */}
        <div className="flex justify-center items-center gap-2 mt-4 md:hidden">
          {grades.map((_, idx) => (
            <span
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeIndex === idx ? 'w-6 bg-orange-600' : 'w-2.5 bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}




