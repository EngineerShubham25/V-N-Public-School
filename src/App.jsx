import React, { useState } from 'react';
import Navbar from './components/Navbar';
import NoticeTicker from './components/NoticeTicker';
import Hero from './components/Hero';
import DirectorMessage from './components/DirectorMessage';
import Academics from './components/Academics';
import Facilities from './components/Facilities';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AdmissionModal from './components/AdmissionModal';

export default function App() {
  const [admissionModalOpen, setAdmissionModalOpen] = useState(false);

  const handleOpenAdmission = () => {
    setAdmissionModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-amber-400 selection:text-slate-950 overflow-x-hidden w-full max-w-full">
      {/* Navigation Bar */}
      <Navbar 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Ticker Announcement */}
      <NoticeTicker 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Hero Section */}
      <Hero 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Academics (Classes Offered Nursery to Class 8th) */}
      <Academics 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Facilities & Real Campus Photos */}
      <Facilities 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Director's Desk */}
      <DirectorMessage />

      {/* Contact & WhatsApp Inquiry */}
      <Contact />

      {/* Footer */}
      <Footer 
        onOpenAdmission={handleOpenAdmission} 
      />

      {/* Admission Form Modal */}
      <AdmissionModal 
        isOpen={admissionModalOpen} 
        onClose={() => setAdmissionModalOpen(false)} 
      />
    </div>
  );
}
