import React, { useState } from 'react';
import { X, Utensils, Send, CheckCircle2, Calendar, Users, Phone } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function CateringModal({ isOpen, onClose }) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [eventType, setEventType] = useState('Birthday Party');
  const [guestCount, setGuestCount] = useState('50 Guests');
  const [eventDate, setEventDate] = useState('');
  const [note, setNote] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    let msg = `*PARTY CATERING INQUIRY - BIRYANI MEHFIL*\n`;
    msg += `---------------------------\n`;
    msg += `*Name:* ${name}\n`;
    msg += `*Phone:* ${phone}\n`;
    msg += `*Event Type:* ${eventType}\n`;
    msg += `*Expected Guests:* ${guestCount}\n`;
    msg += `*Event Date:* ${eventDate || 'TBD'}\n`;
    if (note) msg += `*Special Note:* ${note}\n`;
    msg += `---------------------------\n`;
    msg += `We would like a customized menu quotation for our event!`;

    const encoded = encodeURIComponent(msg);
    setTimeout(() => {
      window.open(`https://wa.me/${RESTAURANT_INFO.whatsappNumber}?text=${encoded}`, '_blank');
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-60 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-slate-950 border border-amber-500/40 rounded-3xl max-w-lg w-full p-6 sm:p-8 space-y-6 shadow-2xl relative">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-amber-500/20 pb-4">
          <div className="flex items-center gap-2">
            <Utensils className="w-5 h-5 text-amber-400" />
            <h3 className="font-serif-royal font-bold text-xl gold-gradient-text">Party & Event Catering</h3>
          </div>
          <button onClick={onClose} className="text-slate-400 hover:text-white p-1 rounded-lg">
            <X className="w-5 h-5" />
          </button>
        </div>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-300">
              We cater for <strong>ALL occasions</strong> in Bettiah! Get customized bulk rates for Dum Biryani handis & Momos platters.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Your Name *</label>
                <input 
                  type="text" 
                  required
                  placeholder="Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white rounded-xl p-2.5 focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Mobile Number *</label>
                <input 
                  type="tel" 
                  required
                  placeholder="9876543210"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white rounded-xl p-2.5 focus:outline-none focus:border-amber-400"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Event Type</label>
                <select
                  value={eventType}
                  onChange={(e) => setEventType(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white rounded-xl p-2.5 focus:outline-none focus:border-amber-400"
                >
                  <option>Birthday Party</option>
                  <option>Wedding / Reception</option>
                  <option>Family Gathering</option>
                  <option>Office Celebration</option>
                  <option>Festival Feast</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-slate-400 mb-1">Expected Guests</label>
                <select
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white rounded-xl p-2.5 focus:outline-none focus:border-amber-400"
                >
                  <option>15 - 30 Guests</option>
                  <option>30 - 50 Guests</option>
                  <option>50 - 100 Guests</option>
                  <option>100+ Guests (Large Feast)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">Event Date</label>
              <input 
                type="date" 
                value={eventDate}
                onChange={(e) => setEventDate(e.target.value)}
                className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white rounded-xl p-2.5 focus:outline-none focus:border-amber-400"
              />
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-slate-400 mb-1">Specific Dishes Required / Notes</label>
              <textarea 
                rows={2}
                placeholder="e.g. 5 Handis of Kolkata Biryani + 10 Plates Fried Momos..."
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="w-full bg-slate-900 border border-amber-500/20 text-xs text-white rounded-xl p-2.5 focus:outline-none focus:border-amber-400"
              />
            </div>

            <button
              type="submit"
              className="w-full gold-gradient-bg text-slate-950 font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs shadow cursor-pointer"
            >
              <Send className="w-4 h-4 text-slate-950" />
              <span>Send Party Inquiry via WhatsApp</span>
            </button>
          </form>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-14 h-14 text-emerald-400 mx-auto" />
            <h4 className="text-lg font-bold text-slate-100">Inquiry Sent Successfully!</h4>
            <p className="text-xs text-slate-400">Opening WhatsApp to connect directly with our manager.</p>
            <button 
              onClick={() => { setSubmitted(false); onClose(); }} 
              className="gold-gradient-bg text-slate-950 font-bold px-6 py-2.5 rounded-xl text-xs"
            >
              Close Window
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
