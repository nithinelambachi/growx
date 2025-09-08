'use client';
import { useState, useEffect } from 'react';
import Button from '../components/ui/Button';

export default function HeroSection() {
  const [scrollText, setScrollText] = useState('');

  useEffect(() => {
    setScrollText('Scroll Down');
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background-line" />
      
      <div className="hero-container">
        <div className="hero-content">
          
          <div className="hero-left">
            <div className="hero-icon-container">
              <img 
                src="/images/img_frame_1000006388.svg" 
                alt="Decorative icon" 
                className="hero-icon"
              />
            </div>

            <div className="hero-main-content">
              <div className="hero-text-container">
                <h1 className="hero-title">
                  <span className="hero-title-primary">Unlock Your </span>
                  <span className="hero-title-brand">Online Marketing</span>
                </h1>
                
                <p className="hero-description">
                  Empowering Success: Unleashing Strategic Excellence with Our Results-Driven Digital Marketing Agency
                </p>
              </div>
              <Button
                text="GET IN TOUCH"
                size="medium"
                className="hero-button"
                onClick={() => {}}
              />
            </div>
          </div>

          <div className="hero-right">
            <div className="hero-image-container">
              <div className="hero-image-wrapper">
                    <div className="hero-main-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}