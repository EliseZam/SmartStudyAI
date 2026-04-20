export function passwordResetEmail(firstName: string) {
  return `
    <div style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
        <div style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <div style="background:#2563eb;padding:24px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:28px;">SmartStudy AI</h1>
            <p style="margin:8px 0 0;color:#dbeafe;font-size:14px;">Password reset request</p>
          </div>

          <div style="padding:32px 24px;color:#111827;">
            <h2 style="margin:0 0 16px;font-size:24px;">Hi ${firstName},</h2>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#374151;">
              We received a request to reset your SmartStudy AI password.
            </p>
            <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#374151;">
              Click the button below to choose a new password and regain access to your account.
            </p>

            <div style="text-align:center;margin:32px 0;">
              <a
                href="http://localhost:3000/auth/signin"
                style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 24px;border-radius:8px;font-size:16px;font-weight:bold;"
              >
                Reset Password
              </a>
            </div>

            <p style="margin:24px 0 0;font-size:14px;line-height:1.6;color:#6b7280;">
              If you did not request a password reset, you can safely ignore this email.
            </p>
          </div>

          <div style="padding:20px 24px;background:#f9fafb;border-top:1px solid #e5e7eb;">
            <p style="margin:0;font-size:14px;color:#6b7280;text-align:center;">
              SmartStudy AI · support@smartstudyai.com
            </p>
          </div>
        </div>
      </div>
    </div>
  `;
}
