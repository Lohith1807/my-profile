import React from 'react';

const Contact = () => {
  const socials = [
    {
      name: 'Gmail',
      icon: 'fa-solid fa-envelope',
      link: 'mailto:lohithreddy1819@gmail.com',
      color: '#EA4335'
    },
    {
      name: 'Outlook',
      icon: 'fa-brands fa-microsoft',
      link: 'mailto:lohithreddy1819@outlook.com',
      color: '#0078D4'
    },
    {
      name: 'LinkedIn',
      icon: 'fa-brands fa-linkedin',
      link: 'https://www.linkedin.com/in/k-lohith-029353341/',
      color: '#0A66C2'
    },
    {
      name: 'WhatsApp',
      icon: 'fa-brands fa-whatsapp',
      link: 'https://wa.me/918309953012',
      color: '#25D366'
    },
    {
      name: 'Instagram',
      icon: 'fa-brands fa-instagram',
      link: 'https://instagram.com/lohith_.reddyy',
      color: '#E1306C'
    }
  ];

  return (
    <section id="contact" className="section reveal">
      <div className="section-header">
        <span className="subtitle">Connect With Me</span>
        <h2 className="section-title">Get In Touch</h2>
        <div className="title-underline"></div>
      </div>
      
      <div style={{ textAlign: 'center', marginBottom: '3rem', maxWidth: '700px', margin: '0 auto 3rem auto' }}>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.6' }}>
          I would love to connect for project discussions, developer internships, or technical collaborations. Feel free to reach out to me directly on any of the platforms below!
        </p>
      </div>
      
      <div className="social-links-grid">
        {socials.map((social, index) => (
          <a key={index} href={social.link} target="_blank" rel="noopener noreferrer" className="social-box flat-card">
            <div className="social-icon" style={{ color: social.color }}>
              <i className={social.icon}></i>
            </div>
            <span className="social-name">{social.name}</span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;

