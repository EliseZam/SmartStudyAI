import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { welcomeEmail } from '@/app/utils/emailTemplates/welcomeEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const result = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'elise.k.zamora@gmail.com',
    subject: 'Welcome to SmartStudy AI',
    html: welcomeEmail('Elise'),
  });

  console.log('TEST WELCOME EMAIL RESULT:', JSON.stringify(result, null, 2));

  return NextResponse.json(result);
}
