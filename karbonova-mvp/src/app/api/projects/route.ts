import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json([
    {
      id: "solar-energy-efficiency",
      name: "Solar & Energy Efficiency",
      status: "Documentation",
      estimatedReduction: 180,
      evidenceDocs: "8/10",
      readiness: 68,
      lastUpdated: "2 days ago"
    },
    {
      id: "waste-heat-recovery",
      name: "Waste Heat Recovery",
      status: "Verification",
      estimatedReduction: 245,
      evidenceDocs: "12/12",
      readiness: 95,
      lastUpdated: "1 week ago"
    }
  ]);
}
