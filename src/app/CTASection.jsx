'use client';
import Button from '../components/ui/Button';

export default function CTASection() {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          {/* Left Content */}
          <div className="cta-left">
            <h2 className="cta-title">
              Are you ready to take your company revenue next level?
            </h2>
            
            <Button
              text="Contact Us"
              className="cta-button"
              effect_box_shadow=""
              border_border=""
              layout_width="auto"
              padding="px-7 py-3"
              position="static"
              margin=""
              variant="primary"
              size="medium"
              onClick={() => {}}
            />
          </div>

          {/* Right Content - Illustration */}
          <div className="cta-right">
            <img 
              src="/images/img_group_1000005858.png" 
              alt="Growth illustration" 
              className="cta-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}