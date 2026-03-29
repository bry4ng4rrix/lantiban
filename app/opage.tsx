'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Zap, Target, TrendingUp, ShoppingCart } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="min-h-screen h-full py-6 bg-white">

      {/* HERO SECTION */}
      <section className=" bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-32 rounded-lg">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Boost Your Online Visibility
          </h1>
          <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            High-performance marketing solutions designed to help your business grow and reach new heights
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
           
            <a
              href="#price"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Started 
            </a>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      {/* <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Why Choose Lantiban</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We deliver measurable results through innovative marketing strategies and proven expertise
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Fast Performance</h3>
                <p className="text-slate-600">
                  Accelerate your online presence with lightning-fast solutions tailored to your business needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Targeted Strategy</h3>
                <p className="text-slate-600">
                  Data-driven campaigns designed to reach your ideal audience and maximize conversions
                </p>
              </CardContent>
            </Card>

            <Card className="border-slate-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <TrendingUp className="text-blue-600" size={24} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Proven Results</h3>
                <p className="text-slate-600">
                  Transparent reporting and consistent growth metrics that demonstrate real ROI
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}
        {/* PRICING SECTION */}
      <section className="py-16 md:py-24 bg-slate-50" id="price">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Pricing Plans</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Flexible packages designed to fit any budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Starter Pack', price: '$350', period: 'One-time', features: ['Basic setup', 'Initial campaign', 'Email support'] },
              { name: 'Premium Pack', price: '$500', period: 'per month', features: ['Advanced campaigns', 'Monthly optimization', 'Priority support'], highlight: true },
              { name: 'Pro Pack', price: '$1,000', period: 'per month', features: ['Full-service management', 'Custom strategies', '24/7 support'] },
            ].map((plan, idx) => (
              <Card
                key={idx}
                className={`border-slate-200 overflow-hidden transition-all ${
                  plan.highlight ? 'ring-2 ring-blue-600 shadow-lg md:scale-105' : ''
                }`}
              >
                <CardContent className="p-8">
                  {plan.highlight && <div className="bg-blue-600 text-white text-sm font-bold py-1 px-3 rounded-full inline-block mb-4">Most Popular</div>}
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                    <span className="text-slate-600 ml-2">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-700">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${
                      plan.highlight
                        ? 'bg-blue-600 hover:bg-blue-700 text-white'
                        : 'bg-slate-200 hover:bg-slate-300 text-slate-900'
                    }`}
                  >
                    Get Started
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Our Products</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Discover our comprehensive marketing solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: 'Social Media Marketing', desc: 'Increase engagement and build loyal followers' },
              { name: 'SEO Optimization', desc: 'Improve visibility and drive organic traffic' },
              { name: 'Content Creation', desc: 'High-quality content that resonates with your audience' },
            ].map((product, idx) => (
              <Card key={idx} className="border-slate-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="h-48 bg-linear-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-slate-400 mb-2">{idx + 1}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{product.name}</h3>
                  <p className="text-slate-600 mb-6">{product.desc}</p>
                  <a
                    href={`https://wa.me/XXXXXXXX?text=I'm%20interested%20in%20${product.name}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white rounded-lg">
                      Add To card <ShoppingCart className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    

      {/* CTA SECTION */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Grow Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Get in touch with our team today and let&apos;s create a marketing strategy that works for you
          </p>
          <a href="https://wa.me/XXXXXXXX" target="_blank" rel="noopener noreferrer">
            <Button className="bg-white text-blue-600 hover:bg-slate-100 px-8 py-3 text-lg font-semibold">
              Start Your Free Consultation
            </Button>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-400 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="text-white font-bold mb-4">About</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
                <li><a href="https://lantiban.fr" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Main Website</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/legal" className="hover:text-white transition-colors">Legal Notice</Link></li>
                <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Privacy</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="mailto:contact@lantiban.com" className="hover:text-white transition-colors">contact@lantiban.com</a></li>
                <li><a href="https://wa.me/XXXXXXXX" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">WhatsApp</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 pt-8 text-center text-sm">
            <p>&copy; 2026 Lantiban LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
