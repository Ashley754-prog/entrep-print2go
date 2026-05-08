import React from 'react';
import { ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div className="relative min-h-screen bg-slate-100 flex items-center justify-center font-sans overflow-hidden">
      {/* --- BACKGROUND DECO --- */}
      <div className="absolute top-[-100px] left-[-100px] opacity-[0.04] text-red-900">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none"/>
          <text x="100" y="100" textAnchor="middle" fontSize="24" fill="currentColor" fontFamily="serif">WMSU</text>
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 opacity-20">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          <circle cx="80" cy="20" r="3" fill="currentColor"/>
          <circle cx="20" cy="80" r="3" fill="currentColor"/>
          <circle cx="80" cy="80" r="3" fill="currentColor"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
        </svg>
      </div>

      <div className="bg-white w-full max-w-md rounded-3xl border border-slate-200 shadow-2xl p-10 z-10 mx-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-red-900 uppercase tracking-tight leading-tight">Create Your Student Account</h2>
          <p className="text-sm text-slate-500 font-medium mt-2">Join digital print queue at WMSU</p>
        </div>

        <form className="space-y-4">
          <SignUpInput label="Full Name (as on Student ID)" type="text" placeholder="e.g., Rod Angelo Benedict" />
          <SignUpInput label="Student Email (wmsu.edu.ph)" type="email" placeholder="202XXXXX@wmsu.edu.ph" />
          <SignUpInput label="Set Password" type="password" placeholder="•••••••" />
          <SignUpInput label="Confirm Password" type="password" placeholder="•••••••" />

          <div className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100 my-4">
            <input type="checkbox" className="mt-1 accent-red-800" defaultChecked />
            <p className="text-[10px] text-slate-500 leading-relaxed font-medium">
              I agree to <span className="text-red-800 font-bold hover:underline cursor-pointer">Terms of Service</span> and <span className="text-red-800 font-bold hover:underline cursor-pointer">Data Privacy Policy</span>. All files uploaded are cleared from the server after printing.
            </p>
          </div>

          <button className="w-full bg-red-900 text-white font-bold py-4 rounded-xl shadow-lg shadow-red-900/30 hover:bg-red-950 transition-all uppercase tracking-widest text-xs">
            Create Account
          </button>
        </form>

        <div className="mt-6 p-4 border-2 border-dashed border-slate-100 rounded-2xl flex items-center gap-3">
          <ShieldCheck className="text-red-800 shrink-0" size={24} />
          <p className="text-[10px] text-slate-400 font-bold leading-tight">
            Your Print2Go profile links with your WMSU Wallet and past history for easier transactions.
          </p>
        </div>

        <p className="mt-8 text-center text-xs font-bold text-slate-400">
          Already have an account? <Link to="/signin" className="text-red-800 hover:underline">Sign in here.</Link>
        </p>
      </div>
    </div>
  );
};

const SignUpInput = ({ label, type, placeholder }) => (
  <div>
    <label className="block text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 ml-1">{label}</label>
    <input type={type} placeholder={placeholder} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-red-800/20 transition-all" />
  </div>
);

export default SignUp;
