import React, { useState, useEffect, useRef } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {
  const [isExploreClicked, setIsExploreClicked] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(false);
  const [isMainContentVisible, setIsMainContentVisible] = useState(false);
  
  const profilePicRef = useRef(null);
  const landingZoneRef = useRef(null);

  // Force scroll to top on mount and dynamic alignment of landing avatar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });

    const updatePosition = () => {
      if (!isExploreClicked) {
        const placeholder = document.getElementById('landing-avatar-placeholder');
        const profileEl = profilePicRef.current;
        if (placeholder && profileEl) {
          const rect = placeholder.getBoundingClientRect();
          profileEl.style.position = 'fixed';
          profileEl.style.top = `${rect.top}px`;
          profileEl.style.left = `${rect.left}px`;
          profileEl.style.width = `${rect.width}px`;
          profileEl.style.height = `${rect.height}px`;
          profileEl.style.transform = 'none';
        }
      }
    };

    // Calculate position immediately and after a short layout delay
    updatePosition();
    const timer = setTimeout(updatePosition, 100);

    window.addEventListener('resize', updatePosition);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', updatePosition);
    };
  }, [isExploreClicked]);

  const handleExplore = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.body.style.overflow = 'hidden';

    const profileEl = profilePicRef.current;
    const zoneEl = landingZoneRef.current;

    if (profileEl && zoneEl) {
      // Step A: Halt landing resize adjustments
      setIsExploreClicked(true);

      // Force layout layout recalculation
      profileEl.offsetHeight;

      // Step B: Measure target landing zone rect coordinates relative to viewport
      const destRect = zoneEl.getBoundingClientRect();

      // Step C: Set target styles (moves the profile picture container)
      profileEl.style.top = `${destRect.top}px`;
      profileEl.style.left = `${destRect.left}px`;
      profileEl.style.width = `${destRect.width}px`;
      profileEl.style.height = `${destRect.height}px`;
      profileEl.style.borderRadius = '4px';
      profileEl.style.borderColor = 'rgba(255, 255, 255, 0.1)';
      profileEl.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';

      // Step D: Smooth navbar & homepage layout fade in
      setTimeout(() => {
        setIsNavbarVisible(true);
        setIsMainContentVisible(true);
        document.body.style.overflow = ''; // restore scrolling
      }, 300);

      // Step E: Listen for transition end to place profile picture inline permanently
      const onTransitionEnd = (e) => {
        if (e.propertyName === 'top' || e.propertyName === 'width') {
          profileEl.removeEventListener('transitionend', onTransitionEnd);
          
          // Nest inside home visual grid zone
          zoneEl.appendChild(profileEl);
          
          // Clear absolute coordinate inline styles and flag static mode styling
          profileEl.classList.add('static-mode');
          profileEl.removeAttribute('style');
          
          // Initialize scroll observer reveals
          initScrollObserver();
        }
      };
      
      profileEl.addEventListener('transitionend', onTransitionEnd);
    }
  };

  const initScrollObserver = () => {
    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0,
      rootMargin: '0px 0px 0px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  };

  return (
    <>
      {/* Background textures and scanline */}
      <div className="bg-grid-overlay"></div>
      <div className="bg-noise-overlay"></div>
      <div className="scanline-overlay"></div>
      <div className="bg-glow-1"></div>
      <div className="bg-glow-2"></div>

      {/* 1. LANDING PAGE OVERLAY */}
      <div id="landing-overlay" className={isExploreClicked ? 'fade-out' : ''}>
        <div id="landing-avatar-placeholder">
          {/* Profile picture is positioned fixed over this space initially */}
        </div>
        <div className="landing-text">
          <h1 className="landing-title"><span className="logo-bracket">&lt;</span>K.<span className="logo-name">LOHITH</span><span className="logo-bracket">/&gt;</span></h1>
          <p className="landing-subtitle">Full Stack Developer &amp; CSE Student</p>
          <div className="landing-about">
            <div className="landing-about-row">
              <span><i className="fa-solid fa-building-columns"></i> The Apollo University</span>
              <span><i className="fa-solid fa-graduation-cap"></i> B.Tech CSE — 3rd Year / 5th Sem</span>
              <span><i className="fa-solid fa-location-dot"></i> Andhra Pradesh, India</span>
            </div>
          </div>
          <button 
            id="explore-btn" 
            className="explore-btn" 
            onClick={handleExplore}
          >
            Explore Portfolio
          </button>
        </div>
      </div>

      {/* TRANSITIONAL PROFILE PICTURE CONTAINER */}
      <div id="profile-pic-container" ref={profilePicRef}>
        <img src="/profile.svg" alt="K Lohith - Profile Picture" />
      </div>

      {/* 2. NAVBAR */}
      <Navbar isVisible={isNavbarVisible} />

      {/* MAIN LAYOUT */}
      <main className={`main-content ${isMainContentVisible ? 'visible' : ''}`}>
        
        {/* 3. HOME SECTION */}
        <Home landingZoneRef={landingZoneRef} />

        {/* 4. PROJECTS SECTION */}
        <Projects />

        {/* 5. CERTIFICATIONS SECTION */}
        <Certifications />

        {/* 6. EXPERIENCE SECTION */}
        <Experience />

        {/* 7. CONTACT ME SECTION */}
        <Contact />

      </main>

      {/* FOOTER */}
      <footer>
        <div className="footer-content">
          <p>© 2026 K Lohith. All Rights Reserved.</p>
          <p>Email: <a href="mailto:lohithreddy1819@gmail.com">lohithreddy1819@gmail.com</a> | Phone: +91 8309953012</p>
        </div>
      </footer>
    </>
  );
}

export default App;
