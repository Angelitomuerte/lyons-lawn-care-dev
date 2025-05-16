// File: pages/blog/index.tsx

import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Lyons Lawn Care LLC</title>
        <meta name="description" content="Updates, tips, and stories from Lyons Lawn Care LLC." />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="flex">
        <Header />
        <main className="ml-[300px] w-full bg-dark text-accent py-20 px-4">
          <div className="max-w-4xl mx-auto fade-in">
            <h1 className="text-4xl font-bold text-white mb-6">Our Blog</h1>
            <p className="text-lg text-muted mb-12">
              Read tips, updates, and stories about lawn care, landscaping, and community from our team.
            </p>
            {/* Sample article */}
            <article className="bg-card p-6 rounded shadow mb-8">
              <h2 className="text-2xl text-white font-semibold mb-2">Spring Cleanup: Why It Matters</h2>
              <p className="text-muted text-sm mb-2">April 12, 2025</p>
              <p className="text-muted">
                A thorough spring cleanup clears the way for a healthy summer lawn. See how we prep beds,
                manage weeds, and help your grass get growing again...
              </p>
            </article>

            {/* More articles would go here */}
          </div>
          <Footer />
        </main>
      </div>
    </>
  )
}
