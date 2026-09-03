import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import ExploreMore from './components/ExploreMore/ExploreMore';
import Footer from './components/Footer/Footer';
import './styles/global.css';

// Import image assets from src/assets folder
import hero1 from './assets/hero1.png';
import hero2 from './assets/hero2.png';
import hero3 from './assets/hero3.png';

const THEMES = [
  {
    id: 'mint',
    hex: '#5fa88f',
    image: hero1,
    bg: 'radial-gradient(circle at center, #5fa88f 0%, #295345 100%)',
    bgTextColor: 'rgba(255, 255, 255, 0.95)', // White for Green
  },
  {
    id: 'black',
    hex: '#1f2122',
    image: hero2,
    bg: 'radial-gradient(circle at center, #3a3d40 0%, #111213 100%)',
    bgTextColor: 'rgba(255, 255, 255, 0.95)', // White for Black
  },
  {
    id: 'white',
    hex: '#ffffff',
    image: hero3,
    bg: 'radial-gradient(circle at center, #ffffff 0%, #b8c4be 100%)',
    bgTextColor: 'rgba(120, 130, 125, 0.45)', // Grey for White
  },
];

export default function App() {
  const [themeIndex, setThemeIndex] = useState(0);

  // Auto-switch themes every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setThemeIndex((prevIndex) => (prevIndex + 1) % THEMES.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentTheme = THEMES[themeIndex];

  return (
    <div className="app-container" style={{ background: currentTheme.bg, transition: 'background 0.8s ease' }}>
      <Navbar />
      <Hero 
        currentTheme={currentTheme} 
        themes={THEMES} 
        onSelectTheme={(theme) => {
          const index = THEMES.findIndex((t) => t.id === theme.id);
          setThemeIndex(index);
        }} 
      />
      <Features />
      <ExploreMore />
      <Footer />
    </div>
  );
}