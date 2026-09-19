import React, { useState } from 'react';
import { Monitor, Bus, Award, Users, HeartHandshake, Globe, FlaskConical, Target, Music, ChevronDown, ChevronUp } from 'lucide-react';
import realAssemblyImg from '../assets/real_assembly.jpg';
import omniVanImg from '../assets/omni_van_gate.jpg';

export default function Facilities({ onOpenAdmission }) {
  const [showAllFacilities, setShowAllFacilities] = useState(false);
  const [activeFacilityIndex, setActiveFacilityIndex] = useState(null);
  const [activeVisualIndex, setActiveVisualIndex] = useState(0);

  const handleVisualScroll = (e) => {
    const container = e.target;
    const scrollPosition = container.scrollLeft;
    const cardWidth = container.clientWidth * 0.75;
    const index = Math.round(scrollPosition / cardWidth);
    setActiveVisualIndex(Math.min(Math.max(0, index), primaryVisualCards.length - 1));
  };

  // 6 Primary Visual Feature Cards with Real Photos
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

  // Concise & Compact 9 Facilities List (Genuine Data Preserved)
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

  const displayedMobileFacilities = showAllFacilities ? allFacilitiesList : allFacilitiesList.slice(0, 3);

  return (
    <section id="facilities" className="py-12 sm:py-16 bg-slate-50 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-10 space-y-2">
          <h2 className="text-2xl sm:text-4xl font-heading font-black text-blue-950 tracking-tight">
            School Facilities & Special Programs
          </h2>

          <p className="text-xs sm:text-sm text-slate-600">
            Nursery to Class 8th (English Medium - CBSE Pattern) with complete entrance coaching & modern amenities.
          </p>
        </div>

        {/* 1. Primary Photo Cards Horizontal Carousel on Mobile & Grid on Desktop */}
        <div 
          onScroll={handleVisualScroll}
          className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 pb-2 no-scrollbar -mx-4 px-4 md:mx-0 md:px-0"
        >
          {primaryVisualCards.map((fac, idx) => (
            <div 
              key={idx} 
              className="w-[84%] sm:w-[320px] shrink-0 snap-center md:w-auto bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 group flex flex-col"
            >
              <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-100">
                <img
                  src={fac.image}
                  alt={fac.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2.5 left-2.5 bg-blue-900 text-white px-2 py-0.5 rounded text-[10px] font-bold shadow-xs">
                  {fac.badge}
                </span>
              </div>

              <div className="p-4 space-y-1.5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-blue-950 group-hover:text-orange-600 transition-colors">
                    {fac.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mt-1">
                    {fac.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Dots Carousel Indicator directly below cards (Mobile only) */}
        <div className="flex justify-center items-center gap-2 mb-10 md:hidden">
          {primaryVisualCards.map((_, idx) => (
            <span
              key={idx}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                activeVisualIndex === idx ? 'w-6 bg-orange-600' : 'w-2.5 bg-slate-300'
              }`}
            />
          ))}
        </div>

        {/* 2. All 9 School Facilities Section (Mobile: 3 Cards Initial + View More/Less & Tap-to-Expand, Desktop: All 9 Grid) */}
        <div className="bg-white border border-slate-200 rounded-3xl p-4 sm:p-8 shadow-xs space-y-6">
          <div className="border-b border-slate-200 pb-3 text-center sm:text-left">
            <span className="text-[11px] font-bold text-orange-600 uppercase tracking-wider block mb-0.5">
              Complete Offerings
            </span>
            <h3 className="text-lg sm:text-2xl font-heading font-black text-blue-950">
              All Facilities & Key Programs Included
            </h3>
          </div>

          {/* Desktop View: All 9 Facilities Grid */}
          <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {allFacilitiesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-50 p-4 rounded-2xl border border-slate-200 hover:border-orange-500 hover:bg-white transition-all space-y-2 flex flex-col justify-between group"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between">
                      <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-900 flex items-center justify-center border border-blue-200 shrink-0 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                        <Icon className="w-4 h-4 text-blue-800 group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-[10px] bg-blue-900 group-hover:bg-orange-600 text-white px-2 py-0.5 rounded font-bold uppercase tracking-wider transition-colors">
                        {item.badge}
                      </span>
                    </div>

                    <h4 className="text-xs sm:text-sm font-bold text-blue-950 group-hover:text-orange-600 transition-colors pt-0.5">{item.title}</h4>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile View: First 3 Cards initially (or 9 when expanded) with Tap-to-Expand Accordion */}
          <div className="sm:hidden space-y-3">
            <div className="space-y-3">
              {displayedMobileFacilities.map((item, idx) => {
                const Icon = item.icon;
                const isActive = activeFacilityIndex === idx;
                return (
                  <div 
                    key={idx}
                    onClick={() => setActiveFacilityIndex(isActive ? null : idx)}
                    className={`p-4 rounded-2xl border transition-all cursor-pointer space-y-2 ${
                      isActive 
                        ? 'border-orange-500 bg-orange-50/40 ring-2 ring-orange-500/20 shadow-md' 
                        : 'border-slate-200 bg-slate-50 hover:bg-white shadow-xs'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center border shrink-0 ${
                          isActive ? 'bg-orange-600 text-white border-orange-600' : 'bg-blue-100 text-blue-900 border-blue-200'
                        }`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <h4 className="text-xs font-bold text-blue-950 pr-2">{item.title}</h4>
                      </div>

                      <span className={`text-[9px] px-2 py-0.5 rounded font-bold uppercase tracking-wider shrink-0 ${
                        isActive ? 'bg-orange-600 text-white' : 'bg-blue-900 text-white'
                      }`}>
                        {item.badge}
                      </span>
                    </div>

                    <p className="text-[11px] text-slate-600 leading-relaxed pt-1 border-t border-slate-200/60">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Mobile View More / View Less Facilities Toggle Button */}
            <div className="pt-2">
              <button
                onClick={() => setShowAllFacilities(!showAllFacilities)}
                className="w-full bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all cursor-pointer"
              >
                <span>{showAllFacilities ? 'View Less Facilities' : 'View More Facilities'}</span>
                {showAllFacilities ? <ChevronUp className="w-4 h-4 text-orange-400" /> : <ChevronDown className="w-4 h-4 text-orange-400" />}
              </button>
            </div>
          </div>

          {/* Bottom Center CTA */}
          <div className="pt-3 border-t border-slate-200 text-center flex flex-col items-center justify-center space-y-2">
            <p className="text-xs text-slate-600 font-medium">
              Ready to give your child quality education and holistic development at V.N. Public School?
            </p>
            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs transition-all flex items-center gap-2 cursor-pointer"
            >
              <span>Apply for Admission (2026-27)</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}





