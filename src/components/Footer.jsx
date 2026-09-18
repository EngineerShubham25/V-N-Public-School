import React from 'react';
import { Phone, Mail, Heart } from 'lucide-react';

export default function Footer({ onOpenAdmission }) {
  return (
    <footer className="bg-slate-900 text-slate-300 text-xs font-sans">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          
          {/* School Brand */}
          <div className="space-y-3">
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
          </div>

          {/* Quick Navigation Links (Orange hover) */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h3>
            <div className="grid grid-cols-2 gap-y-2.5 gap-x-4 text-slate-300 font-semibold text-xs sm:text-sm">
              <a href="#about" className="hover:text-orange-400 transition-colors py-1 block">About Us</a>
              <a href="#academics" className="hover:text-orange-400 transition-colors py-1 block">Academics (CBSE)</a>
              <a href="#facilities" className="hover:text-orange-400 transition-colors py-1 block">Facilities & Labs</a>
              <a href="#facilities" className="hover:text-orange-400 transition-colors py-1 block">Navodaya / Sainik Prep</a>
              <a href="#director" className="hover:text-orange-400 transition-colors py-1 block">Director's Desk</a>
              <a href="#contact" className="hover:text-orange-400 transition-colors py-1 block">Contact Us</a>
            </div>
          </div>

          {/* Director & Contact */}
          <div className="space-y-3">
            <h3 className="text-sm font-bold text-white uppercase tracking-wider border-b border-slate-800 pb-2">
              Contact & Helpline
            </h3>
            <p className="text-slate-300 text-xs leading-relaxed">
              Nimuiya, Turkauliya, East Champaran, Bihar - 845437
            </p>
            <p className="text-amber-400 font-bold font-mono text-xs">
              Director: Aadarsh Kumar Raj (B.Sc., M.Sc., B.Ed)
            </p>
            <div className="space-y-2.5 font-mono text-slate-200 pt-1">
              <a href="tel:7562858494" className="block hover:text-orange-400 transition-colors text-sm font-bold py-1">
                📞 +91 7562858494 / 9523719901
              </a>
              <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="block hover:text-orange-400 text-slate-200 text-xs sm:text-sm font-bold font-mono transition-colors py-1">
                ✉️ vnpublicschoolnimuiya99@gmail.com
              </a>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-wrap justify-between items-center text-xs text-slate-400 gap-2">
          <div>
            © 2026 V.N. Public School, Nimuiya Turkauliya. Managed by Lalti Virendra Charitable Trust.
          </div>
          <div className="font-mono text-slate-400">
            Reg: 20411042202441222160413 | UDISE: 10024102835
          </div>
        </div>

      </div>
    </footer>
  );
}
