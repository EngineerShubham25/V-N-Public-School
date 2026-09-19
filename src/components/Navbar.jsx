import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Mail, Heart } from 'lucide-react';

export default function Navbar({ onOpenAdmission }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full transition-all duration-300 font-sans">
      
      {/* Top Trust Ribbon */}
      <div className="bg-blue-950 text-white text-[11px] font-semibold py-1.5 px-4 border-b border-blue-900">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-2 text-amber-400 font-medium">
            <Heart className="w-3 h-3 text-red-400 fill-red-400" />
            <span>लालती वीरेंद्र चैरिटेबल ट्रस्ट द्वारा संचालित (Managed by Lalti Virendra Charitable Trust)</span>
          </div>
          <div className="hidden md:flex items-center gap-4 text-slate-300">
            <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="hover:text-amber-400 flex items-center gap-1 font-mono">
              <Mail className="w-3 h-3 text-amber-400" /> vnpublicschoolnimuiya99@gmail.com
            </a>
            <span className="font-mono text-amber-300">UDISE: 10024102835</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className={`glass-nav transition-all duration-300 ${isScrolled ? 'py-2 shadow-md' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-900 border-2 border-orange-500 p-1 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform">
              <img src="/assets/logo-badge.svg" alt="V.N. Public School Crest Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-black text-xl sm:text-2xl text-blue-950 tracking-tight leading-none group-hover:text-blue-700 transition-colors">
                  V.N. PUBLIC SCHOOL
                </span>
              </div>
              <p className="text-xs text-orange-600 font-semibold tracking-wide mt-0.5">
                Nimuiya Turkauliya, East Champaran (845437)
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7 text-sm font-semibold text-slate-700">
            <a href="#about" className="hover:text-blue-900 transition-colors py-1">About Us</a>
            <a href="#academics" className="hover:text-blue-900 transition-colors py-1">Academics</a>
            <a href="#facilities" className="hover:text-blue-900 transition-colors py-1">Facilities</a>
            <a href="#competitive" className="hover:text-blue-900 transition-colors py-1 text-orange-600 font-bold">Competitive Prep</a>
            <a href="#director" className="hover:text-blue-900 transition-colors py-1">Director's Desk</a>
            <a href="#contact" className="hover:text-blue-900 transition-colors py-1">Contact Us</a>
          </div>

          {/* Action CTA Button */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a 
              href="tel:7562858494" 
              className="text-xs font-bold text-slate-700 hover:text-blue-900 bg-slate-100 border border-slate-300 px-3.5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>+91 7562858494</span>
            </a>

            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-4.5 py-2.5 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center gap-2"
            >
              <GraduationCap className="w-4 h-4 text-white" />
              <span>Apply Online</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 text-white font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1"
            >
              Apply Online
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 font-semibold text-sm text-slate-800 shadow-xl">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-blue-900 border-b border-slate-100"
            >
              About Us
            </a>
            <a 
              href="#academics" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-blue-900 border-b border-slate-100"
            >
              Academics (CBSE Pattern)
            </a>
            <a 
              href="#facilities" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-blue-900 border-b border-slate-100"
            >
              Facilities & Labs
            </a>
            <a 
              href="#competitive" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 text-orange-600 font-bold border-b border-slate-100"
            >
              Navodaya / Sainik / Netarhat Coaching
            </a>
            <a 
              href="#director" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-blue-900 border-b border-slate-100"
            >
              Director's Desk
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-blue-900"
            >
              Contact Us
            </a>
            
            <div className="pt-2 flex flex-col gap-2">
              <a 
                href="tel:7562858494" 
                className="w-full text-center bg-slate-100 border border-slate-300 py-2.5 rounded-xl text-xs font-bold text-slate-800"
              >
                📞 Call Helpline: +91 7562858494
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }}
                className="w-full bg-orange-600 text-white font-bold py-2.5 rounded-xl text-center shadow-sm text-xs"
              >
                🎓 Fill Online Admission Form
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
