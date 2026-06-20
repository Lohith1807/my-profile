import React, { useState } from 'react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectList = [
    {
      name: 'EMS DBMS',
      desc: 'An Employee Management System with database integration for managing staff, attendance, and organizational data securely.',
      icon: 'fa-solid fa-users-gear',
      tags: ['MERN','Database Management', 'Web App', 'DBMS'],
      link: 'https://github.com/Lohith1807',
      deployLink: 'https://ems-dbms.vercel.app/'
    },
    {
      name: 'Project Review DB',
      desc: 'A comprehensive platform for reviewing and managing projects, complete with user authentication and database storage.',
      icon: 'fa-solid fa-clipboard-check',
      tags: ['MERN','Authentication', 'Database', 'Review System'],
      link: 'https://github.com/Lohith1807',
      deployLink: 'https://project-reviewdb.vercel.app/login'
    },
    {
      name: 'Apollo College & Event Portals',
      desc: 'A dual-platform system featuring a comprehensive college EMS portal (student details, marks, exam scheduling, classroom notifications) paired with an integrated event registration application.',
      icon: 'fa-solid fa-building-columns',
      tags: ['Full Stack', 'Education', 'Event Management'],
      link: 'https://github.com/Lohith1807',
      deployLink: 'https://apollo-demopage.vercel.app/'
    },
    {
      name: 'Telegram Attendance Bot',
      desc: 'A custom Telegram bot designed to automatically track, manage, and retrieve student attendance records seamlessly through a chat interface.',
      icon: 'fa-brands fa-telegram',
      tags: ['Node.js', 'Telegram API', 'Automation', 'Bot'],
      link: 'https://github.com/Lohith1807',
      deployLink: null
    },
    {
      name: 'More on GitHub...',
      desc: 'There are still many more tools, scripts, and experimental applications available on my GitHub profile. Feel free to explore my repositories!',
      icon: 'fa-brands fa-github',
      tags: ['Open Source', 'Experiments', 'Mini Projects'],
      link: 'https://github.com/Lohith1807',
      deployLink: null
    }
  ];

  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="section reveal">
      <div className="section-header">
        <span className="subtitle">Showcase</span>
        <h2 className="section-title">My Projects</h2>
        <div className="title-underline"></div>
      </div>
      
      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card flat-card interactive-card" onClick={() => setSelectedProject(project)}>
            <div className="project-icon-box">
              <i className={project.icon}></i>
            </div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-desc">{project.desc}</p>
            <div className="project-tags">
              {project.tags.map((tag, tIndex) => (
                <span key={tIndex}>{tag}</span>
              ))}
            </div>
            <div className="project-links">
              <span className="btn-link">
                View Details <i className="fa-solid fa-arrow-right"></i>
              </span>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal-btn" onClick={closeModal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            <div className="modal-icon-box">
              <i className={selectedProject.icon}></i>
            </div>
            <h2 className="modal-project-name">{selectedProject.name}</h2>
            <div className="modal-tags">
              {selectedProject.tags.map((tag, idx) => (
                <span key={idx} className="modal-tag">{tag}</span>
              ))}
            </div>
            <p className="modal-project-desc">{selectedProject.desc}</p>
            
            <div className="modal-action-links">
              <a href={selectedProject.link} target="_blank" rel="noopener noreferrer" className="hero-btn btn-secondary">
                <i className="fa-brands fa-github"></i> GitHub
              </a>
              {selectedProject.deployLink && (
                <a href={selectedProject.deployLink} target="_blank" rel="noopener noreferrer" className="hero-btn btn-primary">
                  <i className="fa-solid fa-external-link-alt"></i> Live Demo
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
