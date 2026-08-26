'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { 
  ArrowLeft, 
  Clock, 
  TrendingDown, 
  FileText, 
  CheckCircle2, 
  UploadCloud, 
  AlertCircle, 
  Check, 
  X, 
  Loader2, 
  Sparkles,
  ShieldCheck,
  Building2,
  FileCheck
} from 'lucide-react';
import { EvidenceDocument } from '@/backend/models';

export default function ProjectWorkspacePage() {
  const params = useParams();
  const router = useRouter();
  const projectId = (params?.id as string) || 'solar-energy-efficiency';
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [projectStatus, setProjectStatus] = useState<'Documentation' | 'Planning' | 'Verification'>('Documentation');
  const [readiness, setReadiness] = useState(68);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Evidence docs state
  const [evidenceList, setEvidenceList] = useState<EvidenceDocument[]>([]);

  useEffect(() => {
    fetchProjectEvidence();
  }, [projectId]);

  const fetchProjectEvidence = async () => {
    try {
      const res = await fetch('/api/evidence');
      if (res.ok) {
        const data: EvidenceDocument[] = await res.json();
        // filter for this project or show all
        setEvidenceList(data);
      }
    } catch (err) {
      console.error('Failed to load evidence:', err);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    try {
      const reader = new FileReader();
      reader.onload = async () => {
        const base64Data = reader.result as string;
        const payload = {
          id: `doc-${Date.now()}`,
          name: file.name,
          category: file.type.includes('image') ? 'Site Photos' : 'Invoices',
          date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
          source: 'Direct Upload',
          project: 'Solar & Energy Efficiency',
          status: 'Verified',
          size: `${(file.size / (1024 * 1024)).toFixed(1)} MB`,
          fileData: base64Data,
          fileType: file.type,
        };

        const res = await fetch('/api/evidence/upload', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          showToast(`File "${file.name}" uploaded to Evidence Vault!`);
          fetchProjectEvidence();
          setReadiness((prev) => Math.min(prev + 10, 100));
        }
      };
      reader.readAsDataURL(file);
    } catch (err) {
      console.error('Upload failed:', err);
    } finally {
      setUploading(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  const handleSubmitForReview = () => {
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setProjectStatus('Verification');
      setReadiness(95);
      setIsSubmitted(true);
      showToast('Project successfully submitted to Carbon Auditors for verification!');
    }, 800);
  };

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 4000);
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Hidden File Input */}
      <input 
        type="file" 
        ref={fileInputRef}
        onChange={handleFileUpload}
        className="hidden"
        accept="image/*,.pdf,.doc,.docx,.xlsx"
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-6 z-50 bg-emerald-900 text-white px-5 py-3 rounded-2xl shadow-xl border border-emerald-500/40 flex items-center gap-3 animate-in fade-in slide-in-from-top-4 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span className="text-sm font-semibold">{toastMessage}</span>
          <button onClick={() => setToastMessage(null)} className="ml-2 hover:opacity-80">
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Navigation Header */}
      <div className="flex flex-col gap-4">
        <Link 
          href="/dashboard/projects" 
          className="text-body-sm font-bold text-on-surface-variant hover:text-primary flex items-center gap-1 transition-colors w-fit"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Projects
        </Link>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div>
            <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold border mb-3 ${
              projectStatus === 'Verification' 
                ? 'bg-emerald-500/10 text-emerald-700 border-emerald-500/30' 
                : 'bg-primary/10 text-primary border-primary/20'
            }`}>
              {projectStatus === 'Verification' ? <ShieldCheck className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
              {projectStatus} Stage
            </div>
            <h1 className="text-2xl sm:text-display-md font-bold text-primary">
              Solar & Energy Efficiency Upgrade
            </h1>
            <p className="text-body-md sm:text-body-lg text-on-surface-variant mt-1 max-w-2xl">
              Rooftop solar PV installation combined with IE4 motor upgrades across primary manufacturing line.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button 
              onClick={() => fileInputRef.current?.click()}
              disabled={uploading}
              className="flex items-center gap-2 px-4 py-2.5 border border-outline-variant bg-surface-container-lowest rounded-xl text-body-sm font-bold text-primary hover:bg-surface-container transition-colors shadow-xs cursor-pointer"
            >
              {uploading ? <Loader2 className="w-4 h-4 animate-spin text-secondary" /> : <UploadCloud className="w-4 h-4 text-secondary" />}
              Upload Evidence
            </button>

            <button 
              onClick={handleSubmitForReview}
              disabled={submitting || isSubmitted}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-body-sm font-bold shadow-md transition-all cursor-pointer ${
                isSubmitted 
                  ? 'bg-emerald-700 text-white cursor-default' 
                  : 'bg-primary text-on-primary hover:bg-primary-container'
              }`}
            >
              {submitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : isSubmitted ? (
                <>
                  <Check className="w-4 h-4 text-emerald-300" />
                  Submitted for Review
                </>
              ) : (
                'Submit for Review'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-xs">
          <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Estimated Impact</div>
          <div className="text-headline-lg font-bold text-secondary flex items-center gap-2">
            <TrendingDown className="w-6 h-6" /> 180 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e/yr</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-xs">
          <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Evidence Completeness</div>
          <div className="text-headline-lg font-bold text-primary">
            {evidenceList.length} <span className="text-body-md font-normal text-on-surface-variant">Documents Verified</span>
          </div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-xs">
          <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-2">Project Readiness</div>
          <div className="flex items-center gap-4 mt-2">
            <div className="text-headline-lg font-bold text-primary">{readiness}%</div>
            <div className="w-full bg-surface-container-high rounded-full h-2 flex-1">
              <div 
                className="bg-secondary h-full rounded-full transition-all duration-500" 
                style={{ width: `${readiness}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: Recommended Actions & Timeline */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Action Box */}
          <div className="bg-secondary/10 border border-secondary/30 rounded-2xl p-6 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <AlertCircle className="w-32 h-32 text-secondary" />
            </div>
            <div className="relative z-10">
              <div className="text-label-md text-secondary font-bold uppercase tracking-wider mb-2">
                Next Recommended Action
              </div>
              <h2 className="text-headline-sm font-bold text-primary mb-2">
                Upload remaining electricity & solar inverter records
              </h2>
              <p className="text-body-sm text-on-surface-variant mb-6 max-w-lg">
                To reach 100% audit readiness, upload your latest monthly utility bills or equipment invoices directly to the Evidence Vault.
              </p>
              
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-on-secondary rounded-xl font-bold text-body-sm hover:bg-[#005049] transition-all shadow-md cursor-pointer"
              >
                {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                Upload Document Now
              </button>
            </div>
          </div>

          {/* Project Timeline */}
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl p-6 shadow-xs">
            <h2 className="text-headline-sm font-bold text-primary mb-6">Project Timeline</h2>
            
            <div className="space-y-6 relative before:absolute before:inset-0 before:ml-[1.125rem] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outline-variant/30 before:to-transparent">
              {[
                { title: 'Opportunity Identified', date: 'Oct 12, 2023', status: 'completed' },
                { title: 'Project Created', date: 'Oct 15, 2023', status: 'completed' },
                { title: 'Evidence Documents Uploaded', date: 'Nov 02, 2023', status: 'completed' },
                { title: 'Submitted for Auditor Review', date: isSubmitted ? 'Today' : 'In Progress', status: isSubmitted ? 'completed' : 'active' },
                { title: 'Third-Party Verification', date: isSubmitted ? 'Under Auditor Review' : 'Pending', status: isSubmitted ? 'active' : 'pending' },
                { title: 'Credit Issuance Pathway', date: 'Pending', status: 'pending' },
              ].map((step, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                  <div className={`flex items-center justify-center w-9 h-9 rounded-full border-4 border-surface-container-lowest shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-xs ${
                    step.status === 'completed' ? 'bg-secondary text-on-secondary' :
                    step.status === 'active' ? 'bg-surface-container-lowest border-secondary text-secondary ring-2 ring-secondary/20' :
                    'bg-surface-container text-outline-variant'
                  }`}>
                    {step.status === 'completed' ? <CheckCircle2 className="w-4 h-4" /> : <div className="w-2.5 h-2.5 rounded-full bg-current"></div>}
                  </div>
                  <div className="w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-4 rounded-xl border border-outline-variant/20 bg-surface-container-lowest shadow-xs">
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

        {/* Right Column: Evidence Vault Documents */}
        <div className="col-span-1 space-y-6">
          <div className="bg-surface-container-lowest border border-outline-variant/30 rounded-2xl shadow-xs overflow-hidden flex flex-col h-full max-h-[600px]">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
              <div>
                <h2 className="text-headline-sm font-bold text-primary">Project Documents</h2>
                <p className="text-xs text-on-surface-variant">Linked from Evidence Vault</p>
              </div>
              <Link href="/dashboard/evidence" className="text-xs font-bold text-secondary hover:underline">View Vault</Link>
            </div>

            <div className="p-4 flex-1 overflow-y-auto space-y-3">
              {evidenceList.map((doc) => (
                <div 
                  key={doc.id} 
                  className="p-3 border border-outline-variant/20 rounded-xl flex items-center justify-between bg-surface-container-lowest hover:border-secondary/40 transition-colors"
                >
                  <div className="flex items-center gap-3 overflow-hidden">
                    <FileText className="w-4 h-4 shrink-0 text-secondary" />
                    <div className="truncate">
                      <span className="text-xs font-bold text-primary block truncate">{doc.name}</span>
                      <span className="text-[10px] text-on-surface-variant block">{doc.category} • {doc.date}</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold uppercase text-secondary bg-secondary/10 px-2 py-0.5 rounded-full shrink-0">
                    {doc.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-outline-variant/20 bg-surface-container/20">
              <button 
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="w-full py-3 border border-dashed border-secondary/40 rounded-xl text-xs font-bold text-secondary hover:bg-secondary/5 transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                {uploading ? <Loader2 className="w-4 h-4 animate-spin" /> : <UploadCloud className="w-4 h-4" />}
                Upload New Document
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
