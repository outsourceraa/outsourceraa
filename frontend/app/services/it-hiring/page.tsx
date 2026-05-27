"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ITHiringPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-extrabold text-blue-950 mb-8">IT & Non-IT Staffing</h1>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Permanent Staffing</h3>
              <p className="text-gray-600">Finding the right talent for long-term growth. We bridge the gap between elite candidates and your company culture.</p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold mb-4">Contractual Staffing</h3>
              <p className="text-gray-600">Flexible workforce solutions for your time-bound projects and seasonal demand spikes.</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}