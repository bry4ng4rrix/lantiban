'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen h-full bg-white">

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Privacy Policy</h1>
          <p className="text-slate-600 text-lg mb-8">Last updated: March 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Introduction</h2>
            <p className="text-slate-700">
              Lantiban LLC (&quot;we&quot;, &quot;our&quot;, or &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
            </p>
            <p className="text-slate-700 mt-4">
              By accessing and using this website, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Information We Collect</h2>
            <p className="text-slate-700 mb-4">
              We may collect personal information that you voluntarily provide to us, including:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mb-4">
              <li>Your name and email address</li>
              <li>Phone number and contact information</li>
              <li>Business information and company details</li>
              <li>Any other information you provide when contacting us</li>
            </ul>
            <p className="text-slate-700 mb-4">
              We also automatically collect certain technical information:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>IP address and browser type</li>
              <li>Pages visited and time spent on the website</li>
              <li>Device information and operating system</li>
              <li>Referring website URLs</li>
              <li>Geographic location (based on IP address)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. How We Use Your Data</h2>
            <p className="text-slate-700">
              We use the information we collect for the following purposes:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>To respond to your inquiries and provide customer support</li>
              <li>To improve our services and website functionality</li>
              <li>To optimize advertising performance and marketing campaigns</li>
              <li>To analyze website traffic and user behavior</li>
              <li>To comply with legal obligations and enforce our terms</li>
              <li>To send you promotional materials (with your consent)</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. Cookies & Tracking Technologies</h2>
            <p className="text-slate-700 mb-4">
              We use cookies and similar tracking technologies to improve your user experience and analyze website traffic. Cookies are small files stored on your device that help us remember your preferences and understand how you interact with our website.
            </p>
            <p className="text-slate-700">
              You can control cookie preferences through your browser settings. However, disabling cookies may affect the functionality of certain website features. We use cookies for:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mt-3">
              <li>Remembering user preferences</li>
              <li>Analyzing website performance</li>
              <li>Tracking advertising effectiveness</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Data Sharing</h2>
            <p className="text-slate-700 mb-4">
              <strong>We do not sell your personal data to third parties.</strong> However, we may share your information with:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Trusted third-party service providers for analytics and reporting</li>
              <li>Advertising partners to optimize marketing campaigns</li>
              <li>Legal authorities if required by law</li>
              <li>Business partners with your consent</li>
            </ul>
            <p className="text-slate-700 mt-4">
              All third-party partners are contractually obligated to maintain the confidentiality and security of your data.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Data Security</h2>
            <p className="text-slate-700">
              We implement industry-standard security measures to protect your personal data from unauthorized access, alteration, and disclosure. These measures include:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4 mt-3">
              <li>Encrypted data transmission (SSL/TLS)</li>
              <li>Secure database storage</li>
              <li>Regular security audits</li>
              <li>Access controls and authentication protocols</li>
            </ul>
            <p className="text-slate-700 mt-4">
              <strong>Important:</strong> No system is completely secure. While we strive to protect your data, we cannot guarantee absolute security. You use this website at your own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Your Privacy Rights</h2>
            <p className="text-slate-700">
              You have the right to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Access your personal data</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your data (subject to legal constraints)</li>
              <li>Opt-out of marketing communications</li>
              <li>Request a copy of your data in a portable format</li>
            </ul>
            <p className="text-slate-700 mt-4">
              To exercise any of these rights, please contact us at <a href="mailto:contact@lantiban.com" className="text-blue-600 hover:text-blue-700">contact@lantiban.com</a>.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Data Retention</h2>
            <p className="text-slate-700">
              We retain your personal data for as long as necessary to provide our services and fulfill the purposes outlined in this Privacy Policy. You can request deletion of your data at any time, subject to legal and operational constraints.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Third-Party Links</h2>
            <p className="text-slate-700">
              This website may contain links to third-party websites. We are not responsible for the privacy practices or content of external websites. We encourage you to review the privacy policies of any third-party sites before providing your information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Children&apos;s Privacy</h2>
            <p className="text-slate-700">
              This website is not intended for children under the age of 13. We do not knowingly collect personal information from children. If we become aware that a child has provided us with personal data, we will promptly delete such information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Policy Updates</h2>
            <p className="text-slate-700">
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal requirements. Changes will be posted on this page with an updated &quot;Last Updated&quot; date. Your continued use of the website constitutes acceptance of the updated policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">12. Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> <a href="mailto:contact@lantiban.com" className="text-blue-600 hover:text-blue-700">contact@lantiban.com</a></p>
              <p className="text-slate-700 mb-2"><strong>Address:</strong> 5830 E 2nd St Ste 7000, Casper, WY 82609, United States</p>
              <p className="text-slate-700"><strong>WhatsApp:</strong> <a href="https://wa.me/XXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Contact us on WhatsApp</a></p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
