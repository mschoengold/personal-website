'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Writing', href: '#writing' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-dark-800/80 backdrop-blur-md border-b border-dark-400'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-wide text-dark-50 transition-colors"
          >
            M<span className="text-accent-300">S</span>B
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="group relative text-sm font-medium text-dark-100 transition-colors hover:text-dark-50"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Link
              href="/private"
              className="group relative text-sm font-medium text-dark-100 transition-colors hover:text-dark-50"
            >
              Private Projects
              <span className="absolute left-0 -bottom-1 h-px w-0 bg-accent-400 transition-all duration-300 group-hover:w-full" />
            </Link>
          </div>

          {/* Mobile menu button - simplified for now */}
          <button className="md:hidden text-dark-100 hover:text-accent-300" aria-label="Menu">
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
