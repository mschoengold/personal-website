export default function About() {
  const stats = [
    { label: 'Years experience', value: '15+' },
    { label: 'Exec branch agencies', value: '4' },
    { label: 'Country deployments', value: '7+' },
    { label: 'Cavities', value: '2' },
  ];

  return (
    <section id="about" className="py-24 px-6 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <span className="eyebrow mb-4">About</span>
          <h2 className="font-display text-3xl md:text-5xl font-medium text-dark-50 mt-4 text-balance">
            At the seam of security, diplomacy, and technology
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1.5fr_1fr] gap-12 lg:gap-16 items-start">
          <div className="space-y-5 text-dark-100 leading-relaxed">
            <p className="text-lg">
              I&apos;ve spent my career helping leaders and teams navigate hard problems at the seam between national security, diplomacy, and technology, then translating that complexity into decisions, momentum, and outcomes.
            </p>
            <p className="text-lg">
              I&apos;m currently a Business Operations Lead at <strong className="text-dark-50 font-semibold">Palantir Technologies</strong>, where I help deliver and scale software for the U.S. national security enterprise and the broader defense industrial base.
            </p>
            <p className="text-lg">
              Before Palantir, I worked at the highest levels of the U.S. government: as Acting Chief of Staff in the <strong className="text-dark-50 font-semibold">Office of the Secretary of Defense</strong> for Special Operations and Low-Intensity Conflict, as a Director at the White House <strong className="text-dark-50 font-semibold">National Security Council</strong>, and in several roles at the <strong className="text-dark-50 font-semibold">State Department</strong>, including on the Global Coalition to Defeat ISIS.
            </p>
            <p className="text-lg">
              I began closer to the ground, managing a USAID program in Helmand Province, Afghanistan, an experience that shaped how I think about strategy, incentives, and what implementation really requires.
            </p>
            <p className="text-lg">
              I hold dual graduate degrees from Georgetown University (MSFS and MBA) and am a Council on Foreign Relations Term Member. Outside of work, I&apos;m a student of history and technology, and a devoted husband and dad.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 lg:sticky lg:top-24">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-dark-500/40 backdrop-blur-sm rounded-xl p-5 border border-dark-400"
              >
                <div className="font-display text-3xl font-semibold text-accent-300 leading-none">
                  {stat.value}
                </div>
                <div className="mt-3 font-mono text-xs uppercase tracking-wider text-dark-200">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
