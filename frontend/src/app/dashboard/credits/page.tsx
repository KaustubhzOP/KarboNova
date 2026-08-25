import { Coins, FileText, CheckCircle2, UserCircle, Calendar, ArrowRight, ShieldCheck, Factory, PlaySquare } from 'lucide-react';

export default function CreditLifecyclePage() {
  const lifecycleStages = [
    {
      title: 'Potential Project',
      status: 'completed',
      date: 'Oct 15, 2023',
      documents: ['Assessment_Result.pdf'],
      party: 'Acme Manufacturing',
      notes: 'Initial carbon opportunity identified and project workspace created.',
      icon: PlaySquare
    },
    {
      title: 'Prepared',
      status: 'completed',
      date: 'Nov 02, 2023',
      documents: ['Baseline_Energy_Data.xlsx', 'Evidence_Bundle.zip'],
      party: 'KarboNova Platform',
      notes: 'Data structured and evidence organized into compliance-ready formats.',
      icon: Factory
    },
    {
      title: 'Verification',
      status: 'active',
      date: 'In Progress',
      documents: ['Audit_Plan_Draft.pdf'],
      party: 'External Auditor',
      notes: 'Undergoing independent validation and verification process.',
      icon: ShieldCheck
    },
    {
      title: 'Verified',
      status: 'pending',
      date: 'Pending',
      documents: [],
      party: 'Registry',
      notes: 'Pending successful completion of independent audit.',
      icon: CheckCircle2
    },
    {
      title: 'Issued',
      status: 'pending',
      date: 'Pending',
      documents: [],
      party: 'Registry',
      notes: 'Potential asset issuance upon registry approval.',
      icon: Coins
    },
    {
      title: 'Sold / Retired',
      status: 'pending',
      date: 'Pending',
      documents: [],
      party: '-',
      notes: 'Final monetization or retirement of the environmental asset.',
      icon: ArrowRight
    }
  ];

  return (
    <div className="space-y-8 pb-12 max-w-5xl mx-auto">
      <div>
        <h1 className="text-display-md font-bold text-primary flex items-center gap-3">
          <Coins className="h-10 w-10 text-secondary" />
          Credit Lifecycle
        </h1>
        <p className="text-body-lg text-on-surface-variant mt-2 max-w-3xl">
          Track the journey of your environmental assets from potential identification to final monetization.
        </p>
      </div>

      <div className="bg-surface-container-lowest rounded-2xl shadow-sm border border-outline-variant/30 overflow-hidden p-8 relative">
        {/* Project Selector (Mock) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12 pb-6 border-b border-outline-variant/20">
          <div>
            <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Tracking</div>
            <select className="bg-surface-container-low border border-outline-variant/50 rounded-lg px-4 py-2 text-headline-sm font-bold text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary w-full md:w-auto min-w-[300px]">
              <option>Solar & Energy Efficiency</option>
              <option>Waste Heat Recovery</option>
            </select>
          </div>
          <div className="bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant/30 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
            </span>
            <span className="text-body-sm font-bold text-primary uppercase tracking-wider">Verification Stage Active</span>
          </div>
        </div>

        {/* Vertical Lifecycle Line */}
        <div className="absolute left-8 md:left-[11rem] top-[14rem] bottom-16 w-0.5 bg-gradient-to-b from-secondary via-outline-variant/30 to-transparent z-0"></div>

        {/* Stages */}
        <div className="space-y-12 relative z-10 pl-6 md:pl-0">
          {lifecycleStages.map((stage, i) => {
            const Icon = stage.icon;
            const isCompleted = stage.status === 'completed';
            const isActive = stage.status === 'active';
            const isPending = stage.status === 'pending';
            
            return (
              <div key={i} className="flex flex-col md:flex-row gap-6 md:gap-8 group">
                {/* Desktop Date Column */}
                <div className="hidden md:flex w-32 flex-col items-end text-right pt-2 shrink-0">
                  <div className={`text-label-md uppercase tracking-wider font-bold ${isPending ? 'text-outline' : 'text-primary'}`}>
                    {stage.date}
                  </div>
                  {isActive && <div className="text-[10px] text-secondary font-bold uppercase mt-1">Current</div>}
                </div>

                {/* Status Node */}
                <div className="relative flex justify-center shrink-0">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 border-surface-container-lowest shadow-sm z-10 transition-colors ${
                    isCompleted ? 'bg-secondary text-on-secondary' :
                    isActive ? 'bg-surface-container-lowest border-secondary text-secondary ring-4 ring-secondary/20' :
                    'bg-surface-container text-outline-variant'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  {/* Mobile Date */}
                  <div className="absolute top-1/2 -translate-y-1/2 right-[120%] text-right w-24 md:hidden">
                    <div className={`text-[10px] uppercase tracking-wider font-bold ${isPending ? 'text-outline' : 'text-primary'}`}>
                      {stage.date}
                    </div>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`flex-1 p-6 rounded-xl border ${
                  isCompleted ? 'bg-surface-container-low border-outline-variant/20' :
                  isActive ? 'bg-secondary/5 border-secondary/30 shadow-md shadow-secondary/5' :
                  'bg-surface-container-lowest/50 border-outline-variant/20 border-dashed opacity-60'
                }`}>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className={`text-headline-sm font-bold ${isPending ? 'text-on-surface-variant' : 'text-primary'}`}>{stage.title}</h3>
                  </div>
                  <p className="text-body-sm text-on-surface-variant mb-4">{stage.notes}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4 pt-4 border-t border-outline-variant/10">
                    <div className="flex items-start gap-2">
                      <UserCircle className="w-4 h-4 text-outline shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Responsible Party</div>
                        <div className="text-body-sm font-medium text-primary mt-0.5">{stage.party}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-2">
                      <FileText className="w-4 h-4 text-outline shrink-0 mt-0.5" />
                      <div>
                        <div className="text-[10px] text-on-surface-variant uppercase tracking-wider font-bold">Documents</div>
                        {stage.documents.length > 0 ? (
                          <div className="flex flex-wrap gap-1 mt-1.5">
                            {stage.documents.map((doc, idx) => (
                              <span key={idx} className="inline-block px-1.5 py-0.5 bg-surface-container-high rounded text-[10px] font-medium text-primary truncate max-w-full">
                                {doc}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <div className="text-body-sm text-on-surface-variant mt-0.5">-</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
