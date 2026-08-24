'use client';

import { useState } from 'react';
import { Fingerprint, Download, Share2, Copy, CheckCircle2, ShieldCheck, Factory, TrendingDown, Info, Lock } from 'lucide-react';

export default function CarbonPassportPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const copyPassportId = () => {
    navigator.clipboard.writeText('KRB-MH-000124');
    showToast('Passport ID copied to clipboard!');
  };

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <span className="text-body-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div>
          <h1 className="text-display-md font-bold text-primary flex items-center gap-3">
            <Fingerprint className="h-10 w-10 text-secondary" />
            Carbon Passport
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-2">
            Your verifiable digital identity for environmental footprints and carbon assets.
          </p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={copyPassportId}
            className="flex items-center gap-2 px-4 py-2 border border-outline-variant bg-surface-container-lowest rounded-lg text-body-sm font-bold text-primary hover:bg-surface-container transition-colors shadow-sm"
          >
            <Copy className="w-4 h-4 text-outline" /> Copy ID
          </button>
          <button 
            onClick={() => showToast('Passport PDF generated and downloaded!')}
            className="flex items-center gap-2 px-5 py-2 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm"
          >
            <Download className="w-4 h-4" /> Download Passport
          </button>
        </div>
      </div>

      {/* Digital Passport Card Container */}
      <div className="bg-surface-container-lowest rounded-2xl shadow-md border border-outline-variant/40 overflow-hidden">
        {/* Passport Header Banner */}
        <div className="bg-gradient-to-r from-primary via-[#0f2138] to-primary p-8 text-on-primary relative">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="text-label-md bg-secondary text-on-secondary px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Verified Identity
                </span>
                <span className="text-body-sm text-primary-fixed-dim">Issued Oct 2023</span>
              </div>
              <h2 className="text-headline-lg font-bold">Acme Manufacturing Pvt Ltd</h2>
              <div className="text-body-sm text-primary-fixed-dim mt-1 flex items-center gap-4">
                <span>Pune, Maharashtra, India</span>
                <span>•</span>
                <span>Udyam: UDYAM-MH-19-0012345</span>
              </div>
            </div>

            <div className="bg-surface-container-lowest/10 backdrop-blur-md p-4 rounded-xl border border-on-primary/10 text-right">
              <div className="text-label-md text-primary-fixed-dim uppercase tracking-wider mb-1">PASSPORT ID</div>
              <div className="text-headline-sm font-mono font-bold text-secondary tracking-widest">KRB-MH-000124</div>
            </div>
          </div>
        </div>

        {/* Footprint Summary Grid */}
        <div className="p-8 border-b border-outline-variant/20 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
            <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Operational Footprint</div>
            <div className="text-headline-lg font-bold text-primary">620 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e/yr</span></div>
            <div className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-outline" /> Scope 1 & Scope 2 baseline
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
            <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Potential Reductions</div>
            <div className="text-headline-lg font-bold text-secondary flex items-center gap-2">
              <TrendingDown className="w-6 h-6" /> 180 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e/yr</span>
            </div>
            <div className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5 text-outline" /> Identified carbon opportunities
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl border border-outline-variant/20">
            <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Verified Carbon Assets</div>
            <div className="text-headline-lg font-bold text-primary flex items-center gap-2">
              <Lock className="w-5 h-5 text-outline" /> 0 <span className="text-body-md font-normal text-on-surface-variant">Credits</span>
            </div>
            <div className="text-xs text-on-surface-variant mt-2 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-outline" /> Under evidence verification
            </div>
          </div>
        </div>

        {/* Scope Breakdown Table */}
        <div className="p-8">
          <h3 className="text-headline-sm font-bold text-primary mb-6">Emissions & Evidence Ledger</h3>
          
          <div className="overflow-hidden border border-outline-variant/30 rounded-xl">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low border-b border-outline-variant/20">
                  <th className="px-6 py-3.5 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Category</th>
                  <th className="px-6 py-3.5 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Source</th>
                  <th className="px-6 py-3.5 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Emissions</th>
                  <th className="px-6 py-3.5 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Evidence Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/20 text-body-sm">
                <tr>
                  <td className="px-6 py-4 font-bold text-primary">Scope 1 (Direct)</td>
                  <td className="px-6 py-4 text-on-surface-variant">Diesel Generator & Boiler Fuel</td>
                  <td className="px-6 py-4 font-bold text-primary">140 tCO₂e</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 100% Verified
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-primary">Scope 2 (Electricity)</td>
                  <td className="px-6 py-4 text-on-surface-variant">Grid Electricity (MSEB)</td>
                  <td className="px-6 py-4 font-bold text-primary">480 tCO₂e</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary">
                      <CheckCircle2 className="w-3.5 h-3.5" /> 80% Verified
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-6 py-4 font-bold text-primary">Scope 3 (Supply Chain)</td>
                  <td className="px-6 py-4 text-on-surface-variant">Upstream Transport & Raw Materials</td>
                  <td className="px-6 py-4 font-bold text-on-surface-variant">Pending Estimate</td>
                  <td className="px-6 py-4">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-bold bg-surface-container-high text-on-surface-variant">
                      In Progress
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
