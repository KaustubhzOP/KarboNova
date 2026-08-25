import Link from 'next/link';
import { FolderKanban, Plus, TrendingDown, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ProjectsListPage() {
  return (
    <div className="space-y-8 pb-12">
      <div className="flex justify-between items-end">
        <div>
          <h1 className="text-display-md font-bold text-primary flex items-center gap-3">
            <FolderKanban className="h-10 w-10 text-secondary" />
            Projects
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-2">Manage your carbon project developments.</p>
        </div>
        <Link href="/opportunity" className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm">
          <Plus className="w-4 h-4" /> New Project
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Project 1 */}
        <Link href="/projects/solar-energy-efficiency" className="block bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden hover:shadow-md transition-shadow group">
          <div className="p-6 border-b border-outline-variant/20 bg-gradient-to-r from-surface-container-lowest to-secondary/5">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors">Solar & Energy Efficiency</h2>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary border border-primary/20">
                <Clock className="w-3.5 h-3.5" /> Documentation
              </span>
            </div>
            <div className="text-body-sm text-on-surface-variant line-clamp-2">
              Rooftop solar PV installation combined with IE4 motor upgrades across the primary manufacturing line.
            </div>
          </div>
          <div className="p-6 grid grid-cols-3 gap-4">
            <div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Impact</div>
              <div className="text-body-md font-bold text-secondary flex items-center gap-1">
                <TrendingDown className="w-4 h-4" /> 180 tCO₂e/yr
              </div>
            </div>
            <div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Evidence</div>
              <div className="text-body-md font-bold text-primary">8/10 Docs</div>
            </div>
            <div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Readiness</div>
              <div className="text-body-md font-bold text-primary flex items-center gap-2">
                68%
                <div className="w-full bg-surface-container-high rounded-full h-1.5 flex-1 max-w-[40px]">
                  <div className="bg-primary h-full rounded-full w-[68%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-outline-variant/20 bg-surface-container/10 flex justify-between items-center text-body-sm text-on-surface-variant">
            <span>Last updated 2 days ago</span>
            <span className="text-secondary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Open Workspace <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>

        {/* Project 2 */}
        <Link href="#" className="block bg-surface-container-lowest rounded-xl shadow-sm border border-outline-variant/30 overflow-hidden hover:shadow-md transition-shadow group">
          <div className="p-6 border-b border-outline-variant/20 bg-gradient-to-r from-surface-container-lowest to-surface-container-low">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors">Waste Heat Recovery</h2>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
                <CheckCircle2 className="w-3.5 h-3.5" /> Verification
              </span>
            </div>
            <div className="text-body-sm text-on-surface-variant line-clamp-2">
              Implementation of heat exchangers on the primary boiler exhaust to pre-heat boiler feedwater.
            </div>
          </div>
          <div className="p-6 grid grid-cols-3 gap-4">
            <div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Impact</div>
              <div className="text-body-md font-bold text-secondary flex items-center gap-1">
                <TrendingDown className="w-4 h-4" /> 245 tCO₂e/yr
              </div>
            </div>
            <div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Evidence</div>
              <div className="text-body-md font-bold text-primary">12/12 Docs</div>
            </div>
            <div>
              <div className="text-label-md text-on-surface-variant uppercase tracking-wider mb-1">Readiness</div>
              <div className="text-body-md font-bold text-secondary flex items-center gap-2">
                95%
                <div className="w-full bg-surface-container-high rounded-full h-1.5 flex-1 max-w-[40px]">
                  <div className="bg-secondary h-full rounded-full w-[95%]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="px-6 py-4 border-t border-outline-variant/20 bg-surface-container/10 flex justify-between items-center text-body-sm text-on-surface-variant">
            <span>Last updated 1 week ago</span>
            <span className="text-secondary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
              Open Workspace <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}
