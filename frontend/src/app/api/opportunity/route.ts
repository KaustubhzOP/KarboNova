import { NextRequest, NextResponse } from 'next/server';
import { CarbonCalculatorService } from '@/backend/services/carbonCalculator';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const result = CarbonCalculatorService.calculateOpportunity(body);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to process assessment' }, { status: 400 });
  }
}
