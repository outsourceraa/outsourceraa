"use client";

import Link from "next/link";
import { useState } from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* TOP NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-1">

          {/* LOGO */}
          <Link href="/">
            <img 
              src="/logo.jpeg"
              alt="OUTSOURCERAA" 
              className="h-28 w-auto" 
            />
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex gap-8 text-gray-700 font-medium items-center">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/careers">Careers</Link>
            <Link href="/contact">Contact</Link>
            
            {/* SOCIAL ICONS */}
            <div className="flex gap-4 text-gray-700 ml-4">
              <a href="https://www.instagram.com/OUTSOURCERAA" target="_blank" className="text-xl hover:text-blue-600">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com/company/OUTSOURCERAA" target="_blank" className="text-xl hover:text-blue-600">
                <FaLinkedin />
              </a>
            </div>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-3xl"
            onClick={() => setMenuOpen(true)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-full w-[80%] bg-black text-white z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* CLOSE BUTTON */}
        <div className="flex justify-end p-6">
          <button
            onClick={() => setMenuOpen(false)}
            className="text-3xl"
          >
            ×
          </button>
        </div>

        {/* MENU ITEMS */}
        <div className="flex flex-col text-xl">
          <Link href="/about" className="border-b border-gray-700 px-6 py-5">About Us</Link>
          <Link href="/services" className="border-b border-gray-700 px-6 py-5">Our Solutions</Link>
          <Link href="/careers" className="border-b border-gray-700 px-6 py-5">Careers</Link>
          <Link href="/contact" className="border-b border-gray-700 px-6 py-5">Contact Us</Link>
        </div>
      </div>
    </>
  );
}