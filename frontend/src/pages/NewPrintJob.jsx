import React, { useState } from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import { 
  Upload, 
  FileText, 
  X,
  CheckCircle,
  ChevronRight
} from 'lucide-react';

const NewPrintJob = () => {
  const [file, setFile] = useState(null);
  const [copies, setCopies] = useState(1);
  const [paperSize, setPaperSize] = useState('A4');
  const [colorMode, setColorMode] = useState('B&W');

  // Simple Price Calculator based on your paper data
  const basePrice = colorMode === 'B&W' ? 2 : 5;
  const totalPrice = basePrice * copies;

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-8 flex justify-center">
          <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* LEFT: UPLOAD ZONE */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl border-2 border-dashed border-slate-200 p-12 flex flex-col items-center justify-center text-center hover:border-red-800 transition-colors cursor-pointer group relative">
                <div className="bg-red-50 p-6 rounded-full mb-4 group-hover:bg-red-100 transition-colors">
                  <Upload className="text-red-800 w-10 h-10" />
                </div>
                <h3 className="text-lg font-bold">Drag & Drop your PDF or Image</h3>
                <p className="text-sm text-slate-500 mt-2">Maximum file size: 25MB</p>
                <button className="mt-6 bg-red-800 text-white px-6 py-2 rounded-full font-bold hover:bg-red-900 transition-all shadow-lg shadow-red-900/20">
                  Browse Files
                </button>
              </div>

              {/* Sample Uploaded File Card */}
              <div className="bg-white rounded-xl border border-slate-200 p-4 flex items-center gap-4 shadow-sm">
                <div className="bg-red-100 p-3 rounded-lg text-red-800"><FileText size={24} /></div>
                <div className="flex-1">
                  <p className="text-sm font-bold truncate">Thesis_Draft_V1.pdf</p>
                  <p className="text-xs text-slate-500">1.2 MB • Upload Complete</p>
                </div>
                <button className="text-slate-400 hover:text-red-800"><X size={20} /></button>
              </div>
            </div>

            {/* RIGHT: SETTINGS PANEL */}
            <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-8 flex flex-col">
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                Active Settings <span className="h-1 w-1 bg-slate-300 rounded-full"></span>
                <span className="text-xs font-normal text-slate-500 uppercase tracking-widest">WMSU Campus B</span>
              </h3>

              <div className="space-y-6 flex-1">
                <SettingGroup label="Paper Size">
                  <select 
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg p-3 outline-none focus:ring-2 focus:ring-red-800/20"
                    value={paperSize}
                    onChange={(e) => setPaperSize(e.target.value)}
                  >
                    <option>A4 (Standard)</option>
                    <option>Letter (Short)</option>
                    <option>Legal (Long)</option>
                  </select>
                </SettingGroup>

                <SettingGroup label="Color Mode">
                  <div className="grid grid-cols-2 gap-4">
                    <SelectTab active={colorMode === 'B&W'} onClick={() => setColorMode('B&W')} label="Black & White" />
                    <SelectTab active={colorMode === 'Colored'} onClick={() => setColorMode('Colored')} label="Colored" />
                  </div>
                </SettingGroup>

                <SettingGroup label="Copies">
                  <div className="flex items-center gap-4">
                    <button onClick={() => setCopies(Math.max(1, copies - 1))} className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center font-bold hover:bg-slate-50">-</button>
                    <span className="text-lg font-bold w-8 text-center">{copies}</span>
                    <button onClick={() => setCopies(copies + 1)} className="w-10 h-10 rounded-lg border border-slate-200 flex items-center justify-center font-bold hover:bg-slate-50">+</button>
                  </div>
                </SettingGroup>

                {/* Price Summary */}
                <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-slate-500 font-medium">Estimated Price:</span>
                    <span className="text-2xl font-black text-slate-900">₱{totalPrice.toFixed(2)}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-wider flex items-center gap-1">
                    <CheckCircle size={10} className="text-green-500" /> Ready for secure processing
                  </p>
                </div>
              </div>

              <button className="w-full bg-red-800 text-white font-bold py-4 rounded-xl mt-8 hover:bg-red-900 transition-all shadow-xl shadow-red-900/30 flex items-center justify-center gap-2">
                SUBMIT PRINT ORDER
              </button>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
};


const SettingGroup = ({ label, children }) => (
  <div className="mb-6">
    <label className="block text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">{label}</label>
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