import React from 'react';
import Sidebar from '../components/Sidebar.jsx';
import Topbar from '../components/Topbar.jsx';
import { 
  Printer,
  Plus, 
  CloudUpload,
  Clock,
  CheckCircle2
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

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-slate-100 font-sans text-slate-800">
      <Watermark />

      {/* --- SIDEBAR --- */}
      <Sidebar />

      {/* --- MAIN CONTENT --- */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <Topbar />

        {/* Dashboard Body */}
        <div className="flex-1 overflow-y-auto p-8 relative">
          {/* Background Decorative Elements */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Top Right Decorative Circle */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-red-100 to-transparent rounded-full opacity-30 blur-xl"></div>
            
            {/* Bottom Left Decorative Pattern */}
            <div className="absolute bottom-20 left-10 w-40 h-40 bg-gradient-to-tr from-blue-100 to-transparent rounded-full opacity-20 blur-2xl"></div>
            
            {/* Floating Sticker Elements */}
            <div className="absolute top-32 right-20 transform rotate-12">
              <div className="w-16 h-16 bg-yellow-300 rounded-lg shadow-lg flex items-center justify-center">
                <Printer className="text-yellow-700" size={24} />
              </div>
            </div>
            
            <div className="absolute bottom-40 left-32 transform -rotate-6">
              <div className="w-14 h-14 bg-green-300 rounded-full shadow-lg flex items-center justify-center">
                <Clock className="text-green-700" size={20} />
              </div>
            </div>
          </div>

          {/* Content with relative positioning for layering */}
          <div className="relative z-10">
            <h2 className="text-4xl text-black font-bold mb-6">Student Command Center</h2>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <StatCard label="Active Orders" value="1" icon={<Clock className="text-red-800" />} />
            <StatCard label="Total Documents Printed" value="23" icon={<Printer className="text-red-800" />} />
            <WalletCard label="WMSU Wallet Balance" value="₱150.00" button />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left: Active Jobs List */}
            <div className="lg:col-span-2 space-y-6">
              <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
                <h3 className="text-lg font-bold mb-4 uppercase text-slate-500 tracking-wider text-xs">My Print Jobs</h3>
                <div className="space-y-6">
                  <ActiveJob 
                    name="Thesis_Draft_V1.pdf" 
                    status="PRINTING..." 
                    progress={65} 
                    statusColor="text-blue-600"
                  />
                  <ActiveJob 
                    name="Assignment_Ch1.pdf" 
                    status="READY FOR PICKUP" 
                    progress={100} 
                    statusColor="text-green-600"
                    completed
                  />
                  <ActiveJob 
                    name="Notes_Day3.pdf" 
                    status="IN QUEUE" 
                    progress={0} 
                    statusColor="text-slate-400"
                  />
                </div>
              </div>

              {/* Recently Printed Table - Modified to stretch right */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden lg:-mr-[400px] lg:sidebar-collapsed:mr-0 relative z-10">
                <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                  <h3 className="text-lg font-bold uppercase text-slate-500 tracking-wider text-xs">Recently Printed</h3>
                </div>
                <table className="w-full text-left">
                  <thead className="bg-slate-50 border-b border-slate-100">
                    <tr className="text-xs uppercase font-bold text-slate-400">
                      <th className="px-6 py-3">Name</th>
                      <th className="px-6 py-3">Size</th>
                      <th className="px-6 py-3">Status</th>
                      <th className="px-6 py-3">Price</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    <RecentRow name="Syllabus_IT3.pdf" size="A4" status="B&W" price="₱2.00" />
                    <RecentRow name="Research_Abstract.pdf" size="Letter" status="B&W" price="₱1.50" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Right: Quick Upload Card */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm text-center flex flex-col items-center border-dashed border-2 hover:border-red-800 transition-colors cursor-pointer group">
                <Plus className="text-red-800 mb-2 group-hover:scale-110 transition-transform" size={32} />
                <h3 className="text-lg font-bold text-red-900">Quick Start New Job</h3>
                <div className="my-6 bg-slate-50 p-6 rounded-full">
                    <CloudUpload size={48} className="text-slate-300" />
                </div>
                <p className="text-sm text-slate-500 mb-2">Upload PDF for standard A4, B&amp;W (₱2.00)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
     </main>
    </div>
  );
};

// --- HELPER COMPONENTS ---


const StatCard = ({ label, value, icon, button = false }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-tight">{label}</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-bold">{value}</h4>
        {button && button}
      </div>
    </div>
    <div className="bg-red-50 p-3 rounded-xl">
      {icon}
    </div>
  </div>
);

const WalletCard = ({ label, value, button = false }) => (
  <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
    <div>
      <p className="text-xs font-bold text-slate-400 uppercase mb-1 tracking-tight">{label}</p>
      <div className="flex items-baseline gap-2">
        <h4 className="text-3xl font-bold">{value}</h4>
      </div>
    </div>
    <div className="flex items-end justify-end">
      {button && <button className="bg-red-800 text-white px-3 py-2 rounded-lg font-bold hover:bg-red-900 transition-all shadow-lg shadow-red-900/20">Top Up</button>}
    </div>
  </div>
);


const ActiveJob = ({ name, status, progress, statusColor, completed = false }) => (
  <div className="flex items-center justify-between h-16">
    <div className="flex-1 mr-8">
      <div className="flex justify-between mb-2">
        <span className="font-bold text-sm">1. {name}</span>
        <span className={`text-[10px] font-bold uppercase tracking-tighter ${statusColor}`}>{status}</span>
      </div>
      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
        <div 
          className={`h-full transition-all duration-1000 ${completed ? 'bg-green-500' : 'bg-red-800'}`} 
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
    {completed && <CheckCircle2 className="text-green-500" size={24} />}
  </div>
);

const RecentRow = ({ name, size, status, price }) => (
  <tr className="text-sm hover:bg-slate-50 transition-colors">
    <td className="px-6 py-4 font-semibold">{name}</td>
    <td className="px-6 py-4 text-slate-500">{size}</td>
    <td className="px-6 py-4 font-bold text-slate-700">{status}</td>
    <td className="px-6 py-4 font-bold text-slate-900">{price}</td>
  </tr>
);

export default Dashboard;