import React from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaPencilAlt, FaPlane } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-center py-20 px-4 text-white">
      <div className="container mx-auto">
        
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center mb-16 font-raleway"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Know Who <span className="text-purple-400">I'M</span>
        </motion.h1>

        {/* Content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-items-center gap-12">
          
          {/* Left: Text content */}
          <motion.div
            className="max-w-xl space-y-6 text-lg text-gray-300 font-josefin-sans text-center md:text-left"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <p>
              Hi Everyone, I am <span className="text-purple-400">Aum Mule</span> from India.
              I am a passionate software developer focused on creating interactive and user-friendly web experiences.
            </p>
            <p>
              I am currently pursuing my degree in Computer Science and continuously exploring new technologies to enhance my skills.
            </p>
            <p>Apart from coding, some other activities that I love to do!</p>

            <ul className="space-y-3 list-none text-left inline-block">
              <li className="flex items-center gap-3"><FaGamepad className="text-purple-400" /> <span>Playing Games</span></li>
              <li className="flex items-center gap-3"><FaPencilAlt className="text-purple-400" /> <span>Writing Tech Blogs</span></li>
              <li className="flex items-center gap-3"><FaPlane className="text-purple-400" /> <span>Travelling</span></li>
            </ul>

            <blockquote className="text-xl italic text-purple-300/80 border-l-4 border-purple-400 pl-4 mt-8">
              "Strive to build things that make a difference!"
            </blockquote>
          </motion.div>

          {/* Right: Animated Resume Preview */}
          <motion.div
            className="w-full h-[600px] max-w-md border-2 border-purple-400 rounded-xl overflow-hidden shadow-lg"
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <iframe
              src="/resume/Aum_Mule_Resume.pdf"
              title="Aum Mule Resume"
              className="w-full h-full"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;
