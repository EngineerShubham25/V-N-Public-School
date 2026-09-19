import React, { useState } from 'react';
import { Quote, Phone, CheckCircle2, HeartHandshake, ShieldCheck, Award, Sparkles, BookOpen, Compass, ChevronDown, ChevronUp } from 'lucide-react';

export default function DirectorMessage() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="director" className="py-12 sm:py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-blue-950 tracking-tight uppercase">
            DIRECTOR’S DESK
          </h2>
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold text-blue-900">
            <Quote className="w-3.5 h-3.5 text-blue-700" />
            <span>Leadership & Vision</span>
          </div>
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-4 sm:p-10 shadow-xs">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start">
            
            {/* Left Side: Director Photo & Profile Card */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden shadow-xs border border-slate-200 bg-white space-y-0 max-w-sm mx-auto lg:max-w-none">
                <img
                  src="/assets/director_real.jpg"
                  alt="Aadarsh Kumar Raj Director V.N. Public School"
                  className="w-full h-auto object-cover object-top"
                />
                <div className="bg-blue-900 text-white p-3.5 text-center">
                  <h3 className="text-base sm:text-lg font-heading font-black">Aadarsh Kumar Raj</h3>
                  <p className="text-[11px] sm:text-xs text-orange-400 font-semibold font-mono mt-0.5">
                    Director (B.Sc., M.Sc., B.Ed) • ESTD 2025
                  </p>
                </div>
              </div>

              {/* Direct Contact Button - Cleanly positioned */}
              <div className="mt-3 max-w-sm mx-auto lg:max-w-none">
                <a
                  href="tel:7562858494"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-2.5 rounded-xl flex items-center justify-center gap-1.5 shadow-xs transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Director Desk: +91 7562858494</span>
                </a>
              </div>
            </div>

            {/* Right Side: Message, Initial 2 Features, View More Toggle & Permanent Mission Box */}
            <div className="lg:col-span-8 space-y-4 sm:space-y-5">
              
              {/* Headline Quote */}
              <div className="border-l-4 border-orange-500 pl-3 sm:pl-4 py-1">
                <h3 className="text-base sm:text-2xl font-heading font-bold text-blue-950 italic leading-snug">
                  “Nurturing Curiosity, Character, and Excellence in Every Child.”
                </h3>
              </div>

              {/* Welcome Paragraph */}
              <div className="space-y-2 text-slate-700 text-xs sm:text-sm leading-relaxed">
                <p className="text-sm sm:text-base font-semibold text-blue-950">
                  Welcome to V.N. Public School.
                </p>
                <p>
                  At V.N. Public School, we believe that education is not limited to textbooks and examinations. Our aim is to create an environment where every child feels safe, valued, confident, and inspired to learn.
                </p>
              </div>

              {/* Initial 2 Features Always Visible (Desktop & Mobile) */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-700 pt-1">
                {/* 1. Our Vision */}
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    To nurture responsible, confident, compassionate, and future-ready individuals who possess strong academic foundations, ethical values, creativity, and confidence.
                  </p>
                </div>

                {/* 2. Academic Excellence & Special Exam Coaching */}
                <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Academic Excellence & Special Exam Coaching</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Special preparation for competitive examinations like <strong>Jawahar Navodaya Vidyalaya, Netarhat, Sainik School, and Simultala Awasiya Vidyalaya</strong> alongside regular CBSE English Medium syllabus.
                  </p>
                </div>
              </div>

              {/* Universal View More / View Less Toggle Button (Desktop & Mobile) */}
              <div className="pt-1">
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="w-full sm:w-auto bg-blue-900 hover:bg-blue-950 text-white font-bold py-2.5 px-6 rounded-xl text-xs sm:text-sm flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
                >
                  <span>{isExpanded ? 'View Less' : 'View More'}</span>
                  {isExpanded ? <ChevronUp className="w-4 h-4 text-orange-400" /> : <ChevronDown className="w-4 h-4 text-orange-400" />}
                </button>
              </div>

              {/* Remaining 5 Features (Expanded when View More is clicked) */}
              {isExpanded && (
                <div className="space-y-3 text-xs sm:text-sm text-slate-700 pt-1 transition-all duration-300">
                  {/* 3. Safety & Well-being */}
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-blue-950 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Safety & Well-being</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      The safety and well-being of every child is our highest priority in a secure, disciplined, caring, and child-friendly campus.
                    </p>
                  </div>

                  {/* 4. Holistic Development */}
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-blue-950 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Holistic Development</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Sports, music, dance classes, Sanskrit/Urdu language exposure, leadership, and teamwork activities.
                    </p>
                  </div>

                  {/* 5. Technology & Future-Ready Learning */}
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-blue-950 flex items-center gap-2">
                      <Award className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Technology & Future-Ready Learning</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Integration of digital smart classes, computer lab, science practicals, and skill workshops.
                    </p>
                  </div>

                  {/* 6. Values & Character Building */}
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-blue-950 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Values & Character Building</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Focus on discipline, honesty, respect, empathy, and special remedial guidance for weak students.
                    </p>
                  </div>

                  {/* 7. Parent–School Partnership */}
                  <div className="bg-white p-3.5 sm:p-4 rounded-xl border border-slate-200 space-y-1">
                    <h4 className="font-bold text-blue-950 flex items-center gap-2">
                      <HeartHandshake className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Parent–School Partnership</span>
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed pl-6">
                      Strong collaboration between parents and teachers to support every child's academic and personal growth.
                    </p>
                  </div>
                </div>
              )}

              {/* ALWAYS VISIBLE AT THE BOTTOM: Our Mission Quote Box */}
              <div className="bg-blue-950 text-white p-4 sm:p-6 rounded-2xl space-y-2.5 mt-4 sm:mt-6 shadow-sm relative overflow-hidden">
                <Quote className="w-8 h-8 text-orange-400 opacity-20 absolute right-3 bottom-3" />
                <p className="text-xs sm:text-sm font-medium italic text-slate-100 leading-relaxed">
                  “Our mission is simple — to provide every child with the knowledge to succeed, the values to lead, and the confidence to dream.”
                </p>
                <div className="border-t border-blue-900 pt-2">
                  <div className="font-heading font-black text-amber-400 text-xs sm:text-sm">Aadarsh Kumar Raj</div>
                  <div className="text-[11px] text-slate-300 font-mono">Director (B.Sc., M.Sc., B.Ed), V.N. Public School</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}




