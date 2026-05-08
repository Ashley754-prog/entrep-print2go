import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard.jsx'
import NewPrintJob from './pages/NewPrintJob.jsx'
import History from './pages/History.jsx'
import Settings from './pages/Settings.jsx'
import HelpSupport from './pages/HelpSupport.jsx'
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/new-print-job" element={<NewPrintJob />} />
        <Route path="/history" element={<History />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/help" element={<HelpSupport />} />
      </Routes>
    </Router>
  );
}

export default App
