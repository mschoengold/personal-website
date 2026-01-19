'use client';

import { useState } from 'react';
import { Lock, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivateProjects() {
  const [password, setPassword] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState('');

  // In production, this should be handled by Netlify's password protection
  // This is just for demonstration
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Replace 'demo123' with your actual password
    if (password === 'L0ver!coL0ver!co') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  if (!isAuthenticated) {
    return (
      <main className="min-h-screen flex items-center justify-center px-6 pt-20">
        <div className="max-w-md w-full">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-dark-200 hover:text-primary-400 mb-8 transition-colors"
          >
            <ArrowLeft size={20} />
            Back to Home
          </Link>

          <div className="bg-dark-600/50 backdrop-blur-sm rounded-lg p-8 border border-dark-400">
            <div className="flex items-center justify-center mb-6">
              <div className="p-4 bg-primary-600/20 rounded-full">
                <Lock className="text-primary-400" size={32} />
              </div>
            </div>

            <h1 className="text-2xl font-bold text-center mb-2 text-white">
              Private Projects
            </h1>
            <p className="text-dark-200 text-center mb-6">
              This section is password protected. Please enter the password to
              continue.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-dark-700 border border-dark-400 rounded-lg text-white placeholder-dark-200 focus:outline-none focus:border-primary-600 transition-colors"
                  autoFocus
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white rounded-lg transition-colors font-medium"
              >
                Access Private Projects
              </button>
            </form>

            <p className="text-xs text-dark-200 text-center mt-6">
              Note: In production, this will use Netlify's built-in password
              protection for enhanced security.
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen px-6 pt-24 pb-12">
      <div className="max-w-6xl mx-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-dark-200 hover:text-primary-400 mb-8 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-primary-400">
          Private Projects
        </h1>
        <p className="text-dark-200 mb-12 text-lg">
          Detailed information about ongoing and confidential projects.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: 'Insight Markets',
              description:
                'Corporate prediction market platform enabling external stakeholders to trade on business outcomes using play money to surface collective intelligence.',
              status: 'Development',
              tags: ['Next.js', 'TypeScript', 'Trading Platform', 'AI'],
            },
            {
              title: 'Confidential Project Alpha',
              description:
                'Strategic initiative focused on enterprise transformation and operational optimization for Fortune 500 clients.',
              status: 'In Progress',
              tags: ['Strategy', 'Operations', 'Enterprise'],
            },
            {
              title: 'Defense Innovation Initiative',
              description:
                'Research and analysis on emerging defense technologies and their strategic implications for national security.',
              status: 'Research Phase',
              tags: ['Defense', 'Innovation', 'Policy'],
            },
            {
              title: 'Policy Analysis Framework',
              description:
                'Comprehensive framework for evaluating complex policy decisions in high-stakes environments.',
              status: 'Development',
              tags: ['Policy', 'Analysis', 'Decision Support'],
            },
            {
              title: 'Operational Excellence Program',
              description:
                'Multi-phase program to enhance organizational effectiveness and strategic execution capabilities.',
              status: 'Planning',
              tags: ['Operations', 'Leadership', 'Strategy'],
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-dark-600/50 backdrop-blur-sm rounded-lg p-6 border border-dark-400 hover:border-primary-600 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-white">
                  {project.title}
                </h3>
                <span className="px-3 py-1 text-xs bg-primary-600/20 text-primary-300 rounded-full">
                  {project.status}
                </span>
              </div>

              <p className="text-dark-200 mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs bg-dark-500 text-dark-100 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-yellow-900/20 border border-yellow-700/50 rounded-lg">
          <p className="text-yellow-200 text-sm">
            <strong>Note:</strong> The information on this page is for
            demonstration purposes. Replace with your actual private project
            details.
          </p>
        </div>
      </div>
    </main>
  );
}
