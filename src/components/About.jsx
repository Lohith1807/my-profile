import React from 'react';

const About = () => {
  const details = [
    { label: 'Name', value: 'K Lohith', icon: 'fa-solid fa-user' },
    { label: 'Email', value: 'lohithreddy1819@gmail.com', icon: 'fa-solid fa-envelope' },
    { label: 'Phone', value: '+91 8309953012', icon: 'fa-solid fa-phone' },
    { label: 'University', value: 'The Apollo University', icon: 'fa-solid fa-building-columns' },
    { label: 'Degree', value: 'B.Tech — CSE', icon: 'fa-solid fa-graduation-cap' },
    { label: 'Year / Sem', value: '3rd Year / 5th Semester', icon: 'fa-solid fa-calendar-days' },
    { label: 'Status', value: 'Currently Pursuing', icon: 'fa-solid fa-circle-dot' },
    { label: 'Location', value: 'Andhra Pradesh, India', icon: 'fa-solid fa-location-dot' },
  ];

  return (
    <section id="about" className="section reveal">
      <div className="section-header">
        <span className="subtitle">Who I Am</span>
        <h2 className="section-title">About Me</h2>
        <div className="title-underline"></div>
      </div>

      <div className="about-grid">
        {/* Left: Text intro */}
        <div className="about-text">
          <h3 className="about-greeting">Hello! I'm <span style={{ color: 'var(--rh-red)' }}>K Lohith</span> 👋</h3>
          <p>
            A passionate <strong>Full Stack Developer</strong> and Computer Science &amp; Engineering student at <strong>The Apollo University</strong>. I specialize in building dynamic, scalable web applications from the ground up — handling everything from UI design to database architecture.
          </p>
          <p>
            Currently in my <strong>5th Semester</strong>, I am sharpening my skills in modern web technologies like <strong>React, Node.js, MongoDB</strong>, and cloud deployment. I have hands-on experience from a 3-month internship at <strong>DB4 Cloud Technologies</strong> where I contributed to full stack development projects.
          </p>
          <p>
            Beyond coding, I love solving DSA problems, building automation tools, and exploring new technologies. I am always open to collaborations, internships, and exciting developer opportunities!
          </p>

          <div className="about-actions">
            <a href="/data/Resume.pdf" target="_blank" rel="noopener noreferrer" className="hero-btn btn-primary">
              <i className="fa-solid fa-file-arrow-down"></i> Download Resume
            </a>
            <a href="https://www.linkedin.com/in/k-lohith-029353341/" target="_blank" rel="noopener noreferrer" className="hero-btn btn-secondary">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
          </div>
        </div>

        {/* Right: Info cards */}
        <div className="about-info-grid">
          {details.map((item, idx) => (
            <div key={idx} className="about-info-card flat-card">
              <i className={item.icon} style={{ color: 'var(--rh-red)', marginRight: '0.6rem' }}></i>
              <div>
                <span className="about-info-label">{item.label}</span>
                <span className="about-info-value">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
