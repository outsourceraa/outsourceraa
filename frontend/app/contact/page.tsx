"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [status, setStatus] = useState("");
  const [selectedService, setSelectedService] = useState("IT & NON IT Staffing");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const servicesList = ["IT & NON IT Staffing", "Payroll Processing", "Contractual Hiring", "Other Query"];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("Sending...");
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus("Message sent! We'll be in touch within 24 hours.");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("Failed to send. Please try again.");
      }
    } catch (error) {
      setStatus("An error occurred.");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
        
        {/* Left Side: Info */}
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-extrabold text-blue-950 mb-6">Let's build your team.</h1>
          <p className="text-xl text-gray-600 mb-12">Have questions about our staffing or payroll solutions? Our team is ready to help you scale.</p>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-50 text-blue-700 rounded-2xl">📧</div>
              <div>
                <h4 className="font-bold text-gray-900">Email Us</h4>
                <p className="text-gray-600">info@outsourceraa.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-50 text-blue-700 rounded-2xl">📍</div>
              <div>
                <h4 className="font-bold text-gray-900">Office Location</h4>
                <p className="text-gray-600">Greater Noida, Uttar Pradesh, India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-gray-50 p-10 rounded-[2rem] border border-gray-100">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <input type="text" name="name" required placeholder="Full Name" className="p-4 rounded-xl border border-gray-200 bg-white text-black focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-400" />
            <input type="email" name="email" required placeholder="Work Email" className="p-4 rounded-xl border border-gray-200 bg-white text-black focus:ring-2 focus:ring-blue-600 outline-none transition-all placeholder:text-gray-400" />
            
            <div className="relative">
              <input type="hidden" name="service" value={selectedService} />
              <div className="p-4 bg-white border border-gray-200 rounded-xl cursor-pointer flex justify-between items-center text-black" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                <span>{selectedService}</span> <span>▼</span>
              </div>
              {isDropdownOpen && (
                <ul className="absolute w-full bg-white border border-gray-100 mt-2 rounded-xl shadow-lg z-50 text-black">
                  {servicesList.map((s) => (
                    <li key={s} className="p-4 hover:bg-blue-50 cursor-pointer" onClick={() => { setSelectedService(s); setIsDropdownOpen(false); }}>{s}</li>
                  ))}
                </ul>
              )}
            </div>

            <textarea name="message" required rows={4} placeholder="Your Message" className="p-4 rounded-xl border border-gray-200 bg-white text-black focus:ring-2 focus:ring-blue-600 outline-none transition-all resize-none placeholder:text-gray-400"></textarea>
            <button type="submit" className="bg-blue-600 text-white font-bold py-4 rounded-xl hover:bg-blue-700">Submit Requirement</button>
            {status && <p className="text-center text-blue-700 font-medium bg-blue-50 p-3 rounded-lg">{status}</p>}
          </form>
        </div>
      </section>
      <Footer />
    </main>
  );
}