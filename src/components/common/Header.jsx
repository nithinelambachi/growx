'use client';
import { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="logo-section">
            <div className="logo-container">
              <div>
               <img src='./images/Starsheader.png'/>

              </div>
              <h1 className="logo-text">
                GrowX
              </h1>
            </div>
            <button 
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <svg className="mobile-menu-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className={`navigation ${menuOpen ? 'block' : 'hidden'}`}>
            <div className="navigation-menu">
              <button 
                className="nav-button active"
                role="menuitem"
              >
                Home
              </button>
              <button 
                className="nav-button"
                role="menuitem"
              >
                About
              </button>
              <button 
                className="nav-button"
                role="menuitem"
              >
                Service
              </button>
              <button 
                className="nav-button"
                role="menuitem"
              >
                Page
              </button>
            </div>
          </nav>
               <Button
                text="Contact"
                className="contacthidden-button"
                onClick={() => {}}
              />
        </div>
      </div>
    </header>
  )
}

export default Header