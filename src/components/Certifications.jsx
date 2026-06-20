import React, { useState } from 'react';

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  const certs = [
    {
      name: 'Data Structures & Algorithms',
      issuer: 'Certification Program',
      year: '2025',
      icon: 'fa-solid fa-code-branch',
      color: '#F59E0B',
      pdf: '/data/DSA.pdf',
      tags: ['DSA', 'Problem Solving', 'Algorithms']
    },
    {
      name: 'JavaScript Programming',
      issuer: 'Certification Program',
      year: '2025',
      icon: 'fa-brands fa-js',
      color: '#F7DF1E',
      pdf: '/data/JS.pdf',
      tags: ['JavaScript', 'Web Dev', 'ES6+']
    },
    {
      name: 'Python Programming',
      issuer: 'Certification Program',
      year: '2025',
      icon: 'fa-brands fa-python',
      color: '#3B82F6',
      pdf: '/data/PY.pdf',
      tags: ['Python', 'OOP', 'Scripting']
    },
    {
      name: 'React Development',
      issuer: 'Certification Program',
      year: '2025',
      icon: 'fa-brands fa-react',
      color: '#61DAFB',
      pdf: '/data/REACT.pdf',
      tags: ['React', 'Frontend', 'Hooks']
    },
    {
      name: 'Data Analytics Job Simulation',
      issuer: 'Deloitte (Forage)',
      year: '2025',
      icon: 'fa-solid fa-chart-bar',
      color: '#10B981',
      pdf: '/data/deloitte-analytics.pdf',
      tags: ['Data Analytics', 'Deloitte', 'Forage']
    },
    {
      name: 'Data Visualisation Job Simulation',
      issuer: 'Tata Group (Forage)',
      year: '2025',
      icon: 'fa-solid fa-chart-pie',
      color: '#8B5CF6',
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

      <div className="projects-grid">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="project-card flat-card interactive-card"
            onClick={() => setSelectedCert(cert)}
          >
            <div className="project-icon-box" style={{ color: cert.color, borderColor: cert.color + '44', background: cert.color + '18' }}>
              <i className={cert.icon}></i>
            </div>
            <h3 className="project-name">{cert.name}</h3>
            <h4 style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.8rem' }}>
              {cert.issuer} &mdash; {cert.year}
            </h4>
            <div className="project-tags">
              {cert.tags.map((tag, i) => <span key={i}>{tag}</span>)}
            </div>
            <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--rh-red)' }}>
              <i className="fa-solid fa-eye" style={{ marginRight: '5px' }}></i> Click to view certificate
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Modal */}
      {selectedCert && (
        <div className="project-modal-overlay" onClick={() => setSelectedCert(null)}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={() => setSelectedCert(null)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-icon-box" style={{ color: selectedCert.color, borderColor: selectedCert.color + '44', background: selectedCert.color + '18' }}>
              <i className={selectedCert.icon}></i>
            </div>
            <h2 className="modal-project-name">{selectedCert.name}</h2>
            <div className="modal-tags">
              {selectedCert.tags.map((tag, idx) => (
                <span key={idx} className="modal-tag">{tag}</span>
              ))}
            </div>
            <p className="modal-project-desc">
              <strong>Issuer:</strong> {selectedCert.issuer}<br />
              <strong>Year:</strong> {selectedCert.year}
            </p>
            <div className="modal-action-links">
              <a href={selectedCert.pdf} target="_blank" rel="noopener noreferrer" className="hero-btn btn-primary">
                <i className="fa-solid fa-file-pdf"></i> View Certificate PDF
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;
