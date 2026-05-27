"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 text-center px-6">
<h1 className="text-4xl md:text-5xl font-extrabold text-blue-950">OUTSOURCERAA</h1>        <p className="mt-6 text-xl text-gray-600">Your partner for Hiring & Payroll Solutions.</p>
      </section>

      {/* SERVICES SECTION */}
<section className="py-20 px-6 bg-white border-t border-gray-100">
  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
    
    {/* Staffing Column */}
    <div className="group bg-white rounded-[2rem] p-10 transition-all duration-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100">
      <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6">👥</div>
      <h3 className="text-3xl font-bold text-gray-900 mb-6">Staffing Solutions</h3>
      <ul className="space-y-4 text-gray-600 mb-8">
        <li className="flex items-center gap-3">
          <span className="text-blue-600 font-bold">✓</span> IT & Non-IT Permanent Staffing
        </li>
        <li className="flex items-center gap-3">
          <span className="text-blue-600 font-bold">✓</span> IT & Non-IT Contractual Staffing
        </li>
      </ul>
      <Link href="/services/staffing" className="text-blue-600 font-semibold flex items-center gap-2">
        Explore Staffing <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
      </Link>
    </div>

    {/* Payroll Column */}
    <div className="group bg-white rounded-[2rem] p-10 transition-all duration-500 shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] border border-gray-100">
      <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6">📊</div>
      <h3 className="text-3xl font-bold text-gray-900 mb-6">Payroll Processing</h3>
      <p className="text-gray-500 mb-8 leading-relaxed">
        Standalone payroll operations including EPF & ESIC generation, monthly challan filing, and precise salary processing.
      </p>
      <Link href="/services/payroll" className="text-blue-600 font-semibold flex items-center gap-2">
        Explore Payroll <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span>
      </Link>
    </div>

  </div>
</section>

      <Footer />
    </main>
  );
}