// File: components/LandingHero.tsx

import Image from 'next/image';

export default function LandingHero() {
  return (
    <section id="home" className="relative bg-dark text-accent py-20 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
        <div className="space-y-6 max-w-xl fade-in">
          <h2 className="text-4xl font-bold text-white">Welcome to Lyons Lawn Care LLC</h2>
          <p className="text-lg text-muted">
            High-end, honest yard service rooted in family values and built on quality work.
          </p>
          <a
            href="https://clienthub.getjobber.com/client_hubs/8ae4271f-8435-49c3-b849-1bdb0e613fc5/public/work_request/new"
            className="inline-block bg-accent text-primary font-semibold px-6 py-3 rounded hover:bg-[#3cbf3a] transition"
          >
            Request an Estimate
          </a>
        </div>
        <div className="fade-in">
          <Image
            src="/img/luxury-backyard-lawn-care-poolside.jpg"
            alt="A beautifully maintained backyard with a swimming pool, cleanly edged sidewalks, healthy green lawn, and well-trimmed mature trees — showcasing high-end lawn care services."
            width={600}
            height={400}
            className="rounded shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}
