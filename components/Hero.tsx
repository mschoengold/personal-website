'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
            Michael Schoengold Beatty
          </h1>
          <p className="text-xl md:text-2xl text-dark-100 font-light">
            Business Operations Lead | National Security Strategist
          </p>
        </div>

        <p className="text-lg text-dark-200 max-w-2xl mx-auto mb-8 leading-relaxed">
          Mike Schoengold Beatty works at the intersection of national security and technology. 
          He currently works at Palantir working on defense solutions and continues to think 
          about American national security challenges.
        </p>

        <div className="flex items-center justify-center gap-4">
          <a
            href="#about"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
          >
            Learn More
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-dark-300 hover:border-primary-600 text-dark-100 hover:text-primary-400 rounded-lg transition-colors font-medium"
          >
            Get in Touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-dark-200 hover:text-primary-400">
            <ArrowDown className="mx-auto" size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
