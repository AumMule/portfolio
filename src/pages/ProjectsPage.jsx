import React from 'react';

const projects = [
  {
    title: "Recipe App",
    description:
      "Responsive web-based Recipe App built with React.js, Tailwind CSS, and API integration. Features include search, bookmarking, dark mode with localStorage, skeleton loaders, and error handling for a smooth user experience.",
    image: "/images/recipe.png",
    link: "https://recipe-app-five-eta.vercel.app/", // 🔗 Replace with actual project link
  },
  {
    title: "Netflix Clone",
    description:
      "Movie streaming platform inspired by Netflix, built with React.js, Tailwind CSS, TMDB API, and Firebase. Features user authentication, watchlist/favorites, search, categories, skeleton loaders, and deployment on Firebase Hosting.",
    image: "/images/netflix.png",
    link: "https://netflix-clone-eight-beige-29.vercel.app/", // 🔗 Replace with actual project link
  },
];

const ProjectsPage = () => {
  return (
    <section className="text-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My Recent <span className="text-purple-400">Works</span>
        </h2>
        <p className="text-gray-400 mt-2">Here are a few projects I've worked on recently.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <a
            key={idx}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300 hover:scale-105 transform"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm text-center">{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
