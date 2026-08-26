import { NextResponse } from 'next/server';
import { DashboardController } from '@/backend/controllers/dashboardController';

export async function GET() {
  try {
    const projects = await DashboardController.getProjects();
    return NextResponse.json(projects);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const newProject = await DashboardController.createProject(body);
    return NextResponse.json(newProject);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
