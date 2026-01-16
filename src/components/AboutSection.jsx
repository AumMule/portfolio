import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TiltedCard from './TiltedCard';

const AboutSection = () => {
    const [activeCategory, setActiveCategory] = useState('Frontend');

    const techStack = {
        Frontend: [
            { name: 'HTML', icon: '🌐' },
            { name: 'CSS', icon: '🎨' },
            { name: 'JavaScript', icon: '⚡' },
            { name: 'React', icon: '⚛️' },
            { name: 'Tailwind CSS', icon: '💨' },
        ],
        Programming: [
            { name: 'Java', icon: '☕' },
            { name: 'C', icon: '🔧' },
        ],
        Backend: [
            { name: 'Flask', icon: '🌶️' },
            { name: 'Firebase', icon: '🔥' },
        ],
        Tools: [
            { name: 'Git', icon: '📦' },
            { name: 'GitHub', icon: '🐙' },
            { name: 'VS Code', icon: '💻' },
            { name: 'NPM', icon: '📮' },
            { name: 'Postman', icon: '📬' },
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
                                    I'm a passionate <span className="text-purple-400 font-semibold">web developer</span> turning ideas into interactive experiences. 👨‍💻
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
                    <div className="text-center mb-10">
                        <h3 className="text-3xl md:text-4xl font-bold mb-3">
                            My <span className="bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">Tech Stack</span>
                        </h3>
                        <p className="text-gray-400">Technologies and tools I work with</p>
                    </div>

                    {/* Category Tabs */}
                    <div className="flex flex-wrap justify-center gap-3 mb-8">
                        {categories.map((category) => (
                            <button
                                key={category}
                                onClick={() => setActiveCategory(category)}
                                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                                    activeCategory === category
                                        ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/50 scale-105'
                                        : 'bg-zinc-900 text-gray-400 hover:bg-zinc-800 border border-gray-800'
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    {/* Tech Cards */}
                    <motion.div
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                        key={activeCategory}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        {techStack[activeCategory].map((tech, index) => (
                            <motion.div
                                key={tech.name}
                                className="bg-zinc-900/50 backdrop-blur-sm border border-gray-800 rounded-xl p-6 text-center hover:border-purple-500/50 hover:bg-purple-500/5 transition-all duration-300 cursor-pointer group"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.05 }}
                                whileHover={{ y: -5, scale: 1.05 }}
                            >
                                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                                    {tech.icon}
                                </div>
                                <h4 className="text-sm font-semibold text-gray-300 group-hover:text-purple-400 transition-colors">
                                    {tech.name}
                                </h4>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Category Description */}
                    <motion.div
                        className="mt-8 text-center"
                        key={`desc-${activeCategory}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <div className="inline-block px-6 py-3 bg-purple-500/10 border border-purple-500/30 rounded-full">
                            <p className="text-sm text-purple-300">
                                {activeCategory === 'Frontend' && 'Building beautiful and responsive user interfaces'}
                                {activeCategory === 'Programming' && 'Core programming languages for problem-solving'}
                                {activeCategory === 'Backend' && 'Basic backend development and database management'}
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