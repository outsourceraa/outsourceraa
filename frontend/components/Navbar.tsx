"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white border-b border-gray-100 shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-extrabold text-blue-950">
          OUTSOURCERAA
        </Link>

        {/* Hamburger Button - Only shows on mobile */}
        <button 
          className="md:hidden p-2 text-gray-800" 
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* 3 lines for the Hamburger */}
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black mb-1.5"></div>
          <div className="w-6 h-0.5 bg-black"></div>
        </button>

        {/* Desktop Links - Hidden on mobile, Flex on tablet+ */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="font-medium text-gray-600">Home</Link>
          <Link href="/about" className="font-medium text-gray-600">About</Link>
          <Link href="/contact" className="font-medium text-gray-600">Contact</Link>
        </div>
      </div>

      {/* Mobile Dropdown - Only appears when isOpen is true */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-lg p-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800">Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800">About</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)} className="text-lg font-medium text-gray-800">Contact</Link>
        </div>
      )}
    </nav>
  );
}