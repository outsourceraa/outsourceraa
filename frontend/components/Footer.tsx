import { FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-gray-300 py-16 px-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-slate-700 pb-12">
        
        {/* Brand Section */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">OUTSOURCERAA</h2>
          <p className="text-slate-400 leading-relaxed max-w-sm">
            Empowering businesses with top-tier talent. Your dedicated partner for scalable recruitment and workforce solutions.
          </p>
        </div>

        {/* Company Links */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-white">Company</h3>
          <a href="/" className="hover:text-blue-400 transition-colors w-max">Home</a>
          <a href="/about" className="hover:text-blue-400 transition-colors w-max">About Us</a>
          <a href="/services" className="hover:text-blue-400 transition-colors w-max">Our Services</a>
          <a href="/contact" className="hover:text-blue-400 transition-colors w-max">Contact</a>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-semibold text-white">Contact Us</h3>
          <p className="text-slate-400">
            <span className="block font-medium text-slate-300 mb-1">Email:</span>
            <a href="mailto:info@outsourceraa.com" className="hover:text-blue-400 transition-colors">info@outsourceraa.com</a>
          </p>

          {/* SOCIAL ICONS IN FOOTER */}
          <div className="flex gap-4 mt-2">
            <a href="https://www.instagram.com/OUTSOURCERAA" target="_blank" className="text-2xl hover:text-blue-400 transition-colors">
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/company/OUTSOURCERAA" target="_blank" className="text-2xl hover:text-blue-400 transition-colors">
              <FaLinkedin />
            </a>
          </div>

          <p className="text-slate-400 mt-2">
            <span className="block font-medium text-slate-300 mb-1">Location:</span>
            Noida, Uttar Pradesh, India
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="max-w-6xl mx-auto mt-8 text-sm text-slate-500">
        <p>© 2026 OUTSOURCERAA. All rights reserved.</p>
      </div>
    </footer>
  );
}