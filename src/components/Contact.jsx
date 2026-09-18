import React, { useState } from 'react';
import { Phone, MapPin, Mail, Send, CheckCircle2, User, Heart } from 'lucide-react';

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
    <section id="contact" className="py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Contact Info */}
          <div className="lg:col-span-6 space-y-6">
            
            <div className="inline-flex items-center gap-2 bg-blue-100 border border-blue-200 px-3 py-1 rounded-full text-xs font-bold text-blue-900">
              <MapPin className="w-3.5 h-3.5 text-blue-700" />
              <span>Campus Contact & Address</span>
            </div>

            <h2 className="text-3xl font-heading font-black text-blue-950">
              Contact V.N. Public School
            </h2>

            <div className="bg-amber-50 border border-amber-200 p-3 rounded-xl text-xs text-amber-900 font-medium flex items-center gap-2">
              <Heart className="w-4 h-4 text-orange-600 shrink-0" />
              <span>Managed by Lalti Virendra Charitable Trust (लालती वीरेंद्र चैरिटेबल ट्रस्ट)</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Have questions about admissions (Nursery to Class VIII), Sainik/Navodaya coaching, or school van transport? Visit our campus or reach out via phone, email or WhatsApp.
            </p>

            <div className="space-y-4">
              
              {/* Address Card */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Campus Address</h3>
                  <p className="text-xs text-slate-600 mt-0.5 leading-relaxed">
                    V.N. Public School, Nimuiya, Turkauliya, East Champaran, Bihar - 845437
                  </p>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 border border-emerald-200">
                  <Phone className="w-5 h-5" />
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
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center shrink-0 border border-purple-200">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Official Email</h3>
                  <a href="mailto:vnpublicschoolnimuiya99@gmail.com" className="text-xs sm:text-sm font-bold font-mono text-blue-900 hover:underline block mt-0.5 py-0.5">
                    vnpublicschoolnimuiya99@gmail.com
                  </a>
                </div>
              </div>

              {/* Director Card */}
              <div className="bg-slate-50 border border-slate-200 p-4 rounded-2xl flex items-start gap-4 shadow-xs">
                <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center shrink-0 border border-amber-200">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900">Director Office</h3>
                  <p className="text-xs text-slate-700 mt-0.5">
                    <strong className="text-blue-950">Aadarsh Kumar Raj</strong> (B.Sc., M.Sc., B.Ed.)
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* Right: Direct WhatsApp Inquiry Form */}
          <div className="lg:col-span-6 bg-slate-50 border border-slate-200 p-6 sm:p-8 rounded-3xl shadow-md space-y-4">
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900"
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900 font-mono"
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
                    className="w-full bg-white border border-slate-300 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-blue-900"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 rounded-xl shadow-sm transition-all flex items-center justify-center gap-2 text-sm"
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
