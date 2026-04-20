import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import { Resend } from 'resend';
import prisma from '@/prisma/client';
import { welcomeEmail } from '@/app/utils/emailTemplates/welcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password, firstName, lastName } = body;

    if (!email || !password || !firstName || !lastName) {
      return NextResponse.json(
        { message: 'All fields are required' },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { message: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (password.length < 8) {
      return NextResponse.json(
        { message: 'Password must be at least 8 characters long' },
        { status: 400 }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const fullName = `${trimmedFirstName} ${trimmedLastName}`.trim();

    const existingStudent = await prisma.student.findUnique({
      where: { email: normalizedEmail },
    });

    if (existingStudent) {
      return NextResponse.json(
        { message: 'An account with this email already exists' },
        { status: 409 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const student = await prisma.student.create({
      data: {
        fullName,
        email: normalizedEmail,
        password: hashedPassword,
      },
      select: {
        id: true,
        fullName: true,
        email: true,
        createdAt: true,
      },
    });

    try {
      const resendResult = await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: student.email,
        subject: 'Welcome to SmartStudy AI',
        html: welcomeEmail(trimmedFirstName),
      });

      console.log('RESEND RESULT:', JSON.stringify(resendResult, null, 2));
    } catch (emailError) {
      console.error('WELCOME EMAIL FAILED:', emailError);
    }

    return NextResponse.json(
      {
        message: 'Account created successfully',
        user: student,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error('SIGNUP ERROR:', error);

    return NextResponse.json(
      { message: 'An error occurred during signup' },
      { status: 500 }
    );
  }
}
