'use client';
import Button from'../components/ui/Button';

export default function PricingSection() {
  const plans = [
    {
      id: 1,
      name: 'Starter Plan',
      price: '$29',
      period: '/ month',
      icon: '/images/img_pricing_1_1.png',
      description: 'Lorem Ipsum is simply dummy.',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric Startup'
      ],
      buttonText: 'Take My Plan',
      isPopular: false
    },
    {
      id: 2,
      name: 'Platinum Plan',
      price: '$39',
      period: '/ month',
      icon: '/images/img_pricing_1_1_46x44.png',
      description: 'Lorem Ipsum is simply dummy.',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric Startup'
      ],
      buttonText: 'Take My Plan',
      isPopular: true
    },
    {
      id: 3,
      name: 'Gold Plan',
      price: '$59',
      period: '/ month',
      icon: '/images/img_pricing_3_1.png',
      description: 'Lorem Ipsum is simply dummy.',
      features: [
        'Mistakes To Avoid',
        'Your Startup',
        'Knew About Fonts',
        'Winning Metric Startup'
      ],
      buttonText: 'Take My Plan',
      isPopular: false
    }
  ]

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-content">
          <div className="pricing-header">
            <span className="pricing-subtitle">
              Our Pricing
            </span>
            <h2 className="pricing-title">
              Harness The Power Of Digital Marketing
            </h2>
          </div>

          <div className="pricing-grid">
            {plans.map((plan) => (
              <div 
                key={plan.id} 
                className={`pricing-card ${plan.isPopular ? 'popular' : ''}`}
              >
                <div className="pricing-card-header">
                  <div className="pricing-card-top">
                    <div className="pricing-card-info">
                      <h3 className="pricing-card-name">
                        {plan.name}
                      </h3>
                      <div className="pricing-card-price-container">
                        <span className="pricing-card-price">
                          {plan.price}
                        </span>
                        <span className="pricing-card-period">
                          {plan.period}
                        </span>
                      </div>
                    </div>
                    
                    <div className={`pricing-card-icon-container ${plan.isPopular ? 'popular' : ''}`}>
                      <img 
                        src={plan.icon} 
                        alt={`${plan.name} icon`} 
                        className="pricing-card-icon"
                      />
                    </div>
                  </div>

                  <div className="pricing-card-features">
                    <p className="pricing-card-description">
                      {plan.description}
                    </p>
                    <div className="pricing-card-feature-list">
                      {plan.features.map((feature, index) => (
                        <div key={index}>• {feature}</div>
                      ))}
                    </div>
                  </div>
                </div>

                <Button
                  text={plan.buttonText}
                  className="pricing-card-button"
                  effect_box_shadow="none"
                  border_border="1px solid"
                  layout_width="100%"
                  padding="12px 34px"
                  position="static"
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