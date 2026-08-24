import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    businessName: "Acme Manufacturing",
    passportId: "KRB-MH-000124",
    estimatedEmissions: 620,
    potentialReduction: 180,
    carbonReadiness: 68,
    activeProjects: 2,
    opportunity: {
      title: "Solar + Energy Efficiency",
      estimatedReduction: 180,
      evidenceCompleteness: "6/10",
      status: "Assessment complete"
    },
    verificationStage: 2
  });
}
