import { NextRequest, NextResponse } from 'next/server';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL || 'http://localhost:5001/api';

let memoryEvidenceStore: any[] = [
  { id: '1', name: 'MSEB_Bill_Oct2023.pdf', category: 'Electricity', date: 'Oct 15, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.2 MB' },
  { id: '2', name: 'MSEB_Bill_Nov2023.pdf', category: 'Electricity', date: 'Nov 12, 2023', source: 'MSEB Portal', project: 'Baseline', status: 'Verified', size: '1.1 MB' },
  { id: '3', name: 'Solar_Installation_Invoice.pdf', category: 'Solar', date: 'Jan 05, 2024', source: 'Vendor', project: 'Solar & Energy Efficiency', status: 'Pending Review', size: '3.4 MB' },
  { id: '4', name: 'Energy_Audit_Report.pdf', category: 'Equipment', date: 'Feb 20, 2024', source: 'Third Party', project: 'Solar & Energy Efficiency', status: 'Verified', size: '5.8 MB' },
  { id: '5', name: 'Diesel_Generator_Fuel_Logs.xlsx', category: 'Fuel', date: 'Mar 10, 2024', source: 'Internal Logs', project: 'Baseline', status: 'Verified', size: '850 KB' },
  { id: '6', name: 'Waste_Disposal_Certificate.pdf', category: 'Waste', date: 'Apr 02, 2024', source: 'Municipal Auth', project: 'Process Optimization', status: 'Pending Review', size: '2.1 MB' }
];

export async function GET() {
  try {
    const res = await fetch(`${BACKEND_URL}/evidence`, { cache: 'no-store' });
    if (res.ok) {
      const data = await res.json();
      if (Array.isArray(data) && data.length > 0) {
        // Merge server evidence with local uploads
        const serverIds = new Set(data.map((d: any) => d.id));
        const localOnly = memoryEvidenceStore.filter((d) => !serverIds.has(d.id));
        return NextResponse.json([...data, ...localOnly]);
      }
    }
  } catch (error) {
    console.warn('Backend DB fetch failed for evidence, returning memory store');
  }

  return NextResponse.json(memoryEvidenceStore);
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const newDoc = {
      id: body.id || Date.now().toString(),
      name: body.name || 'Uploaded_File',
      category: body.category || 'Invoices',
      date: body.date || new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }),
      source: body.source || 'User Upload',
      project: body.project || 'Solar & Energy Efficiency',
      status: body.status || 'Verified',
      size: body.size || '1.0 MB',
      fileData: body.fileData,
      fileType: body.fileType,
    };

    // Store in memory cache
    memoryEvidenceStore = [newDoc, ...memoryEvidenceStore.filter((d) => d.id !== newDoc.id)];

    try {
      await fetch(`${BACKEND_URL}/evidence/upload`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newDoc),
      });
    } catch (e) {
      // Backend DB offline
    }

    return NextResponse.json({ success: true, document: newDoc });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process evidence document' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get('id');
  if (id) {
    memoryEvidenceStore = memoryEvidenceStore.filter((d) => d.id !== id);
  }
  return NextResponse.json({ success: true });
}
