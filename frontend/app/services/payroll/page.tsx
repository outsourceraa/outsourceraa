"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PayrollPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />

      {/* HERO SECTION */}
      <section className="pt-32 pb-24 text-center px-6 bg-[#0B132B] text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-extrabold mb-6">Payroll & Compliance</h1>
          <p className="text-xl text-gray-300 mb-10">
            OUTSOURCERAA handles your end-to-end payroll operations. From precise salary processing to strict EPF & ESIC compliance, we ensure your business runs seamlessly and legally.
          </p>
          <Link href="/#contact" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-xl transition duration-300">
            Outsource Your Payroll Today
          </Link>
        </div>
      </section>

      {/* CORE PAYROLL OPERATIONS SECTION */}
      <section className="py-20 px-6 bg-white border-t border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Our Core Payroll Operations</h2>
        
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          
          {/* Card 1: Salary Processing */}
          <div className="group bg-white rounded-[2rem] p-8 transition-all duration-500 cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 opacity-50"></div>
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-blue-100/50">
              💰
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">Salary Processing</h3>
            <p className="text-gray-600 leading-relaxed">
              Accurate and timely calculation of wages, deductions, and net pay for your entire workforce, ensuring your employees are paid correctly.
            </p>
          </div>

          {/* Card 2: EPF & ESIC Generation */}
          <div className="group bg-white rounded-[2rem] p-8 transition-all duration-500 cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 opacity-50"></div>
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-blue-100/50">
              🏛️
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">EPF & ESIC Generation</h3>
            <p className="text-gray-600 leading-relaxed">
              Complete handling of Employee Provident Fund and Employee State Insurance generation, keeping your business fully compliant.
            </p>
          </div>

          {/* Card 3: Monthly Challan Filing */}
          <div className="group bg-white rounded-[2rem] p-8 transition-all duration-500 cursor-pointer shadow-[0_2px_10px_rgb(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2 border border-gray-100 hover:border-blue-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-[100px] -z-10 transition-transform duration-500 group-hover:scale-110 opacity-50"></div>
            <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-sm border border-blue-100/50">
              📄
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 transition-colors duration-300">Monthly Challan Filing</h3>
            <p className="text-gray-600 leading-relaxed">
              We take the headache out of monthly regulatory requirements by meticulously preparing and filing all necessary government challans on time.
            </p>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}