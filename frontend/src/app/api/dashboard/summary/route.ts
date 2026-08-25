import { NextResponse } from 'next/server';
import { DashboardController } from '@/backend/controllers/dashboardController';

export async function GET() {
  try {
    const summary = await DashboardController.getSummary();
    return NextResponse.json(summary);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch summary data' }, { status: 500 });
  }
}
