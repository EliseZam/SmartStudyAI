export default function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-gray-800">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">Terms of Service</h1>
      <p className="mb-6 text-sm text-gray-500">Last updated: April 2026</p>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">1. About SmartStudy AI</h2>
        <p>
          SmartStudy AI is a web-based study support platform that helps students create study plans,
          generate summaries, review with quizzes, and manage tutoring-related study information.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">2. Acceptance of Terms</h2>
        <p>
          By accessing or using SmartStudy AI, you agree to these Terms of Service. If you do not agree,
          you must not use the service.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">3. Acceptable Use</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>Do not misuse the platform for unlawful or harmful purposes.</li>
          <li>Do not attempt to gain unauthorised access to other accounts or data.</li>
          <li>Do not upload malicious code or disruptive content.</li>
          <li>Do not misuse generated study materials in ways that violate academic integrity rules.</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">4. Intellectual Property</h2>
        <p>
          The SmartStudy AI platform, branding, design, and original interface elements are owned by
          SmartStudy AI. Users retain ownership of the study content they submit, while granting the
          service permission to process that content to provide study features.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">5. Limitation of Liability</h2>
        <p>
          SmartStudy AI is provided on an “as is” basis. To the fullest extent permitted by law,
          SmartStudy AI is not liable for indirect, incidental, or consequential damages arising from
          the use of the platform.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">6. Termination</h2>
        <p>
          SmartStudy AI may suspend or terminate accounts that violate these terms, misuse the service,
          or create risk for the platform or other users.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">7. Legal Frameworks</h2>
        <p>
          SmartStudy AI references PIPEDA because it is a Canadian business that collects personal
          information such as names and email addresses. GDPR principles are also relevant because the
          service may be accessed by users in the European Union. CASL is relevant to future account-
          related or promotional email communication.
        </p>
      </section>
    </main>
  );
}
