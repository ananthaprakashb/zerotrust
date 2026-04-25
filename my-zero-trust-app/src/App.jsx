import React, { useState } from 'react';
import { 
  ShieldAlert, 
  Cpu, 
  Lock, 
  UserCheck, 
  Smartphone, 
  Network, 
  Activity, 
  ArrowRight,
  Database,
  BrainCircuit,
  Eye
} from 'lucide-react';

const App = () => {
  const [activeStep, setActiveStep] = useState(0);

  const signals = [
    { icon: <UserCheck size={18} />, label: "User Identity", detail: "Biometrics & Auth" },
    { icon: <Smartphone size={18} />, label: "Device Posture", detail: "OS Patch Level" },
    { icon: <Network size={18} />, label: "Network Context", detail: "IP & Geolocation" },
    { icon: <Activity size={18} />, label: "Behavioral Analytics", detail: "Atypical Access" }
  ];

  return (
    <div className="flex flex-col items-center p-6 bg-slate-900 min-h-[600px] font-sans text-slate-200 rounded-xl overflow-hidden">
      <div className="mb-8 text-center">
        <h2 className="text-2xl font-bold text-white mb-2">The Brain of Zero Trust</h2>
        <p className="text-slate-400 text-sm">Conceptualizing PDP and PEP Interaction (NIST 800-207)</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 w-full max-w-5xl items-center relative">
        
        {/* --- LEFT: SIGNALS & INPUTS --- */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-2">Contextual Signals</h3>
          {signals.map((s, idx) => (
            <div 
              key={idx}
              className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex items-center gap-4 hover:border-blue-500 transition-colors cursor-default"
            >
              <div className="p-2 bg-blue-500/10 text-blue-400 rounded-lg">
                {s.icon}
              </div>
              <div>
                <p className="text-sm font-semibold">{s.label}</p>
                <p className="text-[10px] text-slate-500">{s.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- CENTER: THE BRAIN (PDP) --- */}
        <div className="relative flex flex-col items-center">
          {/* Pulsing glow background */}
          <div className="absolute inset-0 bg-blue-500/20 blur-[100px] rounded-full"></div>
          
          <div className="z-10 bg-gradient-to-b from-blue-600 to-blue-800 p-8 rounded-3xl shadow-2xl border border-blue-400/30 flex flex-col items-center text-center w-full aspect-square justify-center">
            <div className="p-4 bg-white/10 rounded-2xl mb-4 backdrop-blur-md">
              <BrainCircuit size={48} className="text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">PDP</h3>
            <p className="text-[10px] text-blue-100 uppercase tracking-widest font-bold mb-3">Policy Decision Point</p>
            <div className="h-px w-12 bg-blue-300/30 mb-3"></div>
            <p className="text-xs text-blue-100 leading-relaxed italic">
              "The Strategy: Evaluates trust score based on dynamic risk algorithms."
            </p>
          </div>

          {/* Connection Lines (Simulated) */}
          <div className="mt-8 flex flex-col items-center">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-emerald-500 animate-pulse"></div>
            <div className="p-2 bg-slate-800 rounded-full border border-slate-700 text-[10px] font-mono text-emerald-400">
              TRUST_DECISION: ALLOW
            </div>
            <div className="w-1 h-8 bg-emerald-500"></div>
          </div>
        </div>

        {/* --- RIGHT: THE GATEKEEPER (PEP) --- */}
        <div className="flex flex-col space-y-6">
          <div className="bg-slate-800 p-6 rounded-2xl border-2 border-emerald-500/30 relative">
             <div className="absolute -top-3 left-6 bg-emerald-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                POLICY ENFORCEMENT
             </div>
             <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-xl">
                  <Lock size={28} />
                </div>
                <div>
                  <h3 className="text-lg font-bold">PEP</h3>
                  <p className="text-[10px] text-slate-500">Gateway/Agent/Proxy</p>
                </div>
             </div>
             <p className="text-xs text-slate-400 leading-relaxed mb-4">
               The "Tactical Gatekeeper" that sits in the data path. It intercepts access requests and enforces the Brain's decisions.
             </p>
             <div className="grid grid-cols-2 gap-2 text-[9px] font-bold text-emerald-300 uppercase tracking-tighter">
                <div className="bg-emerald-950/50 p-2 rounded text-center border border-emerald-900">Session Monitor</div>
                <div className="bg-emerald-950/50 p-2 rounded text-center border border-emerald-900">Terminator</div>
             </div>
          </div>

          <div className="bg-slate-800/30 p-4 rounded-xl border border-slate-700 border-dashed flex items-center gap-3">
            <Database size={20} className="text-slate-500" />
            <div className="flex-1 h-2 bg-slate-700 rounded-full overflow-hidden">
               <div className="h-full bg-emerald-500 w-2/3"></div>
            </div>
            <p className="text-[10px] text-slate-500 uppercase">Resource</p>
          </div>
        </div>

      </div>

      {/* --- LEGEND / RESEARCH HOOK --- */}
      <div className="mt-16 bg-white/5 p-6 rounded-2xl border border-white/10 w-full max-w-5xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-4">
            <div className="p-2 bg-amber-500/10 text-amber-500 rounded-lg">
              <Eye size={20} />
            </div>
            <div>
              <p className="text-sm font-bold text-amber-500">The 2026 Research Frontier</p>
              <p className="text-xs text-slate-400">Moving from static checks to "Dynamic Behavior-based Trust Scores."</p>
            </div>
          </div>
          <div className="text-[10px] font-mono bg-slate-950 p-3 rounded-lg border border-slate-800 flex items-center gap-4">
            <span className="text-blue-400 italic">Next Article Hook:</span>
            <span className="text-slate-500">Analyzing Latency in High-Throughput PEPs</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;