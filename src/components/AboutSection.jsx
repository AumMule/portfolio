import React from 'react';
import TiltedCard from './TiltedCard';

const AboutSection = () => {
    return (
        <section className="relative bg-gray-900 text-white py-16 px-6 md:px-12 lg:px-16 mx-auto rounded-2xl shadow-lg shadow-purple-900/40 max-w-5xl">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-extrabold text-purple-400 tracking-wide" style={{ fontFamily: 'Raleway, sans-serif' }}>
                    LET ME INTRODUCE MYSELF
                </h2>
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                {/* Text Section */}
                <div className="md:w-3/5 text-lg leading-relaxed text-gray-300 space-y-4">
                    <p>
                        Pursuing <span className="text-purple-400 font-semibold">B.Tech CSE (AIML)</span>, passionate about AI and Web Development.
                    </p>
                    <p>
                        I’m a passionate <span className="text-purple-400 font-semibold">web developer</span> turning ideas into interactive experiences. 👨‍💻
                    </p>
                    <p>
                        I am fluent in classics like <span className="text-purple-400 font-semibold">Java, JavaScript</span> and <span className="text-purple-400 font-semibold">Python</span>.
                    </p>
                    <p>
                        I work with <span className="text-purple-400 font-semibold">React.js, Node.js</span> and love exploring <span className="text-purple-400 font-semibold">new tech & libraries</span>.
                    </p>
                </div>


                {/* Avatar with Tilt Effect */}
                <div className="md:w-2/5 flex justify-center">
                    <TiltedCard
                        imageSrc="/images/profile1.jpg"
                        altText="My Avatar"
                        captionText="That’s me!"
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
            </div>
        </section>
    );
};

export default AboutSection;
