import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import { 
  MapPin, 
  MessageSquare, 
  Info,
  ShieldCheck,
  CreditCard
} from 'lucide-react';

// --- BACKGROUND DECORATION COMPONENTS ---
const Watermark = () => (
  <div className="fixed bottom-[-50px] left-[-50px] opacity-[0.1] pointer-events-none z-0">
    <img 
      src="/wmsu-img.jpg" 
      alt="WMSU Seal"
      className="w-full h-full opacity-80"
    />
  </div>
);

const HelpSupport = () => {
  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      <Watermark /> 

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-8 flex justify-center">
          <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT: CONTACT & FEEDBACK FORM */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <MessageSquare size={20} className="text-red-800" /> Contact & Feedback
              </h3>
              
              <form className="space-y-5">
                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Your Issue/Question</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-red-800/20">
                    <option>Printer Error at Counter</option>
                    <option>Payment/Balance Issue</option>
                    <option>Feature Request</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Document ID (Optional)</label>
                  <input type="text" placeholder="e.g. #P2G-8812" className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-red-800/20" />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2">Message</label>
                  <textarea rows="4" placeholder="Describe your issue in detail..." className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-red-800/20 resize-none"></textarea>
                </div>

                <button type="button" className="w-full bg-red-800 text-white font-bold py-3 rounded-xl mt-4 hover:bg-red-900 transition-all shadow-lg shadow-red-900/20">
                  Submit Ticket
                </button>
              </form>
            </div>

            {/* RIGHT: FAQS & LOCATION */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Info size={20} className="text-red-800" /> Frequently Asked Questions
              </h3>
              
              <div className="space-y-6">
                {/* 1. MAP SECTION */}
                <div className="space-y-3">
                  <h4 className="text-sm font-bold flex items-center gap-2"><MapPin size={16} className="text-red-800" /> 1. Where is the Campus B counter?</h4>
                  <div className="w-full h-40 bg-slate-100 rounded-xl border border-slate-200 overflow-hidden flex items-center justify-center relative">
                     {/* This is a placeholder for your Google Maps embed */}
                     <span className="text-[10px] uppercase font-black text-slate-300">WMSU Campus B Map Placeholder</span>
                     <div className="absolute inset-0 bg-red-800/5 flex items-center justify-center">
                        <MapPin className="text-red-800 opacity-20" size={48} />
                     </div>
                  </div>
                </div>

                {/* 2. PAYMENT */}
                <FAQItem 
                  icon={<CreditCard size={16} className="text-red-800" />}
                  q="2. How do I pay?"
                  a="Currently, we accept Cash-on-Pickup at the counter. Simply show your Document ID to the operator."
                />

                {/* 3. SECURITY */}
                <FAQItem 
                  icon={<ShieldCheck size={16} className="text-red-800" />}
                  q="3. Is my data secure?"
                  a="Yes. Files are encrypted during upload and can be manually cleared in Settings after your print is finished."
                />
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100">
                <p className="text-[10px] text-center font-bold text-slate-400 uppercase tracking-[0.2em]">Detailed User Guide (PDF) | System Status: ONLINE</p>
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};

const FAQItem = ({ icon, q, a }) => (
  <div className="space-y-2">
    <h4 className="text-sm font-bold flex items-center gap-2">{icon} {q}</h4>
    <p className="text-xs text-slate-500 leading-relaxed pl-6">{a}</p>
  </div>
);

export default HelpSupport;