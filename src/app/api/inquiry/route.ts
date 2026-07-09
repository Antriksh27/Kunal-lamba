import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { createClient } from '@sanity/client';

const resend = new Resend(process.env.RESEND_API_KEY || 're_placeholder_123');

const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'placeholder-project-id',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2026-07-09',
  useCdn: false, // We need false for writes
  token: process.env.SANITY_API_WRITE_TOKEN || 'placeholder_write_token',
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, payload } = body;

    // 1. Write to Sanity (failsafe: catch error and proceed so email can still trigger)
    let sanityResult = null;
    try {
      sanityResult = await sanityClient.create({
        _type: 'inquiry',
        inquiryType,
        name,
        email,
        timestamp: new Date().toISOString(),
        status: 'new',
        payload: JSON.stringify(payload, null, 2),
      });
    } catch (sanityError) {
      console.error('Sanity database registration failed:', sanityError);
    }

    // 2. Send email notification via Resend
    let emailResult = null;
    try {
      emailResult = await resend.emails.send({
        from: 'Kunal Lamba Booking <onboarding@resend.dev>',
        to: process.env.DELIVERY_EMAIL || 'kunal@kunallamba.com',
        subject: `New Inquiry: ${inquiryType.toUpperCase()} - ${name}`,
        html: `
          <h2>New Booking inquiry received:</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Type:</strong> ${inquiryType}</p>
          <h3>Submitted Fields:</h3>
          <pre style="background: #f4ede4; padding: 15px; border-radius: 4px; border: 1px solid #c9a227; color: #121113;">
            ${JSON.stringify(payload, null, 2)}
          </pre>
        `,
      });
    } catch (emailError) {
      console.error('Email delivery failed:', emailError);
    }

    return NextResponse.json({ success: true, sanityResult, emailResult });
  } catch (error: any) {
    console.error('General route handler failure:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
