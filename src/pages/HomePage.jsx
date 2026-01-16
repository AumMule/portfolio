import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

import AboutSection from '../components/AboutSection.jsx';
import FindMeOn from '../components/FindMeOn.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);

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
      <section className="relative min-h-screen text-white flex items-center justify-center px-6 md:px-16 py-20">
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
                  href="/projects"
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
                  href="/contact"
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
      {/* STATS SECTION - New Addition                      */}
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
      {/* ABOUT ME SECTION                                  */}
      {/* ================================================= */}
      <AboutSection />

      {/* ================================================= */}
      {/* FIND ME ON SECTION                                */}
      {/* ================================================= */}
      <FindMeOn />

      {/* ================================================= */}
      {/* FOOTER                                            */}
      {/* ================================================= */}
      <Footer />
    </div>
  );
};

export default HomePage;