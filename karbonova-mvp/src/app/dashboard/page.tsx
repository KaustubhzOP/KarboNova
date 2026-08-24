'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Factory, 
  TrendingDown, 
  CheckCircle2, 
  FolderKanban, 
  ArrowRight,
  Info,
  FileText,
  Zap,
  Activity,
  AlertCircle,
  Sparkles,
  Check
} from 'lucide-react';

export default function DashboardPage() {
  const router = useRouter();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  return (
    <div className="space-y-8 pb-12 relative">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <span className="text-body-sm font-medium">{toastMessage}</span>
        </div>
      )}

      <div>
        <h1 className="text-display-md font-bold text-primary tracking-tight">Good morning, Acme Manufacturing</h1>
        <p className="text-body-lg text-on-surface-variant mt-2">Your carbon readiness at a glance.</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm relative group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-surface-container rounded-lg group-hover:bg-primary/5 transition-colors">
              <Factory className="h-6 w-6 text-primary" />
            </div>
            <div className="group/tooltip relative">
              <Info className="h-4 w-4 text-outline cursor-pointer" />
              <div className="absolute right-0 bottom-full mb-2 hidden w-48 rounded bg-inverse-surface p-2 text-xs text-inverse-on-surface group-hover/tooltip:block shadow-lg z-20">
                Preliminary estimate based on utility data.
              </div>
            </div>
          </div>
          <div className="text-headline-lg font-bold text-primary">620 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e</span></div>
          <div className="text-body-sm text-on-surface-variant mt-1 font-medium">Estimated Emissions</div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm relative group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors">
              <TrendingDown className="h-6 w-6 text-secondary" />
            </div>
            <div className="group/tooltip relative">
              <Info className="h-4 w-4 text-outline cursor-pointer" />
              <div className="absolute right-0 bottom-full mb-2 hidden w-48 rounded bg-inverse-surface p-2 text-xs text-inverse-on-surface group-hover/tooltip:block shadow-lg z-20">
                Potential annual reduction if projects are implemented.
              </div>
            </div>
          </div>
          <div className="text-headline-lg font-bold text-secondary">180 <span className="text-body-md font-normal text-on-surface-variant">tCO₂e/yr</span></div>
          <div className="text-body-sm text-on-surface-variant mt-1 font-medium">Potential Reduction</div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm relative group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-primary-container rounded-lg group-hover:bg-primary-container/80 transition-colors">
              <Activity className="h-6 w-6 text-on-primary-container" />
            </div>
          </div>
          <div className="flex items-baseline gap-2">
            <div className="text-headline-lg font-bold text-primary">68<span className="text-headline-md">%</span></div>
            <div className="w-full bg-surface-container-high rounded-full h-2.5 mt-2">
              <div className="bg-primary h-2.5 rounded-full" style={{ width: '68%' }}></div>
            </div>
          </div>
          <div className="text-body-sm text-on-surface-variant mt-1 font-medium">Carbon Readiness</div>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/30 shadow-sm relative group hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start mb-4">
            <div className="p-3 bg-surface-container rounded-lg group-hover:bg-primary/5 transition-colors">
              <FolderKanban className="h-6 w-6 text-primary" />
            </div>
          </div>
          <div className="text-headline-lg font-bold text-primary">2</div>
          <div className="text-body-sm text-on-surface-variant mt-1 font-medium">Active Projects</div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="col-span-1 lg:col-span-2 space-y-8">
          {/* Opportunity Card */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
            <div className="bg-secondary/5 px-6 py-4 border-b border-outline-variant/20 flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-secondary" />
              <h2 className="text-headline-sm font-bold text-primary">Potential carbon opportunity identified</h2>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 gap-y-6 gap-x-4 mb-6">
                <div>
                  <div className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Project</div>
                  <div className="text-body-md font-semibold text-primary">Solar + Energy Efficiency</div>
                </div>
                <div>
                  <div className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Estimated Reduction</div>
                  <div className="text-body-md font-semibold text-secondary flex items-center gap-1">
                    <TrendingDown className="h-4 w-4" /> 180 tCO₂e/year
                  </div>
                </div>
                <div>
                  <div className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Evidence</div>
                  <div className="text-body-md font-semibold text-primary flex items-center gap-2">
                    6/10 Documents <div className="w-16 h-1.5 bg-surface-container-high rounded-full overflow-hidden"><div className="bg-secondary h-full w-[60%]"></div></div>
                  </div>
                </div>
                <div>
                  <div className="text-label-md text-on-surface-variant mb-1 uppercase tracking-wider">Status</div>
                  <div className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-surface-container-high px-2.5 py-1 text-xs font-semibold text-primary">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Assessment complete
                  </div>
                </div>
              </div>
              <Link href="/dashboard/opportunity" className="inline-flex items-center justify-center px-4 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm">
                View Opportunity <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Readiness Tracker */}
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-6">
            <h2 className="text-headline-sm font-bold text-primary mb-6">Verification Pathway</h2>
            <div className="relative">
              {/* Line */}
              <div className="absolute top-5 left-8 right-8 h-[2px] bg-surface-container-high z-0"></div>
              <div className="absolute top-5 left-8 w-[25%] h-[2px] bg-secondary z-0"></div>
              
              <div className="flex justify-between relative z-10">
                {[
                  { stage: 'Data', href: '/dashboard/evidence' },
                  { stage: 'Evidence', href: '/dashboard/evidence' },
                  { stage: 'Project', href: '/dashboard/projects' },
                  { stage: 'Verification', href: '/dashboard/verification' },
                  { stage: 'Market', href: '/dashboard/aggregation' }
                ].map((item, i) => (
                  <Link key={item.stage} href={item.href} className="flex flex-col items-center gap-3 group">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center border-2 ${
                      i === 0 ? 'bg-secondary text-on-secondary border-secondary' :
                      i === 1 ? 'bg-surface-container-lowest text-secondary border-secondary ring-4 ring-secondary/10' :
                      'bg-surface-container-lowest text-outline-variant border-surface-container-high group-hover:border-primary'
                    } font-bold text-body-md transition-all`}>
                      {i === 0 ? <Check className="h-5 w-5" /> : i + 1}
                    </div>
                    <span className={`text-label-md text-center ${i <= 1 ? 'text-primary font-bold' : 'text-on-surface-variant group-hover:text-primary'}`}>{item.stage}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Action Center */}
        <div className="col-span-1">
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden h-full">
            <div className="p-6 border-b border-outline-variant/20">
              <h2 className="text-headline-sm font-bold text-primary">Action Center</h2>
              <p className="text-body-sm text-on-surface-variant mt-1">Next steps to increase readiness</p>
            </div>
            <div className="divide-y divide-outline-variant/20">
              <div 
                onClick={() => router.push('/dashboard/evidence')}
                className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer group flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 p-2 bg-error/10 text-error rounded-full">
                  <AlertCircle className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body-sm font-bold text-primary group-hover:text-secondary transition-colors">Upload electricity bill</h3>
                  <p className="text-xs text-on-surface-variant mt-1">2 documents missing for Jan-Feb</p>
                </div>
                <ArrowRight className="w-4 h-4 text-outline group-hover:text-secondary shrink-0 mt-2" />
              </div>

              <div 
                onClick={() => router.push('/dashboard/opportunity')}
                className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer group flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 p-2 bg-secondary/10 text-secondary rounded-full">
                  <Zap className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body-sm font-bold text-primary group-hover:text-secondary transition-colors">Complete energy profile</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Takes ~5 minutes</p>
                </div>
                <ArrowRight className="w-4 h-4 text-outline group-hover:text-secondary shrink-0 mt-2" />
              </div>

              <div 
                onClick={() => router.push('/dashboard/projects/solar-energy-efficiency')}
                className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer group flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 p-2 bg-surface-container text-primary rounded-full">
                  <FileText className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body-sm font-bold text-primary group-hover:text-secondary transition-colors">Add solar installation details</h3>
                  <p className="text-xs text-on-surface-variant mt-1">Required for project documentation</p>
                </div>
                <ArrowRight className="w-4 h-4 text-outline group-hover:text-secondary shrink-0 mt-2" />
              </div>

              <div 
                onClick={() => router.push('/dashboard/projects/solar-energy-efficiency')}
                className="p-4 hover:bg-surface-container-low transition-colors cursor-pointer group flex items-start gap-4"
              >
                <div className="mt-1 flex-shrink-0 p-2 bg-surface-container text-primary rounded-full">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <h3 className="text-body-sm font-bold text-primary group-hover:text-secondary transition-colors">Review project documentation</h3>
                  <p className="text-xs text-on-surface-variant mt-1">1 update requires attention</p>
                </div>
                <ArrowRight className="w-4 h-4 text-outline group-hover:text-secondary shrink-0 mt-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
