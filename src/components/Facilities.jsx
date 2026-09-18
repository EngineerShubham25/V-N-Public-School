import React from 'react';
import { Monitor, Bus, BookOpen, Sparkles, Trophy, Music, Award, Users, HeartHandshake, ShieldCheck, Dumbbell, Globe, FlaskConical, Target, Heart } from 'lucide-react';

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
      title: 'Navodaya, Sainik & Netarhat Coaching',
      image: '/assets/book_distribution.jpg',
      badge: 'Entrance Coaching',
      description: 'Special guidance, weekly mock tests, and mental ability preparation for Navodaya, Sainik, Netarhat & Simultala exams.'
    },
    {
      title: 'Smart Class & Computer Lab',
      image: '/assets/computer_lab_uniform.jpg',
      badge: 'IT & Digital Literacy',
      description: 'Interactive audio-visual screens and hands-on computer lab practice for digital literacy and coding basics.'
    },
    {
      title: 'Science Laboratory',
      image: '/assets/real_classroom.jpg',
      badge: 'Science Experiments',
      description: 'Equipped science laboratory models and practical experiment kits for Physics, Chemistry, and Biology.'
    },
    {
      title: 'Safe Door-to-Door Van Transport',
      image: '/assets/omni_van_gate.jpg',
      badge: 'Van Transport',
      description: 'Official Maruti Omni school van covering Nimuiya, Turkaulia Chowk, Semra, Shankar Saraiya & Motihari routes.'
    },
    {
      title: 'Games, Music, Dance & Assembly',
      image: '/assets/real_assembly.jpg',
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
    <section id="facilities" className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Trust Banner */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          
          <div className="inline-flex items-center gap-2 bg-amber-100 border border-amber-300 px-3.5 py-1.5 rounded-full text-xs font-bold text-amber-950 shadow-xs">
            <Heart className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
            <span>Run by Lalti Virender Charitable Trust (लालती वीरेंद्र चैरिटेबल ट्रस्ट)</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-black text-blue-950 tracking-tight">
            School Facilities & Special Programs
          </h2>

          <p className="text-sm text-slate-600">
            Nursery to Class 8th (English Medium - CBSE Pattern) with complete entrance coaching & modern amenities.
          </p>
        </div>

        {/* 1. Primary Photo Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {primaryVisualCards.map((fac, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col">
              <div className="relative h-48 overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-blue-900 text-white px-2.5 py-0.5 rounded text-[11px] font-bold shadow">
                  {fac.badge}
                </span>
              </div>

              <div className="p-5 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-blue-950 group-hover:text-blue-700 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {fac.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2. All 9 School Facilities Grid (Clean, Detailed, Non-repetitive) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
            <div>
              <span className="text-xs font-bold text-orange-600 uppercase tracking-wider block mb-0.5">
                Complete Offerings
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-blue-950">
                All Facilities & Key Programs Included
              </h3>
            </div>
            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4.5 py-2.5 rounded-xl text-xs shadow-sm transition-all"
            >
              Apply for Admission
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allFacilitiesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-slate-50 p-5 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all space-y-2.5 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center border border-blue-200 shrink-0">
                        <Icon className="w-5 h-5 text-blue-800" />
                      </div>
                      <span className="text-[10px] bg-blue-900 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-blue-950 pt-1">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
