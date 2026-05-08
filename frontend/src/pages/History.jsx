import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import { 
  FileText, 
  RefreshCcw,
  Search
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

const History = () => {
  // Sample Data for your Table
  const historyData = [
    { id: 1, date: "Nov 10, 2023", name: "Thesis_Draft_V1.pdf", settings: "A4, B&W, 2 Copies", total: "₱4.00", status: "PAID & PICKED UP", color: "text-green-600" },
    { id: 2, date: "Nov 10, 2023", name: "Syllabus_IT3.pdf", settings: "A4, B&W, 2 Copies", total: "₱4.00", status: "PAID & PICKED UP", color: "text-green-600" },
    { id: 3, date: "Nov 10, 2023", name: "Assignment_Ch1.pdf", settings: "A4, B&W, 2 Copies", total: "₱4.00", status: "PAID & PICKED UP", color: "text-green-600" },
    { id: 4, date: "Nov 10, 2023", name: "Notes_Day3.pdf", settings: "A4, B&W, 2 Copies", total: "₱4.00", status: "CANCELLED", color: "text-orange-500" },
    { id: 5, date: "Nov 12, 2023", name: "Research_Abstract.pdf", settings: "A4, B&W, 2 Copies", total: "₱4.00", status: "PAID & PICKED UP", color: "text-green-600" },
  ];

  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      <Watermark />

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden relative">
        <Topbar />

        <div className="flex-1 overflow-y-auto p-8">
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-slate-100">
               <div className="flex justify-between items-center mb-4">
                 <h2 className="text-xl text-slate-900 font-bold">Print History</h2>
                 <button className="bg-green-800 text-white px-4 py-2 rounded-lg font-bold text-sm hover:bg-green-900 transition-colors">
                   Export CSV
                 </button>
               </div>
               
               <div className="flex gap-4 mb-4">
                 <div className="flex-1">
                   <div className="relative">
                     <input 
                       type="text" 
                       placeholder="Search by filename..."
                       className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800/20 bg-slate-50"
                     />
                     <Search className="absolute left-3 top-2.5 text-slate-100" size={18} />
                   </div>
                 </div>
                 <div className="flex-1">
                   <input 
                     type="date" 
                     placeholder="Filter by date..."
                     className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-800/20 bg-slate-50"
                   />
                 </div>
               </div>
            </div>
            
            <table className="w-full text-left">
              <thead className="bg-slate-50 border-b border-slate-100 text-xs font-bold text-slate-400 uppercase">
                <tr>
                  <th className="px-8 py-4">Date</th>
                  <th className="px-8 py-4">Filename</th>
                  <th className="px-8 py-4">Settings</th>
                  <th className="px-8 py-4">Total</th>
                  <th className="px-8 py-4 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {historyData.map((job) => (
                  <tr key={job.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-8 py-5 text-sm font-medium text-slate-600">{job.date}</td>
                    <td className="px-8 py-5">
                      <p className="font-bold text-slate-900">{job.name}</p>
                      <p className={`text-[10px] font-black uppercase tracking-tighter ${job.color}`}>{job.status}</p>
                    </td>
                    <td className="px-8 py-5 text-sm text-slate-500 font-medium">{job.settings}</td>
                    <td className="px-8 py-5 font-black text-slate-900 text-lg">{job.total}</td>
                    <td className="px-8 py-5">
                      <div className="flex items-center justify-center gap-2 opacity-40 group-hover:opacity-100 transition-opacity">
                         <button title="Download Receipt" className="p-2 hover:bg-slate-200 rounded-lg text-slate-600"><FileText size={18}/></button>
                         <button title="Re-print" className="p-2 hover:bg-red-50 rounded-lg text-red-800"><RefreshCcw size={18}/></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default History;