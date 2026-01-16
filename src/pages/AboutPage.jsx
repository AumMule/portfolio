import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGamepad, FaPencilAlt, FaPlane, FaCode, FaLaptopCode, FaRocket } from 'react-icons/fa';

const AboutPage = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const hobbies = [
    { icon: <FaGamepad />, label: 'Playing Games', color: 'from-purple-400 to-pink-400' },
    { icon: <FaPencilAlt />, label: 'Writing Tech Blogs', color: 'from-purple-400 to-blue-400' },
    { icon: <FaPlane />, label: 'Travelling', color: 'from-purple-400 to-cyan-400' },
  ];

  const skills = [
    { icon: <FaCode />, label: 'Web Development', desc: 'Building responsive and interactive web applications' },
    { icon: <FaLaptopCode />, label: 'Frontend Focus', desc: 'Specializing in React and modern JavaScript' },
    { icon: <FaRocket />, label: 'Innovation', desc: 'Always exploring new technologies and frameworks' },
  ];

  return (
    <section className="min-h-screen relative overflow-hidden text-white py-20 px-6">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.03) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
        <motion.div
          className="absolute w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          style={{
            top: '30%',
            left: '10%',
            x: mousePosition.x * -0.02,
            y: mousePosition.y * -0.02,
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
        />
      </div>

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
            ABOUT ME
          </motion.div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Know Who <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">I Am</span>
          </h1>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Left: Text Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                Hi Everyone, I am <span className="text-purple-400 font-semibold">Aum Mule</span> from India.
                I am a passionate software developer focused on creating interactive and user-friendly web experiences.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-4">
                I am currently pursuing my degree in Computer Science and continuously exploring new technologies to enhance my skills.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Apart from coding, I love diving into creative pursuits that keep me inspired and energized.
              </p>
            </div>

            {/* Hobbies */}
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
                What I Love To Do
              </h3>
              <div className="space-y-4">
                {hobbies.map((hobby, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-4 p-3 rounded-xl bg-black/30 border border-gray-800 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className={`text-2xl bg-gradient-to-r ${hobby.color} bg-clip-text text-transparent`}>
                      {hobby.icon}
                    </div>
                    <span className="text-gray-300">{hobby.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/30 rounded-2xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-4">
                <div className="text-6xl text-purple-400 leading-none">"</div>
                <div>
                  <p className="text-xl italic text-purple-300/90 leading-relaxed mb-2">
                    Strive to build things that make a difference!
                  </p>
                  <p className="text-sm text-gray-400">— My Philosophy</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Resume Preview */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-500">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <span className="w-1 h-6 bg-gradient-to-b from-purple-500 to-purple-600 rounded-full"></span>
                My Resume
              </h3>
              <div className="relative aspect-[8.5/11] rounded-xl overflow-hidden border-2 border-purple-500/30 shadow-2xl shadow-purple-500/20">
                <iframe
                  src="/resume/Aum_Mule_Resume.pdf"
                  title="Aum Mule Resume"
                  className="w-full h-full"
                ></iframe>
              </div>
              <motion.a
                href="/resume/Aum_Mule_Resume.pdf"
                download
                className="mt-4 w-full bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-500"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-5xl text-purple-400 mb-4 flex justify-center">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.label}</h3>
              <p className="text-sm text-gray-400">{skill.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutPage;