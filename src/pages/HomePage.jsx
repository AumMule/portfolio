import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import LogoLoop from '../components/LogoLoop.jsx'; 
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';


// Import all the section components for the homepage
import AboutSection from '../components/AboutSection.jsx';
import FindMeOn from '../components/FindMeOn.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  return (
    // We replaced the fragment <> with a div to add padding at the bottom (pb-28)
    // This creates space for the footer to be seen above the fixed dock.
    <div className="pb-28">
      {/* ================================================= */}
      {/* HERO SECTION                                      */}
      {/* ================================================= */}
      <section className="min-h-screen text-white flex items-center justify-center p-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">

            {/* Left Column: Text Content */}
            <motion.div
              className="md:w-1/2 text-center md:text-left mb-10 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              {/* Animated Greeting */}
              <motion.p
                className="text-2xl text-purple-400 mb-2"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ type: 'spring', stiffness: 100, damping: 12, delay: 0.5 }}
              >
                Hi There! 👋
              </motion.p>

              {/* Name */}
              <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 font-raleway tracking-wide">
                I'M <span className="text-purple-300">Aum Mule</span>
              </h1>

              {/* Typewriter effect */}
              <TypeAnimation
                sequence={[
                  'A Passionate Web Developer.',
                  2000,
                  'React & Frontend Enthusiast.',
                  2000,
                  'Building Interactive Web Experiences.',
                  2000,
                  'Learning & Growing Every Day!',
                  2000,
                ]}
                speed={50}
                style={{
                  fontSize: '1.5rem',
                  color: '#D1D5DB',
                  marginTop: '1rem',
                  lineHeight: '1.6',
                  fontFamily: '"Josefin Sans", sans-serif'
                }}
                repeat={Infinity}
              />
            </motion.div>

            {/* Right Column: Graphic */}
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
            >
              <div className="w-80 h-80 bg-purple-900/50 rounded-full flex items-center justify-center">
                <img
                  src="/images/Hero.png"
                  alt="Profile"
                  className="w-72 h-72 object-cover rounded-full"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================================================= */}
      {/* ABOUT ME SECTION                                  */}
      {/* ================================================= */}
      <AboutSection />

      {/* ================================================= */}
      {/* FIND ME ON SECTION                                */}
      {/* ================================================= */}
      <FindMeOn />

      {/* ================================================= */}
      {/* FOOTER                                          */}
      {/* ================================================= */}
      <Footer />
    </div>
  );
};

export default HomePage;