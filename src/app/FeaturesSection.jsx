'use client';
import Button from '../components/ui/Button';

export default function FeaturesSection() {
  const features = [
    {
      id: 1,
      title: 'Detailed analytics',
      descriptions: [
        'See the full picture of all your projects in one place and take action immediately.',
        'Our extensive tool will help you maximize the profits and scale your business.'
      ]
    },
    {
      id: 2,
      title: 'Leads sources',
      descriptions: [
        'Discover where all your converted leads are from and take action into the right direction.',
        'Grow your audience using the channel that drives most of traffic.'
      ]
    },
    {
      id: 3,
      title: 'Projects overview',
      descriptions: [
        'Track and manage and manage all projects very easy without back and forth.',
        'Discover who is working on what and see your team members performance.'
      ]
    }
  ]

  return (
    <section className="features-section">
      <div className="features-container">
        <div className="features-content">
          <div className="features-header">
            <span className="features-subtitle">
              Our Feature
            </span>
            <h2 className="features-title">
              Optimizing Brands For Online Success
            </h2>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <div key={feature.id} className="feature-card">
                <div className="feature-content">
                  <h3 className="feature-title">
                    {feature.title}
                  </h3>
                  <div className="feature-descriptions">
                    {feature.descriptions.map((description, index) => (
                      <p key={index} className="feature-description">
                        {description}
                      </p>
                    ))}
                  </div>
                </div>

                <Button
                  text="GET STARTED"
                  className="feature-button"
                  effect_box_shadow="none"
                  border_border="none"
                  layout_width="auto"
                  padding="12px 28px"
                  position="relative"
                  margin="0"
                  variant="primary"
                  size="medium"
                  onClick={() => {}}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}