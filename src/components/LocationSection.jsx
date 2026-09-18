import React from 'react';
import { MapPin, Phone, Clock, Navigation, ExternalLink, Utensils, MessageCircle, ShieldCheck } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

export default function LocationSection({ onCateringOpen }) {
  return (
    <section id="location" className="py-16 relative">
      <div className="max-w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-400 border border-amber-500/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            Find Us in Bettiah
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text font-serif-royal">
            LOCATION & CONTACT
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light">
            Visit our outlet for authentic dine-in ambiance or takeaway at Bangali Colony Chowk, Bettiah.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Contact Card */}
          <div className="lg:col-span-5 glass-card rounded-3xl p-6 sm:p-8 border border-amber-500/30 flex flex-col justify-between space-y-6 shadow-2xl">
            
            <div className="space-y-6">
              
              <div className="flex items-center gap-3">
                <img 
                  src="/assets/logo.jpg" 
                  alt="Biryani Mehfil Logo" 
                  className="w-12 h-12 rounded-full border border-amber-400 object-cover"
                />
                <div>
                  <h3 className="font-serif-royal font-bold text-xl text-amber-300">Biryani Mehfil</h3>
                  <p className="text-xs text-slate-400">{RESTAURANT_INFO.tagline}</p>
                </div>
              </div>

              <div className="space-y-4 pt-2 border-t border-slate-800">
                
                {/* Location Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Outlet Address</h4>
                    <p className="text-sm font-semibold text-white leading-snug mt-0.5">
                      {RESTAURANT_INFO.address}
                    </p>
                    <p className="text-[11px] text-amber-300/80 mt-1">Landmark: Bangali Colony Chowk, Bettiah</p>
                  </div>
                </div>

                {/* Phone Item */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Orders & Inquiries Hotline</h4>
                    <a 
                      href={`tel:${RESTAURANT_INFO.phone}`}
                      className="text-base font-bold text-amber-400 hover:underline block mt-0.5"
                    >
                      {RESTAURANT_INFO.phone}
                    </a>
                    <p className="text-[11px] text-slate-400">Call for Takeaway, Home Delivery & Reservations</p>
                  </div>
                </div>

                {/* Opening Hours */}
                <div className="flex items-start gap-3">
                  <div className="p-2.5 bg-amber-500/10 rounded-xl text-amber-400 shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400">Operating Hours</h4>
                    <p className="text-sm font-semibold text-white mt-0.5">
                      {RESTAURANT_INFO.openingHours}
                    </p>
                    <p className="text-[11px] text-emerald-400 mt-0.5">Open 7 Days a Week</p>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Actions */}
            <div className="space-y-3 pt-4 border-t border-slate-800">
              
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Bangali Colony Chowk, Bettiah")}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full gold-gradient-bg text-slate-950 font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm hover:scale-102 transition cursor-pointer shadow-lg"
              >
                <Navigation className="w-4 h-4 text-slate-950" />
                <span>Open Directions in Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-70" />
              </a>

              <button
                onClick={onCateringOpen}
                className="w-full bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/30 py-3.5 rounded-2xl flex items-center justify-center gap-2 text-xs font-bold transition cursor-pointer"
              >
                <Utensils className="w-4 h-4 text-amber-400" />
                <span>Book Bulk Party & Event Catering</span>
              </button>

            </div>

          </div>

          {/* Right Column: Embedded Map Card */}
          <div className="lg:col-span-7 glass-card rounded-3xl overflow-hidden border border-amber-500/30 shadow-2xl relative flex flex-col">
            
            {/* Embedded Google Maps frame centered on Bettiah */}
            <div className="w-full h-full min-h-[360px] relative">
              <iframe 
                title="Biryani Mehfil Location Map"
                src="https://maps.google.com/maps?q=Bangali%20Colony%20Chowk,%20Bettiah&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 filter contrast-125 saturate-125 brightness-90 min-h-[360px]"
                loading="lazy"
                allowFullScreen
              ></iframe>

              {/* Map Floating Card Overlay */}
              <div className="absolute top-4 left-4 bg-slate-950/90 backdrop-blur-md p-3.5 rounded-2xl border border-amber-500/40 shadow-xl max-w-xs">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping"></span>
                  <span className="text-xs font-bold text-amber-300">Biryani Mehfil Outlet</span>
                </div>
                <p className="text-[11px] text-slate-300 mt-1">Bangali Colony Chowk, Bettiah</p>
                <p className="text-[10px] text-emerald-400 font-semibold mt-0.5">Dine-in • Takeaway • Delivery</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
