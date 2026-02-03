import { GraduationCap } from 'lucide-react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center h-16">
            <a href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">Oumie</span>
            </a>
          </div>
        </div>
      </nav>

      {/* Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24">
        <h1 className="text-4xl font-bold mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-12">Last updated: January 15, 2025</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Information We Collect</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you create an account, use our services,
              or contact us for support. This includes:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
              <li>Name and email address</li>
              <li>Student email verification data</li>
              <li>Study session timestamps and durations</li>
              <li>Self-reported subject and course information</li>
              <li>Usage patterns within the Oumie application</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. How We Use Your Information</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
              <li>Provide, maintain, and improve our services</li>
              <li>Generate personalized study insights and recommendations</li>
              <li>Send you notifications and updates related to your account</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage trends</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. How We Protect Your Data</h2>
            <p className="text-gray-400 leading-relaxed">
              We implement industry-standard security measures to protect your personal information. This includes
              end-to-end encryption for all data in transit and at rest, regular security audits, and strict access
              controls. We never sell your personal data to third parties. Your study data is used solely to power
              your personal dashboard and insights.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. Data Sharing</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              We do not sell, trade, or share your personal information with third parties, except as necessary to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
              <li>Operate and improve our services (e.g., cloud hosting providers)</li>
              <li>Comply with legal obligations</li>
              <li>Respond to legal process or government requests</li>
              <li>Protect the rights, property, or safety of Oumie or others</li>
            </ul>
            <p className="text-gray-400 leading-relaxed mt-4">
              University partners may access aggregated, fully anonymized data about student study trends.
              Individual student data is never shared with universities without explicit consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Your Rights</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
              <li>Access your personal data at any time through your account settings</li>
              <li>Correct any inaccurate personal data</li>
              <li>Request deletion of your account and all associated data</li>
              <li>Export your data in a portable format</li>
              <li>Opt out of non-essential communications</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Cookies</h2>
            <p className="text-gray-400 leading-relaxed">
              We use cookies and similar tracking technologies to enhance your experience. Essential cookies are
              required for the application to function. You can control non-essential cookies through your browser
              settings or by contacting us.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Changes to This Policy</h2>
            <p className="text-gray-400 leading-relaxed">
              We may update this Privacy Policy from time to time. We will notify you of any significant changes by
              sending an email or displaying a notice on our platform. Your continued use of Oumie after any changes
              constitutes acceptance of the updated policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have questions or concerns about this Privacy Policy or how we handle your data, please reach out
              to us at <span className="text-blue-400">privacy@oumie.com</span>. We are committed to responding
              within 48 hours.
            </p>
          </section>
        </div>

        {/* Back link */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <a href="/" className="text-blue-400 hover:text-blue-300 text-sm transition-colors">← Back to Home</a>
        </div>
      </main>
    </div>
  )
}
