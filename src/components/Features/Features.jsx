import React from 'react';
import { motion } from 'framer-motion';
import { BatteryCharging, Mic, ShieldCheck } from 'lucide-react';
import './Features.css';

import hero1Img from '../../assets/hero1.png';
import feature1Img from '../../assets/feature1.png';

// Stagger animation for text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.12, delayChildren: 0.1 } 
  }
};

// Text slide & drop-down animation
const textItemVariants = {
  hidden: { opacity: 0, y: -25 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } 
  }
};

// Image entrance animation
const imageVariants = {
  hidden: { opacity: 0, y: -45, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
  }
};

export default function Features() {
  return (
    <section className="features-section">
      <div className="features-grid">
        
        {/* ================= SECTION 1 ================= */}
        {/* TOP LEFT: Airbuds Case with Glow */}
        <motion.div 
          className="feature-media"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Re-animates every time you scroll here
          variants={imageVariants}
        >
          <div className="soft-mint-glow" />
          <motion.img 
            src={hero1Img} 
            alt="Airbuds Case" 
            className="product-img"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* TOP RIGHT: Playtime Feature */}
        <motion.div 
          className="feature-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Re-animates every time you scroll here
          variants={containerVariants}
        >
          <motion.div className="feature-header-inline" variants={textItemVariants}>
            <BatteryCharging size={28} className="feature-icon" />
            <h3 className="feature-title">Up to 50 hours of playtime</h3>
          </motion.div>
          <motion.h4 className="feature-subtitle" variants={textItemVariants}>
            No Break Needed
          </motion.h4>
          <motion.p className="feature-desc" variants={textItemVariants}>
            Answer your call to endless entertainment with a massive playtime that's further supported by Instacharge™. Get hours of uninterrupted playback with just a quick 10-minute charge, keeping your beats powered all day and night without missing a single rhythm.
          </motion.p>
        </motion.div>

        {/* ================= SECTION 2 ================= */}
        {/* BOTTOM LEFT: Mic / Bluetooth */}
        <motion.div 
          className="feature-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Re-animates every time you scroll here
          variants={containerVariants}
        >
          <motion.div className="feature-header-inline" variants={textItemVariants}>
            <Mic size={28} className="feature-icon" />
            <h3 className="feature-title">Communicate Clearly</h3>
          </motion.div>
          <motion.h4 className="feature-subtitle" variants={textItemVariants}>
            Bluetooth Version 5.2
          </motion.h4>
          <motion.p className="feature-desc" variants={textItemVariants}>
            The busiest surroundings have got nothing on your conversations as the quad mic with Environmental Noise Cancellation takes care of the commotion around. Enjoy ultra-low latency audio syncing, crystal-clear voice clarity during calls, and flawless wireless stability everywhere.
          </motion.p>
        </motion.div>

        {/* BOTTOM RIGHT: Earbuds Floating Pair */}
        <motion.div 
          className="feature-media"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Re-animates every time you scroll here
          variants={imageVariants}
        >
          <div className="soft-mint-glow" />
          <motion.img 
            src={feature1Img} 
            alt="Earbuds Pair" 
            className="product-img floating-buds"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
        </motion.div>

        {/* ================= SECTION 3 ================= */}
        {/* FEATURE 3 LEFT: Water Resistance Image */}
        <motion.div 
          className="feature-media"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Re-animates every time you scroll here
          variants={imageVariants}
        >
          <div className="soft-mint-glow" />
          <motion.img 
            src={hero1Img} 
            alt="Water Resistant Earbuds" 
            className="product-img"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          />
        </motion.div>

        {/* FEATURE 3 RIGHT: Water Resistance Text */}
        <motion.div 
          className="feature-text"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }} // Re-animates every time you scroll here
          variants={containerVariants}
        >
          <motion.div className="feature-header-inline" variants={textItemVariants}>
            <ShieldCheck size={28} className="feature-icon" />
            <h3 className="feature-title">IPX5 Water Resistance</h3>
          </motion.div>
          <motion.h4 className="feature-subtitle" variants={textItemVariants}>
            Built For The Splash
          </motion.h4>
          <motion.p className="feature-desc" variants={textItemVariants}>
            Made for living in the moment, your buds are fully protected against sweat, sudden rain, and accidental splashes. Whether you are pushing through an intense gym session or running outdoors, keep the music pumping without worry.
          </motion.p>
        </motion.div>

      </div>
    </section>
  );
}