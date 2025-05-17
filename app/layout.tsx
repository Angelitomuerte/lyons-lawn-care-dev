// app/layout.tsx
import '@/styles/globals.css';
import type { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Lyons Lawn Care LLC',
  description: 'Professional landscaping, mowing, and yard services in Waco, Texas and surrounding areas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex bg-white text-gray-900">
        {/* Fixed left sidebar header */}
        <Header />

        {/* Main content area */}
        <main className="ml-[300px] w-full flex flex-col relative min-h-screen">
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
