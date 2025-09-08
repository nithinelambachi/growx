'use client';

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: 'International Authority',
      value: '$4000',
      percentage: '80%',
      progressWidth: '80%'
    },
    {
      id: 2,
      title: 'Real Authority Method',
      value: '12 Month',
      percentage: '60%',
      progressWidth: '60%'
    }
  ]

  return (
    <section className="projects-section">
      <div className="projects-container">
        <div className="projects-content">
          <div className="projects-left">
            <div className="projects-header">
              <span className="projects-subtitle">
                Our Projects
              </span>
              <div className="projects-title-container">
                <h2 className="projects-title">
                  Drive More Traffic Get More Sales
                </h2>
                <p className="projects-description">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac ante sed tincidunt.
                </p>
              </div>
            </div>

            <div className="projects-list">
              {projects.map((project) => (
                <div key={project.id} className="project-item">
                  <div className="progress-container">
                    <div className="progress-background">
                      <div className="progress-bar">
                        <div 
                          className="progress-fill"
                          style={{ '--progress-width': project.progressWidth }}
                        >
                          <div className="progress-indicator">
                            <div className="progress-dot"></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div 
                      className="progress-label progress-indicator-bg"
                      style={{ 
                        '--indicator-left': `calc(${project.progressWidth} - 24px)`
                      }}
                    >
                      <span className="progress-percentage">
                        {project.percentage}
                      </span>
                    </div>
                  </div>

                  <div className="project-details">
                    <h3 className="project-title">
                      {project.title}
                    </h3>
                    <span className="project-value">
                      {project.value}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="projects-right">
            <img 
              src="/images/img_group_1000005857.svg" 
              alt="Traffic and sales growth illustration" 
              className="projects-image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}