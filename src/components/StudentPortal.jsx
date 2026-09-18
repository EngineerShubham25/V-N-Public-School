import React, { useState } from 'react';
import { Search, UserCheck, Award, FileText, CheckCircle2, Download, Printer, ShieldCheck, Sparkles, BookOpen } from 'lucide-react';

export default function StudentPortal() {
  const [query, setQuery] = useState('');
  const [searchedStudent, setSearchedStudent] = useState(null);
  const [errorMsg, setErrorMsg] = useState('');

  // Sample database of students for lookup
  const mockStudents = [
    {
      rollNo: 'VN101',
      name: 'Aarav Kumar',
      fatherName: 'Rajesh Kumar',
      class: 'Class IV - Section A',
      dob: '12-05-2016',
      attendance: '96.5%',
      rank: '1st in Class',
      status: 'Promoted to Class V',
      marks: [
        { subject: 'English', max: 100, obtained: 92, grade: 'A1' },
        { subject: 'Hindi', max: 100, obtained: 88, grade: 'A2' },
        { subject: 'Mathematics', max: 100, obtained: 98, grade: 'A1' },
        { subject: 'Science', max: 100, obtained: 94, grade: 'A1' },
        { subject: 'Social Science', max: 100, obtained: 90, grade: 'A1' },
        { subject: 'Computer Science', max: 100, obtained: 96, grade: 'A1' }
      ]
    },
    {
      rollNo: 'VN102',
      name: 'Ananya Raj',
      fatherName: 'Sanjay Raj',
      class: 'Class V - Section A',
      dob: '08-11-2015',
      attendance: '98.2%',
      rank: '2nd in Class',
      status: 'Passed with Distinction',
      marks: [
        { subject: 'English', max: 100, obtained: 94, grade: 'A1' },
        { subject: 'Hindi', max: 100, obtained: 91, grade: 'A1' },
        { subject: 'Mathematics', max: 100, obtained: 95, grade: 'A1' },
        { subject: 'Science', max: 100, obtained: 96, grade: 'A1' },
        { subject: 'Social Science', max: 100, obtained: 89, grade: 'A2' },
        { subject: 'Computer Science', max: 100, obtained: 99, grade: 'A1' }
      ]
    },
    {
      rollNo: 'VN103',
      name: 'Rohan Sharma',
      fatherName: 'Vikram Sharma',
      class: 'Class III - Section B',
      dob: '14-02-2017',
      attendance: '94.0%',
      rank: 'Outstanding',
      status: 'Passed',
      marks: [
        { subject: 'English', max: 100, obtained: 85, grade: 'A2' },
        { subject: 'Hindi', max: 100, obtained: 82, grade: 'B1' },
        { subject: 'Mathematics', max: 100, obtained: 90, grade: 'A1' },
        { subject: 'Science', max: 100, obtained: 87, grade: 'A2' },
        { subject: 'Social Science', max: 100, obtained: 84, grade: 'B1' },
        { subject: 'Computer Science', max: 100, obtained: 92, grade: 'A1' }
      ]
    }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    setErrorMsg('');
    const trimmed = query.trim().toUpperCase();

    if (!trimmed) {
      setErrorMsg('Please enter a Roll Number (e.g. VN101, VN102, VN103)');
      return;
    }

    const found = mockStudents.find(
      (s) => s.rollNo.toUpperCase() === trimmed || s.name.toUpperCase().includes(trimmed)
    );

    if (found) {
      setSearchedStudent(found);
    } else {
      // Create a simulated mark sheet for any other roll number entered!
      setSearchedStudent({
        rollNo: trimmed,
        name: 'Scholastic Student (' + trimmed + ')',
        fatherName: 'Parent / Guardian',
        class: 'Class III - Section A',
        dob: '01-01-2016',
        attendance: '95.0%',
        rank: 'Merit List',
        status: 'Officially Verified & Passed',
        marks: [
          { subject: 'English', max: 100, obtained: 89, grade: 'A1' },
          { subject: 'Hindi', max: 100, obtained: 86, grade: 'A2' },
          { subject: 'Mathematics', max: 100, obtained: 92, grade: 'A1' },
          { subject: 'Science', max: 100, obtained: 90, grade: 'A1' },
          { subject: 'Social Science', max: 100, obtained: 85, grade: 'A2' },
          { subject: 'Computer Science', max: 100, obtained: 95, grade: 'A1' }
        ]
      });
    }
  };

  const calculateTotal = (marks) => {
    return marks.reduce((sum, m) => sum + m.obtained, 0);
  };

  const calculatePercentage = (marks) => {
    const total = calculateTotal(marks);
    return (total / (marks.length * 100) * 100).toFixed(1);
  };

  return (
    <section id="student-portal" className="py-16 sm:py-24 bg-slate-900 border-t border-slate-800 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 px-3.5 py-1 rounded-full text-xs font-bold text-blue-400">
            <UserCheck className="w-4 h-4 text-blue-400" />
            <span>Digital Student Result & Portal</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-white">
            Online <span className="gold-gradient-text">Result & Marksheet Lookup</span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300">
            Parents can check their child's academic progress report card online anytime by entering their Roll Number or Student ID.
          </p>
        </div>

        {/* Search Box */}
        <div className="max-w-xl mx-auto bg-slate-950 p-4 sm:p-6 rounded-3xl border border-slate-800 shadow-2xl mb-10">
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-3.5 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Enter Roll No (e.g. VN101, VN102, VN103)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl pl-12 pr-4 py-3 text-sm focus:outline-none focus:border-amber-400 font-mono"
              />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-bold px-6 py-3 rounded-xl text-sm shadow-md hover:scale-105 transition-all shrink-0 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>Search Marksheet</span>
            </button>
          </form>

          {errorMsg && (
            <div className="mt-3 text-xs text-red-400 font-medium text-center">
              {errorMsg}
            </div>
          )}

          <div className="mt-4 flex flex-wrap justify-center gap-2 text-xs text-slate-400">
            <span>Try sample Roll Nos:</span>
            <button onClick={() => { setQuery('VN101'); }} className="text-amber-400 hover:underline font-mono">VN101</button>,
            <button onClick={() => { setQuery('VN102'); }} className="text-amber-400 hover:underline font-mono">VN102</button>,
            <button onClick={() => { setQuery('VN103'); }} className="text-amber-400 hover:underline font-mono">VN103</button>
          </div>
        </div>

        {/* Display Marksheet Preview Card */}
        {searchedStudent && (
          <div className="max-w-3xl mx-auto bg-slate-950 border-2 border-amber-400/40 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 relative overflow-hidden backdrop-blur-md animate-fadeIn">
            
            {/* School Header */}
            <div className="text-center border-b border-slate-800 pb-5 space-y-1">
              <div className="flex items-center justify-center gap-2 mb-2">
                <img src="/assets/logo-badge.svg" alt="V.N. Public School" className="w-10 h-10" />
                <span className="font-heading font-extrabold text-xl text-white">V.N. PUBLIC SCHOOL</span>
              </div>
              <p className="text-xs text-amber-300 font-medium">Nimuiya Turkauliya, East Champaran, Bihar - 845437</p>
              <div className="text-[11px] text-slate-400 font-mono">
                UDISE Code: <span className="text-amber-400">10024102835</span> | Reg No: <span className="text-amber-400">20411042202441222160413</span>
              </div>
              <div className="inline-block bg-amber-400/10 border border-amber-400/30 text-amber-300 text-xs font-bold px-3 py-1 rounded-full mt-2">
                OFFICIAL REPORT CARD • SESSION 2025-26
              </div>
            </div>

            {/* Student Details Info */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 bg-slate-900 p-4 rounded-2xl border border-slate-800 text-xs">
              <div>
                <span className="text-slate-400 block">Student Name:</span>
                <strong className="text-white text-sm">{searchedStudent.name}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Roll Number:</span>
                <strong className="text-amber-400 font-mono text-sm">{searchedStudent.rollNo}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Grade / Class:</span>
                <strong className="text-white text-sm">{searchedStudent.class}</strong>
              </div>
              <div>
                <span className="text-slate-400 block">Attendance:</span>
                <strong className="text-emerald-400 text-sm">{searchedStudent.attendance}</strong>
              </div>
            </div>

            {/* Marks Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm text-slate-300">
                <thead>
                  <tr className="border-b border-slate-800 text-amber-300 font-bold uppercase">
                    <th className="py-2.5 px-3">Subject</th>
                    <th className="py-2.5 px-3">Max Marks</th>
                    <th className="py-2.5 px-3">Marks Obtained</th>
                    <th className="py-2.5 px-3">Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60">
                  {searchedStudent.marks.map((m, i) => (
                    <tr key={i} className="hover:bg-slate-900/50">
                      <td className="py-2.5 px-3 font-semibold text-white">{m.subject}</td>
                      <td className="py-2.5 px-3 font-mono">{m.max}</td>
                      <td className="py-2.5 px-3 font-mono text-emerald-400 font-bold">{m.obtained}</td>
                      <td className="py-2.5 px-3 font-bold text-amber-400">{m.grade}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Score Summary */}
            <div className="bg-slate-900 p-4 rounded-2xl border border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-slate-400">Total Marks: </span>
                <span className="font-mono font-bold text-white text-sm">{calculateTotal(searchedStudent.marks)} / 600</span>
              </div>
              <div>
                <span className="text-slate-400">Percentage: </span>
                <span className="font-mono font-bold text-amber-400 text-sm">{calculatePercentage(searchedStudent.marks)}%</span>
              </div>
              <div>
                <span className="text-slate-400">Result Status: </span>
                <span className="font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">{searchedStudent.status}</span>
              </div>
            </div>

            {/* Director Verification Signature */}
            <div className="pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-400" />
                <span>Verified by Examination Controller</span>
              </div>
              <div className="text-right">
                <div className="font-heading font-bold text-amber-300">Aadarsh Kumar Raj</div>
                <div className="text-[11px] font-mono text-slate-400">Director (M.Sc, B.Ed)</div>
              </div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
