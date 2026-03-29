'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsPage() {
  return (
    <main className="min-h-screen h-full bg-white">
    

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-16">
      

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Terms of Service</h1>
          <p className="text-slate-600 text-lg mb-8">Last updated: March 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">1. Company Information</h2>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Lantiban LLC</strong></p>
              <p className="text-slate-700">5830 E 2nd St Ste 7000, Casper, WY 82609, United States</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">2. Purpose of Terms</h2>
            <p className="text-slate-700">
              These Terms of Service govern your use of the website and any services provided by Lantiban LLC. By accessing and using this website, you agree to be bound by these terms. If you do not agree to any part of these terms, you may not use this website.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">3. Services Offered</h2>
            <p className="text-slate-700 mb-4">
              This website provides marketing services and product presentations designed to help businesses grow their online presence. Our services include:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Social Media Marketing</li>
              <li>SEO Optimization</li>
              <li>Content Creation</li>
              <li>Consulting and Strategy Services</li>
            </ul>
            <p className="text-slate-700 mt-4">
              Please note that no direct purchases are made on this website. All transactions are handled through external channels.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">4. User Agreement & Conduct</h2>
            <p className="text-slate-700 mb-4">
              By using this website, you agree to:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Comply with all applicable laws and regulations</li>
              <li>Use the website only for lawful purposes</li>
              <li>Not engage in any activity that could harm the website or its users</li>
              <li>Not attempt to access restricted or protected areas without authorization</li>
              <li>Respect the intellectual property rights of Lantiban LLC</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">5. Pricing & Payment</h2>
            <p className="text-slate-700 mb-4">
              <strong>Important:</strong> Prices displayed on this website are indicative and may be subject to change at any time without prior notice. Pricing information should be confirmed directly with Lantiban LLC before entering into any service agreement.
            </p>
            <p className="text-slate-700">
              We reserve the right to update pricing at any time. Price changes will apply to new service agreements and may apply to renewal periods as specified in your contract.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">6. Payment Processing</h2>
            <p className="text-slate-700">
              <strong>No payments are processed directly on this website.</strong> All monetary transactions and payment processing are handled through external payment providers or directly through our sales team. We use secure payment methods to protect your financial information.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">7. Limitation of Liability</h2>
            <p className="text-slate-700 mb-4">
              To the fullest extent permitted by law, Lantiban LLC shall not be liable for:
            </p>
            <ul className="list-disc list-inside text-slate-700 space-y-2 ml-4">
              <li>Any damages resulting from the use or inability to use the website</li>
              <li>Lost profits, data, or business opportunities</li>
              <li>Interruption of service or technical issues</li>
              <li>Third-party actions or services accessed through our website</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">8. Intellectual Property Rights</h2>
            <p className="text-slate-700">
              All content, including but not limited to text, images, graphics, logos, and software, is the exclusive property of Lantiban LLC or its content providers. This content is protected by international copyright laws. You may not reproduce, modify, or distribute any content without explicit written permission from Lantiban LLC.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">9. Governing Law & Jurisdiction</h2>
            <p className="text-slate-700">
              These Terms of Service are governed by and construed in accordance with the laws of the United States of America. Any disputes arising from these terms or the use of this website shall be subject to the exclusive jurisdiction of the courts located in the United States.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">10. Modifications to Terms</h2>
            <p className="text-slate-700">
              Lantiban LLC reserves the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of the website constitutes acceptance of the modified terms.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">11. Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Email:</strong> <a href="mailto:contact@lantiban.com" className="text-blue-600 hover:text-blue-700">contact@lantiban.com</a></p>
              <p className="text-slate-700"><strong>WhatsApp:</strong> <a href="https://wa.me/XXXXXXXX" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700">Contact us on WhatsApp</a></p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
}
