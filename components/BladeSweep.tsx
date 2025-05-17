// components/BladeSweep.tsx
"use client";

import { useEffect, useState } from 'react';

interface BladeSweepProps {
  trigger: boolean;
}

export default function BladeSweep({ trigger }: BladeSweepProps) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (trigger) {
      setAnimate(true);
      const timeout = setTimeout(() => setAnimate(false), 1500);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return animate ? (
    <div className="fixed top-1/2 left-0 w-full h-4 bg-gray-300 z-50 animate-blade-sweep shadow-lg" />
  ) : null;
}