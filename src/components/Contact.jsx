import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, User, Heart } from 'lucide-react';
import heroBgImg from '../assets/hero_bg.jpg';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', query: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    const messageText = `*V.N. Public School Parent Inquiry*%0A%0A` +
      `*Name:* ${form.name}%0A` +
      `*Phone:* ${form.phone}%0A` +
      `*Inquiry:* ${form.query}`;

    const whatsappUrl = `https://wa.me/917562858494?text=${messageText}`;
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 600);

    setTimeout(() => setSubmitted(false), 6000);
    setForm({ name: '', phone: '', query: '' });
  };

  return (
    <section id="contact" className="relative py-16 bg-slate-950 text-white border-b border-slate-800 font-sans overflow-hidden">
      
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 pointer-events-none scale-105"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      ></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/95 to-slate-950 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-500/20 border border-amber-400/40 px-3.5 py-1 rounded-full text-xs font-bold text-amber-300">
              <MapPin className="w-3.5 h-3.5 text-amber-400" />
              <span>Campus Contact & Address</span>
            </div>

            <h2 className="text-3xl font-heading font-black text-white">
              Contact V.N. Public School
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Have questions about admissions (Nursery to Class VIII), Sainik/Navodaya coaching, or school van transport? Visit our campus or reach out via phone, email or WhatsApp.
            </p>

            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-start gap-4 shadow-md backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-300 flex items-center justify-center shrink-0 border border-amber-400/30">
                  <MapPin className="w-5 h-5 text-amber-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Campus Address</h3>
                  <p className="text-xs text-slate-300 mt-0.5 leading-relaxed">
                    V.N. Public School, Nimuiya, Turkauliya, East Champaran, Bihar - 845437
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-start gap-4 shadow-md backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-300 flex items-center justify-center shrink-0 border border-emerald-400/30">
                  <Phone className="w-5 h-5 text-emerald-400" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Helpline Numbers</h3>
                  <div className="flex flex-wrap gap-4 text-sm font-bold font-mono text-amber-300 mt-1">
                    <a href="tel:7562858494" className="hover:underline py-0.5">
                      +91 7562858494
                    </a>
                    <span>|</span>
                    <a href="tel:9523719901" className="hover:underline py-0.5">
                      +91 9523719901
                    </a>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl flex items-start gap-4 shadow-md backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center shrink-0 border border-purple-400/30">
                  <Mail className="w-5 h-5 text-purple-300" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">Official Email</h3>
                  <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="text-xs sm:text-sm font-bold font-mono text-amber-300 hover:underline block mt-0.5 py-0.5">
                    vnpublicschoolnimuiya99@gmail.com
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Direct WhatsApp Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-900/90 border border-slate-800 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 backdrop-blur-xs">
            <div className="border-b border-slate-800 pb-3">
              <h3 className="text-xl font-heading font-black text-white">
                Send Direct WhatsApp Inquiry
              </h3>
              <p className="text-xs text-slate-300">
                Your inquiry will open directly in WhatsApp to our school number.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-950/80 border border-emerald-800 p-4 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <h4 className="text-sm font-bold text-white">Inquiry Sent to WhatsApp!</h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 7562858494"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-300 block mb-1">Your Message / Inquiry *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Inquire about admission, class fees, Sainik/Navodaya prep, van routes..."
                    value={form.query}
                    onChange={(e) => setForm({ ...form, query: e.target.value })}
                    className="w-full bg-slate-950 border border-slate-700 text-white placeholder-slate-500 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-md transition-all flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Inquiry via WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}

