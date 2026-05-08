import React, { useState } from 'react';
import { 
  Menu, 
  LayoutDashboard, 
  Plus, 
  History, 
  Settings, 
  HelpCircle
} from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <aside className={`bg-white border-r border-slate-200 flex flex-col transition-all duration-300 ${
      isCollapsed ? 'w-16' : 'w-64'
    }`}>
      {/* Header - Just the toggle button */}
      <div className="p-4 border-b border-slate-100 flex">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
        >
          <Menu size={18} className="text-slate-600" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1">
        <NavItem 
          icon={<LayoutDashboard size={20} />} 
          label="Dashboard" 
          to="/dashboard"
          isActive={isActive('/dashboard')}
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<Plus size={20}/>} 
          label="New Print Job" 
          to="/new-print-job"
          isActive={isActive('/new-print-job')}
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<History size={20}/>} 
          label="History" 
          to="/history"
          isActive={isActive('/history')}
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<Settings size={20}/>} 
          label="Settings" 
          to="/settings"
          isActive={isActive('/settings')}
          isCollapsed={isCollapsed}
        />
        <NavItem 
          icon={<HelpCircle size={20}/>} 
          label="Help & Support" 
          to="/help"
          isActive={isActive('/help')}
          isCollapsed={isCollapsed}
        />
      </nav>
    </aside>
  );
};

const NavItem = ({ icon, label, to, isActive, isCollapsed }) => (
  <Link
    to={to}
    className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
      isActive 
        ? 'bg-slate-100 text-slate-900 font-semibold' 
        : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
    } ${isCollapsed ? 'justify-center' : ''}`}
  >
    <div className={`${isActive ? 'text-slate-900' : 'text-slate-600'}`}>
      {icon}
    </div>
    {!isCollapsed && (
      <span className="text-base font-medium">{label}</span>
    )}
  </Link>
);

export default Sidebar;