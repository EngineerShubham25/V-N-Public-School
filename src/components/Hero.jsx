import React, { useState } from 'react';
import { GraduationCap, MapPin, Sparkles, CheckCircle2, Heart } from 'lucide-react';

export default function Hero({ onOpenAdmission }) {
  const [activeImage, setActiveImage] = useState(0);

  const heroPhotos = [
    { src: '/assets/real_classroom.jpg?v=20260919', caption: 'Interactive Classroom Learning & Teacher Guidance' },
    { src: '/assets/real_assembly.jpg?v=20260919', caption: 'Daily Morning Prayer Assembly at V.N. Public School' },
    { src: '/assets/omni_van_gate.jpg?v=20260919', caption: 'V.N. Public School Omni Transport Van & Entrance' },
    { src: '/assets/computer_lab_uniform.jpg?v=20260919', caption: 'Computer Science Lab in Uniform' }
  ];

  return (
    <section id="about" className="relative bg-white pt-10 pb-20 border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: School Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 bg-amber-100 border border-amber-300 px-3 py-1 rounded-full text-xs font-bold text-amber-950">
                <Heart className="w-3.5 h-3.5 text-orange-600 fill-orange-600" />
                <span>Run by Lalti Virender Charitable Trust</span>
              </span>

              <span className="inline-flex items-center gap-1.5 bg-blue-50 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold text-blue-900">
                <MapPin className="w-3.5 h-3.5 text-blue-700" />
                <span>Nimuiya Turkauliya, East Champaran</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-heading font-black text-blue-950 tracking-tight leading-tight">
              Welcome to <br />
              <span className="text-blue-900">V.N. Public School</span>
            </h1>

            <p className="text-base text-slate-600 leading-relaxed">
              Quality English Medium CBSE pattern education (Nursery to Class 8th) with specialized Navodaya & Sainik exam coaching, smart classes, and safe van transport.
            </p>

            {/* Feature Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-800 font-semibold pt-1">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                <span>Nursery to Class 8th (CBSE)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                <span>Navodaya / Sainik Exam Coaching</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                <span>Smart Class & Science Lab</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                <span>Director: Aadarsh Kumar Raj (B.Sc, M.Sc, B.Ed)</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              <button
                onClick={onOpenAdmission}
                className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-6 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center gap-2 cursor-pointer"
              >
                <GraduationCap className="w-5 h-5 text-white" />
                <span>Apply Online Admission (2026-27)</span>
              </button>

              <a
                href="https://wa.me/917562858494?text=Hello%20V.N.%20Public%20School,%20I%20want%20to%20inquire%20about%20admissions."
                target="_blank"
                rel="noreferrer"
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-5 py-3.5 rounded-xl shadow-md hover:shadow-lg transition-all text-sm flex items-center gap-2 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current text-white" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>WhatsApp Inquiry</span>
              </a>
            </div>

          </div>

          {/* Right Column: Photo Showcase */}
          <div className="lg:col-span-6">
            <div className="bg-slate-50 border border-slate-200 p-4 rounded-3xl shadow-md space-y-4">
              
              {/* Main Photo Display */}
              <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden shadow-sm bg-slate-200">
                <img
                  src={heroPhotos[activeImage].src}
                  alt={heroPhotos[activeImage].caption}
                  className="w-full h-full object-cover object-center transition-all duration-500"
                />
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950/80 via-slate-950/30 to-transparent p-4 text-white">
                  <p className="text-xs sm:text-sm font-bold flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-orange-400" />
                    <span>{heroPhotos[activeImage].caption}</span>
                  </p>
                </div>
              </div>

              {/* Photo Thumbnails */}
              <div className="grid grid-cols-4 gap-2.5">
                {heroPhotos.map((photo, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveImage(idx)}
                    className={`relative h-16 sm:h-20 rounded-xl overflow-hidden border-2 transition-all ${
                      activeImage === idx ? 'border-blue-900 ring-2 ring-blue-500/30 scale-105' : 'border-slate-300 opacity-70 hover:opacity-100'
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
