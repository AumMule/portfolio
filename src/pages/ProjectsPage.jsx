import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
<<<<<<< HEAD
    title: "ParkHub",
    description:
      "A modern and responsive portfolio website project built with React and Tailwind CSS to showcase skills and projects in a visually appealing manner.",
    image: "/images/parkhub.png",
    link: "https://park-hub-beige.vercel.app/",
    
  },
  {
    title: "Shortify",
    description:
      "A React-based text summarizer that quickly converts long paragraphs into clear, concise summaries, helping users understand key points faster and save time.",
    image: "/images/summarizer.png",
    link: "https://summarizer-app-nine.vercel.app/",
    
  },
  {
    title: "Recipe App",
    description:
      "A responsive web-based recipe app built with React and Tailwind CSS, featuring recipe search via API, bookmarking, dark mode, and a smooth user experience.",
=======
    title: "Recipe App",
    description:
      "Responsive web-based Recipe App built with React.js, Tailwind CSS, and API integration. Features include search, bookmarking, dark mode with localStorage, skeleton loaders, and error handling for a smooth user experience.",
>>>>>>> 98e0f3b9f3cc54d3af25e3df484c59df7c933259
    image: "/images/recipe.png",
    link: "https://recipe-app-five-eta.vercel.app/",
  },
  {
    title: "Netflix Clone",
    description:
<<<<<<< HEAD
      "A Netflix-inspired movie streaming platform built with React and Tailwind CSS, featuring TMDB API integration, authentication, watchlists, and search.",
=======
      "Movie streaming platform inspired by Netflix, built with React.js, Tailwind CSS, TMDB API, and Firebase. Features user authentication, watchlist/favorites, search, categories, skeleton loaders, and deployment on Firebase Hosting.",
>>>>>>> 98e0f3b9f3cc54d3af25e3df484c59df7c933259
    image: "/images/netflix.png",
    link: "https://netflix-clone-eight-beige-29.vercel.app/",
  },
  {
    title: "Kite Battle Game",
    description:
<<<<<<< HEAD
      "An interactive 3D web-based Kite Battle Game built with HTML, CSS, and JavaScript, featuring real-time controls, leaderboards, customization, and responsive gameplay.",
    image: "/images/kite-battle.png",
    link: "https://github.com/Kadam-Atharva/Kite-Battle",
  },
  
  {
    title: "AuraMax",
    description:
      "A modern and responsive portfolio website project built with React and Tailwind CSS to showcase skills and projects in a visually appealing manner.",
    image: "/images/kanban.png", // Make sure to add your image
    link: "https://github.com/AumMule/Kanban-Board", // Add the live URL for your ParkHub project
=======
      "An interactive 3D web-based Kite Battle Game built with HTML, CSS, and JavaScript. Features include real-time kite control, leaderboard system, customizable themes, and responsive design for smooth gameplay across all devices.",
    image: "/images/kite-battle.png",
    link: "https://kite-battle.vercel.app/",
  },
  {
    title: "ParkHub",
    description:
      "A modern and responsive portfolio website project built with React and Tailwind CSS to showcase skills and projects in a visually appealing manner.",
    image: "/images/parkhub.png", // Make sure to add your image
    link: "#", // Add the live URL for your ParkHub project
>>>>>>> 98e0f3b9f3cc54d3af25e3df484c59df7c933259
    status: "In Progress", // New status property
  },
];

const ProjectsPage = () => {
  // Animation variants for container and cards
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section className="text-white py-16 px-6 md:px-12 overflow-hidden">
      {/* Title Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold">
          My Recent <span className="text-purple-400">Works</span>
        </h2>
        <p className="text-gray-400 mt-2">
          Here are a few projects I've worked on recently.
        </p>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
<<<<<<< HEAD
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8" // Restored to 3 columns on medium screens and up
=======
        className="grid grid-cols-1 md:grid-cols-3 gap-8" // Restored to 3 columns on medium screens and up
>>>>>>> 98e0f3b9f3cc54d3af25e3df484c59df7c933259
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {projects.map((project, idx) => (
          <motion.a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            variants={cardVariants}
            whileHover={{
              scale: 1.05,
              y: -5,
              boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg transition-transform duration-300 relative" // Added 'relative' for badge positioning
          >
            {/* Conditional "In Progress" Badge */}
            {project.status && (
              <div className="absolute top-4 right-4 bg-yellow-500 text-black text-xs font-bold px-2 py-1 rounded-full z-10">
                {project.status}
              </div>
            )}

            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm text-center">
              {project.description}
            </p>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsPage;