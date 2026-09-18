import React, { useState } from 'react';
import { Bell, Calendar, FileText, ExternalLink, Lock, CheckCircle2, ShieldAlert } from 'lucide-react';

export default function NoticeBoard() {
  const [notices, setNotices] = useState([
    {
      id: 1,
      date: '28-05-2026',
      title: 'Admissions Open 2026-27 (Nursery to Class 8th)',
      tag: 'Admission Circular',
      linkText: 'Download Admission Notice PDF',
      linkUrl: '#',
      description: 'Registration forms available online & at school administration office in Nimuiya Turkauliya.'
    },
    {
      id: 2,
      date: '15-06-2026',
      title: 'Class 1st to 8th Mathematics & Science Study Notes',
      tag: 'Study Material',
      linkText: 'View & Download Notes PDF',
      linkUrl: '#',
      description: 'Important revision questions and chapter summary notes prepared by subject faculty.'
    },
    {
      id: 3,
      date: '10-07-2026',
      title: 'School Educational Trip & Vishwa Shanti Stupa Visit',
      tag: 'School Event',
      linkText: 'Access Tour Photos & Circular',
      linkUrl: '#about',
      description: 'Students visited Vishwa Shanti Stupa as part of our annual cultural excursion.'
    }
  ]);

  // Admin Auth State
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [showAdminLoginModal, setShowAdminLoginModal] = useState(false);
  const [adminPassword, setAdminPassword] = useState('');
  const [authError, setAuthError] = useState('');

  // Upload Form State
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newTag, setNewTag] = useState('Study Material');
  const [newLink, setNewLink] = useState('');
  const [uploadedSuccess, setUploadedSuccess] = useState(false);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    if (adminPassword === 'vnps123' || adminPassword === 'admin2026' || adminPassword === '1234') {
      setIsAdminAuthenticated(true);
      setShowAdminLoginModal(false);
      setShowUploadModal(true);
      setAdminPassword('');
      setAuthError('');
    } else {
      setAuthError('Incorrect Admin Password! Only authorized school admin can upload notices.');
    }
  };

  const handleAddNotice = (e) => {
    e.preventDefault();
    if (!newTitle) return;

    const newItem = {
      id: Date.now(),
      date: new Date().toISOString().slice(0, 10),
      title: newTitle,
      tag: newTag,
      linkText: 'View Uploaded Note / Circular PDF',
      linkUrl: newLink || '#',
      description: 'Verified note uploaded by school administration.'
    };

    setNotices([newItem, ...notices]);
    setNewTitle('');
    setNewLink('');
    setUploadedSuccess(true);
    setTimeout(() => {
      setUploadedSuccess(false);
      setShowUploadModal(false);
    }, 2000);
  };

  return (
    <section id="notices" className="py-20 bg-white border-b border-slate-200 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-12 border-b border-slate-200 pb-6">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-900 uppercase tracking-wider mb-1">
              <Bell className="w-3.5 h-3.5 text-orange-600" />
              <span>Student & Parent Portal</span>
            </div>
            <h2 className="text-3xl font-heading font-black text-blue-950">
              Notice Board & Study Notes Download
            </h2>
            <p className="text-xs text-slate-600 mt-1">
              Access latest exam circulars, syllabus notes, and study material.
            </p>
          </div>

          <button
            onClick={() => {
              if (isAdminAuthenticated) {
                setShowUploadModal(true);
              } else {
                setShowAdminLoginModal(true);
              }
            }}
            className="bg-blue-900 hover:bg-blue-950 text-white font-bold px-4 py-2.5 rounded-xl text-xs flex items-center gap-2 shadow-sm transition-all"
          >
            <Lock className="w-4 h-4 text-orange-400" />
            <span>Admin Upload Note</span>
          </button>
        </div>

        {/* Notice List Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {notices.map((n) => (
            <div key={n.id} className="bg-slate-50 border border-slate-200 hover:border-blue-300 p-6 rounded-2xl space-y-4 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="bg-blue-100 text-blue-900 font-bold px-2.5 py-0.5 rounded border border-blue-200">
                    {n.tag}
                  </span>
                  <span className="font-mono text-slate-500 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-orange-600" />
                    {n.date}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {n.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {n.description}
                </p>
              </div>

              {/* Clickable Download/Access Link */}
              <div className="pt-3 border-t border-slate-200">
                <a
                  href={n.linkUrl}
                  onClick={(e) => {
                    if (n.linkUrl === '#') {
                      e.preventDefault();
                      alert(`Accessing: ${n.title}\nStudy note PDF link is ready!`);
                    }
                  }}
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 hover:text-blue-950 hover:underline bg-white border border-blue-200 px-3 py-2 rounded-xl w-full justify-center shadow-xs"
                >
                  <FileText className="w-4 h-4 text-blue-800" />
                  <span>{n.linkText}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Modal 1: Admin Authentication Modal */}
        {showAdminLoginModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white border border-slate-200 p-6 sm:p-8 rounded-3xl max-w-sm w-full shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                  <Lock className="w-4 h-4 text-orange-600" />
                  <span>Admin Verification</span>
                </div>
                <button onClick={() => setShowAdminLoginModal(false)} className="text-slate-400 hover:text-slate-600 font-bold text-sm">✕</button>
              </div>

              <p className="text-xs text-slate-600">
                Only school admin can upload notices & notes. Please enter admin key:
              </p>

              <form onSubmit={handleAdminLogin} className="space-y-4">
                <div>
                  <input
                    type="password"
                    required
                    placeholder="Enter Admin Password (e.g. vnps123)"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-blue-900 font-mono"
                  />
                  <div className="text-[11px] text-slate-400 mt-1 font-mono">Demo Admin Password: <span className="text-blue-900 font-bold">vnps123</span></div>
                </div>

                {authError && (
                  <div className="text-xs text-red-600 font-semibold flex items-center gap-1">
                    <ShieldAlert className="w-3.5 h-3.5 shrink-0" />
                    <span>{authError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full bg-blue-900 text-white font-bold py-2.5 rounded-xl text-xs shadow hover:bg-blue-950 transition-all"
                >
                  Verify & Access Upload
                </button>
              </form>

            </div>
          </div>
        )}

        {/* Modal 2: Authorized Admin Upload Form */}
        {showUploadModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
            <div className="bg-white border border-slate-200 p-6 rounded-3xl max-w-md w-full shadow-2xl space-y-4">
              
              <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                <h3 className="text-base font-heading font-black text-blue-950">Upload Note / Circular Link</h3>
                <button onClick={() => setShowUploadModal(false)} className="text-slate-400 hover:text-slate-600 text-sm font-bold">✕</button>
              </div>

              {uploadedSuccess ? (
                <div className="text-center py-6 space-y-2 text-emerald-700 font-bold text-sm">
                  <CheckCircle2 className="w-10 h-10 mx-auto text-emerald-600" />
                  <span>Note uploaded successfully! Added to Notice Board.</span>
                </div>
              ) : (
                <form onSubmit={handleAddNotice} className="space-y-4">
                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Notice / Note Title *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Class 5th Science Chapter 2 Notes"
                      value={newTitle}
                      onChange={(e) => setNewTitle(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Category</label>
                    <select
                      value={newTag}
                      onChange={(e) => setNewTag(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-blue-900 font-semibold"
                    >
                      <option value="Study Material">Study Material</option>
                      <option value="Admission Circular">Admission Circular</option>
                      <option value="Syllabus & Exam">Syllabus & Exam</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-700 block mb-1">Document Link / Drive URL (Optional)</label>
                    <input
                      type="url"
                      placeholder="https://drive.google.com/..."
                      value={newLink}
                      onChange={(e) => setNewLink(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-sm focus:outline-none focus:border-blue-900"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 rounded-xl text-xs shadow-md transition-all"
                  >
                    Publish Note to Notice Board
                  </button>
                </form>
              )}

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
