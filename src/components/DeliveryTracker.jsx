import React, { useState, useEffect } from 'react';
import { Navigation, CheckCircle2, CookingPot, Bike, Home, Phone, RefreshCw, Clock, MapPin, ShieldCheck, Play } from 'lucide-react';
import { RESTAURANT_INFO } from '../data/menuData';

const TRACKING_STAGES = [
  { id: 1, title: "Order Confirmed", desc: "Received at Biryani Mehfil counter", icon: CheckCircle2, time: "2 mins ago" },
  { id: 2, title: "Dum Cooking & Packing", desc: "Chef is steaming fresh biryani & momos", icon: CookingPot, time: "In progress" },
  { id: 3, title: "Out for Delivery", desc: "Delivery rider en route on bike", icon: Bike, time: "Est. 12 mins" },
  { id: 4, title: "Delivered Hot", desc: "Arrived at Bangali Colony Chowk / Address", icon: Home, time: "Enjoy meal!" }
];

export default function DeliveryTracker({ currentOrder }) {
  const [activeStage, setActiveStage] = useState(2);
  const [etaMinutes, setEtaMinutes] = useState(18);

  // Default mock order if user opens tracker before placing order
  const activeOrderData = currentOrder || {
    orderId: "BM-849201",
    customerName: "Valued Foodie",
    customerPhone: "+91 7097039425",
    deliveryAddress: "Bangali Colony Chowk, Bettiah",
    orderType: "delivery",
    grandTotal: 230,
    cartItems: [
      { id: "dum-biryani", name: "Authentic Chicken Dum Biryani", quantity: 2, price: 70 },
      { id: "chicken-steamed-momos", name: "Chicken Steamed Momos", quantity: 1, price: 80 },
      { id: "chilled-beverage", name: "Chilled Soft Drink", quantity: 1, price: 30 }
    ]
  };

  useEffect(() => {
    // Auto advance stage simulation
    const interval = setInterval(() => {
      setActiveStage(prev => (prev < 4 ? prev + 1 : 1));
    }, 15000);
    return () => clearInterval(interval);
  }, []);

  const handleNextStage = () => {
    setActiveStage(prev => (prev < 4 ? prev + 1 : 1));
  };

  return (
    <section id="tracker" className="py-16 relative">
      <div className="max-w-full px-4 sm:px-8 lg:px-12 xl:px-16 mx-auto">
        
        {/* Section Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-widest">
            <Navigation className="w-3.5 h-3.5 text-emerald-400 animate-spin" />
            Live Delivery & Order Status
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold gold-gradient-text font-serif-royal">
            REAL-TIME ORDER TRACKER
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto font-light">
            Track your freshly cooked biryani & momos live from kitchen to your doorstep in Bettiah.
          </p>
        </div>

        {/* Tracker Card Frame */}
        <div className="glass-card rounded-3xl border border-amber-500/40 p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Order Header Summary Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-amber-500/20">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm font-bold text-amber-300 bg-amber-500/10 px-3 py-1 rounded-lg border border-amber-500/30">
                  ID: {activeOrderData.orderId}
                </span>
                <span className="bg-emerald-950 text-emerald-300 text-xs px-2.5 py-1 rounded-full border border-emerald-500/30 font-semibold flex items-center gap-1">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
                  Live Status Active
                </span>
              </div>
              <p className="text-xs text-slate-400 mt-1">
                Ordering for: <strong className="text-slate-200">{activeOrderData.customerName}</strong> ({activeOrderData.deliveryAddress})
              </p>
            </div>

            {/* Test Stage Simulator Controller */}
            <div className="flex items-center gap-2">
              <button 
                onClick={handleNextStage}
                className="bg-slate-900 hover:bg-slate-800 text-amber-300 border border-amber-500/40 px-3.5 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow"
              >
                <Play className="w-3.5 h-3.5 text-amber-400" />
                <span>Simulate Next Stage ({activeStage}/4)</span>
              </button>
            </div>
          </div>

          {/* Step Progress Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {TRACKING_STAGES.map((stage) => {
              const IconComp = stage.icon;
              const isCompleted = stage.id < activeStage;
              const isCurrent = stage.id === activeStage;

              return (
                <div 
                  key={stage.id}
                  className={`p-5 rounded-2xl border transition-all duration-300 relative ${
                    isCurrent 
                      ? 'bg-gradient-to-b from-amber-950/60 to-slate-900 border-amber-400 shadow-xl shadow-amber-500/10 scale-102'
                      : isCompleted
                      ? 'bg-slate-900/90 border-emerald-500/50 text-emerald-300'
                      : 'bg-slate-950/50 border-slate-800 text-slate-500 opacity-60'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className={`p-3 rounded-xl ${
                      isCurrent ? 'bg-amber-500 text-slate-950' : isCompleted ? 'bg-emerald-500/20 text-emerald-400' : 'bg-slate-800 text-slate-500'
                    }`}>
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-mono font-bold text-amber-300">
                      Step 0{stage.id}
                    </span>
                  </div>

                  <h4 className={`text-sm font-bold mb-1 ${isCurrent ? 'text-amber-300' : isCompleted ? 'text-slate-100' : 'text-slate-400'}`}>
                    {stage.title}
                  </h4>
                  <p className="text-xs text-slate-400 leading-snug">{stage.desc}</p>

                  <div className="mt-3 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[11px]">
                    <span className="text-slate-400">{stage.time}</span>
                    {isCurrent && (
                      <span className="text-amber-400 font-bold flex items-center gap-1 animate-pulse">
                        ● Live Now
                      </span>
                    )}
                    {isCompleted && (
                      <span className="text-emerald-400 font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5" /> Done
                      </span>
                    )}
                  </div>

                </div>
              );
            })}
          </div>

          {/* Simulated Live Driver & Location Card */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-slate-900/90 p-6 rounded-2xl border border-amber-500/20">
            
            {/* Left: Driver details */}
            <div className="lg:col-span-5 space-y-4">
              <h4 className="text-xs font-bold text-amber-400 uppercase tracking-widest">Assigned Delivery Executive</h4>
              
              <div className="flex items-center gap-4 bg-slate-950 p-4 rounded-xl border border-slate-800">
                <div className="w-12 h-12 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-lg">
                  RK
                </div>
                <div className="flex-1">
                  <h5 className="text-sm font-bold text-slate-100">Rahul Kumar</h5>
                  <p className="text-xs text-slate-400">Biryani Mehfil Express Rider (Bettiah)</p>
                  <p className="text-[11px] text-amber-300 font-mono">Vehicle: Hero Splendor (BR-22)</p>
                </div>
                <a 
                  href={`tel:${RESTAURANT_INFO.phone}`}
                  className="bg-emerald-500 text-slate-950 p-2.5 rounded-xl hover:scale-105 transition cursor-pointer shadow"
                  title="Call Rider"
                >
                  <Phone className="w-4 h-4" />
                </a>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-amber-400" />
                  <span>Pickup: <strong>Bangali Colony Chowk Outlet</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Estimated Delivery Time: <strong className="text-emerald-300">12 - 18 Mins</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-sky-400" />
                  <span>Temperature Box Sealed & Freshness Guaranteed</span>
                </div>
              </div>
            </div>

            {/* Right: Mock Live GPS Map Container */}
            <div className="lg:col-span-7 bg-slate-950 rounded-xl overflow-hidden border border-slate-800 relative min-h-[180px] flex items-center justify-center p-4">
              
              {/* Decorative map grid background lines */}
              <div className="absolute inset-0 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
              
              {/* Delivery route graphic */}
              <div className="relative w-full max-w-md flex items-center justify-between z-10 px-4">
                
                {/* Store Pin */}
                <div className="text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-amber-500 text-slate-950 flex items-center justify-center font-bold shadow-lg shadow-amber-500/30 mx-auto">
                    <CookingPot className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-amber-300 block">Bangali Colony Chowk</span>
                </div>

                {/* Animated Moving Rider Line */}
                <div className="flex-1 mx-4 relative">
                  <div className="h-1 bg-slate-800 w-full rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-to-r from-amber-500 to-emerald-400 transition-all duration-1000"
                      style={{ width: `${activeStage * 25}%` }}
                    ></div>
                  </div>

                  {/* Rider Bike Icon moving */}
                  <div 
                    className="absolute -top-3.5 transition-all duration-1000 transform -translate-x-1/2"
                    style={{ left: `${activeStage * 25}%` }}
                  >
                    <div className="p-1.5 bg-emerald-400 text-slate-950 rounded-full shadow-lg border border-white animate-bounce">
                      <Bike className="w-4 h-4" />
                    </div>
                  </div>
                </div>

                {/* Destination Pin */}
                <div className="text-center space-y-1">
                  <div className="w-10 h-10 rounded-full bg-slate-800 border border-emerald-400 text-emerald-400 flex items-center justify-center font-bold mx-auto">
                    <Home className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-bold text-slate-300 block">Your Address</span>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
