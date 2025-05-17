// File: components/Header.tsx
"use client";

import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <header className="w-[300px] h-screen bg-card flex flex-col items-center p-8 fixed top-0 left-0 z-50">
      <a className="logo w-full" href="#home">
        <img
          alt="Lyons Lawn Care LLC logo"
          src="/img/lyons-lawn-care-logo.jpg"
          className="w-full h-auto object-contain"
        />
      </a>
      <div className="contact-sidebar phone-number text-center mt-6 text-white text-sm">
        <p className="contact-info">
          <span className="only-phone block">
            📞 <a href="tel:2542189306" className="underline">(254) 218-9306</a>
          </span>
          <br />
          <span className="hidden md:inline">
            📧 <a href="mailto:lyonsyardservice@yahoo.com" className="underline">lyonsyardservice@yahoo.com</a><br />
            📍 Serving Waco, Woodway, Lorena, China Spring, and surrounding areas
          </span>
        </p>
      </div>
      <button
        aria-controls="sidebarNav"
        aria-expanded={menuOpen}
        aria-label="Toggle menu"
        className="menu-toggle text-accent text-2xl mt-4 md:hidden"
        id="menuToggle"
        onClick={toggleMenu}
      >
        ☰
      </button>
      <nav
        id="sidebarNav"
        role="navigation"                         // ✅ Added for semantic nav
        aria-label="Sidebar navigation"          // ✅ Helps screen readers
        className={`flex flex-col gap-6 mt-6 transition-all duration-300 ${
          menuOpen ? 'block' : 'hidden md:flex'
        }`}
      >

        <a className="nav-btn bg-accent text-primary font-bold text-lg px-4 py-2 rounded hover:bg-[#3cbf3a] text-center" href="#about">About</a>
        <a className="nav-btn bg-accent text-primary font-bold text-lg px-4 py-2 rounded hover:bg-[#3cbf3a] text-center" href="#services">Services</a>
        <a className="nav-btn bg-accent text-primary font-bold text-lg px-4 py-2 rounded hover:bg-[#3cbf3a] text-center" href="#testimonials">Testimonials</a>
        <a className="nav-btn bg-accent text-primary font-bold text-lg px-4 py-2 rounded hover:bg-[#3cbf3a] text-center" href="#contact">Contact</a>
        <Link href="/blog" legacyBehavior>
          <a className="nav-btn bg-accent text-primary font-bold text-lg px-4 py-2 rounded hover:bg-[#3cbf3a] text-center">Blog</a>
        </Link>
      </nav>
    </header>
  )
}
