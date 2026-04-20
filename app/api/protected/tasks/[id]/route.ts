import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/authOptions';

interface RouteParams {
  params: Promise<{ id: string }>;
}

// GET - No task detail model exists in the current schema
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    return NextResponse.json(
      { message: `Task ${id} not found in this version of SmartStudy AI.` },
      { status: 404 }
    );
  } catch (error) {
    console.error('Error fetching task:', error);
    return NextResponse.json(
      { message: 'Failed to fetch task' },
      { status: 500 }
    );
  }
}

// PUT - Placeholder until tasks are added to the Prisma schema
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    return NextResponse.json(
      { message: `Task updates are not enabled for ${id} in this version of SmartStudy AI yet.` },
      { status: 501 }
    );
  } catch (error) {
    console.error('Error updating task:', error);
    return NextResponse.json(
      { message: 'Failed to update task' },
      { status: 500 }
    );
  }
}

// DELETE - Placeholder until tasks are added to the Prisma schema
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 });
    }

    const { id } = await params;

    return NextResponse.json(
      { message: `Task deletion is not enabled for ${id} in this version of SmartStudy AI yet.` },
      { status: 501 }
    );
  } catch (error) {
    console.error('Error deleting task:', error);
    return NextResponse.json(
      { message: 'Failed to delete task' },
      { status: 500 }
    );
  }
}
