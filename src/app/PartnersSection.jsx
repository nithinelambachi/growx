'use client';
export default function PartnersSection() {
  const partners = [
    {
      id: 1,
      src: '/images/img_group_1000005849.svg',
      alt: 'Partner 1',
      width: 166,
      height: 40
    },
    {
      id: 2,
      src: '/images/img_group_77.svg',
      alt: 'Partner 2',
      width: 196,
      height: 44
    },
    {
      id: 3,
      src: '/images/img_group_78.svg',
      alt: 'Partner 3',
      width: 180,
      height: 44
    },
    {
      id: 4,
      src: '/images/img_group_1000005850.svg',
      alt: 'Partner 4',
      width: 164,
      height: 40
    },
    {
      id: 5,
      src: '/images/img_group_1000005851.svg',
      alt: 'Partner 5',
      width: 152,
      height: 20
    }
  ]

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="partners-grid">
          {partners?.map((partner) => (
            <div key={partner?.id} className="partner-item">
              <img 
                src={partner?.src} 
                alt={partner?.alt} 
                className="partner-image"
                style={{ 
                  maxWidth: `${partner?.width}px`,
                  height: `${Math.min(partner?.height, 40)}px`
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}