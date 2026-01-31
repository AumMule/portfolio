import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiReact,
    SiTailwindcss,
    SiPython,
    SiMongodb,
    SiExpress,
    SiFirebase,
    SiGit,
    SiGithub,
    SiNpm,
    SiPostman
} from 'react-icons/si';
import { FaCode } from 'react-icons/fa';
import { TbBrandVscode } from 'react-icons/tb';

const AboutSection = () => {
    const [activeCategory, setActiveCategory] = useState('Frontend');

    const techStack = {
        Frontend: [
            { name: 'HTML5', icon: <SiHtml5 />, color: '#E34F26' },
            { name: 'CSS3', icon: <SiCss3 />, color: '#1572B6' },
            { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
            { name: 'React', icon: <SiReact />, color: '#61DAFB' },
            { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        ],
        Programming: [
            { name: 'Java', icon: <FaCode />, color: '#007396' },
            { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        ],
        Backend: [
            { name: 'Express.js', icon: <SiExpress />, color: '#000000' },
            { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
            { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
        ],
        Tools: [
            { name: 'Git', icon: <SiGit />, color: '#F05032' },
            { name: 'GitHub', icon: <SiGithub />, color: '#181717' },
            { name: 'VS Code', icon: <TbBrandVscode />, color: '#007ACC' },
            { name: 'NPM', icon: <SiNpm />, color: '#CB3837' },
            { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        ],
    };

    const categories = Object.keys(techStack);

    return (
        <section className="relative text-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
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
                        INTRODUCTION
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Let Me <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Introduce Myself</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Left: Text Content */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 hover:border-purple-500/30 transition-all duration-500">
                            <div className="space-y-5 text-lg text-gray-300 leading-relaxed">
                                <p>
                                    Pursuing <span className="text-purple-400 font-semibold">B.Tech CSE (AIML)</span>, passionate about AI and Web Development.
                                </p>
                                <p>
                                    I'm a passionate <span className="text-purple-400 font-semibold">web developer</span> turning ideas into interactive experiences.
                                </p>
                                <p>
                                    I am fluent in classics like <span className="text-purple-400 font-semibold">Java, JavaScript</span> and <span className="text-purple-400 font-semibold">Python</span>.
                                </p>
                                <p>
                                    I work with <span className="text-purple-400 font-semibold">React.js, Node.js</span> and love exploring <span className="text-purple-400 font-semibold">new tech & libraries</span>.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Avatar with Tilt Effect */}
                    <motion.div
                        className="flex justify-center items-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative">
                            {/* Decorative ring */}
                            <motion.div
                                className="absolute inset-0 rounded-full border-2 border-purple-500/20 scale-110"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            />
                            <TiltedCard
                                imageSrc="/images/profile1.jpg"
                                altText="My Avatar"
                                captionText="That's me!"
                                containerHeight="250px"
                                containerWidth="250px"
                                imageHeight="250px"
                                imageWidth="200px"
                                rotateAmplitude={14}
                                scaleOnHover={1.15}
                                showMobileWarning={false}
                                showTooltip={false}
                                displayOverlayContent={false}
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Tech Stack Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                >
                    <div className="text-center mb-12">
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">
                            My <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Tech Stack</span>
                        </h3>
                        <p className="text-gray-400 text-lg">Technologies and tools I work with</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-12">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${activeCategory === category
                                        ? 'bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-lg shadow-purple-500/50 scale-105'
                                        : 'bg-zinc-900/80 text-gray-400 hover:bg-zinc-800 hover:text-gray-300 border border-gray-800 hover:border-gray-700'
                                    }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Tech Cards */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {techStack[activeCategory].map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="relative bg-gradient-to-br from-zinc-900/90 to-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 text-center hover:border-purple-500/50 transition-all duration-300 cursor-pointer group overflow-hidden"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -8, scale: 1.05 }}
                            >
                                {/* Glow effect on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-purple-600/0 group-hover:from-purple-500/10 group-hover:to-purple-600/10 transition-all duration-300 rounded-2xl" />

                                {/* Icon */}
                                <div
                                    className="relative text-6xl mb-4 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center"
                                    style={{ color: tech.color }}
                                >
                                    {tech.icon}
                                </div>

                                {/* Name */}
                                <h4 className="relative text-base font-bold text-gray-300 group-hover:text-white transition-colors">
                                    {tech.name}
                                </h4>

                                {/* Shine effect */}
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Category Description */}
                    <motion.div
                        className="mt-12 text-center"
                        key={`desc-${activeCategory}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="inline-block px-8 py-4 bg-gradient-to-r from-purple-500/10 to-purple-600/10 border border-purple-500/30 rounded-2xl backdrop-blur-sm">
                            <p className="text-base text-purple-300 font-medium">
                                {activeCategory === 'Frontend' && 'Building beautiful and responsive user interfaces'}
                                {activeCategory === 'Programming' && 'Core programming languages for problem-solving'}
                                {activeCategory === 'Backend' && 'Server-side development and database management'}
                                {activeCategory === 'Tools' && 'Essential tools for development workflow'}
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutSection;