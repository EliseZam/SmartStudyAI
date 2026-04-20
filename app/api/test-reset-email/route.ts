import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { passwordResetEmail } from '@/app/utils/emailTemplates/passwordResetEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function GET() {
  const result = await resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'elise.k.zamora@gmail.com',
    subject: 'Reset your SmartStudy AI password',
    html: passwordResetEmail('Elise'),
  });

  console.log('TEST RESET EMAIL RESULT:', JSON.stringify(result, null, 2));

  return NextResponse.json(result);
}
