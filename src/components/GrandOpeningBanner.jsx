import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, Clock, MapPin, Gift, CheckCircle, PartyPopper } from 'lucide-react';
import confetti from 'canvas-confetti';
import { RESTAURANT_INFO } from '../data/menuData';

export default function GrandOpeningBanner() {
  const [voucherClaimed, setVoucherClaimed] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    // Grand opening target date: July 15, 2026
    const targetDate = new Date('2026-07-15T11:00:00+05:30').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);
        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const triggerConfetti = () => {
    setVoucherClaimed(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#d4af37', '#f3e5ab', '#ffffff', '#e6c260']
    });
  };

  return (
    <section id="grand-opening" className="py-12 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Card Box */}
        <div className="relative rounded-3xl overflow-hidden glass-card border border-amber-500/50 p-6 sm:p-10 shadow-2xl bg-gradient-to-br from-amber-950/40 via-slate-950 to-slate-950">
          
          {/* Decorative Corner Ornaments */}
          <div className="absolute top-0 left-0 w-24 h-24 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-2xl pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 border border-amber-500/40 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
                <PartyPopper className="w-4 h-4 text-amber-400" />
                Cordially Invited
              </div>

              <h2 className="text-3xl sm:text-4xl font-extrabold gold-gradient-text font-serif-royal">
                GRAND OPENING OF OUR NEW OUTLET
              </h2>

              <p className="text-sm sm:text-base text-slate-300 max-w-xl font-light">
                We cordially invite you, your family & friends to join us for the grand launch of 
                <strong> Biryani Mehfil</strong> at Bangali Colony Chowk, Bettiah! Enjoy rich, authentic & flavorful Biryani experience.
              </p>

              {/* Event Metadata Chips */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                <div className="bg-slate-900/80 border border-amber-500/30 p-3 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Date</p>
                    <p className="text-xs font-bold text-amber-200">15 JULY 2026</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-amber-500/30 p-3 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Time</p>
                    <p className="text-xs font-bold text-amber-200">11:00 AM Onwards</p>
                  </div>
                </div>

                <div className="bg-slate-900/80 border border-amber-500/30 p-3 rounded-2xl flex items-center gap-3">
                  <div className="p-2 bg-amber-500/10 rounded-xl text-amber-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-xs font-bold text-amber-200">Bangali Colony Chowk</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Right Side: Countdown Timer & Voucher Button */}
            <div className="lg:col-span-5 bg-slate-900/90 border border-amber-500/40 p-6 rounded-3xl text-center space-y-5 shadow-xl">
              
              <div className="flex items-center justify-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Sparkles className="w-4 h-4 animate-spin" />
                <span>Launch Countdown</span>
              </div>

              {/* Countdown Numbers */}
              <div className="grid grid-cols-4 gap-2">
                <div className="bg-amber-950/40 border border-amber-500/30 p-3 rounded-2xl">
                  <span className="block font-serif-royal text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.days}</span>
                  <span className="text-[10px] text-amber-300/80 uppercase">Days</span>
                </div>
                <div className="bg-amber-950/40 border border-amber-500/30 p-3 rounded-2xl">
                  <span className="block font-serif-royal text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.hours}</span>
                  <span className="text-[10px] text-amber-300/80 uppercase">Hours</span>
                </div>
                <div className="bg-amber-950/40 border border-amber-500/30 p-3 rounded-2xl">
                  <span className="block font-serif-royal text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.minutes}</span>
                  <span className="text-[10px] text-amber-300/80 uppercase">Mins</span>
                </div>
                <div className="bg-amber-950/40 border border-amber-500/30 p-3 rounded-2xl">
                  <span className="block font-serif-royal text-2xl sm:text-3xl font-extrabold text-white">{timeLeft.seconds}</span>
                  <span className="text-[10px] text-amber-300/80 uppercase">Secs</span>
                </div>
              </div>

              {/* Voucher Action */}
              {!voucherClaimed ? (
                <button
                  onClick={triggerConfetti}
                  className="w-full gold-gradient-bg text-slate-950 font-extrabold py-3.5 rounded-2xl shadow-lg hover:scale-102 transition-transform duration-200 flex items-center justify-center gap-2 text-sm cursor-pointer"
                >
                  <Gift className="w-4 h-4" />
                  <span>Claim Opening Day 20% OFF Coupon</span>
                </button>
              ) : (
                <div className="bg-emerald-950/60 border border-emerald-500/50 p-3 rounded-2xl text-emerald-300 flex items-center justify-center gap-2 text-xs font-semibold animate-in zoom-in-95">
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                  <span>Coupon Code <strong className="text-white bg-emerald-900 px-2 py-0.5 rounded font-mono">MEHFIL20</strong> Saved! Show this at counter.</span>
                </div>
              )}

              <p className="text-[11px] text-slate-400">
                Special Taste Guarantee • Authentic Dum Process • Free Samples for Visitors
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
