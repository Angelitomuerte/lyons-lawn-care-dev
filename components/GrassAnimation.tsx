// File: components/GrassAnimation.tsx

'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function GrassAnimation() {
  const grassRef = useRef<HTMLDivElement>(null)
  const contactRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll()

  // Grass height scales as you scroll down
  const grassHeight = useTransform(scrollYProgress, [0, 1], [10, 150])
  const [chopped, setChopped] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setChopped(true)
          setTimeout(() => setChopped(false), 3000) // Reset after animation
        }
      },
      { threshold: 0.5 }
    )

    const node = contactRef.current
    if (node) observer.observe(node)

    return () => {
      if (node) observer.unobserve(node)
    }
  }, [])

  return (
    <>
      <motion.div
      initial={false}
        ref={grassRef}
        className="fixed left-8 bottom-0 w-6 bg-green-600 rounded-t-md z-40 origin-bottom"
        style={{ height: grassHeight }}
      />
      <motion.div
      initial={false}
        className="fixed right-8 bottom-0 w-6 bg-green-600 rounded-t-md z-40 origin-bottom"
        style={{ height: grassHeight }}
      />

      {/* Blade + clipping animation */}
      {chopped && (
        <>
          <div className="fixed left-[50%] bottom-[30px] w-[80px] h-[10px] bg-gray-300 rotate-12 animate-spin z-50 shadow-md" />
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="fixed bottom-10 w-1 h-2 bg-green-500 rounded-full animate-ping z-40"
              style={{
                left: `${40 + i * 5}%`,
                animationDuration: `${1 + Math.random()}s`,
              }}
            />
          ))}
        </>
      )}

      {/* Invisible marker div at Contact section */}
      <div ref={contactRef} id="contact-trigger" className="absolute bottom-0 h-[1px]" />
    </>
  )
}
