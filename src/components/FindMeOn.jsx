import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import ShinyText from './ShinyText';

const FindMeOn = () => {
  return (
    <section className="bg-transparent text-white py-16 px-4">
      <div className="container mx-auto text-center">
        {/* Heading */}
        <h3 className="text-4xl md:text-5xl font-extrabold mb-6 font-raleway tracking-wide">
          FIND ME ON
        </h3>

        {/* Shiny Connect Text */}
        <div className="mb-10">
          <ShinyText
            text="Feel free to connect with me"
            speed={3}
            className="text-xl md:text-2xl font-josefin"
          />
        </div>

        {/* Social Icons */}
        <div className="flex justify-center gap-8">
          <a
            href="https://github.com/AumMule"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-5xl hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/AumMule"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-5xl hover:text-purple-400 transition-colors duration-300"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.linkedin.com/in/aum-mule-b3197b339/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-5xl hover:text-purple-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://www.instagram.com/aumm.08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-4xl md:text-5xl hover:text-purple-400 transition-colors duration-300"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FindMeOn;
