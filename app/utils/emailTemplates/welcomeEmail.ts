export function welcomeEmail(firstName: string) {
  return `
    <div style="margin:0;padding:0;background-color:#f4f7fb;font-family:Arial,sans-serif;">
      <div style="max-width:600px;margin:0 auto;padding:40px 20px;">
        <div style="background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #e5e7eb;">
          <div style="background:#2563eb;padding:24px;text-align:center;">
            <h1 style="margin:0;color:#ffffff;font-size:28px;">SmartStudy AI</h1>
            <p style="margin:8px 0 0;color:#dbeafe;font-size:14px;">Your AI-powered study companion</p>
          </div>

          <div style="padding:32px 24px;color:#111827;">
            <h2 style="margin:0 0 16px;font-size:24px;">Welcome, ${firstName}!</h2>
            <p style="margin:0 0 16px;font-size:16px;line-height:1.6;color:#374151;">
              Thanks for joining SmartStudy AI. You can now create personalized study plans,
              generate summaries, practice with quizzes, and get AI-powered study support
              all in one place.
            </p>
            <p style="margin:0 0 24px;font-size:16px;line-height:1.6;color:#374151;">
              Sign in to start organizing your learning and studying more effectively.
            </p>

            <div style="text-align:center;margin:32px 0;">
              <a
                href="http://localhost:3001/auth/signin"
                style="display:inline-block;background:#2563eb;color:#ffffff;text-decoration:none;padding:14px 24px;border-radius:8px;font-size:16px;font-weight:bold;"
              >
                Start Studying
              </a>
            </div>
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