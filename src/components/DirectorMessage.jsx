import React from 'react';
import { Quote, Phone, CheckCircle2, HeartHandshake, ShieldCheck, Award, Sparkles, BookOpen, Compass } from 'lucide-react';

export default function DirectorMessage() {
  return (
    <section id="director" className="py-16 sm:py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-blue-950 tracking-tight uppercase">
            DIRECTOR’S DESK
          </h2>
          <div className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold text-blue-900">
            <Quote className="w-3.5 h-3.5 text-blue-700" />
            <span>Leadership & Vision</span>
          </div>
        </div>

        {/* Recommended Responsive Grid Layout */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-5 sm:p-10 shadow-sm">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            
            {/* Left Side: Director Photo */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <div className="rounded-2xl overflow-hidden shadow-md border border-slate-200 bg-white space-y-0 max-w-sm mx-auto lg:max-w-none">
                <img
                  src="/assets/director_real.jpg"
                  alt="Aadarsh Kumar Raj Director V.N. Public School"
                  className="w-full h-auto object-cover object-top"
                />
                <div className="bg-blue-900 text-white p-4 text-center">
                  <h3 className="text-lg font-heading font-black">Aadarsh Kumar Raj</h3>
                  <p className="text-xs text-orange-400 font-semibold font-mono mt-0.5">
                    Director (B.Sc., M.Sc., B.Ed) • ESTD 2025
                  </p>
                </div>
              </div>

              {/* Direct Contact Button */}
              <div className="mt-4 max-w-sm mx-auto lg:max-w-none">
                <a
                  href="tel:7562858494"
                  className="w-full bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold py-3 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all text-center"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Director Desk: +91 7562858494</span>
                </a>
              </div>
            </div>

            {/* Right Side: Structured Message & Points */}
            <div className="lg:col-span-8 space-y-6">
              
              {/* Headline Quote */}
              <div className="border-l-4 border-orange-500 pl-3 sm:pl-4 py-1">
                <h3 className="text-lg sm:text-2xl font-heading font-bold text-blue-950 italic leading-snug">
                  “Nurturing Curiosity, Character, and Excellence in Every Child.”
                </h3>
              </div>

              {/* Welcome Paragraph */}
              <div className="space-y-3 text-slate-700 text-sm leading-relaxed">
                <p className="text-base font-semibold text-blue-950">
                  Welcome to V.N. Public School.
                </p>
                <p>
                  At V.N. Public School (Managed by Lalti Virendra Charitable Trust), we believe that education is not limited to textbooks and examinations. Our aim is to create an environment where every child feels safe, valued, confident, and inspired to learn.
                </p>
              </div>

              {/* Structured Points Grid */}
              <div className="space-y-4 text-sm text-slate-700 pt-2">
                
                {/* 1. Our Vision */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Our Vision</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    To nurture responsible, confident, compassionate, and future-ready individuals who possess strong academic foundations, ethical values, creativity, and the confidence to contribute positively to society.
                  </p>
                </div>

                {/* 2. Academic Excellence & Entrance Exam Prep */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Academic Excellence & Special Exam Coaching</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Our curriculum focuses on conceptual understanding, practical learning, and special preparation for competitive examinations like <strong>Jawahar Navodaya Vidyalaya, Netarhat, Sainik School, and Simultala Awasiya Vidyalaya</strong> alongside regular CBSE English Medium syllabus.
                  </p>
                </div>

                {/* 3. Safety & Well-being */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Safety & Well-being</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    The safety and well-being of every child is our highest priority. We strive to maintain a secure, disciplined, caring, and child-friendly campus where students can learn and grow with confidence.
                  </p>
                </div>

                {/* 4. Holistic Development */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Holistic Development</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    We believe every child is unique. Along with academics, we encourage participation in sports, music, dance classes, Sanskrit/Urdu language education, communication, leadership, and teamwork.
                  </p>
                </div>

                {/* 5. Technology & Future-Ready Learning */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <Award className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Technology & Future-Ready Learning</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    Education must evolve with the world. We integrate digital smart classes, computer labs, science labs, skill development, and personality development workshops to prepare our students for tomorrow.
                  </p>
                </div>

                {/* 6. Values & Character Building */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Values & Character Building</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    We focus on developing qualities such as discipline, honesty, respect, empathy, responsibility, and integrity with special attention to weak students through remedial guidance.
                  </p>
                </div>

                {/* 7. Parent–School Partnership */}
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1">
                  <h4 className="font-bold text-blue-950 flex items-center gap-2">
                    <HeartHandshake className="w-4 h-4 text-blue-700 shrink-0" />
                    <span>Parent–School Partnership</span>
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    A child's development is strongest when parents and teachers work together. We value open communication and meaningful collaboration with parents to support every child's academic and personal growth.
                  </p>
                </div>

              </div>

              {/* Closing Quote Box */}
              <div className="bg-blue-950 text-white p-5 sm:p-6 rounded-2xl space-y-3 mt-6 shadow-md relative overflow-hidden">
                <Quote className="w-8 h-8 text-orange-400 opacity-30 absolute right-4 bottom-4" />
                <p className="text-xs sm:text-sm font-medium italic text-slate-100 leading-relaxed">
                  “Our mission is simple — to provide every child with the knowledge to succeed, the values to lead, and the confidence to dream.”
                </p>
                <div className="border-t border-blue-900 pt-3">
                  <div className="font-heading font-black text-amber-400 text-sm">Aadarsh Kumar Raj</div>
                  <div className="text-xs text-slate-300 font-mono">Director (B.Sc., M.Sc., B.Ed), V.N. Public School</div>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


