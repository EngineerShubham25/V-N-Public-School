import React, { useState } from 'react';
import { Calculator, CheckCircle2, DollarSign, Bus, Info, ArrowRight } from 'lucide-react';

export default function FeeCalculator({ onOpenAdmission }) {
  const [selectedClass, setSelectedClass] = useState('Primary');
  const [vanRoute, setVanRoute] = useState('nimuiya');

  const feeTable = [
    { grade: 'Nursery / LKG / UKG', monthlyTuition: 450, admissionFee: 1000, examFee: 300 },
    { grade: 'Class I to III', monthlyTuition: 550, admissionFee: 1200, examFee: 400 },
    { grade: 'Class IV to V', monthlyTuition: 650, admissionFee: 1200, examFee: 400 },
    { grade: 'Class VI to VIII', monthlyTuition: 750, admissionFee: 1500, examFee: 500 }
  ];

  const vanRates = {
    none: { name: 'No Transport (Self / Walking)', fee: 0 },
    nimuiya: { name: 'Nimuiya / Nearby Village (< 2 km)', fee: 250 },
    turkaulia: { name: 'Turkaulia Chowk / Main Bazar (2-4 km)', fee: 350 },
    semra: { name: 'Semra / Shankar Saraiya (4-6 km)', fee: 450 },
    jasuli: { name: 'Jasuli / Motihari Road (6-8 km)', fee: 550 }
  };

  const getMonthlyTotal = () => {
    let tuition = 550;
    if (selectedClass === 'Pre-Primary') tuition = 450;
    if (selectedClass === 'Primary') tuition = 600;
    if (selectedClass === 'Middle') tuition = 750;

    const van = vanRates[vanRoute]?.fee || 0;
    return tuition + van;
  };

  return (
    <section id="fees" className="py-16 sm:py-24 bg-slate-950 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-emerald-400">
            <Calculator className="w-4 h-4 text-emerald-400" />
            <span>100% Transparent Fee Structure</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Affordable Quality Education <span className="gold-gradient-text">Zero Hidden Costs</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            We believe high-standard education should be affordable for every family in East Champaran.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Fee Structure Table Card */}
          <div className="lg:col-span-7 bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl font-heading font-bold text-white mb-4 flex items-center gap-2">
              <span>Standard Monthly Tuition Fee Table</span>
              <span className="text-xs font-mono font-normal text-amber-400 bg-amber-400/10 px-2.5 py-0.5 rounded border border-amber-400/30">Session 2026-27</span>
            </h3>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-amber-300 font-bold uppercase tracking-wider">
                    <th className="py-3 px-3">Grade / Class</th>
                    <th className="py-3 px-3">Monthly Tuition</th>
                    <th className="py-3 px-3">One-Time Reg/Admin</th>
                    <th className="py-3 px-3">Term Exam Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {feeTable.map((row, idx) => (
                    <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                      <td className="py-3.5 px-3 font-semibold text-white">{row.grade}</td>
                      <td className="py-3.5 px-3 font-mono text-emerald-400 font-bold">₹{row.monthlyTuition} / mo</td>
                      <td className="py-3.5 px-3 font-mono text-slate-300">₹{row.admissionFee}</td>
                      <td className="py-3.5 px-3 font-mono text-slate-300">₹{row.examFee}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-6 p-4 bg-slate-950 rounded-2xl border border-slate-800 text-xs text-slate-400 space-y-1.5">
              <div className="flex items-center gap-1.5 text-amber-300 font-semibold">
                <Info className="w-4 h-4 text-amber-400" />
                <span>Special Concession & Benefits:</span>
              </div>
              <p>• Sibling discount available (15% off tuition fee for second child).</p>
              <p>• Free study material kit provided during early bird admission phase!</p>
            </div>
          </div>

          {/* Right: Interactive Fee & Transport Calculator */}
          <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-amber-400/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-lg font-heading font-bold text-white flex items-center gap-2">
                <Calculator className="w-5 h-5 text-amber-400" />
                <span>Estimate Monthly Fee</span>
              </h3>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-mono">
                Interactive
              </span>
            </div>

            {/* Select Grade */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider">1. Select Student Grade Level</label>
              <select
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
              >
                <option value="Pre-Primary">Nursery / LKG / UKG (Pre-Primary)</option>
                <option value="Primary">Class 1 to 5 (Primary School)</option>
                <option value="Middle">Class 6 to 8 (Middle School)</option>
              </select>
            </div>

            {/* Select Transport Route */}
            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>2. Select School Van Route</span>
                <Bus className="w-3.5 h-3.5 text-amber-400" />
              </label>
              <select
                value={vanRoute}
                onChange={(e) => setVanRoute(e.target.value)}
                className="w-full bg-slate-950 border border-slate-700 text-white rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-amber-400"
              >
                {Object.entries(vanRates).map(([key, val]) => (
                  <option key={key} value={key}>
                    {val.name} (+₹{val.fee}/mo)
                  </option>
                ))}
              </select>
            </div>

            {/* Calculated Monthly Total Display */}
            <div className="bg-slate-950 p-5 rounded-2xl border border-amber-400/40 text-center space-y-2 shadow-inner">
              <div className="text-xs text-slate-400 font-medium">Estimated Total Monthly Cost</div>
              <div className="text-3xl font-mono font-black text-amber-400">
                ₹{getMonthlyTotal()} <span className="text-xs text-slate-400 font-sans font-normal">/ month</span>
              </div>
              <div className="text-[11px] text-slate-400 flex items-center justify-center gap-2">
                <span>Tuition: ₹{selectedClass === 'Pre-Primary' ? 450 : selectedClass === 'Primary' ? 600 : 750}</span>
                <span>+</span>
                <span>Van: ₹{vanRates[vanRoute]?.fee}</span>
              </div>
            </div>

            <button
              onClick={onOpenAdmission}
              className="w-full bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg shadow-amber-500/20 hover:scale-[1.02] transition-all flex items-center justify-center gap-2 text-sm"
            >
              <span>Proceed to Admission Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
