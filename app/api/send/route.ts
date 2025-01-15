import { EmailTemplate } from '@/components/email-template';
import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, phone, message } = body;

    const { data, error } = await resend.emails.send({
      from: 'Bergkulla <onboarding@resend.dev>',
      to: ['wnordqvist@gmail.com'],
      subject: 'Bergkulla - Kontaktformulär',
      replyTo: email,
      react: EmailTemplate({ 
        firstName, 
        lastName, 
        email, 
        phone, 
        message 
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json({ data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Något gick fel vid skickandet av meddelandet' },
      { status: 500 }
    );
  }
} 
