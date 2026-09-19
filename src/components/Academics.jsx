import React from 'react';
import { BookOpen, GraduationCap } from 'lucide-react';
import bookBgImg from '../assets/book_bg.jpg';

export default function Academics({ onOpenAdmission }) {
  const grades = [
    {
      title: 'Pre-Primary (Nursery, LKG, UKG)',
      badge: 'Play-Way & Foundation',
      desc: 'Play-way learning, phonics, numbers, nursery rhymes, drawing, and fine motor skills development.',
      color: 'bg-white/95 border-amber-300 text-amber-950 shadow-md hover:border-amber-500'
    },
    {
      title: 'Primary School (Class 1st to 5th)',
      badge: 'NCERT Standard Curriculum',
      desc: 'NCERT standard curriculum in English Grammar, Mathematics, Hindi, Science, Social Studies, and Computers.',
      color: 'bg-white/95 border-blue-300 text-blue-950 shadow-md hover:border-blue-500'
    },
    {
      title: 'Middle School (Class 6th to 8th)',
      badge: 'Advanced & Competitive Prep',
      desc: 'Advanced problem solving, computer lab practicals, science concepts, spoken English, and competitive guidance.',
      color: 'bg-white/95 border-emerald-300 text-emerald-950 shadow-md hover:border-emerald-500'
    }
  ];

  return (
    <section id="academics" className="relative py-16 bg-slate-100 text-slate-900 border-b border-slate-200 font-sans overflow-hidden">
      
      {/* Real School Book Distribution Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35 pointer-events-none scale-105"
        style={{ backgroundImage: `url(${bookBgImg})` }}
      ></div>

      {/* Light Clean Mask */}
      <div className="absolute inset-0 bg-slate-900/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 bg-amber-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-black shadow-sm">
            <BookOpen className="w-4 h-4 text-slate-950" />
            <span>Academic Programs</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white drop-shadow-md tracking-tight">
            Classes Offered <span className="text-amber-300">(Nursery to Class 8th)</span>
          </h2>

          <p className="text-sm text-slate-100 font-medium max-w-lg mx-auto drop-shadow-sm">
            Comprehensive English Medium education following CBSE patterns, designed for holistic development and competitive success.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {grades.map((g, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${g.color} space-y-4 flex flex-col justify-between backdrop-blur-xs transition-all duration-300 hover:-translate-y-1`}>
              <div className="space-y-3">
                <span className="inline-block text-[11px] font-bold text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded-md border border-blue-200 uppercase tracking-wider">
                  {g.badge}
                </span>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {g.title}
                </h3>

                <p className="text-xs text-slate-700 leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <button
                onClick={onOpenAdmission}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4 py-2.5 rounded-xl text-xs w-full text-center mt-4 shadow-md hover:shadow-lg transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <GraduationCap className="w-4 h-4 text-white" />
                <span>Apply for Admission</span>
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}


