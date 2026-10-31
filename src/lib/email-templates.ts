import { businessInfo } from "./data";

export interface ContactSubmissionData {
  formType: "contact" | "quote" | "quick-estimate";
  name: string;
  email: string;
  phone: string;
  suburb?: string;
  address?: string;
  service?: string;
  roofType?: string;
  roofCondition?: string;
  timing?: string;
  message?: string;
  sourcePage?: string;
}

export function generateAdminNotificationHtml(data: ContactSubmissionData): string {
  const formTitles = {
    contact: "New Contact Message",
    quote: "New Free Quote Request",
    "quick-estimate": "New Fast Estimate Lead",
  };

  const title = formTitles[data.formType] || "New Website Inquiry";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8F9FA; margin: 0; padding: 24px; color: #1C2A39; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E5E7EB; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #1C2A39; padding: 32px 24px; text-align: center; }
    .badge { display: inline-block; background: #D4AF37; color: #1C2A39; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px; }
    .brand-name { color: #ffffff; font-size: 24px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
    .brand-sub { color: #D4AF37; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
    .content { padding: 32px 24px; }
    .lead-title { font-size: 20px; font-weight: 700; color: #1C2A39; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #F3F4F6; padding-bottom: 12px; }
    .detail-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
    .detail-table td { padding: 12px 8px; border-bottom: 1px solid #F3F4F6; vertical-align: top; }
    .label { width: 35%; font-weight: 600; color: #6B7280; font-size: 14px; }
    .val { width: 65%; font-weight: 600; color: #1C2A39; font-size: 15px; }
    .message-box { background: #F8F9FA; border-left: 4px solid #D4AF37; padding: 16px; border-radius: 0 8px 8px 0; font-size: 14px; line-height: 1.6; color: #374151; margin-bottom: 28px; white-space: pre-wrap; }
    .actions { display: flex; gap: 12px; margin-top: 24px; }
    .btn-call { display: inline-block; background: #16A34A; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-align: center; }
    .btn-reply { display: inline-block; background: #1C2A39; color: #ffffff; text-decoration: none; font-weight: 700; font-size: 14px; padding: 12px 24px; border-radius: 8px; text-align: center; }
    .footer { background: #F8F9FA; padding: 20px 24px; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #E5E7EB; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">Website Notification</span>
      <h1 class="brand-name">${businessInfo.name}</h1>
      <div class="brand-sub">Lead Capture System</div>
    </div>
    
    <div class="content">
      <h2 class="lead-title">${title}</h2>
      
      <table class="detail-table">
        <tr>
          <td class="label">Customer Name</td>
          <td class="val">${data.name || "Not provided"}</td>
        </tr>
        <tr>
          <td class="label">Phone</td>
          <td class="val"><a href="tel:${data.phone}" style="color: #16A34A; text-decoration: none; font-weight: 700;">${data.phone}</a></td>
        </tr>
        <tr>
          <td class="label">Email</td>
          <td class="val"><a href="mailto:${data.email}" style="color: #1C2A39;">${data.email}</a></td>
        </tr>
        ${data.suburb ? `<tr><td class="label">Suburb / Area</td><td class="val">${data.suburb}</td></tr>` : ""}
        ${data.address ? `<tr><td class="label">Full Address</td><td class="val">${data.address}</td></tr>` : ""}
        ${data.service ? `<tr><td class="label">Service Requested</td><td class="val"><strong style="color: #D4AF37;">${data.service}</strong></td></tr>` : ""}
        ${data.roofType ? `<tr><td class="label">Roof Type</td><td class="val">${data.roofType}</td></tr>` : ""}
        ${data.roofCondition ? `<tr><td class="label">Roof Condition</td><td class="val">${data.roofCondition}</td></tr>` : ""}
        ${data.timing ? `<tr><td class="label">Timeframe</td><td class="val">${data.timing}</td></tr>` : ""}
        ${data.sourcePage ? `<tr><td class="label">Source Page</td><td class="val">${data.sourcePage}</td></tr>` : ""}
      </table>

      ${data.message ? `
        <div style="font-weight: 600; color: #6B7280; font-size: 13px; margin-bottom: 6px; text-transform: uppercase;">Customer Message:</div>
        <div class="message-box">${data.message}</div>
      ` : ""}

      <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 24px;">
        <tr>
          <td align="center" style="padding-right: 8px;">
            <a href="tel:${data.phone}" class="btn-call" style="display: block; width: 85%;">📞 Call ${data.name || "Customer"}</a>
          </td>
          <td align="center" style="padding-left: 8px;">
            <a href="mailto:${data.email}?subject=Regarding your inquiry with Elite Star Roofing" class="btn-reply" style="display: block; width: 85%;">✉️ Reply Email</a>
          </td>
        </tr>
      </table>
    </div>
    
    <div class="footer">
      This inquiry was received from your website at <a href="https://elitestarroofing.com.au" style="color: #6B7280;">elitestarroofing.com.au</a>.<br>
      Time: ${new Date().toLocaleString("en-AU", { timeZone: "Australia/Perth" })} AWST (Perth Time)
    </div>
  </div>
</body>
</html>
  `;
}

export function generateCustomerConfirmationHtml(data: ContactSubmissionData): string {
  const firstName = data.name ? data.name.split(" ")[0] : "there";

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thank you for contacting ${businessInfo.name}</title>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F8F9FA; margin: 0; padding: 24px; color: #1C2A39; }
    .container { max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #E5E7EB; box-shadow: 0 4px 12px rgba(0,0,0,0.05); }
    .header { background: #1C2A39; padding: 36px 24px; text-align: center; }
    .badge { display: inline-block; background: #D4AF37; color: #1C2A39; font-weight: 700; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding: 4px 12px; border-radius: 999px; margin-bottom: 12px; }
    .brand-name { color: #ffffff; font-size: 26px; font-weight: 800; margin: 0; letter-spacing: -0.5px; }
    .brand-sub { color: #D4AF37; font-size: 13px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 4px; }
    .content { padding: 32px 24px; line-height: 1.6; }
    .greeting { font-size: 20px; font-weight: 700; color: #1C2A39; margin-top: 0; margin-bottom: 12px; }
    .intro { font-size: 15px; color: #4B5563; margin-bottom: 24px; }
    .steps-box { background: #F8F9FA; border-radius: 12px; padding: 20px; margin-bottom: 24px; border: 1px solid #E5E7EB; }
    .steps-title { font-weight: 700; font-size: 14px; text-transform: uppercase; letter-spacing: 0.5px; color: #1C2A39; margin-bottom: 14px; }
    .step-item { display: flex; align-items: flex-start; margin-bottom: 12px; font-size: 14px; color: #4B5563; }
    .step-num { background: #D4AF37; color: #1C2A39; width: 22px; height: 22px; border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; font-weight: 700; font-size: 12px; margin-right: 12px; flex-shrink: 0; }
    .summary-card { background: #FFFFFF; border: 1px dashed #D1D5DB; border-radius: 10px; padding: 16px; margin-bottom: 24px; font-size: 14px; }
    .summary-row { margin-bottom: 8px; }
    .emergency-card { background: #FEF3C7; border: 1px solid #FDE68A; border-radius: 10px; padding: 16px; text-align: center; margin-bottom: 24px; }
    .emergency-title { font-weight: 700; color: #92400E; font-size: 14px; margin-bottom: 4px; }
    .emergency-phone { font-size: 18px; font-weight: 800; color: #B45309; text-decoration: none; }
    .footer { background: #1C2A39; color: #9CA3AF; padding: 24px; text-align: center; font-size: 12px; line-height: 1.5; }
    .footer a { color: #D4AF37; text-decoration: none; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <span class="badge">Inquiry Confirmation</span>
      <h1 class="brand-name">${businessInfo.name}</h1>
      <div class="brand-sub">Perth &amp; WA Roofing Specialists</div>
    </div>
    
    <div class="content">
      <h2 class="greeting">Hi ${firstName},</h2>
      <p class="intro">
        Thank you for getting in touch with <strong>${businessInfo.name}</strong>. We have successfully received your roofing enquiry and our team is already reviewing the details.
      </p>

      <div class="steps-box">
        <div class="steps-title">What happens next?</div>
        <div class="step-item">
          <span class="step-num">1</span>
          <div><strong>Review:</strong> Our qualified roof technicians review your roof specifications and suburb.</div>
        </div>
        <div class="step-item">
          <span class="step-num">2</span>
          <div><strong>Quick Contact:</strong> We will call or email you within 24 business hours to discuss your project.</div>
        </div>
        <div class="step-item" style="margin-bottom: 0;">
          <span class="step-num">3</span>
          <div><strong>Free Onsite Quote:</strong> We arrange a comprehensive, obligation-free inspection and competitive quote.</div>
        </div>
      </div>

      <div class="summary-card">
        <div style="font-weight: 700; color: #1C2A39; margin-bottom: 10px;">Summary of your request:</div>
        ${data.service ? `<div class="summary-row"><strong>Service:</strong> ${data.service}</div>` : ""}
        ${data.suburb ? `<div class="summary-row"><strong>Suburb:</strong> ${data.suburb}</div>` : ""}
        ${data.phone ? `<div class="summary-row"><strong>Phone:</strong> ${data.phone}</div>` : ""}
        ${data.message ? `<div class="summary-row"><strong>Message:</strong> "${data.message}"</div>` : ""}
      </div>

      <div class="emergency-card">
        <div class="emergency-title">Need Urgent or Emergency Roof Leak Repairs?</div>
        <p style="margin: 4px 0 8px 0; font-size: 13px; color: #78350F;">Don't wait for email — call our direct line right away:</p>
        <a href="tel:${businessInfo.phoneRaw}" class="emergency-phone">📞 ${businessInfo.phone}</a>
      </div>
    </div>
    
    <div class="footer">
      <strong>${businessInfo.name}</strong><br>
      ${businessInfo.address} | Bibra Lake &amp; Greater Perth WA<br>
      Phone: <a href="tel:${businessInfo.phoneRaw}">${businessInfo.phone}</a> | Email: <a href="mailto:${businessInfo.email}">${businessInfo.email}</a><br>
      Operating Hours: Mon–Fri 7am–5pm, Sat 8am–1pm
    </div>
  </div>
</body>
</html>
  `;
}
