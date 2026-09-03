import React, { useState } from 'react';
import { User, ShoppingBag, Menu, X } from 'lucide-react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="nav-logo">noise</div>
      
      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#product" onClick={() => setIsOpen(false)}>PRODUCT</a></li>
        <li><a href="#gift" onClick={() => setIsOpen(false)}>GIFT STORE</a></li>
        <li><a href="#support" onClick={() => setIsOpen(false)}>SUPPORT</a></li>
        <li><a href="#blogs" onClick={() => setIsOpen(false)}>BLOGS</a></li>
      </ul>

      <div className="nav-actions">
        <button className="icon-btn" aria-label="User account">
          <User size={20} />
        </button>
        <button className="icon-btn cart-btn" aria-label="Cart">
          <ShoppingBag size={20} />
          <span className="cart-badge">1</span>
        </button>
        
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle Menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
}