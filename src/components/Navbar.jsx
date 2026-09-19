import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Phone, Mail } from 'lucide-react';

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
    <div className="w-full font-sans font-medium text-slate-800">
      
      {/* Main Navigation Header (Sticky on Scroll) */}
      <header className={`sticky top-0 z-50 bg-white transition-all duration-200 border-b border-slate-200 ${isScrolled ? 'shadow-md py-2' : 'py-2 sm:py-3'}`}>
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between gap-2 sm:gap-4 overflow-hidden w-full">
          
          {/* Logo & School Name */}
          <a href="#" className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1 group">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-blue-900 border-2 border-orange-500 p-0.5 sm:p-1 flex items-center justify-center shadow-xs shrink-0 group-hover:scale-105 transition-transform">
              <img src="/assets/logo-badge.svg" alt="V.N. Public School Crest Logo" className="w-full h-full object-contain" />
            </div>
            <div className="min-w-0 flex-1">
              <span className="font-heading font-black text-sm sm:text-xl text-blue-950 tracking-tight leading-tight block group-hover:text-orange-600 transition-colors">
                V.N. PUBLIC SCHOOL
              </span>
              <p className="text-[10px] sm:text-xs text-slate-500 font-medium tracking-normal leading-tight truncate">
                Nimuiya Turkauliya, East Champaran
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links in Exact Requested Order: Academics -> Facilities -> Competitive Prep -> Director's Desk -> Contact Us -> About Us */}
          <div className="hidden lg:flex items-center gap-5 xl:gap-7 text-sm font-semibold text-slate-700">
            <a href="#academics" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Academics</a>
            <a href="#facilities" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Facilities</a>
            <a href="#facilities" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Competitive Prep</a>
            <a href="#director" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Director's Desk</a>
            <a href="#contact" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">Contact Us</a>
            <a href="#about" className="py-1 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-600 transition-all">About Us</a>
          </div>

          {/* Desktop CTA: Phone & Single Primary 'Apply Online' CTA */}
          <div className="hidden md:flex items-center gap-4 shrink-0">
            <a 
              href="tel:7562858494" 
              className="text-xs font-bold text-slate-700 hover:text-orange-600 flex items-center gap-1.5 transition-colors py-1"
            >
              <Phone className="w-3.5 h-3.5 text-blue-900" />
              <span>+91 7562858494</span>
            </a>

            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-5 py-2 rounded-xl text-xs sm:text-sm shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-1.5 tracking-wide cursor-pointer text-center font-sans"
            >
              <GraduationCap className="w-4 h-4 text-white shrink-0" />
              <span>Apply Online</span>
            </button>
          </div>

          {/* Mobile Header Controls */}
          <div className="lg:hidden flex items-center gap-1.5 shrink-0">
            <button
              onClick={onOpenAdmission}
              className="bg-orange-600 text-white font-bold px-2.5 py-1.5 rounded-lg text-xs flex items-center gap-1 shadow-xs whitespace-nowrap cursor-pointer"
            >
              <span>Apply</span>
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-lg bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300 shrink-0 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-slate-900" /> : <Menu className="w-5 h-5 text-slate-900" />}
            </button>
          </div>

        </div>

        {/* Mobile Dropdown Menu in Exact Requested Order */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-4 py-4 space-y-3 font-semibold text-sm text-slate-800 shadow-xl">
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
              Facilities
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
              className="block py-2 hover:text-orange-600 transition-colors border-b border-slate-100"
            >
              Contact Us
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block py-2 hover:text-orange-600 transition-colors"
            >
              About Us
            </a>
            
            <div className="pt-3 border-t border-slate-200 flex flex-col gap-2.5 text-xs">
              <a 
                href="tel:7562858494" 
                className="flex items-center gap-2 bg-slate-100 border border-slate-200 p-2.5 rounded-xl font-bold text-slate-800 hover:text-orange-600"
              >
                <Phone className="w-4 h-4 text-blue-900" />
                <span>Call Helpline: +91 7562858494</span>
              </a>

              <a 
                href="mailto:vnpublicschoolnimuiya99@gmail.com" 
                className="flex items-center gap-2 bg-slate-100 border border-slate-200 p-2.5 rounded-xl font-mono text-xs text-slate-700 hover:text-orange-600 truncate"
              >
                <Mail className="w-4 h-4 text-blue-900 shrink-0" />
                <span className="truncate">vnpublicschoolnimuiya99@gmail.com</span>
              </a>

              <button
                onClick={() => { setMobileMenuOpen(false); onOpenAdmission(); }}
                className="w-full bg-orange-600 text-white font-bold py-3 rounded-xl text-center shadow-xs text-xs mt-1 cursor-pointer"
              >
                Fill Online Admission Form (2026-27)
              </button>
            </div>
          </div>
        )}
      </header>

    </div>
  );
}

