import React from 'react';
import { MapPin, Phone, Mail, Heart, Navigation } from 'lucide-react';

export default function Footer({ onOpenAdmission }) {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top 4-Column Grid: Brand, Navigation, Contact, Google Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-start">
          
          {/* School Brand (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <div className="flex items-center gap-3">
              <img src="/assets/logo-badge.svg" alt="V.N. Public School Logo" className="w-10 h-10" />
              <div>
                <h3 className="font-heading font-black text-base text-white">V.N. PUBLIC SCHOOL</h3>
                <p className="text-xs text-amber-400 font-mono font-semibold">ESTD: 2025 • Nimuiya Turkauliya</p>
              </div>
            </div>
            
            <p className="text-orange-400 font-bold text-xs flex items-center gap-1.5">
              <Heart className="w-3.5 h-3.5 fill-orange-400 text-orange-400 shrink-0" />
              <span>लालती वीरेंद्र चैरिटेबल ट्रस्ट द्वारा संचालित</span>
            </p>

            <p className="text-slate-400 text-xs leading-relaxed italic">
              "Quality Education for a Bright and Successful Future"
            </p>

            <div className="text-[11px] text-slate-400 font-mono space-y-0.5 pt-1">
              <p>Reg: 20411042202441222160413</p>
              <p>UDISE Code: 10024102835</p>
            </div>
          </div>

          {/* Quick Navigation Links (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-1 gap-y-2 text-slate-300 font-semibold text-xs sm:text-sm">
              <a href="#about" className="hover:text-orange-400 transition-colors py-0.5 block">About Us</a>
              <a href="#academics" className="hover:text-orange-400 transition-colors py-0.5 block">Academics (CBSE)</a>
              <a href="#facilities" className="hover:text-orange-400 transition-colors py-0.5 block">Facilities & Labs</a>
              <a href="#facilities" className="hover:text-orange-400 transition-colors py-0.5 block">Navodaya / Sainik Prep</a>
              <a href="#director" className="hover:text-orange-400 transition-colors py-0.5 block">Director's Desk</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors py-0.5 block">Contact Us</a>
            </div>
          </div>

          {/* Director & Contact (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact & Helpline
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              V.N. Public School, Nimuiya, Turkauliya, East Champaran, Bihar - 845437
            </p>
            <p className="text-amber-400 font-bold font-mono text-xs">
              Director: Aadarsh Kumar Raj (B.Sc., M.Sc., B.Ed)
            </p>
            <div className="space-y-2 font-mono text-slate-200 pt-1">
              <a href="tel:7562858494" className="block hover:text-orange-400 transition-colors text-sm font-bold py-0.5">
                📞 +91 7562858494 / 9523719901
              </a>
              <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="block hover:text-orange-400 text-slate-200 text-xs sm:text-sm font-bold font-mono transition-colors py-0.5">
                ✉️ vnpublicschoolnimuiya99@gmail.com
              </a>
            </div>
          </div>

          {/* Google Maps Location Embed (col-span-3) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 flex items-center justify-between">
              <span>School Campus Map</span>
              <a 
                href="https://maps.google.com/?q=Nimuiya,+Turkauliya,+East+Champaran,+Bihar" 
                target="_blank" 
                rel="noreferrer"
                className="text-xs text-orange-400 hover:underline flex items-center gap-1 font-normal uppercase"
              >
                <Navigation className="w-3 h-3" />
                <span>Navigate</span>
              </a>
            </h3>
            
            <div className="rounded-xl overflow-hidden border border-slate-700 shadow-md bg-slate-800 h-44 relative">
              <iframe
                title="V.N. Public School Nimuiya Turkauliya Location Map"
                src="https://maps.google.com/maps?q=Nimuiya,+Turkauliya,+East+Champaran,+Bihar+845437&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
            <p className="text-[11px] text-slate-400 text-center">
              📍 Click map or Navigate to open Google Maps directions
            </p>
          </div>

        </div>

        {/* Bottom Copyright & DigitalDukaans Credit Bar */}
        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-3">
          <div>
            © 2026 V.N. Public School, Nimuiya Turkauliya. All Rights Reserved.
          </div>
          <div className="font-semibold text-slate-300 flex items-center gap-1.5">
            <span>Made with ❤️ by</span>
            <span className="text-orange-400 font-bold tracking-wide bg-slate-800 px-2 py-0.5 rounded border border-slate-700">
              DigitalDukaans
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
