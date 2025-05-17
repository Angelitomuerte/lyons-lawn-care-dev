// components/GrassClump.tsx
"use client";

import { useEffect, useState } from 'react';

interface GrassClumpProps {
  side: 'left' | 'right';
  cut: boolean;
}

export default function GrassClump({ side, cut }: GrassClumpProps) {
  const [height, setHeight] = useState('20px');

  useEffect(() => {
    // Grass grows after mount
    const growTimeout = setTimeout(() => setHeight('120px'), 300);
    return () => clearTimeout(growTimeout);
  }, []);

  useEffect(() => {
    if (cut) setHeight('30px');
  }, [cut]);

  return (
    <div
      className={`fixed bottom-0 ${side === 'left' ? 'left-4' : 'right-4'} w-8 bg-green-600 rounded-t-md transition-all duration-700 z-40`}
      style={{ height }}
    />
  );
}
