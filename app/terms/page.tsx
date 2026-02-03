import { GraduationCap } from 'lucide-react'

export default function TermsOfService() {
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
        <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
        <p className="text-gray-500 mb-12">Last updated: January 15, 2025</p>

        <div className="space-y-10">
          <section>
            <h2 className="text-xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              By accessing or using Oumie, you agree to be bound by these Terms of Service. If you do not agree to
              these terms, please do not use our services. These terms apply to all users of Oumie, including those
              who simply browse without creating an account.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">2. Description of Services</h2>
            <p className="text-gray-400 leading-relaxed">
              Oumie provides a study tracking platform that helps students monitor their study habits, receive
              personalized insights, and improve their academic performance. Our service includes a web dashboard,
              analytics, gamification features, and community tools. We offer a free tier and may introduce premium
              features in the future.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">3. User Accounts</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              To use certain features of Oumie, you must create an account. When creating an account, you agree to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
              <li>Provide accurate and truthful information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Be at least 13 years of age</li>
              <li>Notify us immediately of any unauthorized use of your account</li>
              <li>Take responsibility for all activities that occur under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">4. User Responsibilities</h2>
            <p className="text-gray-400 leading-relaxed mb-4">
              You agree not to use Oumie to:
            </p>
            <ul className="list-disc list-inside text-gray-400 space-y-2 leading-relaxed">
              <li>Violate any applicable laws or regulations</li>
              <li>Impersonate another person or entity</li>
              <li>Transmit spam, malware, or any harmful content</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Interfere with or disrupt the integrity of our services</li>
              <li>Collect or harvest any personally identifiable information from our platform</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">5. Intellectual Property</h2>
            <p className="text-gray-400 leading-relaxed">
              Oumie and its associated logos, product names, and other trademarks are the property of Oumie Inc.
              We grant you a limited, non-exclusive, non-transferable license to use our services for personal, non-commercial
              purposes. You may not reproduce, modify, distribute, or create derivative works based on our platform
              without our prior written consent. All content you create on Oumie remains your own intellectual property.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">6. Limitation of Liability</h2>
            <p className="text-gray-400 leading-relaxed">
              To the fullest extent permitted by law, Oumie shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, including but not limited to loss of profits, data, or goodwill, arising
              out of or in connection with your use of our services. Oumie provides its services on an &quot;as is&quot; and
              &quot;as available&quot; basis without warranties of any kind, either express or implied.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">7. Termination</h2>
            <p className="text-gray-400 leading-relaxed">
              We may terminate or suspend your account and access to Oumie at our sole discretion, without prior notice,
              for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              Upon termination, your right to use the service will cease immediately. You may also terminate your account
              at any time through your account settings.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">8. Changes to Terms</h2>
            <p className="text-gray-400 leading-relaxed">
              We reserve the right to modify or replace these Terms of Service at any time. We will provide notice of
              any significant changes by updating the date at the top of this page and, where appropriate, sending
              an email notification. Your continued use of Oumie after any changes constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">9. Governing Law</h2>
            <p className="text-gray-400 leading-relaxed">
              These Terms of Service shall be governed by and construed in accordance with the laws of the State of
              California, without regard to its conflict of law provisions. Any disputes arising under these terms
              shall be subject to the exclusive jurisdiction of the courts located in San Francisco, California.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-white mb-4">10. Contact Us</h2>
            <p className="text-gray-400 leading-relaxed">
              If you have any questions about these Terms of Service, please contact us at{" "}
              <span className="text-blue-400">legal@oumie.com</span>.
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
