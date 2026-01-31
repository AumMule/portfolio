import React from 'react';

// Import components
import Dock from './components/Dock.jsx';
import Squares from './components/Squares.jsx';
import HomePage from './pages/HomePage.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    // Main container
    <div className="min-h-screen p-8 bg-gray-900 relative">

      {/* The Squares background is now a global, bottom-layer element */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Squares
          speed={0.3}
          squareSize={40}
          direction='diagonal'
          borderColor='#374151'
          hoverFillColor='#4c1d95'
        />
      </div>

      {/* All page content will render on top of the background */}
      <main className="relative z-10">
        <HomePage />
      </main>
      <Navbar />
      <Dock />
    </div>
  );
}

export default App;