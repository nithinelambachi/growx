'use client';
import Button from'../components/ui/Button';

export default function ServicesSection() {
  const services = [
    {
      id: 1,
      icon: '/images/img_search.svg',
      title: 'SEO (Search Engine Optimization)',
      description: 'We can help you achieve high rankings in the major search engines.',
      decorativeIcon: '/images/img_frame_1000006389.svg'
    },
    {
      id: 2,
      icon: '/images/img_vector_deep_orange_600.png',
      title: 'SMM (Social Media Marketing)',
      description: 'We can help you achieve high rankings in the major search engines.',
      decorativeIcon: '/images/img_frame_1000006389.svg'
    },
    {
      id: 3,
      icon: '/images/img_65bf0a62c82767caefd87d6b_icon.svg',
      title: 'Website Design & Development',
      description: 'We can help you achieve high rankings in the major search engines.',
      decorativeIcon: '/images/img_frame_1000006389.svg'
    },
    {
      id: 4,
      icon: '/images/img_vector_deep_orange_600_28x38.svg',
      title: 'Email Marketing & PPC Marketing',
      description: 'We can help you achieve high rankings in the major search engines.',
      decorativeIcon: '/images/img_frame_1000006389.svg'
    }
  ]

  return (
    <section className="services-section">
      <div className="services-container">
        <div className="services-content">
          <div className="services-header">
            <div className="services-title-container">
              <h2 className="services-title">
                Our Digital Marketing Services
              </h2>
              <p className="services-subtitle">
                Unveiling Comprehensive Solutions Through Our Cutting-Edge Digital Marketing Services
              </p>
            </div>
            
            <Button
              text="VIEW ALL SERVICES"
              className="services-button"
            />
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <div key={service.id} className="service-item">
                <div className="service-card">
                  <div className="service-icon-container">
                    <img 
                      src={service.icon} 
                      alt={`${service.title} icon`} 
                      className="service-icon"
                    />
                  </div>

                  <div className="service-content">
                    <h3 className="service-title">
                      {service.title}
                    </h3>
                    <p className="service-description">
                      {service.description}
                    </p>
                  </div>
                </div>

                <img 
                  src={service.decorativeIcon} 
                  alt="Decorative icon" 
                  className="service-decorative-icon"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}