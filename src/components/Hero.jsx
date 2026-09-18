import React, { useState } from 'react';
import { GraduationCap, MapPin, Sparkles, CheckCircle2, Heart } from 'lucide-react';

export default function Hero({ onOpenAdmission }) {
  const [activeImage, setActiveImage] = useState(0);

  const heroPhotos = [
    { src: '/assets/real_classroom.jpg', caption: 'Interactive Classroom Learning & Teacher Guidance' },
    { src: '/assets/real_assembly.jpg', caption: 'Daily Morning Prayer Assembly at V.N. Public School' },
    { src: '/assets/omni_van_gate.jpg', caption: 'V.N. Public School Omni Transport Van & Entrance' },
    { src: '/assets/computer_lab_uniform.jpg', caption: 'Computer Science Lab in Uniform' }
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
                className="border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white font-bold px-5 py-3.5 rounded-xl transition-all text-sm flex items-center gap-2 bg-white hover:shadow-sm"
              >
                <span>💬 WhatsApp Inquiry</span>
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
