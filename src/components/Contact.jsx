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
    <section id="contact" className="relative py-16 bg-slate-100 text-slate-900 border-b border-slate-200 font-sans overflow-hidden">
      
      {/* Real School Gate Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-35 pointer-events-none scale-105"
        style={{ backgroundImage: `url(${heroBgImg})` }}
      ></div>

      {/* Light Clean Overlay */}
      <div className="absolute inset-0 bg-slate-900/40 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-amber-400 text-slate-950 px-4 py-1.5 rounded-full text-xs font-black shadow-xs">
              <MapPin className="w-3.5 h-3.5 text-slate-950" />
              <span>Campus Contact & Address</span>
            </div>

            <h2 className="text-3xl font-heading font-black text-white drop-shadow-md">
              Contact V.N. Public School
            </h2>

            <p className="text-slate-100 text-sm font-medium leading-relaxed drop-shadow-sm">
              Have questions about admissions (Nursery to Class VIII), Sainik/Navodaya coaching, or school van transport? Visit our campus or reach out via phone, email or WhatsApp.
            </p>

            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="bg-white/95 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 shadow-md backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                  <MapPin className="w-5 h-5 text-blue-800" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Campus Address</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    V.N. Public School, Nimuiya, Turkauliya, East Champaran, Bihar - 845437
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-white/95 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 shadow-md backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-5 h-5 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Helpline Numbers</h3>
                  <div className="flex flex-wrap gap-4 text-sm font-bold font-mono text-blue-900 mt-1">
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
              <div className="bg-white/95 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 shadow-md backdrop-blur-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0 border border-purple-200">
                  <Mail className="w-5 h-5 text-purple-800" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Official Email</h3>
                  <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="text-xs sm:text-sm font-bold font-mono text-blue-900 hover:underline block mt-0.5 py-0.5">
                    vnpublicschoolnimuiya99@gmail.com
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Direct WhatsApp Inquiry Form */}
          <div className="lg:col-span-6 bg-white/95 border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-xl space-y-4 backdrop-blur-xs">
            <div className="border-b border-slate-200 pb-3">
              <h3 className="text-xl font-heading font-black text-blue-950">
                Send Direct WhatsApp Inquiry
              </h3>
              <p className="text-xs text-slate-600">
                Your inquiry will open directly in WhatsApp to our school number.
              </p>
            </div>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-slate-900">Inquiry Sent to WhatsApp!</h4>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 7562858494"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Your Message / Inquiry *</label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Inquire about admission, class fees, Sainik/Navodaya prep, van routes..."
                    value={form.query}
                    onChange={(e) => setForm({ ...form, query: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 text-slate-900 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900"
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


