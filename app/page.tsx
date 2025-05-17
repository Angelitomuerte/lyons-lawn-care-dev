// app/page.tsx
"use client";

import Head from 'next/head';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LandingHero from '@/components/LandingHero';
import About from '@/components/About';
import Services from '@/components/Services';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import GrassClump from '@/components/GrassClump';
import BladeSweep from '@/components/BladeSweep';
import GrassClippings from '@/components/GrassClippings';
import { useEffect, useRef, useState } from 'react';

export default function Home() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [cut, setCut] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCut(true);
        }
      },
      { threshold: 0.5 }
    );
    if (contactRef.current) observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Head>
        <title>Lyons Lawn Care LLC</title>
        <meta
          name="description"
          content="Lyons Lawn Care LLC provides professional landscaping, mowing, and yard services in Waco, Texas and surrounding areas."
        />
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <div className="flex">
        <Header />
        <main className="ml-[300px] w-full flex flex-col relative">
          <GrassClump side="left" cut={cut} />
          <GrassClump side="right" cut={cut} />
          <BladeSweep trigger={cut} />
          <GrassClippings trigger={cut} />

          <LandingHero />
          <About />
          <Services />
          <Testimonials />
          <div id="contact" ref={contactRef} className="scroll-mt-32">
            <ContactForm />
          </div>
          <Footer />
        </main>
      </div>
    </>
  );
}
