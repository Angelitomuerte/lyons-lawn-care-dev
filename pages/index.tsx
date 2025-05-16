// File: pages/index.tsx

import Head from 'next/head'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LandingHero from '@/components/LandingHero'
import About from '@/components/About'
import Services from '@/components/Services'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'

export default function Home() {
  return (
    <>
      <Head>
        <title>Lyons Lawn Care LLC</title>
        <meta name="description" content="Lyons Lawn Care LLC provides professional landscaping, mowing, and yard services in Waco, Texas and surrounding areas." />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="flex">
        <Header />
        <main className="ml-[300px] w-full flex flex-col">
          <LandingHero />
          <About />
          <Services />
          <Testimonials />
          <ContactForm />
          <Footer />
        </main>
      </div>
    </>
  );
}
