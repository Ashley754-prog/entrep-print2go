import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import { 
  User, 
  ShieldCheck, 
  BellRing, 
  Trash2, 
  Save
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

const Settings = () => {
  const [emailNotif, setEmailNotif] = useState(true);
  const [webNotif, setWebNotif] = useState(true);

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      <Watermark />

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-8 flex justify-center">
          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT: PROFILE INFORMATION */}
            <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <User size={20} className="text-red-800" /> Profile Information
              </h3>
              
              <div className="space-y-5 flex-1">
                <InputGroup label="Full Name" value="Rod Angelo Benedict Ignacio" />
                <InputGroup label="WMSU Student ID" value="017J315856" readOnly />
                <InputGroup label="Registered Email Address" value="rodangelo@example.edu.ph" />
                <InputGroup label="College / Department" value="College of Computing Studies" readOnly />
              </div>

              <button className="w-full bg-red-800 text-white font-bold py-3 rounded-xl mt-8 hover:bg-red-900 transition-all flex items-center justify-center gap-2 shadow-lg shadow-red-900/20">
                <Save size={18} /> Save Changes
              </button>
            </div>

            {/* RIGHT: SYSTEM PREFERENCES & SECURITY */}
            <div className="space-y-8">
              
              {/* NOTIFICATIONS SECTION */}
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <BellRing size={20} className="text-red-800" /> Notification Settings
                </h3>
                
                <div className="space-y-6">
                  <ToggleGroup 
                    label="Email Notifications (Receipts)" 
                    active={emailNotif} 
                    onClick={() => setEmailNotif(!emailNotif)} 
                  />
                  <ToggleGroup 
                    label="Web Notifications (Ready for Pickup)" 
                    active={webNotif} 
                    onClick={() => setWebNotif(!webNotif)} 
                  />
                </div>
              </div>

              {/* SECURITY / DANGER ZONE */}
              <div className="bg-white rounded-2xl border border-red-100 p-8 shadow-sm">
                <h3 className="text-lg font-bold mb-2 flex items-center gap-2">
                  <ShieldCheck size={20} className="text-red-800" /> Security & Privacy
                </h3>
                <p className="text-xs text-slate-400 mb-6 font-medium">Manage your digital footprint on the cloud server.</p>
                
                <div className="p-5 bg-red-50 rounded-xl border border-red-100">
                  <h4 className="text-sm font-bold text-red-900 mb-1 flex items-center gap-2">
                    <Trash2 size={14} /> Danger Zone
                  </h4>
                  <p className="text-[11px] text-red-700 leading-relaxed mb-4">
                    Permanently deletes all uploaded PDFs from the Cloudinary server to remove physical USB virus risks. (Recommended after print pickup).
                  </p>
                  <button className="w-full bg-white border border-red-200 text-red-800 font-bold py-2 rounded-lg text-xs hover:bg-red-800 hover:text-white transition-all uppercase tracking-widest">
                    Clear All Cloud Files Immediately
                  </button>
                </div>
              </div>

            </div>

          </div>
        </div>
      </main>
    </div>
  );
};


const InputGroup = ({ label, value, readOnly = false }) => (
  <div>
    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">{label}</label>
    <input 
      type="text" 
      defaultValue={value}
      readOnly={readOnly}
      className={`w-full p-3 rounded-lg border border-slate-200 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-red-800/20 transition-all ${
        readOnly ? 'bg-slate-50 text-slate-400 cursor-not-allowed' : 'bg-white text-slate-800'
      }`}
    />
  </div>
);

const ToggleGroup = ({ label, active, onClick }) => (
  <div className="flex items-center justify-between">
    <span className="text-sm font-semibold text-slate-600">{label}</span>
    <button 
      onClick={onClick}
      className={`w-12 h-6 rounded-full transition-all relative ${active ? 'bg-green-500' : 'bg-slate-300'}`}
    >
      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${active ? 'right-1' : 'left-1'}`} />
    </button>
  </div>
);

export default Settings;