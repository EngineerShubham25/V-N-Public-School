import React, { useState } from 'react';
import { X, GraduationCap, CheckCircle2, Phone, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function AdmissionModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [appId, setAppId] = useState('');
  
  const [formData, setFormData] = useState({
    studentName: '',
    fatherName: '',
    grade: 'Class I',
    phone: '',
    village: '',
    needTransport: 'Yes'
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const generatedId = 'VNPS-2026-' + Math.floor(1000 + Math.random() * 9000);
    setAppId(generatedId);
    setSubmitted(true);

    try {
      confetti({ particleCount: 90, spread: 60, origin: { y: 0.6 } });
    } catch (err) {}

    // Construct WhatsApp pre-filled inquiry message
    const messageText = `*V.N. Public School New Admission Inquiry*%0A%0A` +
      `*Application Ref:* ${generatedId}%0A` +
      `*Student Name:* ${formData.studentName}%0A` +
      `*Class Applying For:* ${formData.grade}%0A` +
      `*Father's Name:* ${formData.fatherName}%0A` +
      `*Mobile Number:* ${formData.phone}%0A` +
      `*Village/Address:* ${formData.village}%0A` +
      `*Van Required:* ${formData.needTransport}%0A%0A` +
      `Please confirm my admission inquiry details. Thank you!`;

    const whatsappUrl = `https://wa.me/917562858494?text=${messageText}`;

    // Open WhatsApp in new tab after 800ms
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm overflow-y-auto font-sans">
      <div className="bg-white border border-slate-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl relative my-6 text-slate-900">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-900 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-900 border border-blue-200">
                <GraduationCap className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-black text-slate-900">
                  Online Admission Form (2026-27)
                </h3>
                <p className="text-xs text-amber-700 font-semibold">
                  V.N. Public School, Nimuiya Turkauliya
                </p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Student's Full Name *</label>
                <input
                  type="text"
                  name="studentName"
                  required
                  placeholder="Enter Student Name"
                  value={formData.studentName}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-700"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Class Applying For *</label>
                  <select
                    name="grade"
                    value={formData.grade}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-700 font-semibold"
                  >
                    <option value="Nursery / Playgroup">Nursery / Playgroup</option>
                    <option value="LKG">LKG</option>
                    <option value="UKG">UKG</option>
                    <option value="Class 1st">Class 1st</option>
                    <option value="Class 2nd">Class 2nd</option>
                    <option value="Class 3rd">Class 3rd</option>
                    <option value="Class 4th">Class 4th</option>
                    <option value="Class 5th">Class 5th</option>
                    <option value="Class 6th">Class 6th</option>
                    <option value="Class 7th">Class 7th</option>
                    <option value="Class 8th">Class 8th</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Father's Name *</label>
                  <input
                    type="text"
                    name="fatherName"
                    required
                    placeholder="Father's Name"
                    value={formData.fatherName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Mobile / WhatsApp No. *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 7562858494"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-700 font-mono"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-700 block mb-1">Village / Address *</label>
                  <input
                    type="text"
                    name="village"
                    required
                    placeholder="e.g. Nimuiya, Turkaulia"
                    value={formData.village}
                    onChange={handleChange}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-700"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">Van / Transport Facility Needed?</label>
                <select
                  name="needTransport"
                  value={formData.needTransport}
                  onChange={handleChange}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-700 font-semibold"
                >
                  <option value="Yes">Yes, School Van Required</option>
                  <option value="No">No, Self Arrangement</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-black py-3.5 rounded-xl shadow-lg transition-all text-sm flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit & Send Inquiry via WhatsApp</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="space-y-5 text-center py-4">
            <div className="w-14 h-14 rounded-full bg-emerald-100 border-2 border-emerald-500 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-heading font-black text-slate-900">
                Form Submitted & Sent to WhatsApp!
              </h3>
              <p className="text-xs text-slate-600">
                Application Ref ID: <strong className="text-blue-900 font-mono">{appId}</strong>
              </p>
            </div>

            <div className="bg-emerald-50 border border-emerald-200 p-4 rounded-2xl text-xs text-emerald-900 space-y-2">
              <p>
                <strong>Inquiry Details sent to School WhatsApp (+91 7562858494)</strong>
              </p>
              <p className="text-[11px] text-slate-600">
                If WhatsApp didn't open automatically, click the button below to chat with Director office.
              </p>
              <a
                href={`https://wa.me/917562858494?text=Hello%20V.N.%20Public%20School,%20my%20admission%20ref%20is%20${appId}`}
                target="_blank"
                rel="noreferrer"
                className="inline-block bg-emerald-600 text-white font-bold px-4 py-2 rounded-xl text-xs shadow hover:bg-emerald-700 mt-1"
              >
                💬 Open WhatsApp Chat Now
              </a>
            </div>

            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="bg-slate-800 text-white font-bold px-6 py-2.5 rounded-xl text-xs"
            >
              Close
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
