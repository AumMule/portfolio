import React from 'react';

const projects = [
  {
    title: "Chatify",
    description:
      "Personal Chat Room or Workspace to share resources and hangout with friends. Built with React.js, Material-UI, and Firebase. Features include realtime messaging and image sharing.",
    image: "/images/chatify.png", // replace with your project image
  },
  {
    title: "Bits-of-Code",
    description:
      "Personal blog page built with Next.js and Tailwind CSS. Takes content from markdown files and renders it using Next.js. Supports dark mode and easy blog writing.",
    image: "/images/bits-of-code.png",
  },
  {
    title: "Editor.io",
    description:
      "Online code and markdown editor built with React.js. Supports HTML, CSS, and JS code with instant preview. Great for building README files and small projects.",
    image: "/images/editorio.png",
  },
];

const ProjectsPage = () => {
  return (
    <section className=" text-white py-16 px-6 md:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">
          My Recent <span className="text-purple-400">Works</span>
        </h2>
        <p className="text-gray-400 mt-2">Here are a few projects I've worked on recently.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="bg-gray-800 rounded-2xl p-6 flex flex-col items-center shadow-lg hover:shadow-purple-500/40 transition-shadow duration-300"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-300 text-sm">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsPage;
