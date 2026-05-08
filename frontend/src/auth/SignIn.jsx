import React from 'react';
import { Printer, Globe, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="relative min-h-screen bg-slate-100 flex items-center justify-center font-sans overflow-hidden">
      {/* --- DECORATIVE BACKGROUND ELEMENTS --- */}
      <div className="absolute top-10 left-10 opacity-20">
        <svg width="200" height="200" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="20" cy="20" r="3" fill="currentColor"/>
          <circle cx="80" cy="20" r="3" fill="currentColor"/>
          <circle cx="20" cy="80" r="3" fill="currentColor"/>
          <circle cx="80" cy="80" r="3" fill="currentColor"/>
          <circle cx="50" cy="50" r="3" fill="currentColor"/>
        </svg>
      </div>
      <div className="absolute bottom-[-100px] left-[-100px] opacity-[0.04] text-red-900">
        <svg width="300" height="300" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="2" fill="none"/>
          <text x="100" y="100" textAnchor="middle" fontSize="24" fill="currentColor" fontFamily="serif">WMSU</text>
        </svg>
      </div>
      <div className="absolute top-[-50px] right-[-50px] opacity-10">
        <svg width="150" height="150" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="20" y="20" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(45 35 35)"/>
          <rect x="50" y="50" width="30" height="30" stroke="currentColor" strokeWidth="2" fill="none" transform="rotate(45 65 65)"/>
          <circle cx="50" cy="50" r="15" stroke="currentColor" strokeWidth="2" fill="none"/>
        </svg>
      </div>

      {/* --- SIGN IN CARD --- */}
      <div className="bg-white w-full max-w-md rounded-3xl border border-slate-200 shadow-2xl p-10 z-10 mx-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-black text-red-900 uppercase tracking-tight">Welcome Back to Print2Go</h2>
          <p className="text-sm text-slate-500 font-medium">Sign in to access your 'Student Command Center'</p>
        </div>

        <form className="space-y-5">
          <div>
            <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest mb-2 ml-1">Student Email (wmsu.edu.ph)</label>
            <input type="email" placeholder="student.id@wmsu.edu.ph" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-red-800/20 transition-all" />
          </div>

          <div>
            <div className="flex justify-between mb-2 ml-1">
              <label className="block text-xs font-bold text-slate-400 uppercase tracking-widest">Password</label>
              <button type="button" className="text-[10px] font-bold text-red-800 uppercase hover:underline">Forgot Password?</button>
            </div>
            <input type="password" placeholder="•••••••" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 text-sm font-semibold outline-none focus:ring-2 focus:ring-red-800/20 transition-all" />
          </div>

          <Link to="/dashboard" className="block w-full bg-red-900 text-white text-center font-bold py-4 rounded-xl shadow-lg shadow-red-900/30 hover:bg-red-950 transition-all uppercase tracking-widest text-xs">
            Sign In
          </Link>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
          <div className="relative flex justify-center text-xs uppercase font-bold"><span className="bg-white px-4 text-slate-400">Or Continue With</span></div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SocialButton icon={<Globe size={18}/>} label="WMSU Portal" />
          <SocialButton icon={<img src="https://www.google.com/favicon.ico" className="w-4 h-4" alt="G"/>} label="Google" />
        </div>

        <p className="mt-8 text-center text-xs font-bold text-slate-400">
          New to Campus Print? <Link to="/signup" className="text-red-800 hover:underline">Register now.</Link>
        </p>
      </div>
    </div>
  );
};

const SocialButton = ({ icon, label }) => (
  <button className="flex items-center justify-center gap-2 border border-slate-200 rounded-xl py-3 px-2 hover:bg-slate-50 transition-all text-xs font-bold text-slate-700">
    {icon} {label}
  </button>
);

export default SignIn;
