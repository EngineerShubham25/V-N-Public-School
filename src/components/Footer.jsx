import React from 'react';
import { Phone, Mail, Navigation, MapPin } from 'lucide-react';

export default function Footer({ onOpenAdmission }) {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
        
        {/* Top 4-Column Grid: Brand, Navigation, Contact, Google Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* School Brand (col-span-3) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <img src="/assets/logo-badge.svg" alt="V.N. Public School Logo" className="w-10 h-10" />
                <div>
                  <h3 className="font-heading font-black text-base text-white">V.N. PUBLIC SCHOOL</h3>
                  <p className="text-xs text-amber-400 font-mono font-semibold">ESTD: 2025 • Nimuiya Turkauliya</p>
                </div>
              </div>

              <p className="text-slate-400 text-xs leading-relaxed italic">
                "Quality Education for a Bright and Successful Future"
              </p>
            </div>

            <div className="text-[11px] text-slate-400 font-mono space-y-1 pt-2 border-t border-slate-800/60">
              <p><strong className="text-slate-300">Reg:</strong> 20411042202441222160413</p>
              <p><strong className="text-slate-300">UDISE:</strong> 10024102835</p>
            </div>
          </div>

          {/* Quick Navigation Links (col-span-3) - Exact Requested Order */}
          <div className="lg:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 mb-3">
                Quick Navigation
              </h3>
              <div className="grid grid-cols-1 gap-y-2 text-slate-300 font-semibold text-xs sm:text-sm">
                <a href="#academics" className="hover:text-orange-400 transition-colors py-0.5 block">Academics (CBSE Pattern)</a>
                <a href="#facilities" className="hover:text-orange-400 transition-colors py-0.5 block">Facilities & Labs</a>
                <a href="#facilities" className="hover:text-orange-400 transition-colors py-0.5 block">Navodaya / Sainik Prep</a>
                <a href="#director" className="hover:text-orange-400 transition-colors py-0.5 block">Director's Desk</a>
                <a href="#contact" className="hover:text-orange-400 transition-colors py-0.5 block">Contact Us</a>
                <a href="#about" className="hover:text-orange-400 transition-colors py-0.5 block">About Us</a>
              </div>
            </div>
          </div>

          {/* Director & Contact (col-span-3) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 mb-3">
                Contact & Helpline
              </h3>
              <div className="space-y-2 text-xs">
                <p className="text-slate-300 leading-relaxed flex items-start gap-1.5">
                  <MapPin className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
                  <span>V.N. Public School, Nimuiya, Turkauliya, East Champaran, Bihar - 845437</span>
                </p>
                <p className="text-amber-400 font-bold font-mono pt-1">
                  Director: Aadarsh Kumar Raj (B.Sc., M.Sc., B.Ed)
                </p>
                <div className="space-y-1.5 font-mono text-slate-200 pt-1">
                  <a href="tel:7562858494" className="flex items-center gap-1.5 hover:text-orange-400 transition-colors text-xs font-bold py-0.5">
                    <Phone className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span>+91 7562858494 / 9523719901</span>
                  </a>
                  <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="flex items-center gap-1.5 hover:text-orange-400 text-slate-200 text-xs font-bold font-mono transition-colors py-0.5 truncate">
                    <Mail className="w-3.5 h-3.5 text-orange-400 shrink-0" />
                    <span className="truncate">vnpublicschoolnimuiya99@gmail.com</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps Location Embed (col-span-3) */}
          <div className="lg:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2 mb-3 flex items-center justify-between">
                <span>School Location Map</span>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=V.N.+Public+School+Nimuiya+Turkauliya+East+Champaran+Bihar+845437" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs text-orange-400 hover:underline flex items-center gap-1 font-semibold uppercase"
                >
                  <Navigation className="w-3.5 h-3.5" />
                  <span>Directions</span>
                </a>
              </h3>
              
              <div className="rounded-xl overflow-hidden border border-slate-700 shadow-md bg-slate-800 h-40 relative">
                <iframe
                  title="V.N. Public School Nimuiya Turkauliya Location Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57201.28258380313!2d84.808000!3d26.650000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399334d5885c4b1d%3A0x7d2871f308000000!2sTurkaulia%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full hover:scale-105 transition-transform duration-500"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/search/?api=1&query=V.N.+Public+School+Nimuiya+Turkauliya+East+Champaran+Bihar+845437"
                target="_blank"
                rel="noreferrer"
                className="mt-2.5 w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-2 rounded-xl text-xs flex items-center justify-center gap-1.5 shadow-xs transition-all text-center block"
              >
                <Navigation className="w-3.5 h-3.5" />
                <span>Get Directions on Google Maps</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & DigitalDukaans Clickable Hyperlink Credit Bar */}
        <div className="mt-8 pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-3">
          <div>
            © 2026 V.N. Public School, Nimuiya Turkauliya. All Rights Reserved.
          </div>
          <div className="font-semibold text-slate-300 flex items-center gap-1.5">
            <span>Website by</span>
            <a 
              href="https://digitaldukaans.in/" 
              target="_blank" 
              rel="noreferrer"
              className="text-orange-400 font-bold underline hover:text-orange-300 transition-colors"
            >
              DigitalDukaans
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}

