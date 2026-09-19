import React from 'react';
import { Monitor, Bus, BookOpen, Sparkles, Trophy, Music, Award, Users, HeartHandshake, ShieldCheck, Dumbbell, Globe, FlaskConical, Target, Heart } from 'lucide-react';
import realAssemblyImg from '../assets/real_assembly.jpg';
import omniVanImg from '../assets/omni_van_gate.jpg';
import heroBgImg from '../assets/hero_bg.jpg';

export default function Facilities({ onOpenAdmission }) {
  // 6 Primary Visual Feature Cards with Real Photos (No Repetitions)
  const primaryVisualCards = [
    {
      title: 'School Campus & Entrance Gate',
      image: '/assets/gate_entrance.jpg',
      badge: 'Main Campus',
      description: 'V.N. Public School campus entrance gate with official banner and welcoming flags in Nimuiya Turkauliya.'
    },
    {
      title: 'Book Distribution at School Campus',
      image: '/assets/book_distribution.jpg',
      badge: 'Academic Materials',
      description: 'Annual course book and notebook distribution drives ensuring every student receives complete study material.'
    },
    {
      title: 'Smart Class & Computer Lab',
      image: '/assets/computer_lab_uniform.jpg',
      badge: 'IT & Digital Literacy',
      description: 'Interactive audio-visual screens and hands-on computer lab practice for digital literacy and coding basics.'
    },
    {
      title: 'Interactive Classroom Learning',
      image: '/assets/real_classroom.jpg',
      badge: 'Interactive Teaching',
      description: 'Engaging interactive classroom environments with experienced teachers encouraging conceptual understanding.'
    },
    {
      title: 'Safe Door-to-Door Van Transport',
      image: omniVanImg,
      badge: 'Van Transport',
      description: 'Official Maruti Omni school van covering Nimuiya, Turkaulia Chowk, Semra, Shankar Saraiya & Motihari routes.'
    },
    {
      title: 'Games, Music, Dance & Assembly',
      image: realAssemblyImg,
      badge: 'Co-Curricular',
      description: 'Daily morning prayer assembly, sports, music, rhymes, creative dance, and physical fitness in open lawn.'
    }
  ];

  // Complete List of All 9 Facilities (No duplicates, 100% complete)
  const allFacilitiesList = [
    {
      icon: Target,
      badge: 'Competitive',
      title: 'Navodaya / Sainik Exam Coaching',
      desc: 'Special guidance, weekly mock tests, and practice sets for Navodaya, Netarhat, Sainik School & Simultala exams.'
    },
    {
      icon: FlaskConical,
      badge: 'Practical',
      title: 'Science Laboratory',
      desc: 'Practical experiment models and science kits for physics, chemistry, and biology conceptual learning.'
    },
    {
      icon: Monitor,
      badge: 'Digital',
      title: 'Smart Class & Computer Lab',
      desc: 'Interactive audio-visual screens and IT workstations for digital literacy and computer applications.'
    },
    {
      icon: Users,
      badge: 'Personal Care',
      title: 'Special Attention to Weak Students',
      desc: 'Remedial coaching, step-by-step guidance, and individual care for students needing extra help.'
    },
    {
      icon: Award,
      badge: 'Growth',
      title: 'Skill & Personality Development',
      desc: 'Public speaking, confidence building, etiquette, leadership kits, and communication training.'
    },
    {
      icon: Music,
      badge: 'Creative',
      title: 'Games, Music & Dance Classes',
      desc: 'Co-curricular outdoor sports, rhymes, music sessions, and creative dance activities.'
    },
    {
      icon: Globe,
      badge: 'Languages',
      title: 'Sanskrit & Urdu Language Classes',
      desc: 'Multi-language exposure with specialized language tutors for comprehensive cultural learning.'
    },
    {
      icon: HeartHandshake,
      badge: 'Qualified Staff',
      title: 'Dedicated Subject Faculty',
      desc: 'Experienced subject teachers (B.Sc, M.Sc, B.Ed) dedicated to every class and subject.'
    },
    {
      icon: Bus,
      badge: 'Safe Travel',
      title: 'Safe Van Transport Facility',
      desc: 'Door-to-door pick & drop Maruti Omni van coverage across nearby villages in East Champaran.'
    }
  ];

  return (
    <section id="facilities" className="relative py-16 sm:py-20 bg-slate-950 text-white border-b border-slate-800 font-sans overflow-hidden">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none scale-105"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Trust Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          
          <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-300 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
            <span>Run by Lalti Virender Charitable Trust (लालती वीरेंद्र चैरिटेबल ट्रस्ट)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-black text-white tracking-tight">
            School Facilities & Special Programs
          </h2>

          <p className="text-sm text-slate-300">
            Nursery to Class 8th (English Medium - CBSE Pattern) with complete entrance coaching & modern amenities.
          </p>
        </div>

        {/* 1. Primary Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {primaryVisualCards.map((fac, idx) => (
            <div key={idx} className="bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:border-amber-400 transition-all duration-300 group flex flex-col cursor-pointer backdrop-blur-xs">
              <div className="relative h-48 overflow-hidden bg-slate-950">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded text-xs font-bold shadow">
                  {fac.badge}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. All 9 School Facilities Grid (Clean, Detailed, Non-repetitive with Hover Effects) */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl space-y-8 backdrop-blur-xs">
          <div className="border-b border-slate-800 pb-4 text-center sm:text-left">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block mb-0.5">
              Complete Offerings
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
              All Facilities & Key Programs Included
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFacilitiesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-950/80 p-5 rounded-2xl border border-slate-800 hover:border-amber-400 hover:bg-slate-800/90 hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 space-y-2.5 flex flex-col justify-between group cursor-pointer">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center border border-amber-400/30 shrink-0 group-hover:bg-amber-400 group-hover:text-slate-950 transition-colors">
                        <Icon className="w-5 h-5 text-amber-300 group-hover:text-slate-950 transition-colors" />
                      </div>
                      <span className="text-xs bg-slate-800 group-hover:bg-amber-500 group-hover:text-slate-950 text-amber-300 px-2.5 py-0.5 rounded font-bold uppercase tracking-wider transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors pt-1">{item.title}</h4>
                    <p className="text-xs text-slate-300 group-hover:text-slate-200 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Relocated Bottom Center CTA - Logical Next Step after reviewing facilities */}
          <div className="pt-4 border-t border-slate-800 text-center flex flex-col items-center justify-center space-y-3">
            <p className="text-xs text-slate-300 font-medium">
              Ready to give your child quality education and holistic development at V.N. Public School?
            </p>
            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-8 py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Apply for Admission (2026-27)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}

