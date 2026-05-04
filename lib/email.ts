import { Resend } from "resend";

function getResend() {
  if (!process.env.RESEND_API_KEY) return null;
  return new Resend(process.env.RESEND_API_KEY);
}

export async function sendVerificationEmail(
  email: string,
  code: string,
  fullName: string
) {
  // In development without API key, just log
  const resend = getResend();
  if (!resend) {
    console.log(`\n📧 VERIFICATION CODE for ${email}: ${code}\n`);
    return { success: true, dev: true };
  }

  try {
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Novpreneur <onboarding@resend.dev>",
      to: email,
      subject: "Verify your Novpreneur account",
      html: `
        <div style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 24px;">
          <div style="text-align: center; margin-bottom: 32px;">
            <h1 style="font-size: 22px; font-weight: 700; color: #111; margin: 0;">Novpreneur</h1>
          </div>
          
          <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 32px; text-align: center;">
            <h2 style="font-size: 20px; font-weight: 600; color: #111; margin: 0 0 8px;">
              Verify your email
            </h2>
            <p style="font-size: 14px; color: #64748b; margin: 0 0 24px;">
              Hi ${fullName}, use the code below to verify your account.
            </p>
            
            <div style="background: white; border: 2px solid #4A9FE5; border-radius: 8px; padding: 16px; margin: 0 auto; max-width: 200px;">
              <span style="font-size: 32px; font-weight: 700; letter-spacing: 8px; color: #4A9FE5; font-family: monospace;">
                ${code}
              </span>
            </div>
            
            <p style="font-size: 12px; color: #94a3b8; margin: 24px 0 0;">
              This code expires in 15 minutes.<br/>
              If you didn't create an account, ignore this email.
            </p>
          </div>
          
          <div style="text-align: center; margin-top: 32px;">
            <p style="font-size: 11px; color: #cbd5e1; margin: 0;">
              © 2026 Novpreneur. We don't teach startups. We build founders.
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error };
    }

    return { success: true };
  } catch (err) {
    console.error("Email send error:", err);
    return { success: false, error: err };
  }
}
