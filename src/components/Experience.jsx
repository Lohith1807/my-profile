import React from 'react';

const Experience = () => {
  const milestones = [
    {
      date: '06-05-2026 — 06-08-2026',
      title: 'Full Stack Developer Intern',
      institution: 'DB4 Cloud Technologies',
      desc: 'Completed a comprehensive 3-month internship focusing on full stack web development. Contributed to building and scaling web applications, managing database integrations, and refining modern UI/UX workflows.',
      align: 'left'
    }
  ];

  return (
    <section id="experience" className="section reveal">
      <div className="section-header">
        <span className="subtitle">Career</span>
        <h2 className="section-title">Experience</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="projects-grid">
        {milestones.map((item, index) => (
          <div key={index} className="project-card flat-card">
            <div className="project-icon-box">
              <i className="fa-solid fa-briefcase"></i>
            </div>
            <h3 className="project-name">{item.title}</h3>
            <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>{item.institution}</h4>
            <p className="project-desc">{item.desc}</p>
            <div className="project-tags">
              <span><i className="fa-regular fa-calendar" style={{ marginRight: '5px' }}></i>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
