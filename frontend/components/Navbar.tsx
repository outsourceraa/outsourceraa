"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-[0_2px_10px_rgb(0,0,0,0.02)] transition-all">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="text-2xl font-extrabold text-blue-950 tracking-tight group-hover:text-blue-600 transition-colors">
            OUTSOURCERAA
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={`font-medium transition-colors hover:text-blue-600 ${isActive('/') ? 'text-blue-600' : 'text-gray-600'}`}>
            Home
          </Link>
          <Link href="/about" className={`font-medium transition-colors hover:text-blue-600 ${isActive('/about') ? 'text-blue-600' : 'text-gray-600'}`}>
            About
          </Link>
          <Link href="/services/it-hiring" className={`font-medium transition-colors hover:text-blue-600 ${pathname.includes('/services') ? 'text-blue-600' : 'text-gray-600'}`}>
            Services
          </Link>
          
          {/* NEW CAREERS LINK */}
          <Link href="/careers" className={`font-medium transition-colors hover:text-blue-600 ${isActive('/careers') ? 'text-blue-600' : 'text-gray-600'}`}>
            Careers
          </Link>
          
          <Link 
  href="/contact" 
  className={`font-medium transition-colors hover:text-blue-600 ${isActive('/contact') ? 'text-blue-600' : 'text-gray-600'}`}
>
  Contact Us
</Link>
        </div>
      </div>
    </nav>
  );
}