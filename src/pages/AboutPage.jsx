import React from 'react';
// Importing icons from the 'react-icons' library
import { FaGamepad, FaPencilAlt, FaPlane } from 'react-icons/fa';

const AboutPage = () => {
  return (
    // The main section container. We use min-h-screen to make it take up at least the full viewport height.
    <section className="min-h-screen flex items-center justify-center py-20 px-4 text-white">
      <div className="container mx-auto">
        
        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 font-raleway">
          Know Who <span className="text-purple-400">I'M</span>
        </h1>

        {/* Main content grid for the two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-12">
          
          {/* Column 1: Text Content */}
          <div className="max-w-xl space-y-6 text-lg text-gray-300 font-josefin-sans text-center md:text-left">
            <p>
              Hi Everyone, I am <span className="text-purple-400">Aum Mule</span> from India.
              I am a passionate software developer focused on creating interactive and user-friendly web experiences.
            </p>
            <p>
              I am currently pursuing my degree in Computer Science and continuously exploring new technologies to enhance my skills.
            </p>
            <p>
              Apart from coding, some other activities that I love to do!
            </p>

            {/* Hobbies List with Icons */}
            <ul className="space-y-3 list-none text-left inline-block">
              <li className="flex items-center gap-3">
                <FaGamepad className="text-purple-400" />
                <span>Playing Games</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPencilAlt className="text-purple-400" />
                <span>Writing Tech Blogs</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPlane className="text-purple-400" />
                <span>Travelling</span>
              </li>
            </ul>

            {/* Quote */}
            <blockquote className="text-xl italic text-purple-300/80 border-l-4 border-purple-400 pl-4 mt-8">
              "Strive to build things that make a difference!"
            </blockquote>
          </div>

          {/* Column 2: Illustration */}
          <div>
            <img 
              src="https://storyset.com/illustration/web-developer/pana" 
              alt="A developer coding at a desk"
              className="w-full max-w-md"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutPage;