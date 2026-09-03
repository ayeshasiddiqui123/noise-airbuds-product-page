import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Hero.css';

const textFade = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.4 } }
};

export default function Hero({ currentTheme, themes, onSelectTheme }) {
  // Determine contrast text color automatically
  const textColor = currentTheme.textColor 
    || (currentTheme.id === 'white' || currentTheme.hex === '#ffffff' ? '#111111' : '#ffffff');

  return (
    <section className="hero" style={{ color: textColor }}>
      {/* Background NOISE Text */}
      <motion.div 
        className="bg-text"
        animate={{ color: currentTheme.bgTextColor || textColor }}
        transition={{ duration: 0.5 }}
      >
        NOISE
      </motion.div>

      {/* Center Floating Product Image */}
      <div className="hero-image-container">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTheme.id}
            initial={{ opacity: 0, scale: 0.9, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -15 }}
            transition={{ duration: 0.4, ease: 'easeOut' }}
            className="image-wrapper"
          >
            <motion.img
              src={currentTheme.image}
              alt="Noise Airbuds"
              className="hero-airbuds-img"
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* TOP LEFT SPEC */}
      <motion.div key={`tl-${currentTheme.id}`} className="spec-box spec-left-top" {...textFade}>
        <h4 className="spec-title">QUALITY</h4>
        <p className="spec-desc">
          50 hours of playtime.<br />
          Hyper Sync, Quad Mic<br />
          Communicate clearly
        </p>
      </motion.div>

      {/* BOTTOM LEFT SPEC */}
      <motion.div key={`bl-${currentTheme.id}`} className="spec-box spec-left-bottom" {...textFade}>
        <h4 className="spec-title">UP TO 50 HOURS</h4>
        <p className="spec-desc">
          of playtime<br />
          <span className="spec-sub">Hyper Sync, Quad Mic</span>
        </p>
      </motion.div>

      {/* TOP RIGHT SPEC */}
      <motion.div key={`tr-${currentTheme.id}`} className="spec-box spec-right-top" {...textFade}>
        <h4 className="spec-title">QUAD MIC</h4>
        <p className="spec-desc">
          with environmental noise<br />
          cancellation
        </p>
      </motion.div>

      {/* BOTTOM RIGHT SPEC */}
      <motion.div key={`br-${currentTheme.id}`} className="spec-box spec-right-bottom" {...textFade}>
        <h4 className="spec-title">NO INTERRUPT</h4>
        <p className="spec-desc">
          with environmental noise<br />
          cancellation
        </p>
      </motion.div>

      {/* BOTTOM CONTROLS */}
      <div className="color-selector">
        <span>SELECT COLOR</span>
        <div className="color-dots">
          {themes.map((theme) => (
            <button
              key={theme.id}
              className={`color-dot ${currentTheme.id === theme.id ? 'active' : ''}`}
              style={{ backgroundColor: theme.hex }}
              onClick={() => onSelectTheme(theme)}
              aria-label={`Select ${theme.id} color`}
            />
          ))}
        </div>
      </div>

      <div className="hero-cta-center">
        <motion.button 
          className="btn-buy"
          style={{
            background: textColor === '#ffffff' ? '#ffffff' : '#111111',
            color: textColor === '#ffffff' ? '#111111' : '#ffffff'
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          BUY NOW
        </motion.button>
      </div>

      <motion.a 
        href="#video" 
        className="btn-play-video"
        whileHover={{ x: 2 }}
      >
        <span className="play-arrow">&#9654;</span> PLAY VIDEO
      </motion.a>
    </section>
  );
}