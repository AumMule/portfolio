import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import AboutSection from '../components/AboutSection.jsx';
import FindMeOn from '../components/FindMeOn.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filter, setFilter] = useState("All");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState('idle');
  const [showReportITModal, setShowReportITModal] = useState(false);
  const [activeTab, setActiveTab] = useState('mobile');

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => setScrollY(window.scrollY);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('https://formspree.io/f/xldpnzgp', {
        method: 'POST',
        headers: {
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 5000);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  };

  const projects = [
    {
      title: "ReportIT",
      description:
        "A civic issue reporting platform enabling citizens to report local problems through mobile, visualize them on a map, and manage them via an admin dashboard.",
      image: "/images/reportit.png",
      github: "https://github.com/AumMule/ReportIT",
      liveUrl: null,
      featured: true,
      category: "Full-Stack",
      tech: ["React", "Leaflet.js", "React-Native", "TypeScript", "Supabase", "Expo", "Tailwind"],
    },
    {
      title: "ParkHub",
      description:
        "A modern and responsive portfolio website project built with React and Tailwind CSS to showcase skills and projects in a visually appealing manner.",
      image: "/images/ParkHub.png",
      github: "https://github.com/AumMule/ParkHub",
      liveUrl: "https://park-hub-beige.vercel.app/",
      category: "Web Design",
      tech: ["React", "JavaScript", "Firebase", "QR-Code", "Toastify"],
    },
    {
      title: "Netflix Clone",
      description:
        "Movie streaming platform inspired by Netflix, built with React.js, Tailwind CSS, TMDB API, and Firebase. Features authentication, watchlist, search, and categories.",
      image: "/images/netflix.png",
      github: "https://github.com/AumMule/Netflix-Clone",
      liveUrl: "https://netflix-clone-eight-beige-29.vercel.app/",
      category: "Full-Stack",
      tech: ["React", "Firebase", "TMDB API", "Toastify"],
    },
    {
      title: "Kite Battle Game",
      description:
        "An interactive 3D web-based Kite Battle Game built with HTML, CSS, and JavaScript. Features real-time controls, leaderboard system, and responsive gameplay.",
      image: "/images/kite-battle.png",
      github: "https://github.com/Kadam-Atharva/Kite-Battle",
      category: "Game Dev",
      tech: ["JavaScript", "3D Graphics"],
    },
    {
      title: "Shortify",
      description:
        "A React-based text summarizer that quickly converts long paragraphs into clear, concise summaries, helping users understand key points faster and save time.",
      image: "/images/summarizer.png",
      github: "https://github.com/AumMule/Shortify",
      liveUrl: "https://summarizer-app-nine.vercel.app/",
      category: "AI/ML",
      tech: ["React", "NLP API"],
    },
    {
      title: "Recipe App",
      description:
        "Responsive web-based Recipe App built with React.js, Tailwind CSS, API integration, bookmarking, dark mode, skeleton loaders, and error handling.",
      image: "/images/recipe.png",
      github: "https://github.com/AumMule/Recipe-App",
      liveUrl: "https://recipe-app-zeta-five.vercel.app/",
      category: "Web App",
      tech: ["React", "API Integration"],
    },
    {
      title: "Kanban Board",
      description:
        "A Kanban-style task management app built with React. Supports drag-and-drop workflow and clean UI for productivity.",
      image: "/images/kanban.png",
      github: "https://github.com/AumMule/Kanban-Board",
      liveUrl: null,
      status: "In Progress",
      category: "Productivity",
      tech: ["React", "Drag & Drop"],
    },
  ];

  const categories = ["All", "Full-Stack", "Web Design", "Game Dev", "AI/ML", "Web App", "Productivity"];
  const filteredProjects = filter === "All" ? projects : projects.filter(p => p.category === filter);
  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  // ReportIT Modal Data
  const reportITMobileScreens = [
    { src: "/images/reportIT/mobile-lockpage.png", label: "Authentication Layer", desc: "Secure entry with credential validation" },
    { src: "/images/reportIT/mobile-homepage.png", label: "Command Center", desc: "Geolocation-enabled reporting dashboard" },
    { src: "/images/reportIT/mobile-reportmodal.png", label: "Incident Capture", desc: "Real-time issue documentation with GPS" },
  ];

  const reportITAdminScreens = [
    { src: "/images/reportIT/admin-login.png", label: "Administrative Gateway", desc: "Role-based access control" },
    { src: "/images/reportIT/admin-home.png", label: "System Overview", desc: "Real-time metrics and status monitoring" },
    { src: "/images/reportIT/admin-dashboard.png", label: "Data Intelligence", desc: "Analytics and geographic visualization" },
    { src: "/images/reportIT/admin-report.png", label: "Case Management", desc: "Priority-based issue resolution" },
  ];

  return (
    <div className="relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.05) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />

        {/* Gradient Orbs */}
        <motion.div
          className="absolute w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-3xl"
          style={{
            top: '10%',
            right: '10%',
            x: mousePosition.x * 0.03,
            y: mousePosition.y * 0.03,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        <motion.div
          className="absolute w-[500px] h-[500px] bg-purple-400/20 rounded-full blur-3xl"
          style={{
            bottom: '20%',
            left: '10%',
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      {/* ================================================= */}
      {/* HERO SECTION                                      */}
      {/* ================================================= */}
      <section id="home" className="relative min-h-screen text-white flex items-center justify-center px-6 md:px-16 py-20">
        <div className="container mx-auto max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">

            {/* Left Column: Text Content */}
            <motion.div
              className="text-center md:text-left space-y-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Animated Greeting Badge */}
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-medium"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              >
                <motion.span
                  animate={{ rotate: [0, 14, -8, 14, 0] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                >
                  👋
                </motion.span>
                Welcome to my digital space
              </motion.div>

              {/* Name with Gradient */}
              <motion.h1
                className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                I'm{' '}
                <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent inline-block">
                  Aum Mule
                </span>
              </motion.h1>

              {/* Typewriter Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="text-xl md:text-2xl text-gray-400"
              >
                <TypeAnimation
                  sequence={[
                    'A Passionate Web Developer',
                    2000,
                    'React & Frontend Enthusiast',
                    2000,
                    'Building Interactive Experiences',
                    2000,
                    'Learning & Growing Every Day',
                    2000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                  className="font-light"
                />
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="flex gap-4 justify-center md:justify-start pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.8 }}
              >
                <a
                  href="#projects"
                  className="group px-8 py-3 bg-purple-500 text-white rounded-full font-medium hover:bg-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/50 hover:scale-105"
                >
                  <span className="flex items-center gap-2">
                    View My Work
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </a>
                <a
                  href="#contact"
                  className="px-8 py-3 border border-purple-500/50 text-purple-300 rounded-full font-medium hover:bg-purple-500/10 transition-all duration-300 hover:border-purple-500"
                >
                  Get In Touch
                </a>
              </motion.div>

              {/* Scroll Indicator */}
              <motion.div
                className="hidden md:flex items-center gap-2 text-gray-500 text-sm pt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                <motion.div
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </motion.div>
                Scroll to explore
              </motion.div>
            </motion.div>

            {/* Right Column: 3D Graphic */}
            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                {/* Animated Ring 1 */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-500/20"
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                  }}
                />

                {/* Animated Ring 2 */}
                <motion.div
                  className="absolute inset-4 rounded-full border-2 border-purple-400/30"
                  animate={{
                    rotate: -360,
                    scale: [1, 1.05, 1]
                  }}
                  transition={{
                    rotate: { duration: 15, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                  }}
                />

                {/* Glowing Background */}
                <motion.div
                  className="absolute inset-8 rounded-full bg-gradient-to-br from-purple-600/30 to-purple-400/30 blur-2xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />

                {/* Profile Image */}
                <motion.div
                  className="absolute inset-12 rounded-full overflow-hidden border-4 border-purple-500/50 shadow-2xl shadow-purple-500/50"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img
                    src="/images/Hero.png"
                    alt="Aum Mule"
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                {/* Floating Particles */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-2 h-2 bg-purple-400/60 rounded-full"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                    }}
                    animate={{
                      y: [0, -30, 0],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 3 + Math.random() * 2,
                      repeat: Infinity,
                      delay: i * 0.5,
                    }}
                  />
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* STATS SECTION                                     */}
      {/* ================================================= */}
      <motion.section
        className="relative py-16 px-6"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: 'Projects Completed', value: '15+' },
              { label: 'Technologies', value: '10+' },
              { label: 'Years Learning', value: '2+' },
              { label: 'Coffee Cups', value: '∞' },
            ].map((stat, i) => (
              <motion.div
                key={i}
                className="text-center p-6 rounded-2xl bg-zinc-900/50 border border-gray-800 hover:border-purple-500/50 transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ================================================= */}
      {/* TECH STACK & ABOUT SECTION                        */}
      {/* ================================================= */}
      <div id="tech">
        <AboutSection />
      </div>

      {/* ================================================= */}
      {/* PROJECTS SECTION                                  */}
      {/* ================================================= */}
      <section id="projects" className="text-white py-20 px-6 md:px-12 overflow-hidden relative">
        {/* Animated Background */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            className="mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              Featured <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl">
              A collection of projects that showcase my journey in building meaningful digital experiences.
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div
            className="flex flex-wrap gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === cat
                  ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                  : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 border border-gray-800'
                  }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Featured Project - Hero Size */}
          {filter === "All" && featuredProject && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="group relative block overflow-hidden rounded-3xl bg-zinc-900 border border-gray-800 hover:border-purple-500/50 transition-all duration-500">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Side */}
                  <div className="relative h-[400px] md:h-[500px] overflow-hidden bg-black">
                    <img
                      src={featuredProject.image}
                      alt={featuredProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
                    <div className="absolute top-6 left-6 px-4 py-2 bg-purple-500 text-white text-xs font-bold rounded-full">
                      FEATURED PROJECT
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-10 md:p-12 flex flex-col justify-center">
                    <span className="text-purple-400 text-sm font-semibold tracking-widest mb-3">
                      {featuredProject.category}
                    </span>
                    <h3 className="text-4xl md:text-5xl font-bold mb-4">
                      {featuredProject.title}
                    </h3>
                    <p className="text-gray-400 text-lg leading-relaxed mb-6">
                      {featuredProject.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Dynamic Links */}
                    <div className="flex flex-wrap gap-4">
                      {featuredProject.liveUrl && (
                        <a
                          href={featuredProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-purple-500 hover:bg-purple-600 text-white font-semibold rounded-lg transition-all duration-300 hover:gap-3"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {featuredProject.github && (
                        <a
                          href={featuredProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-800 hover:bg-zinc-700 text-white font-semibold rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                      {featuredProject.title === "ReportIT" && (
                        <button
                          onClick={() => setShowReportITModal(true)}
                          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-lg border border-purple-500 transition-all duration-300"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          View Screenshots
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Masonry Grid - Different Sizes */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
            {(filter === "All" ? regularProjects : filteredProjects).map((project, idx) => {
              // Create asymmetric layout
              const isLarge = idx % 5 === 0 || idx % 5 === 3;
              const colSpan = isLarge ? "md:col-span-4" : "md:col-span-2";
              const rowSpan = isLarge ? "md:row-span-2" : "md:row-span-1";

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  onMouseEnter={() => setHoveredIndex(idx)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  className={`group relative overflow-hidden rounded-2xl bg-zinc-900 border border-gray-800 hover:border-purple-500/50 transition-all duration-500 ${colSpan} ${rowSpan}`}
                >
                  {/* Status Badge */}
                  {project.status && (
                    <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full z-10">
                      {project.status}
                    </div>
                  )}

                  {/* Image */}
                  <div className={`relative overflow-hidden bg-black ${isLarge ? 'h-64' : 'h-48'}`}>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 transition-opacity duration-500 ${hoveredIndex === idx ? 'opacity-95' : 'opacity-0'
                      }`}></div>
                  </div>

                  {/* Content - Always at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/95 to-transparent">
                    <span className="text-purple-400 text-xs font-semibold tracking-wider mb-2 block">
                      {project.category}
                    </span>
                    <h3 className={`font-bold mb-2 transition-colors ${isLarge ? 'text-2xl' : 'text-xl'
                      }`}>
                      {project.title}
                    </h3>
                    <p className={`text-gray-400 text-sm leading-relaxed mb-3 transition-all duration-500 ${hoveredIndex === idx ? 'opacity-100 max-h-32 translate-y-0' : 'opacity-0 max-h-0 translate-y-4'
                      }`}>
                      {project.description}
                    </p>
                    <div className={`flex flex-wrap gap-2 mb-4 transition-all duration-500 ${hoveredIndex === idx ? 'opacity-100 max-h-20 translate-y-0' : 'opacity-0 max-h-0 translate-y-4'
                      }`}>
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-500/10 border border-purple-500/30 rounded text-xs text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Dynamic Links */}
                    <div className={`flex flex-wrap gap-2 transition-all duration-500 ${hoveredIndex === idx ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white text-xs font-semibold rounded-lg transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                          Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-semibold rounded-lg border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                          </svg>
                          GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 0.5; }
          }
        `}</style>
      </section>

      {/* ================================================= */}
      {/* CONTACT SECTION                                   */}
      {/* ================================================= */}
      <section id="contact" className="min-h-screen relative overflow-hidden text-white py-20 px-6">
        <div className="container mx-auto max-w-6xl relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.div
              className="inline-block px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-xs font-medium tracking-wide mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
            >
              LET'S CONNECT
            </motion.div>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">
              Get In <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Have a project in mind or just want to chat? Drop me a message and I'll get back to you soon.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Form Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Project Collaboration"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      className="w-full bg-black/50 border border-gray-700 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>

                  <motion.button
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-300 disabled:bg-purple-400 disabled:cursor-not-allowed shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                  >
                    {status === 'sending' ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      'Send Message'
                    )}
                  </motion.button>
                </div>

                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-green-500/10 border border-green-500/30 rounded-xl text-green-400 text-center"
                  >
                    ✓ Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 p-4 bg-red-500/10 border border-red-500/30 rounded-xl text-red-400 text-center"
                  >
                    ✗ Something went wrong. Please try again later.
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Illustration Column */}
            <motion.div
              className="flex items-center justify-center order-1 lg:order-2"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="relative">
                {/* Decorative rings */}
                <motion.div
                  className="absolute inset-0 rounded-full border-2 border-purple-500/20"
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 4, repeat: Infinity } }}
                />

                <motion.div
                  className="absolute inset-8 rounded-full border-2 border-purple-400/30"
                  animate={{ rotate: -360, scale: [1, 1.05, 1] }}
                  transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity } }}
                />

                <img
                  src="/images/contact.png"
                  alt="Contact illustration"
                  className="relative w-full max-w-md z-10"
                />
              </div>
            </motion.div>
          </div>

          {/* Contact Info Cards */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {[
              { icon: '📧', label: 'Email', value: 'aummule11@example.com' },
              { icon: '📱', label: 'Phone', value: '+91 XXX XXX XXXX' },
              { icon: '📍', label: 'Location', value: 'India' },
            ].map((item, i) => (
              <motion.div
                key={i}
                className="bg-zinc-900/50 border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-3">{item.icon}</div>
                <div className="text-sm text-gray-400 mb-1">{item.label}</div>
                <div className="text-white font-medium">{item.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================================================= */}
      {/* FIND ME ON SECTION                                */}
      {/* ================================================= */}
      <FindMeOn />

      {/* ================================================= */}
      {/* FOOTER                                            */}
      {/* ================================================= */}
      <Footer />

      {/* ================================================= */}
      {/* REPORTIT SCREENSHOTS MODAL                        */}
      {/* ================================================= */}
      {showReportITModal && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-xl z-50 flex items-start justify-center p-4 md:p-8 overflow-y-auto"
          onClick={() => setShowReportITModal(false)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-5xl my-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <div className="flex justify-end mb-4">
              <button
                onClick={() => setShowReportITModal(false)}
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg font-medium transition-all duration-300 flex items-center gap-2 shadow-lg"
              >
                <span>Close</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Modal Content */}
            <div className="bg-zinc-900 rounded-2xl border border-purple-500/30 p-6 md:p-8 shadow-2xl shadow-purple-500/20">
              {/* Header */}
              <div className="mb-8">
                <h2 className="text-4xl font-bold mb-3">
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent">
                    ReportIT
                  </span>
                  {' '}Screenshots
                </h2>
                <p className="text-gray-400">
                  Explore the mobile and admin interfaces of the civic issue reporting platform
                </p>
              </div>

              {/* Tab Buttons */}
              <div className="flex gap-4 mb-8">
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'mobile'
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 border border-gray-700'
                    }`}
                >
                  📱 Mobile App
                </button>
                <button
                  onClick={() => setActiveTab('admin')}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${activeTab === 'admin'
                    ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50'
                    : 'bg-zinc-800 text-gray-400 hover:bg-zinc-700 border border-gray-700'
                    }`}
                >
                  💼 Admin Dashboard
                </button>
              </div>

              {/* Mobile Screenshots */}
              {activeTab === 'mobile' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {reportITMobileScreens.map((screen, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-[9/16] overflow-hidden bg-white">
                        <img
                          src={screen.src}
                          alt={screen.label}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 bg-black">
                        <h3 className="font-semibold text-white mb-1">{screen.label}</h3>
                        <p className="text-sm text-purple-400">{screen.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}

              {/* Admin Screenshots */}
              {activeTab === 'admin' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                  {reportITAdminScreens.map((screen, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: idx * 0.1 }}
                      className="group bg-white rounded-xl border border-gray-800 hover:border-purple-500/50 transition-all duration-300 overflow-hidden"
                    >
                      <div className="aspect-video overflow-hidden bg-white">
                        <img
                          src={screen.src}
                          alt={screen.label}
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-4 bg-black">
                        <h3 className="font-semibold text-white mb-1">{screen.label}</h3>
                        <p className="text-sm text-purple-400">{screen.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default HomePage;