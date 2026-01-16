import React, { useState } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "ReportIT",
    description:
      "A civic issue reporting platform enabling citizens to report local problems through mobile, visualize them on a map, and manage them via an admin dashboard.",
    image: "/images/reportit.png",
    link: "/projects/reportit",
    featured: true,
    category: "Full-Stack",
    tech: ["React", "Leaflet.js", "Tailwind"],
  },
  {
    title: "ParkHub",
    description:
      "A modern and responsive portfolio website project built with React and Tailwind CSS to showcase skills and projects in a visually appealing manner.",
    image: "/images/ParkHub.png",
    link: "https://park-hub-beige.vercel.app/",
    category: "Web Design",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Netflix Clone",
    description:
      "Movie streaming platform inspired by Netflix, built with React.js, Tailwind CSS, TMDB API, and Firebase. Features authentication, watchlist, search, and categories.",
    image: "/images/netflix.png",
    link: "https://netflix-clone-eight-beige-29.vercel.app/",
    category: "Full-Stack",
    tech: ["React", "Firebase", "TMDB API"],
  },
  {
    title: "Kite Battle Game",
    description:
      "An interactive 3D web-based Kite Battle Game built with HTML, CSS, and JavaScript. Features real-time controls, leaderboard system, and responsive gameplay.",
    image: "/images/kite-battle.png",
    link: "https://kite-battle.vercel.app/",
    category: "Game Dev",
    tech: ["JavaScript", "3D Graphics"],
  },
  {
    title: "Shortify",
    description:
      "A React-based text summarizer that quickly converts long paragraphs into clear, concise summaries, helping users understand key points faster and save time.",
    image: "/images/summarizer.png",
    link: "https://summarizer-app-nine.vercel.app/",
    category: "AI/ML",
    tech: ["React", "NLP API"],
  },
  {
    title: "Recipe App",
    description:
      "Responsive web-based Recipe App built with React.js, Tailwind CSS, API integration, bookmarking, dark mode, skeleton loaders, and error handling.",
    image: "/images/recipe.png",
    link: "https://recipe-app-five-eta.vercel.app/",
    category: "Web App",
    tech: ["React", "API Integration"],
  },
  {
    title: "Kanban Board",
    description:
      "A Kanban-style task management app built with React. Supports drag-and-drop workflow and clean UI for productivity.",
    image: "/images/kanban.png",
    link: "https://github.com/AumMule/Kanban-Board",
    status: "In Progress",
    category: "Productivity",
    tech: ["React", "Drag & Drop"],
  },
];

const ProjectsPage = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full-Stack", "Web Design", "Game Dev", "AI/ML", "Web App", "Productivity"];
  
  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  const featuredProject = projects.find(p => p.featured);
  const regularProjects = projects.filter(p => !p.featured);

  return (
    <section className="text-white py-20 px-6 md:px-12 overflow-hidden relative">
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
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                filter === cat
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
            <a
              href={featuredProject.link}
              className="group relative block overflow-hidden rounded-3xl bg-zinc-900 border border-gray-800 hover:border-purple-500/50 transition-all duration-500"
            >
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
                  <h3 className="text-4xl md:text-5xl font-bold mb-4 group-hover:text-purple-400 transition-colors">
                    {featuredProject.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {featuredProject.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 rounded-full text-xs text-purple-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-2 text-purple-400 font-semibold group-hover:gap-4 transition-all">
                    View Project
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
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
              <motion.a
                key={idx}
                href={project.link}
                target={project.link.startsWith('http') ? "_blank" : "_self"}
                rel="noopener noreferrer"
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
                  <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/30 transition-opacity duration-500 ${
                    hoveredIndex === idx ? 'opacity-95' : 'opacity-0'
                  }`}></div>
                </div>

                {/* Content - Always at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/95 to-transparent">
                  <span className="text-purple-400 text-xs font-semibold tracking-wider mb-2 block">
                    {project.category}
                  </span>
                  <h3 className={`font-bold mb-2 group-hover:text-purple-400 transition-colors ${
                    isLarge ? 'text-2xl' : 'text-xl'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-gray-400 text-sm leading-relaxed mb-3 transition-all duration-500 ${
                    hoveredIndex === idx ? 'opacity-100 max-h-32 translate-y-0' : 'opacity-0 max-h-0 translate-y-4'
                  }`}>
                    {project.description}
                  </p>
                  <div className={`flex flex-wrap gap-2 transition-all duration-500 ${
                    hoveredIndex === idx ? 'opacity-100 max-h-20 translate-y-0' : 'opacity-0 max-h-0 translate-y-4'
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
                </div>
              </motion.a>
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
  );
};

export default ProjectsPage;