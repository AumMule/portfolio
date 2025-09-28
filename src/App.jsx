import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';

// 1. Import your components
import Dock from './components/Dock.jsx';
import Squares from './components/Squares.jsx'; // Import Squares here
import { VscHome, VscArchive, VscAccount, VscSettingsGear } from 'react-icons/vsc';

// Import your page components
import HomePage from './pages/HomePage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  const navigate = useNavigate();

  const dockItems = [
    { icon: <VscHome size={28} />, label: 'Home', onClick: () => navigate('/') },
    { icon: <VscArchive size={28} />, label: 'Projects', onClick: () => navigate('/projects') },
    { icon: <VscAccount size={28} />, label: 'About', onClick: () => navigate('/about') },
    { icon: <VscSettingsGear size={28} />, label: 'Contact', onClick: () => navigate('/contact') },
  ];

  return (
    // 2. Main container is now relative for positioning
    <div className="min-h-screen bg-gray-900 relative">
      
      {/* 3. The Squares background is now a global, bottom-layer element */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Squares 
          speed={0.3}
          squareSize={40}
          direction='diagonal'
          borderColor='#374151'
          hoverFillColor='#4c1d95'
        />
      </div>

      {/* 4. All page content will render on top of the background */}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Navbar />
      <Dock items={dockItems} />
    </div>
  );
}

export default App;