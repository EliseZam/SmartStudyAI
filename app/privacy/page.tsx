export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12 text-gray-800">
      <h1 className="mb-6 text-4xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mb-6 text-sm text-gray-500">Last updated: April 2026</p>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">1. Data We Collect</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>GA4 analytics data such as page views, session duration, device information, and approximate location</li>
          <li>User account data including name and email address from signups</li>
          <li>Study-related database data including study plans, summaries, quizzes, and tutoring session information</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">2. How Data Is Used</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>To create and manage user accounts</li>
          <li>To provide SmartStudy AI study features</li>
          <li>To improve the website using analytics and usage patterns</li>
          <li>To monitor performance, reliability, and security</li>
        </ul>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">3. Cookies and Analytics</h2>
        <p>
          SmartStudy AI uses Google Analytics 4, which uses cookies and similar technologies to measure
          page views, engagement, browsing behaviour, device type, and approximate geographic region.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">4. Storage and Protection</h2>
        <p>
          Data is stored using managed hosting and database services. SmartStudy AI uses authentication,
          environment variables, and platform security controls to help protect user data.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">5. User Rights</h2>
        <p>
          Users may request access to their personal information, correction of inaccurate information,
          and deletion of their data where appropriate.
        </p>
      </section>

      <section className="mb-8 space-y-4">
        <h2 className="text-2xl font-semibold">6. Legal Frameworks</h2>
        <p>
          SmartStudy AI references PIPEDA because it is a Canadian business collecting personal
          information. GDPR principles may also be relevant where users access the service from the
          European Union.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">7. Contact</h2>
        <p>
          For privacy questions or requests, users may contact SmartStudy AI through the application
          administrator or the contact methods provided by the business.
        </p>
      </section>
    </main>
  );
}
