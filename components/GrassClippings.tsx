// components/GrassClippings.tsx
import { useEffect, useState } from 'react';

interface ClippingProps {
  trigger: boolean;
}

export default function GrassClippings({ trigger }: ClippingProps) {
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (trigger) {
      setActive(true);
      const timeout = setTimeout(() => setActive(false), 2000);
      return () => clearTimeout(timeout);
    }
  }, [trigger]);

  return active ? (
    <div className="pointer-events-none fixed bottom-20 left-1/2 -translate-x-1/2 z-50">
      {Array.from({ length: 12 }).map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-4 bg-green-400 animate-clipping"
          style={{
            left: `${Math.random() * 100 - 50}%`,
            animationDelay: `${Math.random() * 0.5}s`,
          }}
        />
      ))}
    </div>
  ) : null;
}