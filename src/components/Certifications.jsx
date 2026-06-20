import React, { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      name: 'Data Structures & Algorithms',
      issuer: 'Certification Program',
      year: '2025',
      logo: 'fa-solid fa-code-branch',
      color: '#F59E0B',
      pdf: '/data/DSA.pdf',
      tags: ['DSA', 'Problem Solving', 'Algorithms']
    },
    {
      name: 'JavaScript Programming',
      issuer: 'Certification Program',
      year: '2025',
      logo: 'fa-brands fa-js',
      color: '#F7DF1E',
      pdf: '/data/JS.pdf',
      tags: ['JavaScript', 'Web Dev', 'ES6+']
    },
    {
      name: 'Python Programming',
      issuer: 'Certification Program',
      year: '2025',
      logo: 'fa-brands fa-python',
      color: '#3B82F6',
      pdf: '/data/PY.pdf',
      tags: ['Python', 'OOP', 'Scripting']
    },
    {
      name: 'React Development',
      issuer: 'Certification Program',
      year: '2025',
      logo: 'fa-brands fa-react',
      color: '#61DAFB',
      pdf: '/data/REACT.pdf',
      tags: ['React', 'Frontend', 'Hooks']
    },
    {
      name: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (Forage)',
      year: '2025',
      logo: 'fa-solid fa-chart-bar',
      color: '#86BC25',
      pdf: '/data/deloitte-analytics.pdf',
      tags: ['Data Analytics', 'Deloitte', 'Forage']
    },
    {
      name: 'Data Visualisation Job Simulation',
      issuer: 'Tata Group (Forage)',
      year: '2025',
      logo: 'fa-solid fa-chart-pie',
      color: '#0066CC',
      pdf: '/data/tata-visualization.pdf',
      tags: ['Data Visualization', 'Tata', 'Forage']
    },
  ];

  return (
    <section id="certifications" className="section reveal">
      <div className="section-header">
        <span className="subtitle">Credentials</span>
        <h2 className="section-title">Certifications</h2>
        <div className="title-underline"></div>
      </div>

      <div className="certs-grid">
        {certs.map((cert, index) => (
          <a
            key={index}
            href={cert.pdf}
            target="_blank"
            rel="noopener noreferrer"
            className="cert-card flat-card"
          >
            {/* Logo box */}
            <div className="cert-logo-box" style={{ background: cert.color + '22', borderColor: cert.color + '55' }}>
              <i className={cert.logo} style={{ color: cert.color }}></i>
            </div>

            <div className="cert-info">
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <div className="cert-tags">
                {cert.tags.map((tag, i) => <span key={i}>{tag}</span>)}
              </div>
            </div>

            <div className="cert-view-btn">
              <i className="fa-solid fa-file-pdf"></i> View PDF
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
