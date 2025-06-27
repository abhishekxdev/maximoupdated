import { NextRequest, NextResponse } from 'next/server';
import { headers } from 'next/headers';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_V8rGhFu2_2tjRMxcyArnKghSokfcJ2Jum');

// Force dynamic rendering
export const dynamic = 'force-dynamic';

export async function POST(request: NextRequest) {
  // Get headers at the very beginning before any async operations
  const headersList = headers();
  const clientIP = headersList.get('x-forwarded-for') || 'Unknown';

  try {
    const data = await request.json();
    
    const { fullName, email, phone, position, department, experience, expectedSalary, resumeLink, coverLetter } = data;

    // Debug: Log the API key (first few characters only)
    const apiKey = process.env.RESEND_API_KEY || 're_V8rGhFu2_2tjRMxcyArnKghSokfcJ2Jum';
    console.log('API Key available:', apiKey ? `${apiKey.substring(0, 10)}...` : 'No API key');

    // Validate required fields
    if (!fullName || !email || !phone || !position || !department || !experience || !coverLetter || !resumeLink) {
      return NextResponse.json(
        { error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    // Validate Google Drive/Docs link format - accept both drive.google.com and docs.google.com
    const driveRegex = /^https:\/\/(drive|docs)\.google\.com\//;
    if (!driveRegex.test(resumeLink)) {
      return NextResponse.json(
        { error: 'Please provide a valid Google Drive or Google Docs link' },
        { status: 400 }
      );
    }

    // Create HTML email content
    const htmlContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #333; border-bottom: 2px solid #007bff; padding-bottom: 10px;">
          New Job Application - ${position}
        </h2>
        
        <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #007bff; margin-top: 0;">Applicant Information</h3>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Full Name:</strong>
            <span style="margin-left: 10px; color: #333;">${fullName}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Email:</strong>
            <span style="margin-left: 10px; color: #333;">${email}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Phone:</strong>
            <span style="margin-left: 10px; color: #333;">${phone}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Position Applied For:</strong>
            <span style="margin-left: 10px; color: #333;">${position}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Department:</strong>
            <span style="margin-left: 10px; color: #333;">${department}</span>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Experience:</strong>
            <span style="margin-left: 10px; color: #333;">${experience}</span>
          </div>
          
          ${expectedSalary ? `
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Expected Salary:</strong>
            <span style="margin-left: 10px; color: #333;">${expectedSalary}</span>
          </div>
          ` : ''}
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Resume Link:</strong>
            <a href="${resumeLink}" style="margin-left: 10px; color: #007bff; text-decoration: none;" target="_blank">View Resume</a>
          </div>
          
          <div style="margin-bottom: 15px;">
            <strong style="color: #555;">Cover Letter:</strong>
            <div style="margin-top: 10px; padding: 15px; background-color: white; border-radius: 5px; border-left: 4px solid #007bff;">
              ${coverLetter.replace(/\n/g, '<br>')}
            </div>
          </div>
        </div>
        
        <div style="background-color: #e9ecef; padding: 15px; border-radius: 5px; font-size: 14px; color: #6c757d;">
          <strong>Application Details:</strong><br>
          Date: ${new Date().toLocaleString()}<br>
          IP Address: ${clientIP}
        </div>
        
        <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #dee2e6; font-size: 12px; color: #6c757d;">
          This email was sent from the Maximo Solutions careers page.
        </div>
      </div>
    `;

    console.log('Attempting to send career application email...');
    console.log('From:', 'Maximo Careers <onboarding@resend.dev>');
    console.log('To:', ['abhishekxbiz@gmail.com']);
    console.log('Subject:', `New Job Application: ${position} - ${fullName}`);

    // Send email using Resend
    const emailData = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['abhishekxbiz@gmail.com'],
      subject: `New Job Application: ${position} - ${fullName}`,
      html: htmlContent,
      replyTo: email,
    });

    console.log('Career application email sent successfully:', emailData);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Thank you for your application! We\'ll review it and get back to you within 5-7 business days.',
        data: emailData 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Career application error details:', {
      message: error instanceof Error ? error.message : 'Unknown error',
      stack: error instanceof Error ? error.stack : undefined,
      error: error
    });
    
    return NextResponse.json(
      { 
        error: 'Sorry, there was an error submitting your application. Please try again or email us directly at careers@max-imo.com',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}