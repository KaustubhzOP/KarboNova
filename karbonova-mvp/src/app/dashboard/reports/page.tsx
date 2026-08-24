'use client';

import { useState } from 'react';
import { BarChart3, Download, Filter, FileText, CheckCircle2, Calendar } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Legend } from 'recharts';

export default function ReportsPage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [timeRange, setTimeRange] = useState('6M');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const footprintData = [
    { month: 'Jan', scope1: 15, scope2: 30, scope3: 10 },
    { month: 'Feb', scope1: 14, scope2: 28, scope3: 9 },
    { month: 'Mar', scope1: 16, scope2: 32, scope3: 11 },
    { month: 'Apr', scope1: 18, scope2: 35, scope3: 12 },
    { month: 'May', scope1: 17, scope2: 34, scope3: 11 },
    { month: 'Jun', scope1: 19, scope2: 38, scope3: 13 },
  ];

  const reductionData = [
    { name: 'Solar PV', value: 120 },
    { name: 'IE4 Motors', value: 60 },
    { name: 'Waste Heat', value: 245 },
    { name: 'LEDs', value: 15 },
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
            <BarChart3 className="h-10 w-10 text-secondary" />
            Reports & Analytics
          </h1>
          <p className="text-body-lg text-on-surface-variant mt-2">Exportable sustainability metrics and compliance reports.</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-surface-container-low border border-outline-variant/40 rounded-lg p-1">
            {['3M', '6M', '1Y'].map((range) => (
              <button
                key={range}
                onClick={() => { setTimeRange(range); showToast(`Filter updated to ${range}`); }}
                className={`px-3 py-1 text-body-sm font-bold rounded transition-colors ${
                  timeRange === range ? 'bg-secondary text-on-secondary shadow-sm' : 'text-on-surface-variant hover:text-primary'
                }`}
              >
                {range}
              </button>
            ))}
          </div>
          <button 
            onClick={() => showToast('Exporting all sustainability report bundles (ZIP)...')}
            className="flex items-center gap-2 px-5 py-2 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm cursor-pointer"
          >
            <Download className="w-4 h-4" /> Export All Reports
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Footprint Chart */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-headline-sm font-bold text-primary">Carbon Footprint Trend</h2>
              <p className="text-xs text-on-surface-variant mt-1">Monthly emissions (tCO₂e) by Scope</p>
            </div>
            <button 
              onClick={() => showToast('Footprint chart data exported as CSV')}
              className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" 
              title="Download Data"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={footprintData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorScope2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#006a61" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#006a61" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorScope1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#091426" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#091426" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#c5c6cd" />
                <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#45474c' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#45474c' }} />
                <Tooltip contentStyle={{ borderRadius: '8px', border: '1px solid #c5c6cd', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }} />
                <Area type="monotone" dataKey="scope2" name="Scope 2 (Electricity)" stroke="#006a61" strokeWidth={2} fillOpacity={1} fill="url(#colorScope2)" />
                <Area type="monotone" dataKey="scope1" name="Scope 1 (Direct)" stroke="#091426" strokeWidth={2} fillOpacity={1} fill="url(#colorScope1)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Reduction Potential Chart */}
        <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h2 className="text-headline-sm font-bold text-primary">Emission Reduction Projects</h2>
              <p className="text-xs text-on-surface-variant mt-1">Potential annual reduction (tCO₂e) by activity</p>
            </div>
            <button 
              onClick={() => showToast('Reduction project data exported as CSV')}
              className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" 
              title="Download Data"
            >
              <Download className="w-4 h-4" />
            </button>
          </div>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={reductionData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#c5c6cd" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#45474c' }} dy={10} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#45474c' }} />
                <Tooltip cursor={{ fill: '#f2f4f6' }} contentStyle={{ borderRadius: '8px', border: '1px solid #c5c6cd', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }} />
                <Bar dataKey="value" name="Reduction (tCO₂e/yr)" fill="#006a61" radius={[4, 4, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Generate Reports List */}
      <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm overflow-hidden">
        <div className="p-6 border-b border-outline-variant/20 bg-surface-container/10">
          <h2 className="text-headline-sm font-bold text-primary">Standard Compliance Reports</h2>
        </div>
        <div className="divide-y divide-outline-variant/20">
          {[
            { title: 'Full Carbon Footprint Report (2023)', desc: 'Comprehensive breakdown of Scope 1, 2, and 3 emissions.', type: 'PDF' },
            { title: 'Project Readiness Assessment Summary', desc: 'Readiness scores and missing documentation for active projects.', type: 'PDF' },
            { title: 'Raw Evidence Export Bundle', desc: 'Metadata and links to all verified evidence documents.', type: 'CSV' },
            { title: 'Environmental Impact Executive Brief', desc: 'High-level summary for investors, buyers, and stakeholders.', type: 'PDF' },
          ].map((report, i) => (
            <div key={i} className="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors group">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:bg-primary/5 transition-colors">
                  <FileText className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <div className="font-bold text-primary">{report.title}</div>
                  <div className="text-body-sm text-on-surface-variant">{report.desc}</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant bg-surface-container-high px-2 py-1 rounded">{report.type}</span>
                <button 
                  onClick={() => showToast(`Generating ${report.title}...`)}
                  className="flex items-center gap-2 px-4 py-1.5 border border-outline-variant rounded-lg text-body-sm font-bold text-primary hover:bg-surface-container transition-colors cursor-pointer"
                >
                  <Download className="w-4 h-4 text-outline" /> Generate
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
