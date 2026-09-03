import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Sparkles, ShoppingBag, Grid } from 'lucide-react';
import './ExploreMore.css';

import hero1Img from '../../assets/hero1.png';
import feature1Img from '../../assets/feature1.png';

const categories = ["All Products", "Active Noise Cancelling", "Gaming Series", "Ultra Bass"];

const productsData = [
  {
    id: 1,
    name: "Noise Buds Prime",
    tagline: "Studio quality audio with dual equalizer.",
    price: "$59.99",
    category: "Active Noise Cancelling",
    image: hero1Img,
    badge: "NEW LAUNCH",
    specs: ["Dual EQ", "40H Battery", "Touch Control"],
    themeColor: "rgba(180, 140, 90, 0.45)",
    accentColor: "#b48c5a",
    hueFilter: "hue-rotate(220deg) saturate(1.1) brightness(0.95)",
  },
  {
    id: 2,
    name: "Noise Air Buds Pro 3",
    tagline: "Silence the Chaos. Hear the Future.",
    price: "$79.99",
    category: "Active Noise Cancelling",
    image: hero1Img,
    badge: "FLAGSHIP",
    specs: ["42dB ANC", "InstaCharge™", "Quad Mic"],
    themeColor: "rgba(62, 125, 105, 0.45)",
    accentColor: "#3e7d69",
    hueFilter: "none",
  },
   {
    id: 3,
    name: "Noise Air Buds Aero",
    tagline: "Featherlight ergonomic fit with crystal clarity.",
    price: "$29.99",
    category: "Ultra Bass",
    image: feature1Img,
    badge: "LIGHTWEIGHT",
    specs: ["3.5g Featherlight", "Bluetooth 5.3", "Auto Pair"],
    themeColor: "rgba(201, 241, 139, 0.45)",
    accentColor: "#029cda",
    // Converts cyan feature1Img to vibrant lime green
hueFilter: "hue-rotate(70deg) saturate(3) brightness(1.1)",  },
 
  {
    id: 4,
    name: "Noise Buds VS102 Max",
    tagline: "13mm Drivers engineered for deep bass boost.",
    price: "$39.99",
    category: "Ultra Bass",
    image: hero1Img,
    badge: "BESTSELLER",
    specs: ["13mm Driver", "50H Playtime", "IPX5 Water"],
    themeColor: "rgba(247, 85, 198, 0.45)",
    accentColor: "#a855f7",
    hueFilter: "hue-rotate(100deg) saturate(1.8)",
  },
 {
    id: 5,
    name: "Noise Buds Combat X",
    tagline: "Ultra-low 38ms latency for competitive gaming.",
    price: "$49.99",
    category: "Gaming Series",
    image: feature1Img,
    badge: "GAMING",
    specs: ["38ms Latency", "RGB Ambient", "Dual Mode"],
    themeColor: "rgba(39, 39, 42, 0.35)",
    accentColor: "#18181b",
    hueFilter: "grayscale(100%) brightness(0.3) contrast(1.2)",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.08, delayChildren: 0.1 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: -15 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: "easeOut" } 
  }
};

export default function ExploreMore() {
  const [activeTab, setActiveTab] = useState("All Products");
  const [selectedProductId, setSelectedProductId] = useState(3); // Default to Combat X (Pink)

  const activeHeroProduct = productsData.find(p => p.id === selectedProductId) || productsData[2];
  
  const rightColumnProducts = activeTab === "All Products" 
    ? productsData 
    : productsData.filter(p => p.category === activeTab);

  return (
    <section className="explore-section">
      <div className="explore-container">
        
        {/* Header */}
        <div className="explore-header">
          <div className="header-left">
            <span className="section-pill">
              <Sparkles size={14} /> CURATED COLLECTION
            </span>
            <h2>EXPLORE NEXT-GEN SOUND</h2>
          </div>

          <div className="category-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
                onClick={() => setActiveTab(cat)}
              >
                {cat}
                {activeTab === cat && (
                  <motion.div className="active-indicator" layoutId="activeTab" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Main Grid Layout */}
        <motion.div 
          className="layout-grid-custom"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={containerVariants}
        >
          
          {/* 1. CENTER HERO SPOTLIGHT */}
          <motion.div 
            className="hero-product-card" 
            variants={itemVariants}
            style={{
              borderColor: `${activeHeroProduct.accentColor}35`,
              boxShadow: `0 16px 40px ${activeHeroProduct.accentColor}20`
            }}
          >
            <div 
              className="hero-bg-glow" 
              style={{
                background: `radial-gradient(circle, ${activeHeroProduct.themeColor} 0%, rgba(241, 248, 245, 0) 70%)`
              }}
            />

            <span 
              className="hero-badge"
              style={{ 
                backgroundColor: activeHeroProduct.accentColor,
                boxShadow: `0 4px 12px ${activeHeroProduct.accentColor}40`
              }}
            >
              {activeHeroProduct.badge}
            </span>
            
            <div className="hero-image-wrapper">
              <AnimatePresence mode="wait">
                <motion.img 
                  key={activeHeroProduct.id}
                  src={activeHeroProduct.image} 
                  alt={activeHeroProduct.name}
                  className="hero-img"
                  style={{ filter: activeHeroProduct.hueFilter }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    y: { duration: 3.5, repeat: Infinity, ease: "easeInOut" },
                    default: { duration: 0.3 } 
                  }}
                />
              </AnimatePresence>
            </div>

            <div className="hero-content">
              <div className="hero-specs-row">
                {activeHeroProduct.specs.map((spec, i) => (
                  <span 
                    key={i} 
                    className="spec-pill"
                    style={{ 
                      color: activeHeroProduct.accentColor,
                      backgroundColor: `${activeHeroProduct.accentColor}18` 
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
              
              <h3>{activeHeroProduct.name}</h3>
              <p>{activeHeroProduct.tagline}</p>

              <div className="hero-action-row">
                <span 
                  className="hero-price"
                  style={{ color: activeHeroProduct.accentColor }}
                >
                  {activeHeroProduct.price}
                </span>
                <button 
                  className="btn-hero-buy"
                  style={{ 
                    backgroundColor: activeHeroProduct.accentColor,
                    boxShadow: `0 6px 20px ${activeHeroProduct.accentColor}50`
                  }}
                >
                  Buy Now <ArrowUpRight size={18} />
                </button>
              </div>
            </div>
          </motion.div>

          {/* 2. RIGHT SIDEBAR COLUMN */}
          <div className="right-sidebar-column">
            <div className="right-cards-list">
              {rightColumnProducts.map((item) => {
                const isSelected = item.id === selectedProductId;
                
                return (
                  <motion.div 
                    key={item.id}
                    className={`mini-card ${isSelected ? 'selected-card' : ''}`}
                    style={{
                      borderColor: isSelected ? item.accentColor : '#e1ece7',
                      background: isSelected ? '#fafdfb' : '#ffffff',
                      boxShadow: isSelected ? `0 8px 22px ${item.accentColor}25` : 'none'
                    }}
                    variants={itemVariants}
                    whileHover={{ y: -3, scale: 1.01 }}
                    onClick={() => setSelectedProductId(item.id)}
                  >
                    <div 
                      className="mini-card-glow" 
                      style={{
                        background: `radial-gradient(circle, ${item.themeColor} 0%, rgba(255, 255, 255, 0) 70%)`
                      }}
                    />
                    
                    <div className="mini-image-box">
                      <span 
                        className="mini-badge"
                        style={{ 
                          color: item.accentColor,
                          backgroundColor: `${item.accentColor}18` 
                        }}
                      >
                        {item.badge}
                      </span>
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="mini-img" 
                        style={{ filter: item.hueFilter }}
                      />
                    </div>

                    <div className="mini-details">
                      <h4>{item.name}</h4>
                      <div className="mini-bottom-row">
                        <span 
                          className="mini-price"
                          style={{ color: isSelected ? item.accentColor : '#171d1b' }}
                        >
                          {item.price}
                        </span>
                        <button 
                          className="btn-mini-buy"
                          style={{
                            backgroundColor: item.accentColor,
                            boxShadow: `0 4px 10px ${item.accentColor}40`
                          }}
                        >
                          <ShoppingBag size={14} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* View All Products Button at bottom */}
            <motion.div variants={itemVariants} className="view-more-panel-horizontal">
              <button 
                className="btn-view-more-horizontal"
                style={{ color: activeHeroProduct.accentColor }}
              >
                <Grid size={18} />
                <span>View All Products</span>
              </button>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}