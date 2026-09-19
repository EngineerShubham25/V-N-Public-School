import React, { useState, useEffect } from 'react';
import { GraduationCap, Sparkles, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import realAssemblyImg from '../assets/real_assembly.jpg';
import omniVanImg from '../assets/omni_van_gate.jpg';

export default function Hero({ onOpenAdmission }) {
  const [activeImage, setActiveImage] = useState(0);
  const [isChecklistExpanded, setIsChecklistExpanded] = useState(false);

  const heroPhotos = [
    { src: '/assets/real_classroom.jpg', caption: 'Interactive Classroom Learning & Teacher Guidance' },
    { src: realAssemblyImg, caption: 'Daily Morning Prayer Assembly at V.N. Public School' },
    { src: omniVanImg, caption: 'V.N. Public School Omni Transport Van & Entrance' },
    { src: '/assets/computer_lab_uniform.jpg', caption: 'Computer Science Lab in Uniform' }
  ];

  // Continuous Left -> Right smooth auto-sliding swiper
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % heroPhotos.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [heroPhotos.length]);

  const checklistItems = [
    'Nursery to Class 8th (CBSE Pattern)',
    'Navodaya / Sainik Exam Coaching',
    'Smart Class & Computer Lab',
    'Safe Transport & Experienced Faculty'
  ];

  return (
    <section id="about" className="py-8 sm:py-14 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: School Info */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-6">
            
            {/* Typography Hierarchy: "Welcome to" smaller, "V.N. Public School" larger & prominent */}
            <div>
              <p className="text-xs sm:text-sm font-bold uppercase tracking-wider text-slate-500 mb-1">
                Welcome to
              </p>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-blue-950 tracking-tight leading-tight">
                V.N. Public School
              </h1>
            </div>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Quality English Medium CBSE pattern education (Nursery to Class 8th) with specialized Navodaya & Sainik exam coaching, smart classes, and safe van transport.
            </p>

            {/* Mobile Collapsible Feature Checklist */}
            <div className="space-y-2 pt-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-slate-800 font-medium">
                {checklistItems.slice(0, isChecklistExpanded ? checklistItems.length : 2).map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 bg-slate-50 p-2.5 rounded-xl border border-slate-200 shadow-xs">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Mobile Collapse Toggle Button */}
              <div className="sm:hidden pt-1">
                <button
                  onClick={() => setIsChecklistExpanded(!isChecklistExpanded)}
                  className="text-xs font-bold text-blue-900 hover:text-orange-600 flex items-center gap-1 cursor-pointer py-1"
                >
                  <span>{isChecklistExpanded ? 'View Less' : 'View More Highlights'}</span>
                  {isChecklistExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>

            {/* Responsive Action Buttons (Equal Height & Equal Width on Mobile) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <button
                onClick={onOpenAdmission}
                className="w-full h-12 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-xl shadow-sm hover:shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer text-center px-4"
              >
                <GraduationCap className="w-4 h-4 text-white shrink-0" />
                <span>Apply Online Admission (2026-27)</span>
              </button>

              <a
                href="https://wa.me/917562858494?text=Hello%20V.N.%20Public%20School,%20I%20want%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-sm hover:shadow-md transition-all text-xs sm:text-sm flex items-center justify-center gap-2 cursor-pointer text-center px-4"
              >
                <svg className="w-4 h-4 fill-current text-white shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

          {/* Right Column: Photo Showcase Swiper */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 p-3 sm:p-4 rounded-3xl shadow-sm space-y-3">
              
              {/* Main Photo Display with Smooth Fade Transition */}
              <div className="relative h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden shadow-xs bg-slate-200">
                <img
                  key={activeImage}
                  src={heroPhotos[activeImage].src}
                  alt={heroPhotos[activeImage].caption}
                  className="w-full h-full object-cover object-center transition-all duration-700 ease-in-out"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-3 sm:p-4 text-white">
                  <p className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-orange-400 shrink-0" />
                    <span>{heroPhotos[activeImage].caption}</span>
                  </p>
                </div>
              </div>

              {/* Photo Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {heroPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-14 sm:h-18 rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                      activeImage === idx ? 'border-blue-900 ring-2 ring-blue-500/30 scale-102' : 'border-slate-300 opacity-75 hover:opacity-100'
                    }`}
                  >
                    <img src={photo.src} alt={photo.caption} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}


