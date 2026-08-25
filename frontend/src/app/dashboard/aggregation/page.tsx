'use client';

import { useState } from 'react';
import { Users, FileStack, ShieldCheck, TrendingUp, Network, AlertTriangle, CheckCircle2, Plus } from 'lucide-react';

export default function AggregationPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [joinedPool, setJoinedPool] = useState(true);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const togglePoolJoin = () => {
    setJoinedPool(!joinedPool);
    showToast(!joinedPool ? 'Successfully submitted Acme Manufacturing to the Maharashtra Pool!' : 'Withdrawn project from pool.');
  };

  const poolMembers = [
    { business: 'Acme Manufacturing', activity: 'Solar + IE4 Motors', reduction: 180, evidence: 68, status: joinedPool ? 'In Pool' : 'Not Joined', isYou: true },
    { business: 'Star Textiles', activity: 'Boiler Retrofit', reduction: 210, evidence: 85, status: 'Ready for Pool', isYou: false },
    { business: 'Global Auto Parts', activity: 'Solar PV 50kW', reduction: 65, evidence: 90, status: 'Ready for Pool', isYou: false },
    { business: 'Precision Engg', activity: 'Waste Heat Recovery', reduction: 145, evidence: 45, status: 'Data Collection', isYou: false },
    { business: 'Apex Chemicals', activity: 'Process Efficiency', reduction: 320, evidence: 75, status: 'Documentation', isYou: false },
  ];

  return (
    <div className="space-y-8 pb-12 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <span className="text-body-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-display-md font-bold text-primary flex items-center gap-3">
            <Network className="h-10 w-10 text-secondary" />
            MSME Project Pool
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-2">
            Combining verified MSME projects to achieve minimum viable scale for carbon markets.
          </p>
        </div>
        <button 
          onClick={togglePoolJoin}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-bold text-body-sm transition-all shadow-sm ${
            joinedPool ? 'bg-surface-container border border-outline-variant text-primary hover:bg-surface-container-high' : 'bg-secondary text-on-secondary hover:bg-[#005049]'
          }`}
        >
          {joinedPool ? <CheckCircle2 className="w-4 h-4 text-secondary" /> : <Plus className="w-4 h-4" />}
          {joinedPool ? 'In Active Pool' : 'Submit Project to Pool'}
        </button>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 p-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8 border-b border-outline-variant/20 pb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-bold uppercase tracking-wider mb-3">
              Active Regional Pool
            </div>
            <h2 className="text-headline-lg font-bold text-primary">Energy Efficiency — Maharashtra</h2>
          </div>
          <div className="flex gap-8">
            <div className="text-right">
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Participants</div>
              <div className="text-headline-md font-bold text-primary">24 <span className="text-body-md font-normal text-on-surface-variant">MSMEs</span></div>
            </div>
            <div className="w-px bg-outline-variant/30"></div>
            <div className="text-right">
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Estimated Combined Reduction</div>
              <div className="text-headline-md font-bold text-secondary flex items-center gap-2">
                <TrendingUp className="w-5 h-5" /> 1,920 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e/yr</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Aggregation Graphic */}
        <div className="mb-12">
          <h3 className="text-headline-sm font-bold text-primary mb-6 text-center">The Power of Scale</h3>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 relative max-w-4xl mx-auto">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-surface-container-high -translate-y-1/2 z-0"></div>
            
            <div className="relative z-10 flex flex-col items-center gap-3 bg-surface-container-lowest p-2">
              <div className="w-16 h-16 rounded-full bg-primary-container text-on-primary-container flex items-center justify-center border-4 border-surface-container-lowest">
                <Users className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-body-sm font-bold text-primary">24 MSMEs</div>
                <div className="text-xs text-on-surface-variant">Fragmented Activities</div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3 bg-surface-container-lowest p-2">
              <div className="w-16 h-16 rounded-full bg-surface-container text-primary flex items-center justify-center border-4 border-surface-container-lowest">
                <FileStack className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-body-sm font-bold text-primary">Standardized Data</div>
                <div className="text-xs text-on-surface-variant">Structured via KarboNova</div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3 bg-surface-container-lowest p-2">
              <div className="w-16 h-16 rounded-full bg-secondary text-on-secondary flex items-center justify-center border-4 border-surface-container-lowest shadow-lg shadow-secondary/20">
                <Network className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-body-md font-bold text-secondary">Project Pool</div>
                <div className="text-xs font-bold text-secondary bg-secondary/10 px-2 py-0.5 rounded mt-1">1,920 tCO₂e/yr</div>
              </div>
            </div>

            <div className="relative z-10 flex flex-col items-center gap-3 bg-surface-container-lowest p-2 opacity-60 border-dashed">
              <div className="w-16 h-16 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center border-4 border-surface-container-lowest border-dashed">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="text-center">
                <div className="text-body-sm font-bold text-on-surface-variant">Verification Pathway</div>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-hidden border border-outline-variant/30 rounded-xl">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-surface-container-low border-b border-outline-variant/20">
                <th className="px-6 py-4 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Business</th>
                <th className="px-6 py-4 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Activity</th>
                <th className="px-6 py-4 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Estimated Reduction</th>
                <th className="px-6 py-4 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Evidence</th>
                <th className="px-6 py-4 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              {poolMembers.map((member, i) => (
                <tr key={i} className={`hover:bg-surface-container-lowest/50 transition-colors ${member.isYou ? 'bg-secondary/5' : ''}`}>
                  <td className="px-6 py-4">
                    <div className="font-bold text-primary flex items-center gap-2">
                      {member.business}
                      {member.isYou && <span className="bg-secondary text-on-secondary text-[10px] px-1.5 py-0.5 rounded uppercase font-bold tracking-wider">You</span>}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-body-sm text-on-surface-variant">{member.activity}</td>
                  <td className="px-6 py-4 font-bold text-primary">{member.reduction} tCO₂e/yr</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden">
                        <div className={`h-full ${member.evidence > 80 ? 'bg-secondary' : 'bg-primary'}`} style={{ width: `${member.evidence}%` }}></div>
                      </div>
                      <span className="text-xs font-medium text-primary">{member.evidence}%</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-bold ${
                      member.status === 'In Pool' || member.status === 'Ready for Pool' ? 'bg-secondary/10 text-secondary border border-secondary/20' :
                      member.status === 'Documentation' ? 'bg-primary/10 text-primary border border-primary/20' :
                      'bg-surface-container-high text-on-surface-variant border border-outline-variant/30'
                    }`}>
                      {member.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-8 bg-surface-container-low p-4 rounded-lg flex gap-3 border border-outline-variant/20">
          <AlertTriangle className="w-5 h-5 text-on-surface-variant shrink-0 mt-0.5" />
          <p className="text-xs text-on-surface-variant leading-relaxed">
            <strong>Disclaimer:</strong> Aggregation and eligibility depend on applicable methodologies, project requirements and formal registration processes. Preliminary estimates do not guarantee credit issuance.
          </p>
        </div>
      </div>
    </div>
  );
}
