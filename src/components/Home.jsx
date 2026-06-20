import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaJava } from 'react-icons/fa';
import { SiC, SiMongodb, SiMysql } from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const Home = ({ landingZoneRef }) => {
  const [typingText, setTypingText] = useState('');
  
  const words = [
    "Computer Science & Engineering Student",
    "Full Stack Developer"
  ];

  useEffect(() => {
    let wordIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId;
    
    const typeEffect = () => {
      const currentWord = words[wordIdx];
      
      if (isDeleting) {
        charIdx--;
      } else {
        charIdx++;
      }
      
      setTypingText(currentWord.substring(0, charIdx));
      
      let speed = isDeleting ? 40 : 80;
      
      if (!isDeleting && charIdx === currentWord.length) {
        speed = 2000; // pause on full word
        isDeleting = true;
      } else if (isDeleting && charIdx === 0) {
        isDeleting = false;
        wordIdx = (wordIdx + 1) % words.length;
        speed = 600; // pause before next word
      }
      
      timeoutId = setTimeout(typeEffect, speed);
    };
    
    typeEffect();
    return () => clearTimeout(timeoutId);
  }, []);

  const innerSkills = [
    { name: 'React', Icon: FaReact, color: '#61DAFB', angle: '0deg' },
    { name: 'Node.js', Icon: FaNodeJs, color: '#339933', angle: '90deg' },
    { name: 'Python', Icon: FaPython, color: '#3776AB', angle: '180deg' },
    { name: 'Java', Icon: FaJava, color: '#f89820', angle: '270deg' }
  ];

  const outerSkills = [
    { name: 'HTML5', Icon: FaHtml5, color: '#E34F26', angle: '0deg' },
    { name: 'CSS3', Icon: FaCss3Alt, color: '#1572B6', angle: '51.4deg' },
    { name: 'C', Icon: SiC, color: '#A8B9CC', angle: '102.8deg' },
    { name: 'MongoDB', Icon: SiMongodb, color: '#47A248', angle: '154.2deg' },
    { name: 'MySQL', Icon: SiMysql, color: '#4479A1', angle: '205.7deg' },
    { name: 'Git', Icon: FaGitAlt, color: '#F05032', angle: '257.1deg' },
    { name: 'VS Code', Icon: VscVscode, color: '#007ACC', angle: '308.5deg' }
  ];

  return (
    <section id="home" className="section hero-section">
      <div className="hero-grid">
        <div className="hero-content">
          <div className="welcome-tag">Welcome to my space</div>
          <h1 className="hero-title">K Lohith</h1>
          <h2 className="hero-subtitle">I'm a <span>{typingText}</span></h2>
          <p className="hero-desc">
            A passionate Full Stack Developer and Computer Science & Engineering student at The Apollo University. Currently in my 5th semester, I specialize in building dynamic web applications, solving complex problems, and creating clean, scalable digital solutions.
          </p>
          
          <div className="hero-actions">
            <a href="https://www.linkedin.com/in/k-lohith-029353341/" target="_blank" rel="noopener noreferrer" className="hero-btn btn-primary">
              <i className="fa-brands fa-linkedin"></i> LinkedIn
            </a>
            <a href="https://github.com/Lohith1807" target="_blank" rel="noopener noreferrer" className="hero-btn btn-secondary">
              <i className="fa-brands fa-github"></i> GitHub
            </a>
          </div>

          <div className="info-cards-container">
            {/* Education Details */}
            <div className="info-card flat-card">
              <div className="info-card-header">
                <i className="fa-solid fa-graduation-cap icon-cyan"></i>
                <h3>Education</h3>
              </div>
              <div className="info-card-body">
                <p className="school-name">The Apollo University</p>
                <p className="degree">B.Tech in Computer Science & Engineering</p>
                <p className="semester">Currently Pursuing — 3rd Year / 5th Semester</p>
              </div>
            </div>
            
            {/* Strengths */}
            <div className="info-card flat-card">
              <div className="info-card-header">
                <i className="fa-solid fa-star icon-cyan"></i>
                <h3>Strengths</h3>
              </div>
              <div className="info-card-body">
                <ul className="strengths-list">
                  <li><i className="fa-solid fa-circle-check"></i> Fast learner and dedicated problem solver</li>
                  <li><i className="fa-solid fa-circle-check"></i> Strong foundation in key programming languages</li>
                  <li><i className="fa-solid fa-circle-check"></i> Enthusiastic about building small, scalable projects</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="orbit-container modern-orbit">
            {/* Profile Landing Zone Ref passed from parent */}
            <div id="profile-landing-zone" ref={landingZoneRef} className="glow-effect"></div>
            
            {/* Inner Rotating Ring */}
            <div className="orbit-ring inner-ring">
              {innerSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="orbit-icon" 
                  style={{ '--angle': skill.angle }}
                >
                  <div className="orbit-icon-inner glass-icon" data-skill={skill.name}>
                    <skill.Icon color={skill.color} size={24} />
                  </div>
                </div>
              ))}
            </div>

            {/* Outer Rotating Ring */}
            <div className="orbit-ring outer-ring">
              {outerSkills.map((skill, index) => (
                <div 
                  key={index}
                  className="orbit-icon" 
                  style={{ '--angle': skill.angle }}
                >
                  <div className="orbit-icon-inner glass-icon" data-skill={skill.name}>
                    <skill.Icon color={skill.color} size={24} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
