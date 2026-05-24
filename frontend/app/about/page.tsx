export default function About() {
  return (
    <main className="bg-white min-h-screen py-20 px-8 text-[#002b5c]">
      
      {/* 1. Who We Are */}
      <section className="max-w-4xl mx-auto text-center mb-24">
        <h1 className="text-5xl font-bold mb-6 tracking-tight">Who We Are</h1>
        <div className="w-16 h-1 bg-[#002b5c] mx-auto mb-10"></div>
        <p className="text-xl text-slate-800 leading-relaxed max-w-2xl mx-auto font-medium">
          OUTSOURCERAA is a precision-driven staffing firm. We help growing organizations solve their toughest talent challenges through human expertise and scalable business operations.
        </p>
      </section>

      {/* 2. Mission & Vision */}
      <section className="max-w-5xl mx-auto py-10 mb-24 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-10 border border-slate-200 rounded-3xl hover:border-[#002b5c] transition-all duration-500 hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
          <p className="text-slate-600">To bridge the gap between human potential and organizational excellence by providing precision-driven staffing solutions.</p>
        </div>
        <div className="p-10 border border-slate-200 rounded-3xl hover:border-[#002b5c] transition-all duration-500 hover:shadow-xl">
          <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
          <p className="text-slate-600">To be the world’s most trusted talent partner, redefining the future of work by fostering a global ecosystem.</p>
        </div>
      </section>

      {/* 3. Stats */}
      <section className="max-w-5xl mx-auto py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="text-center p-10 border border-slate-200 rounded-3xl hover:border-[#002b5c] transition-all duration-500 hover:shadow-xl">
          <h4 className="text-5xl font-extrabold mb-2">500+</h4>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Fortune 500 Clients</p>
        </div>
        <div className="text-center p-10 border border-slate-200 rounded-3xl hover:border-[#002b5c] transition-all duration-500 hover:shadow-xl">
          <h4 className="text-5xl font-extrabold mb-2">10k+</h4>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Professionals Placed</p>
        </div>
        <div className="text-center p-10 border border-slate-200 rounded-3xl hover:border-[#002b5c] transition-all duration-500 hover:shadow-xl">
          <h4 className="text-5xl font-extrabold mb-2">Global</h4>
          <p className="text-sm font-bold uppercase tracking-widest text-slate-500">Delivery Model</p>
        </div>
      </section>
      
    </main>
  );
}