'use client';

import { ArrowDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center px-6 pt-24 pb-16">
      <div className="max-w-5xl mx-auto w-full">
        <span className="eyebrow mb-6">Palantir Technologies &middot; Washington, DC</span>

        <h1 className="font-display text-5xl md:text-7xl font-medium leading-[1.05] text-dark-50 text-balance mt-5 mb-4">
          Michael
          <br />
          Schoengold Beatty
        </h1>

        <p className="font-mono text-sm md:text-base text-dark-200 tracking-wide">
          Business Operations Lead&nbsp;&nbsp;/&nbsp;&nbsp;National Security Strategist
        </p>

        <p className="text-lg md:text-xl text-dark-100 max-w-2xl mt-7 mb-9 leading-relaxed">
          I work at the intersection of national security and technology. At Palantir, I focus on defense solutions for the Department of Defense and the broader defense industrial base.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#about"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-400 text-white rounded-lg transition-colors font-medium"
          >
            Learn more
            <span aria-hidden="true">&rarr;</span>
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-dark-400 hover:border-accent-400 text-dark-100 hover:text-dark-50 rounded-lg transition-colors font-medium"
          >
            Get in touch
          </a>
        </div>

        <div className="mt-16 animate-bounce">
          <a href="#about" className="text-dark-300 hover:text-accent-300 transition-colors" aria-label="Scroll to About">
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  );
}
