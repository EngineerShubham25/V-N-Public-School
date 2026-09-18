import React from 'react';
import { BookOpen, Check, GraduationCap, Sparkles } from 'lucide-react';

export default function Academics({ onOpenAdmission }) {
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
    <section id="academics" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-xs font-bold">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Academic Programs</span>
          </div>

          <h2 className="text-3xl font-heading font-black text-slate-900">
            Classes Offered (Nursery to Class 8th)
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {grades.map((g, idx) => (
            <div key={idx} className={`p-6 rounded-2xl border ${g.color} space-y-3 flex flex-col justify-between shadow-sm`}>
              <div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {g.title}
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  {g.desc}
                </p>
              </div>

              <button
                onClick={onOpenAdmission}
                className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-4 py-2 rounded-xl text-xs w-full text-center mt-2 shadow-sm"
              >
                Apply for Admission
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
