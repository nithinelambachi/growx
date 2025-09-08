'use client';
import Button from '../components/ui/Button';

export default function StorySection() {
  return (
    <section className="story-section">
      <div className="story-container">
        <div className="story-content">
          <div className="story-header">
            <h2 className="story-title">
              GrowX Story
            </h2>
            <p className="story-subtitle">
              Crafting Narratives, Igniting Impact: The Art of Amplifying Your Story with Purposeful Creativity
            </p>
          </div>

          <div className="story-main-content">
            <div className="story-left">
              <p className="story-description">
                GrowX Company, a dynamic force in the marketing landscape, was born from the vision of industry pioneers dedicated to redefining brand narratives. Established in 2010, GrowX swiftly evolved into a trailblazing marketing powerhouse, specializing in strategic amplification of brands across diverse platforms. With a client-centric approach, the company has cultivated lasting partnerships by seamlessly blending creativity with data-driven insights.
              </p>
              
              <Button
                text="WATCH MORE"
                className="story-button"
                onClick={() => {}}
                variant="primary"
                size="medium"
                effect_box_shadow=""
                border_border=""
                layout_width="auto"
                padding="px-7 py-3"
                position="static"
                margin=""
              />
            </div>

            <div className="story-right">
              <div className="story-video-container">
                <img 
                  src="/images/img_image_12.png" 
                  alt="GrowX team story" 
                  className="story-video-image"
                />
                
                <div className="story-play-overlay">
                  <div className="story-play-button">
                    <img 
                      src="/images/img_polygon_1.svg" 
                      alt="Play video" 
                      className="story-play-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}