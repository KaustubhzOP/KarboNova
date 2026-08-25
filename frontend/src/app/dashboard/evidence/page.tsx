'use client';

import { useState, useRef } from 'react';
import { Folder, FileText, UploadCloud, Search, Filter, ShieldCheck, Clock, Download, Trash2, Eye, X, CheckCircle2 } from 'lucide-react';

interface DocFile {
  id: string;
  name: string;
  category: string;
  date: string;
  source: string;
  project: string;
  status: string;
  size: string;
}

export default function EvidenceVaultPage() {
  const [activeFolder, setActiveFolder] = useState('Electricity');
  const [searchQuery, setSearchQuery] = useState('');
  const [previewDoc, setPreviewDoc] = useState<DocFile | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const folders = ['All', 'Electricity', 'Fuel', 'Solar', 'Equipment', 'Waste', 'Invoices', 'Meters', 'Production'];

  const [files, setFiles] = useState<DocFile[]>([
    { id: '1', name: 'MSEB_Bill_Oct2023.pdf', category: 'Electricity', date: 'Oct 15, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.2 MB' },
    { id: '2', name: 'MSEB_Bill_Nov2023.pdf', category: 'Electricity', date: 'Nov 12, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.1 MB' },
    { id: '3', name: 'Solar_Installation_Invoice.pdf', category: 'Solar', date: 'Jan 05, 2024', source: 'Vendor', project: 'Solar & Energy Efficiency', status: 'Pending Review', size: '3.4 MB' },
    { id: '4', name: 'Energy_Audit_Report.pdf', category: 'Equipment', date: 'Feb 20, 2024', source: 'Third Party', project: 'Solar & Energy Efficiency', status: 'Verified', size: '5.8 MB' },
    { id: '5', name: 'Diesel_Generator_Fuel_Logs.xlsx', category: 'Fuel', date: 'Mar 10, 2024', source: 'Internal Logs', project: 'Baseline', status: 'Verified', size: '850 KB' },
    { id: '6', name: 'Waste_Disposal_Certificate.pdf', category: 'Waste', date: 'Apr 02, 2024', source: 'Municipal Auth', project: 'Process Optimization', status: 'Pending Review', size: '2.1 MB' }
  ]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const uploadedFile = e.target.files[0];
      const newDoc: DocFile = {
        id: Date.now().toString(),
        name: uploadedFile.name,
        category: activeFolder === 'All' ? 'Invoices' : activeFolder,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        source: 'User Upload',
        project: 'Solar & Energy Efficiency',
        status: 'Pending Review',
        size: `${(uploadedFile.size / (1024 * 1024)).toFixed(1)} MB`
      };
      setFiles([newDoc, ...files]);
      showToast(`Successfully uploaded ${uploadedFile.name}`);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const newDoc: DocFile = {
        id: Date.now().toString(),
        name: droppedFile.name,
        category: activeFolder === 'All' ? 'Invoices' : activeFolder,
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
        source: 'User Upload',
        project: 'Solar & Energy Efficiency',
        status: 'Pending Review',
        size: `${(droppedFile.size / (1024 * 1024)).toFixed(1)} MB`
      };
      setFiles([newDoc, ...files]);
      showToast(`Successfully uploaded ${droppedFile.name}`);
    }
  };

  const handleDelete = (id: string, name: string) => {
    setFiles(files.filter(f => f.id !== id));
    showToast(`Deleted ${name}`);
  };

  const handleDownload = (name: string) => {
    showToast(`Downloading ${name}...`);
  };

  const filteredFiles = files.filter(file => {
    const matchesCategory = activeFolder === 'All' || file.category === activeFolder;
    const matchesSearch = searchQuery === '' || 
      file.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.project.toLowerCase().includes(searchQuery.toLowerCase()) ||
      file.source.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 pb-12 h-[calc(100vh-8rem)] flex flex-col relative">
      {/* Hidden Native File Input */}
      <input 
        type="file" 
        ref={fileInputRef} 
        onChange={handleFileUpload} 
        className="hidden" 
        accept=".pdf,.xlsx,.xls,.doc,.docx,.jpg,.png"
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-primary text-on-primary px-4 py-3 rounded-lg shadow-lg flex items-center gap-3 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-5 h-5 text-secondary" />
          <span className="text-body-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex justify-between items-end shrink-0">
        <div>
          <h1 className="text-display-md font-bold text-primary">Evidence Vault</h1>
          <p className="text-body-md text-on-surface-variant mt-1">Manage and organize your compliance-ready documentation.</p>
        </div>
        <button 
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-5 py-2.5 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-all shadow-sm cursor-pointer"
        >
          <UploadCloud className="w-4 h-4" /> Upload Document
        </button>
      </div>

      <div className="flex gap-6 flex-1 min-h-0">
        {/* Sidebar Folders */}
        <div className="w-64 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm flex flex-col shrink-0">
          <div className="p-4 border-b border-outline-variant/20">
            <h3 className="text-label-md font-bold text-on-surface-variant uppercase tracking-wider">Categories</h3>
          </div>
          <div className="overflow-y-auto p-2 flex-1 space-y-0.5">
            {folders.map(folder => (
              <button
                key={folder}
                onClick={() => setActiveFolder(folder)}
                className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-body-sm font-medium transition-colors ${
                  activeFolder === folder 
                    ? 'bg-secondary/10 text-secondary' 
                    : 'text-on-surface-variant hover:bg-surface-container hover:text-primary'
                }`}
              >
                <div className="flex items-center gap-3">
                  <Folder className={`w-4 h-4 ${activeFolder === folder ? 'text-secondary shrink-0' : 'text-outline shrink-0'}`} />
                  {folder}
                </div>
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                  {folder === 'All' ? files.length : files.filter(f => f.category === folder).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 bg-surface-container-lowest rounded-xl border border-outline-variant/30 shadow-sm flex flex-col min-w-0">
          {/* Toolbar */}
          <div className="px-6 py-4 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container/10 shrink-0">
            <div className="flex items-center gap-2 text-primary font-bold">
              <Folder className="w-5 h-5 text-secondary" />
              {activeFolder} Documents ({filteredFiles.length})
            </div>
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-outline" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search documents..." 
                  className="pl-9 pr-4 py-1.5 border border-outline-variant/50 rounded-md text-body-sm focus:outline-none focus:border-secondary focus:ring-1 focus:ring-secondary w-64 bg-surface-container-lowest" 
                />
              </div>
              <button 
                onClick={() => setSearchQuery('')}
                className="p-1.5 border border-outline-variant/50 rounded-md text-on-surface-variant hover:bg-surface-container transition-colors"
                title="Reset Search"
              >
                <Filter className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Drag & Drop Area */}
          <div className="p-6 shrink-0">
            <div 
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-outline-variant/50 rounded-xl bg-surface-container-low p-6 text-center hover:bg-surface-container transition-colors cursor-pointer group"
            >
              <div className="mx-auto w-10 h-10 bg-surface-container-highest rounded-full flex items-center justify-center mb-2 group-hover:bg-secondary/10 transition-colors">
                <UploadCloud className="w-5 h-5 text-on-surface-variant group-hover:text-secondary transition-colors" />
              </div>
              <p className="text-body-sm text-primary font-bold">Drag & drop files here, or <span className="text-secondary underline">browse local files</span></p>
              <p className="text-xs text-on-surface-variant mt-0.5">Supports PDF, XLSX, JPG up to 50MB</p>
            </div>
          </div>

          {/* File Table */}
          <div className="flex-1 overflow-auto">
            {filteredFiles.length > 0 ? (
              <table className="w-full text-left border-collapse whitespace-nowrap">
                <thead className="sticky top-0 bg-surface-container-lowest z-10 shadow-[0_1px_0_rgba(197,198,205,0.5)]">
                  <tr>
                    <th className="px-6 py-3 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Document</th>
                    <th className="px-6 py-3 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Date</th>
                    <th className="px-6 py-3 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Source</th>
                    <th className="px-6 py-3 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Project</th>
                    <th className="px-6 py-3 text-label-md text-on-surface-variant uppercase tracking-wider font-bold">Status</th>
                    <th className="px-6 py-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-outline-variant/20 text-body-sm">
                  {filteredFiles.map((file) => (
                    <tr key={file.id} className="hover:bg-surface-container-low/50 transition-colors group">
                      <td className="px-6 py-3">
                        <div className="flex items-center gap-3">
                          <FileText className="w-4 h-4 text-primary shrink-0" />
                          <div>
                            <div className="font-medium text-primary">{file.name}</div>
                            <div className="text-xs text-on-surface-variant">{file.size} • {file.category}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-3 text-on-surface-variant">{file.date}</td>
                      <td className="px-6 py-3 text-on-surface-variant">{file.source}</td>
                      <td className="px-6 py-3 text-on-surface-variant">{file.project}</td>
                      <td className="px-6 py-3">
                        {file.status === 'Verified' ? (
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold bg-secondary/10 text-secondary border border-secondary/20">
                            <ShieldCheck className="w-3 h-3" /> Verified
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2 py-1 rounded text-xs font-bold bg-surface-container-high text-on-surface-variant border border-outline-variant/30">
                            <Clock className="w-3 h-3" /> Pending Review
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-3 text-right">
                        <div className="flex justify-end gap-2">
                          <button 
                            onClick={() => setPreviewDoc(file)}
                            className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" 
                            title="Preview Document"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDownload(file.name)}
                            className="p-1.5 text-on-surface-variant hover:text-primary hover:bg-surface-container rounded" 
                            title="Download Document"
                          >
                            <Download className="w-4 h-4" />
                          </button>
                          <button 
                            onClick={() => handleDelete(file.id, file.name)}
                            className="p-1.5 text-on-surface-variant hover:text-error hover:bg-error/10 rounded" 
                            title="Delete Document"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="p-12 text-center text-on-surface-variant">
                <Folder className="w-12 h-12 text-outline mx-auto mb-3 opacity-40" />
                <p className="text-body-md font-bold text-primary">No documents found</p>
                <p className="text-xs mt-1">Try switching categories or uploading a new document.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Document Preview Modal */}
      {previewDoc && (
        <div className="fixed inset-0 z-50 bg-primary/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest rounded-2xl shadow-xl border border-outline-variant/30 w-full max-w-2xl overflow-hidden animate-in fade-in zoom-in-95">
            <div className="p-6 border-b border-outline-variant/20 flex justify-between items-center bg-surface-container-low">
              <div className="flex items-center gap-3">
                <FileText className="w-6 h-6 text-secondary" />
                <div>
                  <h3 className="text-headline-sm font-bold text-primary">{previewDoc.name}</h3>
                  <p className="text-xs text-on-surface-variant">{previewDoc.category} Document • {previewDoc.size}</p>
                </div>
              </div>
              <button 
                onClick={() => setPreviewDoc(null)}
                className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-8 space-y-6">
              <div className="bg-surface-container p-6 rounded-xl border border-outline-variant/20 space-y-4">
                <div className="grid grid-cols-2 gap-4 text-body-sm">
                  <div>
                    <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Source</span>
                    <span className="font-bold text-primary">{previewDoc.source}</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Uploaded Date</span>
                    <span className="font-bold text-primary">{previewDoc.date}</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Linked Project</span>
                    <span className="font-bold text-primary">{previewDoc.project}</span>
                  </div>
                  <div>
                    <span className="text-xs text-on-surface-variant uppercase font-bold tracking-wider block mb-1">Verification Status</span>
                    <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded text-xs font-bold ${
                      previewDoc.status === 'Verified' ? 'bg-secondary/10 text-secondary' : 'bg-surface-container-high text-on-surface-variant'
                    }`}>
                      {previewDoc.status}
                    </span>
                  </div>
                </div>
              </div>

              <div className="border border-dashed border-outline-variant/50 rounded-xl p-12 text-center bg-surface-container-low">
                <FileText className="w-16 h-16 text-secondary mx-auto mb-3 opacity-80" />
                <p className="text-body-md font-bold text-primary">Compliance Verification File Preview</p>
                <p className="text-xs text-on-surface-variant mt-1">This document has been indexed in the KarboNova Evidence Layer.</p>
              </div>
            </div>

            <div className="p-4 border-t border-outline-variant/20 bg-surface-container-low flex justify-end gap-3">
              <button 
                onClick={() => setPreviewDoc(null)}
                className="px-4 py-2 border border-outline-variant rounded-lg font-bold text-body-sm text-primary hover:bg-surface-container transition-colors"
              >
                Close
              </button>
              <button 
                onClick={() => { handleDownload(previewDoc.name); setPreviewDoc(null); }}
                className="px-4 py-2 bg-secondary text-on-secondary rounded-lg font-bold text-body-sm hover:bg-[#005049] transition-colors shadow-sm flex items-center gap-2"
              >
                <Download className="w-4 h-4" /> Download File
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
