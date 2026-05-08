import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import { 
  Upload, 
  FileText, 
  X,
  CheckCircle,
  ChevronRight,
  Activity
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

const NewPrintJob = () => {
  const [file, setFile] = useState(null);
  const [copies, setCopies] = useState(1);
  const [paperSize, setPaperSize] = useState('A4');
  const [colorMode, setColorMode] = useState('B&W');

  const basePrice = colorMode === 'B&W' ? 2 : 5;
  const totalPrice = basePrice * copies;

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      <Watermark />

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-8 flex justify-center">
          {/* GRID CONTAINER: Added items-stretch for equal height */}
          <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 items-stretch pb-8">
            
            {/* LEFT SIDE: UPLOAD ZONE & SETTINGS */}
            <div className="flex flex-col">
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col md:flex-row h-full">
                
                {/* --- LEFT SUB-SIDE: UPLOAD ZONE --- */}
                <div className="flex-1 p-8 border-r border-slate-100">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-6">Upload Zone</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-slate-50 border-2 border-dashed border-slate-200 rounded-2xl p-12 flex flex-col items-center justify-center text-center group hover:border-red-800 transition-all cursor-pointer">
                      <div className="bg-white p-4 rounded-full shadow-sm mb-4 group-hover:scale-110 transition-transform">
                        <Upload className="text-slate-400 w-12 h-12" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-700">
                        Drag & Drop your PDF or Image here
                      </h3>
                      <p className="text-slate-500 font-bold text-sm">
                        or <span className="text-red-800 underline">Browse Files</span>
                      </p>
                      <p className="text-[10px] text-slate-400 mt-4 uppercase font-bold tracking-widest">
                        Supported: PDF, JPG, PNG (Max 25MB)
                      </p>
                    </div>

                    {/* SAMPLE UPLOADED FILE */}
                    <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4 shadow-sm">
                      <div className="bg-red-800 p-2 rounded text-white shadow-md">
                        <FileText size={20} />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-xs font-bold text-slate-800">Thesis_Draft_V1.pdf</p>
                          <button className="text-slate-400 hover:text-red-800"><X size={14}/></button>
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold mb-2">1.2 MB</p>
                        <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                          <div className="bg-slate-700 h-full w-[85%] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* --- RIGHT SUB-SIDE: ACTIVE SETTINGS --- */}
                <div className="w-full md:w-80 bg-slate-50/50 p-8 flex flex-col">
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-tight mb-6">Active Settings</h3>
                  
                  <div className="space-y-5 flex-1">
                    <SettingField label="Paper Size">
                      <select className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm font-bold shadow-sm outline-none">
                        <option>A4</option>
                        <option>Letter</option>
                        <option>Legal</option>
                      </select>
                    </SettingField>

                    <SettingField label="Color Mode">
                      <select className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm font-bold shadow-sm outline-none">
                        <option>Black & White</option>
                        <option>Colored</option>
                      </select>
                    </SettingField>

                    <SettingField label="Print Quality">
                      <select className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm font-bold shadow-sm outline-none">
                        <option>Standard</option>
                        <option>High Definition</option>
                      </select>
                    </SettingField>

                    <SettingField label="Copies">
                      <select className="w-full bg-white border border-slate-200 rounded-lg p-2.5 text-sm font-bold shadow-sm outline-none">
                        {[1, 2, 3, 4, 5].map(n => <option key={n}>{n}</option>)}
                      </select>
                    </SettingField>

                    <div className="pt-6 border-t border-slate-200 mt-6">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Price Summary</h4>
                      <div className="flex justify-between items-end mb-2">
                        <span className="text-sm font-bold text-slate-600">Total:</span>
                        <span className="text-xl font-black text-slate-900 leading-none">₱{totalPrice.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-bold text-slate-600">Status:</span>
                        <span className="text-xs font-bold text-green-600">[Ready to Print]</span>
                      </div>
                    </div>
                  </div>

                  <button className="w-full bg-red-900 text-white font-black py-4 rounded-xl mt-8 hover:bg-red-950 transition-all uppercase tracking-widest text-xs shadow-lg shadow-red-900/20">
                    Submit Print Order
                  </button>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: LIVE STATUS TRACKER */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 h-full">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <Activity className="text-red-800 mr-2" size={20} /> Live Status Tracker
              </h3>
              
              <div className="space-y-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                  <h4 className="text-sm font-bold text-green-800 mb-2">System Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-green-700">All Systems Operational</span>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                  <h4 className="text-sm font-bold text-blue-800 mb-2">Current Queue</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                      <span className="text-sm font-medium truncate mr-2">Thesis_Draft_V1.pdf</span>
                      <span className="text-[10px] text-green-600 font-bold whitespace-nowrap">PRINTING...</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-slate-100">
                      <span className="text-sm font-medium truncate mr-2">Assignment_Ch1.pdf</span>
                      <span className="text-[10px] text-blue-600 font-bold whitespace-nowrap">IN QUEUE</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-yellow-50 rounded-xl p-6 border border-yellow-100">
                  <h4 className="text-sm font-bold text-yellow-800 mb-2">Recent Activity</h4>
                  <div className="space-y-3">
                    <div className="flex flex-col p-3 bg-white rounded-lg border border-slate-100">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium truncate mr-2">Syllabus_IT3.pdf</span>
                        <span className="text-[10px] text-green-600 font-bold">COMPLETED</span>
                      </div>
                      <span className="text-[10px] text-slate-500 mt-1">2:30 PM • 2 copies</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </main>
    </div>
  );
};

const SettingField = ({ label, children }) => (
  <div>
    <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 ml-1">{label}</label>
    {children}
  </div>
);

const SelectTab = ({ active, label, onClick }) => (
  <button 
    onClick={onClick}
    className={`p-3 rounded-lg border-2 font-bold text-sm transition-all ${
      active ? 'border-red-800 bg-red-50 text-red-800' : 'border-slate-100 text-slate-500 hover:border-slate-200'
    }`}
  >
    {label}
  </button>
);

export default NewPrintJob;