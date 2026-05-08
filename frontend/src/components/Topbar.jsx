import React from 'react';
import { Search, Bell, Printer, } from 'lucide-react';

const Topbar = () => {
  return (
    <header className="bg-white h-[72px] border-b border-slate-200 flex items-center justify-between px-6 sticky top-0 z-10">
      {/* --- SEARCH BAR --- */}
      <div className="relative w-[500px]">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
        <input 
          type="text" 
          placeholder="Search documents..." 
          className="w-full bg-slate-50 border border-slate-200 rounded-full py-2 pl-10 pr-4 focus:outline-none focus:ring-2 focus:ring-red-800/20 transition-all placeholder:text-slate-400 text-sm"
        />
      </div>

      <div className="flex items-center gap-3 group cursor-pointer">
        <div className="w-10 h-10 bg-red-800 rounded-lg flex items-center justify-center shadow-lg shadow-red-900/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-red-900/40 group-hover:rotate-3 animate-pulse">
            <Printer className="text-white transition-all duration-300 group-hover:scale-110" size={25} />
        </div>
        <div className="transition-all duration-300 group-hover:translate-x-1">
            <h1 className="font-bold text-slate-900 text-lg transition-all duration-300 group-hover:text-red-800 animate-pulse">P r i n t <span className="text-red-800 text-2xl">2</span> G o</h1>
        </div>
      </div>

      {/* --- RIGHT SECTION: NOTIFICATIONS & PROFILE --- */}
      <div className="flex items-center gap-6">
        {/* Glowing Notification Bell */}
        <button className="relative p-2 text-slate-600 hover:bg-slate-50 rounded-full transition-all group">
          <Bell size={22} className="group-hover:text-red-800" />
          {/* Green Indicator Dot with Glow Effect */}
          <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white shadow-[0_0_8px_rgba(34,197,94,0.6)]"></span>
        </button>

        {/* User Profile Section */}
        <div className="flex items-center gap-3 pl-6 border-l border-slate-100">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-slate-900 leading-none mb-1">
              Russell
            </p>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
              Student
            </p>
          </div>
          
          {/* Avatar Icon */}
          <div className="w-10 h-10 rounded-full bg-red-900 flex items-center justify-center text-white font-bold shadow-md shadow-red-900/20 border-2 border-white">
            R
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;