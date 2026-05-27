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
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="group bg-white rounded-[2rem] p-8 transition-all duration-500 cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 opacity-50"></div>
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-blue-100/50">💻</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">IT & NON IT Staffing</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">Access elite software developers, cloud architects, and specialized non-IT professionals ready to scale your business.</p>
            <Link href="/services/it-hiring" className="text-blue-600 font-semibold flex items-center gap-2">Explore Staffing <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span></Link>
          </div>

          {/* Card 2 */}
          <div className="group bg-white rounded-[2rem] p-8 transition-all duration-500 cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 opacity-50"></div>
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-blue-100/50">📊</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">Payroll Processing</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">Standalone payroll operations including EPF & ESIC generation, monthly challan filing, and precise salary processing.</p>
            <Link href="/services/payroll" className="text-blue-600 font-semibold flex items-center gap-2">Explore Payroll <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span></Link>
          </div>

          {/* Card 3 */}
          <div className="group bg-white rounded-[2rem] p-8 transition-all duration-500 cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 opacity-50"></div>
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-blue-100/50">🤝</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">Contractual Hiring</h3>
            <p className="text-gray-500 mb-8 leading-relaxed">Flexible, short-term workforce solutions designed to help you meet sudden project demands.</p>
            <Link href="#" className="text-blue-600 font-semibold flex items-center gap-2">Coming Soon <span className="transform transition-transform duration-300 group-hover:translate-x-2">→</span></Link>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}