'use client';
export default function AwardsSection() {
  const achievements = [
    {
      id: 1,
      number: '#1',
      description: 'top leader in worlwide SaaS industry'
    },
    {
      id: 2,
      number: '12',
      description: 'years of experience in the business'
    },
    {
      id: 3,
      number: '14',
      description: 'top leader in worlwide SaaS industry'
    },
    {
      id: 4,
      number: '4.9/5',
      description: 'average rating review score'
    }
  ]

  return (
    <section className="awards-section">
      <div className="awards-container">
        <div className="awards-card">
          <div className="awards-content">
            <div className="awards-left">
              <h2 className="awards-title">
                An award-winning media intelligence solution
              </h2>
              <p className="awards-subtitle">
                Confirmed as a high-performing product by customers and tech experts in various industries.
              </p>
            </div>

            <div className="awards-right">
              <div className="awards-row">
                <div className="awards-item">
                  <h3 className="awards-number">
                    {achievements?.[0]?.number}
                  </h3>
                  <p className="awards-description limited-width">
                    {achievements?.[0]?.description}
                  </p>
                </div>
                <div className="awards-item">
                  <h3 className="awards-number">
                    {achievements?.[1]?.number}
                  </h3>
                  <p className="awards-description">
                    {achievements?.[1]?.description}
                  </p>
                </div>
              </div>

              <div className="awards-row">
                <div className="awards-item">
                  <h3 className="awards-number">
                    {achievements?.[2]?.number}
                  </h3>
                  <p className="awards-description limited-width">
                    {achievements?.[2]?.description}
                  </p>
                </div>
                <div className="awards-item">
                  <h3 className="awards-number">
                    {achievements?.[3]?.number}
                  </h3>
                  <p className="awards-description">
                    {achievements?.[3]?.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}