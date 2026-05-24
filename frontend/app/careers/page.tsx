export default function Careers() {
  const jobs = [
    { title: "Senior IT Recruiter", location: "Remote / Noida" },
    { title: "Technical Sourcer", location: "Noida, India" },
    { title: "Business Development Manager", location: "Remote" },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section - Matching the Services Page Blue */}
      <section className="bg-[#001529] py-24 px-8 text-center text-white">
        <h1 className="text-5xl font-extrabold mb-6">Build Your Future with OUTSOURCERAA</h1>
        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
          We’re scaling fast and looking for passionate people to help us redefine the global staffing industry.
        </p>
      </section>

      {/* Why Join Us - Using your previous white/gray box design */}
      <section className="py-20 px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-950">Growth Culture</h3>
            <p className="text-gray-600">Work in an environment that prioritizes your professional development.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-950">Global Impact</h3>
            <p className="text-gray-600">Connect top-tier talent with Fortune 500 companies.</p>
          </div>
          <div className="p-8 border border-gray-100 rounded-3xl shadow-sm">
            <h3 className="text-xl font-bold mb-3 text-blue-950">Flexibility</h3>
            <p className="text-gray-600">Enjoy flexible working models designed for your work-life balance.</p>
          </div>
        </div>

        {/* Current Openings */}
        <h2 className="text-3xl font-bold text-blue-950 mb-8">Current Openings</h2>
        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div key={index} className="flex justify-between items-center p-6 border border-gray-200 rounded-xl hover:border-blue-600 transition-colors">
              <div>
                <h4 className="text-lg font-bold text-blue-950">{job.title}</h4>
                <p className="text-gray-500">{job.location}</p>
              </div>
              <button className="px-6 py-2 bg-blue-950 text-white rounded-full font-semibold hover:bg-blue-600 transition-colors">
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}