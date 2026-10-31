import { NextResponse } from "next/server";
import { Resend } from "resend";
import { businessInfo } from "@/lib/data";
import {
  ContactSubmissionData,
  generateAdminNotificationHtml,
  generateCustomerConfirmationHtml,
} from "@/lib/email-templates";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Anti-spam honeypot verification
    // Bots usually fill hidden fields like 'website_hp' or 'company_url'
    if (body.botField) {
      // Silently return success to avoid bot retries
      return NextResponse.json({
        success: true,
        message: "Your message has been received.",
      });
    }

    // 2. Validate input
    const { name, email, phone, message, service, suburb, address, formType, roofType, roofCondition, timing, sourcePage } = body;

    if (!name || (!email && !phone)) {
      return NextResponse.json(
        { success: false, error: "Please provide your name and at least an email or phone number." },
        { status: 400 }
      );
    }

    const submissionData: ContactSubmissionData = {
      formType: formType || "contact",
      name: String(name).trim(),
      email: String(email || "").trim(),
      phone: String(phone || "").trim(),
      suburb: suburb ? String(suburb).trim() : undefined,
      address: address ? String(address).trim() : undefined,
      service: service ? String(service).trim() : undefined,
      roofType: roofType ? String(roofType).trim() : undefined,
      roofCondition: roofCondition ? String(roofCondition).trim() : undefined,
      timing: timing ? String(timing).trim() : undefined,
      message: message ? String(message).trim() : undefined,
      sourcePage: sourcePage ? String(sourcePage).trim() : undefined,
    };

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_NOTIFICATION_EMAIL || businessInfo.email;
    const fromEmail = process.env.RESEND_FROM_EMAIL || "Elite Star Roofing <onboarding@resend.dev>";

    // 3. Fallback if RESEND_API_KEY is not yet added to .env.local
    if (!apiKey || apiKey === "re_your_api_key_here") {
      console.warn(
        "[Resend Warning] RESEND_API_KEY is not configured in environment variables. Lead received in mock mode:",
        submissionData
      );
      return NextResponse.json({
        success: true,
        mocked: true,
        message: "Form submitted successfully (Development mock mode). Add RESEND_API_KEY to send live emails.",
      });
    }

    const resend = new Resend(apiKey);

    // 4. Send notification email to the business team
    const adminSubject = `New Lead: ${submissionData.name} - ${submissionData.service || "Roofing Inquiry"} (${submissionData.suburb || "Perth"})`;
    
    const adminEmailResult = await resend.emails.send({
      from: fromEmail,
      to: recipientEmail,
      replyTo: submissionData.email || undefined,
      subject: adminSubject,
      html: generateAdminNotificationHtml(submissionData),
    });

    if (adminEmailResult.error) {
      console.error("[Resend Error sending admin email]:", adminEmailResult.error);
      return NextResponse.json(
        { success: false, error: adminEmailResult.error.message },
        { status: 500 }
      );
    }

    // 5. Send confirmation email to customer if an email was provided
    if (submissionData.email) {
      try {
        await resend.emails.send({
          from: fromEmail,
          to: submissionData.email,
          subject: `We've received your request - ${businessInfo.name}`,
          html: generateCustomerConfirmationHtml(submissionData),
        });
      } catch (custError) {
        // With unverified test domains (e.g. onboarding@resend.dev), Resend only allows
        // sending to the verified developer email. Don't fail the entire submission if customer email fails.
        console.warn("[Resend Warning sending customer confirmation]:", custError);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Thank you! Your message has been sent successfully.",
    });
  } catch (error: unknown) {
    console.error("[API Contact Route Error]:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
}
