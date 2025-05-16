// File: components/Services.tsx

import Image from 'next/image'

export default function Services() {
  return (
    <section id="services" className="bg-card text-accent py-20 px-4">
      <div className="max-w-6xl mx-auto text-center space-y-6 fade-in">
        <h2 className="text-3xl md:text-4xl font-bold text-white">Services</h2>
        <p className="text-lg text-muted">
          We offer a wide range of yard care services tailored to your needs.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          <div className="bg-dark p-6 rounded shadow">
            <Image src="/img/service-mowing.jpg" alt="Mowing service" width={400} height={250} className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Mowing & Edging</h3>
            <p className="text-muted">Clean cuts, crisp edges, and a polished finish every time.</p>
          </div>
          <div className="bg-dark p-6 rounded shadow">
            <Image src="/img/service-mulch.jpg" alt="Mulch service" width={400} height={250} className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Mulch & Beds</h3>
            <p className="text-muted">Fresh mulch, weed-free beds, and healthy soil to support your garden.</p>
          </div>
          <div className="bg-dark p-6 rounded shadow">
            <Image src="/img/service-cleanup.jpg" alt="Cleanup service" width={400} height={250} className="rounded mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Seasonal Cleanup</h3>
            <p className="text-muted">Leaf removal, branch pickup, and seasonal transitions made easy.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
