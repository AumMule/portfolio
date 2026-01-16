import React, { useState, useEffect } from "react";

const ReportIT = () => {
  const [activeTab, setActiveTab] = useState('mobile');
  const [selectedImage, setSelectedImage] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const mobileScreens = [
    { src: "/images/reportIT/mobile-lockpage.png", label: "Authentication Layer", desc: "Secure entry with credential validation" },
    { src: "/images/reportIT/mobile-homepage.png", label: "Command Center", desc: "Geolocation-enabled reporting dashboard" },
    { src: "/images/reportIT/mobile-reportmodal.png", label: "Incident Capture", desc: "Real-time issue documentation with GPS" },
  ];

  const adminScreens = [
    { src: "/images/reportIT/admin-login.png", label: "Administrative Gateway", desc: "Role-based access control" },
    { src: "/images/reportIT/admin-home.png", label: "System Overview", desc: "Real-time metrics and status monitoring" },
    { src: "/images/reportIT/admin-dashboard.png", label: "Data Intelligence", desc: "Analytics and geographic visualization" },
    { src: "/images/reportIT/admin-report.png", label: "Case Management", desc: "Priority-based issue resolution" },
  ];

  const workflows = [
    { title: "Geospatial Capture", desc: "Real-time coordinate extraction with photographic evidence integration", icon: "📍" },
    { title: "Interactive Visualization", desc: "Leaflet.js-powered mapping engine for spatial data analysis", icon: "🗺️" },
    { title: "Priority Classification", desc: "Administrative triage system with severity-based routing", icon: "⚡" },
    { title: "Automated Distribution", desc: "Intelligent department allocation based on issue taxonomy", icon: "🔄" }
  ];

  const technologies = ["React", "Tailwind CSS", "Leaflet.js", "Geolocation API", "Responsive Design", "State Management"];

  return (
    <section className="bg-black text-white min-h-screen relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          transform: `translateY(${scrollY * 0.5}px)`
        }}></div>
        <div className="absolute top-1/4 -right-40 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -left-40 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="relative z-10 px-6 md:px-16 py-20">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-wide mb-8 animate-[slideDown_0.6s_ease-out]">
            <span className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"></span>
            CIVIC INFRASTRUCTURE PLATFORM
          </div>
          <h1 className="text-6xl md:text-7xl font-bold mb-6 tracking-tight animate-[slideUp_0.8s_ease-out]">
            <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent inline-block hover:scale-105 transition-transform duration-300">
              ReportIT
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-3xl font-light animate-[slideUp_0.8s_ease-out_0.2s_both]">
            Engineered to transform urban governance through intelligent geolocation-based reporting. 
            A comprehensive platform connecting municipal operations with citizen engagement at scale.
          </p>
        </div>

        {/* Interactive Tab System */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="flex gap-4 mb-10 justify-center">
            <button
              onClick={() => setActiveTab('mobile')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
                activeTab === 'mobile'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 border border-gray-800'
              }`}
            >
              Citizen Interface
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
                activeTab === 'admin'
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                  : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 border border-gray-800'
              }`}
            >
              Administrative Portal
            </button>
          </div>

          {/* Mobile View */}
          <div className={`transition-all duration-700 ${activeTab === 'mobile' ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mobileScreens.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className="group cursor-pointer"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <div className="relative bg-zinc-900 rounded-2xl p-6 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2">
                    <div className="absolute top-4 right-4 w-3 h-3 bg-purple-500 rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity"></div>
                    
                    <div className="aspect-[7   /16] mb-4 rounded-xl overflow-hidden bg-black border border-gray-800">
                      <img
                        src={img.src}
                        alt={img.label}
                        className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-purple-400 transition-colors">{img.label}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Admin View */}
          <div className={`transition-all duration-700 ${activeTab === 'admin' ? 'opacity-100 max-h-[2000px]' : 'opacity-0 max-h-0 overflow-hidden'}`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {adminScreens.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(img)}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl border border-gray-800 bg-zinc-900 hover:border-purple-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={img.src}
                      alt={img.label}
                      className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-lg font-semibold mb-1">{img.label}</h3>
                    <p className="text-sm text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">{img.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Architecture Section */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Workflow */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-700">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              System Architecture
            </h2>
            <div className="space-y-4">
              {workflows.map((item, i) => (
                <div
                  key={i}
                  className="group flex gap-4 p-4 rounded-xl bg-black/50 border border-gray-800 hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-500 cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-500">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1 group-hover:text-purple-400 transition-colors">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="bg-gradient-to-br from-zinc-900 to-black border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-700">
            <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
              Technology Stack
            </h2>
            <div className="grid grid-cols-2 gap-3 mb-8">
              {technologies.map((tech, i) => (
                <div
                  key={tech}
                  className="group px-4 py-3 bg-black/50 border border-gray-800 rounded-xl text-sm font-medium hover:border-purple-500/50 hover:bg-purple-500/10 transition-all duration-500 cursor-pointer hover:scale-105"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <span className="group-hover:text-purple-400 transition-colors">{tech}</span>
                </div>
              ))}
            </div>
            
            <div className="p-5 rounded-xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-purple-600/5 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <span className="text-2xl">💡</span>
                <div>
                  <h3 className="font-semibold text-purple-300 mb-2">Academic Excellence</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">
                    Developed as a comprehensive academic initiative demonstrating the practical application of 
                    modern web technologies in digital governance and municipal infrastructure modernization.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-center justify-center p-6 animate-[fadeIn_0.3s_ease-out]"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-gray-400 hover:text-white transition-colors text-sm font-medium"
            >
              Close ✕
            </button>
            <div className="bg-zinc-900 rounded-2xl border border-purple-500/30 p-6 shadow-2xl shadow-purple-500/20">
              <img
                src={selectedImage.src}
                alt={selectedImage.label}
                className="w-full h-auto rounded-xl mb-4"
              />
              <h3 className="text-2xl font-bold mb-2">{selectedImage.label}</h3>
              <p className="text-gray-400">{selectedImage.desc}</p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  );
};

export default ReportIT;