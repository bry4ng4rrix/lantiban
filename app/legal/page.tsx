'use client';

import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function LegalPage() {
  return (
    <main className="min-h-screen h-full bg-white">

      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-16">
        

        <article className="prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">Legal Notice</h1>
          <p className="text-slate-600 text-lg mb-8">Last updated: March 2026</p>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Publisher Information</h2>
            <div className="bg-slate-50 p-6 rounded-lg border border-slate-200">
              <p className="text-slate-700 mb-2"><strong>Company Name:</strong> Lantiban LLC</p>
              <p className="text-slate-700 mb-2"><strong>Address:</strong> 5830 E 2nd St Ste 7000, Casper, WY 82609, United States</p>
              <p className="text-slate-700"><strong>Email:</strong> <a href="mailto:contact@lantiban.com" className="text-blue-600 hover:text-blue-700">contact@lantiban.com</a></p>
            </div>
          </section>

          

         

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Website Purpose</h2>
            <p className="text-slate-700">
              This website is provided for informational and marketing purposes only. It serves as a platform to showcase our services and allow potential clients to learn about our offerings and get in touch with our team.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Disclaimer</h2>
            <p className="text-slate-700 mb-4">
              While we strive to ensure that all information contained on this website is accurate and up-to-date, we do not guarantee the accuracy or completeness of any information provided. The content is provided on an &quot;as is&quot; basis.
            </p>
            <p className="text-slate-700">
              Lantiban LLC disclaims all warranties, express or implied, regarding the website and its content. We shall not be liable for any damages arising from the use of this website or its content.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">External Links</h2>
            <p className="text-slate-700">
              This website may contain links to third-party websites. Lantiban LLC is not responsible for the content, accuracy, or availability of external websites. We do not endorse any linked websites or their products or services. Users access external links at their own risk.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property Rights</h2>
            <p className="text-slate-700">
              All content on this website, including but not limited to text, images, graphics, logos, and software, is the exclusive property of Lantiban LLC and is protected by international copyright laws. No part of this website may be reproduced, distributed, or transmitted in any form or by any means without prior written permission from Lantiban LLC.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Liability Limitations</h2>
            <p className="text-slate-700">
              To the fullest extent permitted by law, Lantiban LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, even if advised of the possibility of such damages.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
            <p className="text-slate-700 mb-4">
              If you have any questions regarding this legal notice or our website, please don&apos;t hesitate to contact us:
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
