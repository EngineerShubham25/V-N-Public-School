import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Mail, Heart } from 'lucide-react';

export default function Navbar({ onOpenAdmission }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="w-full font-sans font-medium text-slate-800">
      
      {/* 1. Top Information Bar (Thin ~28-30px, scrolls away) */}
      <div className="bg-blue-950 text-white text-[11px] h-[30px] px-4 flex items-center border-b border-blue-900 overflow-hidden">
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between gap-2">
          
          {/* Left Side: Trust Accent */}
          <div className="flex items-center gap-1.5 text-slate-100 font-medium truncate">
            <Heart className="w-3 h-3 text-red-400 fill-red-400 shrink-0" />
            <span>Managed by <strong className="text-amber-400 font-semibold">Lalti Virendra Charitable Trust</strong></span>
          </div>

          {/* Right Side: Email & UDISE */}
          <div className="hidden md:flex items-center gap-4 text-slate-200 text-[11px] font-mono shrink-0">
            <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="hover:text-amber-400 flex items-center gap-1 transition-colors">
              <Mail className="w-3 h-3 text-amber-400" />
              <span>vnpublicschoolnimuiya99@gmail.com</span>
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-amber-300 font-semibold">UDISE: 10024102835</span>
          </div>

        </div>
      </div>

      {/* 2. Main Navigation Header (Sticky while scrolling, clean white background) */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-200 border-b border-slate-200 ${isScrolled ? 'shadow-md py-2' : 'py-3'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4">
          
          {/* Logo & Prominent School Name */}
          <a href="#" className="flex items-center gap-3 shrink-0 group">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-blue-900 border-2 border-orange-500 p-1 flex items-center justify-center shadow-xs group-hover:scale-105 transition-transform">
              <img src="/assets/logo-badge.svg" alt="V.N. Public School Crest Logo" className="w-full h-full object-contain" />
            </div>
            <div>
              <span className="font-heading font-black text-xl sm:text-2xl text-blue-950 tracking-tight leading-none block group-hover:text-orange-600 transition-colors">
                V.N. PUBLIC SCHOOL
              </span>
              <p className="text-[11px] sm:text-xs text-slate-500 font-medium tracking-normal mt-0.5">
                Nimuiya Turkauliya, East Champaran (845437)
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links with Subtle Orange Underline Hover */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8 text-sm font-semibold text-slate-700">
            <a href="#about" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">About Us</a>
            <a href="#academics" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Academics</a>
            <a href="#facilities" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Facilities</a>
            <a href="#facilities" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Competitive Prep</a>
            <a href="#director" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Director's Desk</a>
            <a href="#contact" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Contact Us</a>
          </div>

          {/* Desktop Right Side: Clean Phone & Premium Apply Online CTA */}
          <div className="hidden md:flex items-center gap-5 shrink-0">
            {/* Clean Phone Number (Less bulky) */}
            <a 
              href="tel:7562858494" 
              className="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1.5 transition-colors cursor-pointer py-1"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>+91 7562858494</span>
            </a>

            {/* Premium Apply Online Button */}
            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2.5 rounded-xl text-xs sm:text-sm shadow-xs hover:shadow-md transition-all flex items-center gap-2 tracking-wide"
            >
              <GraduationCap className="w-4 h-4 text-white shrink-0" />
              <span>Apply Online</span>
            </button>
          </div>

          {/* Mobile Header Row: Logo | Apply Button | ☰ Menu */}
          <div className="lg:hidden flex items-center gap-2.5">
            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 text-white font-bold px-3.5 py-1.5 rounded-lg text-xs flex items-center gap-1 shadow-xs"
            >
              Apply
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-300"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 font-semibold text-sm text-slate-800 shadow-xl">
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-orange-600 transition-colors border-b border-slate-100"
            >
              About Us
            </a>
            <a 
              href="#academics" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-orange-600 transition-colors border-b border-slate-100"
            >
              Academics
            </a>
            <a 
              href="#facilities" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-orange-600 transition-colors border-b border-slate-100"
            >
              Facilities & Labs
            </a>
            <a 
              href="#facilities" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-orange-600 transition-colors border-b border-slate-100"
            >
              Competitive Prep
            </a>
            <a 
              href="#director" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-orange-600 transition-colors border-b border-slate-100"
            >
              Director's Desk
            </a>
            <a 
              href="#contact" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-orange-600 transition-colors"
            >
              Contact Us
            </a>
            
            {/* Mobile Contact & Email Details inside Menu */}
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2 text-xs">
              <a 
                href="tel:7562858494" 
                className="flex items-center gap-2 bg-slate-100 border border-slate-200 p-2.5 rounded-xl font-bold text-slate-800 hover:text-orange-600"
              >
                <Phone className="w-4 h-4 text-blue-900" />
                <span>Call Helpline: +91 7562858494</span>
              </a>

              <a 
                href="mailto:vnpublicschoolnimuiya99@gmail.com" 
                className="flex items-center gap-2 bg-slate-100 border border-slate-200 p-2.5 rounded-xl font-mono text-[11px] text-slate-700 hover:text-orange-600 truncate"
              >
                <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                <span className="truncate">vnpublicschoolnimuiya99@gmail.com</span>
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }}
                className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl text-center shadow-xs text-xs mt-1"
              >
                🎓 Fill Online Admission Form (2026-27)
              </button>
            </div>
          </div>
        )}
      </header>

    </div>
  );
}
