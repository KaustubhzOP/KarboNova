import Link from 'next/link';
import { ArrowLeft, Clock, TrendingDown, FileText, CheckCircle2, ChevronRight, UploadCloud, AlertCircle } from 'lucide-react';

export default function ProjectWorkspacePage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col gap-4">
        <Link href="/projects" className="text-body-sm font-bold text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors w-fit">
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20 mb-3">
              <Clock className="w-3.5 h-3.5" /> Documentation Stage
            </div>
            <h1 className="text-display-md font-bold text-primary">Solar & Energy Efficiency</h1>
            <p className="text-body-lg text-on-surface-variant mt-2 max-w-2xl">
              Rooftop solar PV installation combined with IE4 motor upgrades across the primary manufacturing line.
            </p>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 border border-outline-variant bg-surface-container-lowest rounded-lg text-body-sm font-bold text-primary hover:bg-surface-container transition-colors shadow-sm">
              Edit Details
            </button>
            <button className="px-4 py-2 bg-primary text-on-primary rounded-lg text-body-sm font-bold hover:bg-primary-container transition-colors shadow-sm">
              Submit for Review
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
          <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Estimated Impact</div>
          <div className="text-headline-lg font-bold text-secondary flex items-center gap-2">
            <TrendingDown className="w-6 h-6" /> 180 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e/yr</span>
          </div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
          <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Evidence Completeness</div>
          <div className="text-headline-lg font-bold text-primary">8/10 <span className="text-body-md font-normal text-on-surface-variant">Documents</span></div>
        </div>
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm">
          <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Project Readiness</div>
          <div className="flex items-center gap-4 mt-2">
            <div className="text-headline-lg font-bold text-primary">68%</div>
            <div className="w-full bg-surface-container-high rounded-full h-2 flex-1">
              <div className="bg-primary h-full rounded-full w-[68%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column: Timeline & Actions */}
        <div className="lg:col-span-2 space-y-8">
          {/* Next Recommended Action */}
          <div className="bg-secondary/10 border border-secondary/30 rounded-xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertCircle className="w-32 h-32 text-secondary" />
            </div>
            <div className="relative z-10">
              <div className="text-label-md text-secondary font-bold uppercase tracking-wider mb-2">Next Recommended Action</div>
              <h2 className="text-headline-sm font-bold text-primary mb-2">Upload remaining electricity records</h2>
              <p className="text-body-sm text-on-surface-variant mb-6 max-w-lg">
                To complete the baseline documentation for your energy efficiency upgrade, we need the electricity bills for Jan and Feb 2023.
              </p>
              <button className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm">
                <UploadCloud className="w-4 h-4" /> Upload Documents
              </button>
            </div>
          </div>

          {/* Project Timeline */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl p-6 shadow-sm">
            <h2 className="text-headline-sm font-bold text-primary mb-6">Project Timeline</h2>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/30 before:to-transparent">
              {[
                { title: 'Opportunity Identified', date: 'Oct 12, 2023', status: 'completed' },
                { title: 'Project Created', date: 'Oct 15, 2023', status: 'completed' },
                { title: 'Data Submitted', date: 'Nov 02, 2023', status: 'completed' },
                { title: 'Evidence Reviewed', date: 'In Progress', status: 'active' },
                { title: 'Documentation Prepared', date: 'Pending', status: 'pending' },
                { title: 'Verification Pathway', date: 'Pending', status: 'pending' },
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-full border-4 border-surface-container-lowest shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm ${
                    step.status === 'completed' ? 'bg-secondary text-on-secondary' :
                    step.status === 'active' ? 'bg-surface-container-lowest border-secondary text-secondary ring-2 ring-secondary/20' :
                    'bg-surface-container text-outline-variant'
                  }`}>
                    {step.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2.5 h-2.5 rounded-full bg-current"></div>}
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest shadow-sm">
                    <div className="flex items-center justify-between mb-1">
                      <h3 className={`font-bold text-body-sm ${step.status === 'pending' ? 'text-on-surface-variant' : 'text-primary'}`}>{step.title}</h3>
                    </div>
                    <time className="text-xs font-medium text-on-surface-variant uppercase tracking-wider">{step.date}</time>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column: Documentation */}
        <div className="col-span-1 space-y-6">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-xl shadow-sm overflow-hidden flex flex-col h-full max-h-[600px]">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center">
              <h2 className="text-headline-sm font-bold text-primary">Documentation</h2>
              <Link href="/evidence" className="text-body-sm font-bold text-secondary hover:underline">View All</Link>
            </div>
            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {[
                { name: 'Baseline_Energy_Data.xlsx', status: 'verified' },
                { name: 'Solar_Vendor_Contract.pdf', status: 'verified' },
                { name: 'Motor_Specs_IE4.pdf', status: 'verified' },
                { name: 'Installation_Photos.zip', status: 'verified' },
                { name: 'Jan_2023_Bill.pdf', status: 'missing' },
                { name: 'Feb_2023_Bill.pdf', status: 'missing' },
                { name: 'Commissioning_Report.pdf', status: 'pending' },
              ].map((doc, i) => (
                <div key={i} className="p-3 border border-outline-variant/20 rounded-lg flex items-center justify-between bg-surface-container-low group hover:border-outline-variant/50 transition-colors cursor-pointer">
                  <div className="flex items-center gap-3 overflow-hidden">
                    <FileText className={`w-4 h-4 shrink-0 ${doc.status === 'verified' ? 'text-primary' : doc.status === 'missing' ? 'text-error' : 'text-outline-variant'}`} />
                    <span className="text-body-sm font-medium text-primary truncate">{doc.name}</span>
                  </div>
                  {doc.status === 'verified' && <CheckCircle2 className="w-4 h-4 text-secondary shrink-0" />}
                  {doc.status === 'missing' && <span className="text-[10px] font-bold uppercase text-error bg-error/10 px-1.5 py-0.5 rounded shrink-0">Missing</span>}
                  {doc.status === 'pending' && <span className="text-[10px] font-bold uppercase text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded shrink-0">Review</span>}
                </div>
              ))}
            </div>
            <div className="p-4 border-t border-outline-variant/20 bg-surface-container/30">
              <button className="w-full py-2 border border-outline-variant border-dashed rounded-lg text-body-sm font-bold text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors flex items-center justify-center gap-2">
                <UploadCloud className="w-4 h-4" /> Upload File
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
