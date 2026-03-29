'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center">
            <Image src="/logo.avif" alt="Lantiban" width={100} height={100} className="h-10 w-auto" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/legal" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Legal Notice
            </Link>
            <Link href="/terms" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors">
              Privacy Policy
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-slate-200">
            <div className="flex flex-col gap-2">
              <Link
                href="/legal"
                className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Legal Notice
              </Link>
              <Link
                href="/terms"
                className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy"
                className="block px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 rounded-md transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
