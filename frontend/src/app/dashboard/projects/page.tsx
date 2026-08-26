'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  FolderKanban, 
  Plus, 
  TrendingDown, 
  Clock, 
  ArrowRight, 
  CheckCircle2, 
  X,
  Sparkles,
  Loader2,
  FileText
} from 'lucide-react';
import { Project } from '@/backend/models';

export default function ProjectsListPage() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Form State
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [estimatedReduction, setEstimatedReduction] = useState('120');
  const [status, setStatus] = useState('Documentation');

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/projects');
      if (res.ok) {
        const data = await res.json();
        setProjects(data);
      }
    } catch (err) {
      console.error('Failed to load projects:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateProject = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim()) return;

    setSubmitting(true);
    try {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          description: description || 'Carbon reduction project initiative.',
          status,
          estimatedReduction: parseFloat(estimatedReduction) || 50,
          evidenceDocsCount: '0/10',
          readiness: 15,
        }),
      });

      if (res.ok) {
        setShowModal(false);
        setName('');
        setDescription('');
        setEstimatedReduction('120');
        fetchProjects();
      }
    } catch (err) {
      console.error('Failed to create project:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 pb-12">
      
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl sm:text-display-md font-bold text-primary flex items-center gap-3">
            <FolderKanban className="h-8 w-8 sm:h-10 sm:w-10 text-secondary" />
            Projects
          </h1>
          <p className="text-body-md sm:text-body-lg text-on-surface-variant mt-1">
            Manage and track your active decarbonization & carbon credit initiatives.
          </p>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Link 
            href="/dashboard/opportunity" 
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 bg-surface-container-high text-primary rounded-xl font-bold text-xs sm:text-body-sm hover:bg-surface-container-highest transition-all border border-outline-variant/30"
          >
            <Sparkles className="w-4 h-4 text-secondary" /> Opportunity Assessment
          </Link>

          <button 
            onClick={() => setShowModal(true)} 
            className="flex-1 sm:flex-initial flex items-center justify-center gap-2 px-5 py-2.5 bg-secondary text-on-secondary rounded-xl font-bold text-xs sm:text-body-sm hover:bg-[#005049] transition-all shadow-md cursor-pointer"
          >
            <Plus className="w-4 h-4" /> New Project
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      {loading ? (
        <div className="flex justify-center items-center py-20">
          <Loader2 className="w-8 h-8 text-secondary animate-spin" />
        </div>
      ) : projects.length === 0 ? (
        <div className="text-center py-16 bg-surface-container-lowest rounded-2xl border border-outline-variant/30 p-8">
          <FolderKanban className="w-12 h-12 text-outline mx-auto mb-3" />
          <h3 className="text-lg font-bold text-primary">No Projects Created Yet</h3>
          <p className="text-sm text-on-surface-variant max-w-sm mx-auto mt-1 mb-6">
            Start by creating a new decarbonization project or run an opportunity check.
          </p>
          <button 
            onClick={() => setShowModal(true)} 
            className="px-5 py-2.5 bg-secondary text-on-secondary rounded-xl font-bold text-sm"
          >
            Create Your First Project
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((proj) => (
            <Link 
              key={proj.id} 
              href={`/dashboard/projects/${proj.id}`} 
              className="block bg-surface-container-lowest rounded-2xl shadow-xs border border-outline-variant/30 overflow-hidden hover:shadow-lg transition-all group"
            >
              <div className="p-6 border-b border-outline-variant/20 bg-gradient-to-r from-surface-container-lowest to-secondary/5">
                <div className="flex justify-between items-start mb-3 gap-2">
                  <h2 className="text-lg sm:text-headline-sm font-bold text-primary group-hover:text-secondary transition-colors">
                    {proj.name}
                  </h2>
                  <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold shrink-0 ${
                    proj.status === 'Verification' 
                      ? 'bg-emerald-500/10 text-emerald-700 border border-emerald-500/30' 
                      : 'bg-primary/10 text-primary border border-primary/20'
                  }`}>
                    {proj.status === 'Verification' ? <CheckCircle2 className="w-3.5 h-3.5" /> : <Clock className="w-3.5 h-3.5" />}
                    {proj.status}
                  </span>
                </div>
                <p className="text-body-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                  {proj.description}
                </p>
              </div>

              <div className="p-6 grid grid-cols-3 gap-4">
                <div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Impact</div>
                  <div className="text-body-md font-bold text-secondary flex items-center gap-1">
                    <TrendingDown className="w-4 h-4" /> {proj.estimatedReduction} <span className="text-xs font-normal">tCO₂e/yr</span>
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Evidence</div>
                  <div className="text-body-md font-bold text-primary flex items-center gap-1">
                    <FileText className="w-4 h-4 text-outline" /> {proj.evidenceDocsCount}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-on-surface-variant tracking-wider mb-1">Readiness</div>
                  <div className="text-body-md font-bold text-primary flex items-center gap-2">
                    {proj.readiness}%
                    <div className="w-full bg-surface-container-high rounded-full h-1.5 flex-1 max-w-[40px]">
                      <div 
                        className="bg-secondary h-full rounded-full" 
                        style={{ width: `${proj.readiness}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="px-6 py-3.5 border-t border-outline-variant/20 bg-surface-container/20 flex justify-between items-center text-xs text-on-surface-variant">
                <span>Updated {proj.lastUpdated || 'Recently'}</span>
                <span className="text-secondary font-bold flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Open Workspace <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* CREATE NEW PROJECT MODAL */}
      {showModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          style={{ width: '100vw', height: '100vh', top: 0, left: 0 }}
        >
          <div 
            className="bg-surface-container-lowest rounded-3xl border border-outline-variant/40 shadow-2xl overflow-hidden relative z-10 my-auto"
            style={{ width: '100%', maxWidth: '520px', boxSizing: 'border-box' }}
          >
            
            <div className="flex justify-between items-center p-6 border-b border-outline-variant/20 bg-surface-container-low">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center text-secondary">
                  <FolderKanban className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">Create Decarbonization Project</h3>
                  <p className="text-xs text-on-surface-variant">Add a new project to your facility evidence pipeline.</p>
                </div>
              </div>
              <button 
                onClick={() => setShowModal(false)}
                className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleCreateProject} className="p-6 space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Project Title *
                </label>
                <input 
                  type="text" 
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Solar PV Installation & IE4 Motor Retrofit"
                  required
                  className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl text-sm text-primary placeholder-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                  Project Description
                </label>
                <textarea 
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Briefly describe the intervention and equipment involved..."
                  rows={3}
                  className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl text-sm text-primary placeholder-on-surface-variant/50 focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Est. Impact (tCO₂e/yr)
                  </label>
                  <input 
                    type="number" 
                    value={estimatedReduction}
                    onChange={(e) => setEstimatedReduction(e.target.value)}
                    placeholder="120"
                    min="1"
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl text-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-on-surface-variant mb-1.5">
                    Initial Stage
                  </label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant/50 rounded-xl text-sm text-primary focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary"
                  >
                    <option value="Documentation">Documentation</option>
                    <option value="Planning">Planning</option>
                    <option value="Verification">Verification</option>
                  </select>
                </div>
              </div>

              <div className="flex justify-end gap-3 pt-4 border-t border-outline-variant/20 mt-6">
                <button 
                  type="button" 
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2.5 text-xs font-bold text-on-surface-variant hover:bg-surface-container rounded-xl transition-colors"
                >
                  Cancel
                </button>
                <button 
                  type="submit" 
                  disabled={submitting || !name.trim()}
                  className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-on-secondary rounded-xl font-bold text-xs hover:bg-[#005049] transition-all shadow-md disabled:opacity-50 cursor-pointer"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Creating...
                    </>
                  ) : (
                    'Create Project'
                  )}
                </button>
              </div>
            </form>

          </div>
        </div>
      )}

    </div>
  );
}
