import React, { useState, useEffect } from 'react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [flippedCertId, setFlippedCertId] = useState(null);

  // Handle scroll effects
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);
      setShowBackToTop(scrollY > 300);

      // Update active section
      const sections = ['home', 'about', 'experience', 'projects', 'certifications', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 200 && rect.bottom >= 200;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const certifications = [
    {
      id: 1,
      title: 'Programming in Java',
      description: 'Certified by NPTEL for completing the Programming in Java course with comprehensive understanding of Java concepts.',
      image: 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      backImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'AWS Academy Graduate - AWS Cloud Foundations',
      description: 'Certified by AWS Academy for completing the AWS Cloud Foundations course covering fundamental AWS cloud concepts.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      backImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'AI-ML',
      description: 'Certified by AWS Academy for completing the Artificial Intelligence and Machine Learning course.',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      backImage: 'https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'JAVA Full Stack',
      description: 'Certified by Eduskills Academy for completing the Full Stack Java Development program.',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      backImage: 'https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Data Structures using Java',
      description: 'Certified by NPTEL for completing the Data Structures course using Java programming language.',
      image: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      backImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ];

  const handleCertificationClick = (certId) => {
    setFlippedCertId(flippedCertId === certId ? null : certId);
  };

  const handleCertificationDetails = (cert) => {
    setSelectedCertification(cert);
    setFlippedCertId(null);
  };

  const closeCertificationModal = () => {
    setSelectedCertification(null);
  };

  return (
    <>
      {/* Google Fonts and FontAwesome */}
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />

      <div className="portfolio">
        {/* Header */}
        <header className={isScrolled ? 'scrolled' : ''}>
          <div className="container">
            <nav>
              <div className="logo" onClick={() => scrollToSection('home')}>
                S N V V S Subha <span>Surya</span><span> Kedarisetti</span>
              </div>
              <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                {['home', 'about', 'experience', 'projects', 'certifications', 'contact'].map((section) => (
                  <li key={section}>
                    <a 
                      className={activeSection === section ? 'active' : ''}
                      onClick={() => scrollToSection(section)}
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  </li>
                ))}
              </ul>
              <div 
                className="mobile-menu-btn"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <i className={isMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
              </div>
            </nav>
          </div>
        </header>

        {/* Hero Section */}
        <section id="home">
          <div className="container">
            <div className="hero-content">
              <div className="hero-text">
                <h1>Hi, I'm S N V V S Subha Surya Kedarisetti</h1>
                <div className="title">Data Analyst & Full Stack Developer</div>
                <p>Detail-oriented and analytical professional with strong foundations in Python, SQL, and data visualization tools. Passionate about turning data into actionable strategies through analysis, reporting, and visualization.</p>
                <div className="hero-btns">
                  <button 
                    className="btn btn-primary"
                    onClick={() => scrollToSection('contact')}
                  >
                    Contact Me
                  </button>
                  <a 
                    href="/surya resume.pdf" 
                    download="SubhaSurya_Resume.pdf" 
                    className="btn btn-outline"
                    style={{ color: 'white', borderColor: 'white' }}
                  >
                    Download CV
                  </a>
                </div>
              </div>
              <div className="hero-image">
                <div className="shape shape-1"></div>
                <img src="/images/s3.jpg" alt="Subha Surya" className="profile-img" />
                <div className="shape shape-2"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about">
          <div className="container">
            <div className="section-title">
              <h2>About Me</h2>
              <div className="underline"></div>
            </div>
            <div className="about-content">
              <div className="about-img">
                <img src="/images/s2.jpg" alt="Subha Surya" />
              </div>
              <div className="about-text">
                <h3>Who am I?</h3>
                <p>I'm an aspiring Data Analyst with hands-on experience in Python, data preprocessing, machine learning, and data visualization. Skilled at extracting, transforming, and analyzing large datasets to drive business outcomes.</p>
                <p>Proficient in data analysis tools and techniques with a strong foundation in full-stack technologies and cloud platforms. I'm passionate about problem-solving and creating data-driven solutions.</p>
                
                <div className="skills">
                  <h4>Technical Skills</h4>
                  <div className="skill-tags">
                    {[
                      { name: 'Python', type: 'primary' },
                      { name: 'SQL', type: 'primary' },
                      { name: 'JavaScript', type: 'primary' },
                      { name: 'Java', type: 'primary' },
                      { name: 'React', type: 'secondary' },
                      { name: 'Angular', type: 'secondary' },
                      { name: 'HTML5', type: 'secondary' },
                      { name: 'CSS3', type: 'secondary' },
                      { name: 'Node.js', type: 'primary' },
                      { name: 'GCP', type: 'primary' },
                      { name: 'Scikit-learn', type: 'primary' },
                      { name: 'Excel', type: 'secondary' },
                      { name: 'Git', type: 'secondary' }
                    ].map((skill) => (
                      <span key={skill.name} className={`skill-tag ${skill.type}`}>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="education">
                  <h2>Education</h2>
                  <div className="education-item">
                    <h4>Bachelor of Technology</h4>
                    <p className="institute">Swarnandhra College of Engineering and Technology</p>
                    <p className="date">04/2025 | Narsapur, Andhra Pradesh</p>
                    <p className="grade">8.81 CGPA</p>
                  </div>
                  <div className="education-item">
                    <h4>MPC</h4>
                    <p className="institute">Tirumala Junior College</p>
                    <p className="date">06/2021 | Rajahmundry, Andhra Pradesh</p>
                    <p className="grade">94.7%</p>
                  </div>
                  <div className="education-item">
                    <h4>SSC</h4>
                    <p className="institute">Bhashyam E.M High School</p>
                    <p className="date">09/2019 | Tuni, Andhra Pradesh</p>
                    <p className="grade">9.8 CGPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience">
          <div className="container">
            <div className="section-title">
              <h2>My Experience</h2>
              <div className="underline"></div>
            </div>
            
            <div className="experience-item">
              <div className="experience-header">
                <h3>Full Stack Developer</h3>
                <span className="date">Vjtha Learning Website</span>
              </div>
              <ul>
                <li>Contributed to UI/UX design using ReactJS and CSS3 to enhance website functionality and visual appeal.</li>
                <li>Designed reusable components and implemented state management for dynamic pages.</li>
                <li>Applied best practices in modular development and defect fixing for production deployment.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <div className="container">
            <div className="section-title">
              <h2>My Projects</h2>
              <div className="underline"></div>
            </div>
            
            <div className="projects-grid">
              <div className="project-card">
                <div className="project-img">
                  <img src="/images/crop.jpg" alt="Crop Yield Prediction" />
                </div>
                <div className="project-content">
                  <h3>Crop Yield Prediction</h3>
                  <p>Created a random forest regressor model to predict crop yields based on parameters like Humidity, Temperature, and Soil moisture using Python and Scikit-learn.</p>
                  <div className="project-tech">
                    {['Python', 'Scikit-learn', 'Jupyter', 'NumPy', 'Pandas'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://github.com/your-github-username/crop-yield-prediction" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-source"
                    >
                      <i className="fab fa-github"></i> Source Code
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="project-card">
                <div className="project-img">
                  <img src="/images/image.png" alt="Online Fee Payment System" />
                </div>
                <div className="project-content">
                  <h3>Online Fee Payment System for College</h3>
                  <p>Developed a secure web-based Online Fee Payment portal using Java Servlets and JSP with SQL backend for transaction management and record keeping.</p>
                  <div className="project-tech">
                    {['Java', 'JSP', 'Servlet', 'SQL', 'HTML', 'CSS', 'JS'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://github.com/suryak2004/online-fee-payment" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-source"
                    >
                      <i className="fab fa-github"></i> Source Code
                    </a>
                  </div>
                </div>
              </div>

              <div className="project-card">
                <div className="project-img">
                  <img src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="Personal Portfolio Website" />
                </div>
                <div className="project-content">
                  <h3>Personal Portfolio Website</h3>
                  <p>Created a responsive personal portfolio website to showcase skills, projects, and resume using HTML, CSS, and JavaScript with interactive elements.</p>
                  <div className="project-tech">
                    {['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'].map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    <a 
                      href="https://github.com/your-github-username/portfolio-website" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn btn-source"
                    >
                      <i className="fab fa-github"></i> Source Code
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section with Flip Cards */}
        <section id="certifications">
          <div className="container">
            <div className="section-title">
              <h2>My Certifications</h2>
              <div className="underline"></div>
            </div>
            <div className="certifications-grid">
              {certifications.map((cert) => (
                <div 
                  key={cert.id} 
                  className={`certification-card ${flippedCertId === cert.id ? 'flipped' : ''}`}
                  onClick={() => handleCertificationClick(cert.id)}
                >
                  <div className="certification-card-inner">
                    <div className="certification-card-front">
                      <div className="certification-icon">
                        <i className="fas fa-certificate"></i>
                      </div>
                      <h3>{cert.title}</h3>
                      <p>{cert.description}</p>
                      <div className="click-indicator">
                        <i className="fas fa-eye"></i>
                        <span></span>
                      </div>
                    </div>
                    <div className="certification-card-back">
                      <img src={cert.image} alt={cert.title} />
                      <button 
                        className="btn btn-primary"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCertificationDetails(cert);
                        }}
                      >
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certification Modal */}
        {selectedCertification && (
          <div className="certification-modal" onClick={closeCertificationModal}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <button className="modal-close" onClick={closeCertificationModal}>
                <i className="fas fa-times"></i>
              </button>
              <div className="modal-header">
                <h3>{selectedCertification.title}</h3>
              </div>
              <div className="modal-image">
                <img src={selectedCertification.image} alt={selectedCertification.title} />
              </div>
              <div className="modal-description">
                <p>{selectedCertification.description}</p>
              </div>
            </div>
          </div>
        )}

        {/* Contact Section */}
        <section id="contact">
          <div className="container">
            <div className="section-title">
              <h2>Contact</h2>
              <div className="underline"></div>
            </div>
            <div className="contact-info">
              <h3>Contact Information</h3>
              <div className="contact-details">
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Email</h4>
                    <a href="mailto:suryaakedarisetti@gmail.com" className="contact-link">suryaakedarisetti@gmail.com</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Phone</h4>
                    <a href="tel:+919247413126" className="contact-link">+91 9247413126</a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fab fa-linkedin"></i>
                  </div>
                  <div className="contact-text">
                    <h4>LinkedIn</h4>
                    <a href="http://www.linkedin.com/in/surya-kedarisetti" target="_blank" rel="noopener noreferrer" className="contact-link">
                      linkedin.com/in/surya-kedarisetti
                    </a>
                  </div>
                </div>
                
                <div className="contact-item">
                  <div className="contact-icon">
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className="contact-text">
                    <h4>Location</h4>
                    <p className="contact-address">Andhra Pradesh, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer>
          <div className="container">
            <div className="footer-content">
              <div className="footer-col">
                <h3>Subha Surya</h3>
                <p>Detail-oriented and analytical professional with strong foundations in Python, SQL, and data visualization tools.</p>
                <div className="social-links">
                  <a href="http://www.linkedin.com/in/surya-kedarisetti-707987227" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="mailto:suryaakedarisetti@gmail.com" className="social-link">
                    <i className="fas fa-envelope"></i>
                  </a>
                  <a href="tel:+919247413126" className="social-link">
                    <i className="fas fa-phone"></i>
                  </a>
                  <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer" className="social-link">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
              <div className="footer-col">
                <h3>Quick Links</h3>
                <div className="footer-links">
                  {['home', 'about', 'experience', 'projects', 'contact'].map((section) => (
                    <a key={section} onClick={() => scrollToSection(section)}>
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </a>
                  ))}
                </div>
              </div>
              <div className="footer-col">
                <h3>Download Resume</h3>
                <a 
                  href="/surya resume.pdf" 
                  download="SubhaSurya_Resume.pdf" 
                  className="btn btn-outline"
                  style={{ color: 'white', borderColor: 'white', marginTop: '10px' }}
                >
                  Download CV
                </a>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2023 Subha Surya. All Rights Reserved.</p>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <div 
          className={`back-to-top ${showBackToTop ? 'show' : ''}`}
          onClick={scrollToTop}
        >
          <i className="fas fa-arrow-up"></i>
        </div>

        <style jsx>{`
        :root {
            --primary: #2563eb;
            --primary-dark: #1d4ed8;
            --secondary: #f59e0b;
            --dark: #1e293b;
            --light: #f8fafc;
            --gray: #64748b;
            --light-gray: #e2e8f0;
            --success: #10b981;
            --danger: #ef4444;
            --gradient: linear-gradient(45deg, #2563eb, #7dd3fc);
            --gradient-dark: linear-gradient(45deg, #1d4ed8, #60a5fa);
            --gradient-source: linear-gradient(45deg, #3b82f6, #a5b4fc);
            --shadow: 0 8px 32px rgba(0, 0, 0, 0.15);
            --glass-bg: rgba(255, 255, 255, 0.1);
            --glass-border: 1px solid rgba(255, 255, 255, 0.2);
            --footer-bg:rgb(76, 78, 81);
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Poppins', sans-serif;
            color: var(--dark);
            background: white;
            line-height: 1.6;
            overflow-x: hidden;
            scroll-behavior: smooth;
            position: relative;
        }
        
        h1, h2, h3, h4 {
            font-family: 'Playfair Display', serif;
            font-weight: 600;
            color:rgb(147, 107, 65);
        }
        
        a {
            text-decoration: none;
            color: inherit;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Section Animations */
        section {
            opacity: 0;
            transform: translateY(50px) scale(0.98);
            animation: sectionReveal 1s ease-out forwards;
            animation-delay: 0.2s;
        }
        
        @keyframes sectionReveal {
            to {
                opacity: 1;
                transform: translateY(0) scale(1);
            }
        }
        
        /* Header & Navigation */
        header {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            padding: 20px 0;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            box-shadow: var(--shadow);
            z-index: 1000;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        header.scrolled {
            padding: 15px 0;
            color: white;
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 24px;
            font-weight: 700;
            color: var(--primary);
            position: relative;
            transition: transform 0.4s ease;
        }
        
        .logo:hover {
            transform: scale(1.1) rotate(5deg);
        }
        
        .logo span {
            color: var(--secondary);
            transition: color 0.3s ease;
        }
        
        .logo:hover span {
            color: black;
        }
        
        .nav-links {
            display: flex;
            gap: 30px;
        }
        
        .nav-links a {
            position: relative;
            font-weight: 500;
            transition: all 0.3s ease;
            padding: 5px 10px;
            color: black;
        }
        
        .nav-links a:hover {
            color: black;
            transform: translateY(-3px);
            background: var(--glass-bg);
            border-radius: 5px;
        }
        
        .nav-links a::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 50%;
            width: 0;
            height: 2px;
            background: var(--gradient);
            transition: all 0.3s ease;
            transform: translateX(-50%);
        }
        
        .nav-links a:hover::after {
            width: 100%;
        }
        
        .nav-links a.active {
            color: var(--primary);
            background: var(--glass-bg);
            border-radius: 5px;
        }
        
        .nav-links a.active::after {
            width: 100%;
        }
        
        .mobile-menu-btn {
            display: none;
            font-size: 24px;
            cursor: pointer;
            transition: transform 0.4s ease;
        }
        
        .mobile-menu-btn:hover {
            transform: rotate(180deg) scale(1.2);
        }
        
        /* Hero Section */
        #home {
            height: 100vh;
            display: flex;
            align-items: center;
            padding-top: 80px;
            background: radial-gradient(circle at center, rgba(37, 99, 235, 0.15), rgba(245, 158, 11, 0.15));
            position: relative;
            overflow: hidden;
        }
        
        .hero-content {
            display: flex;
            align-items: center;
            gap: 50px;
        }
        
        .hero-text {
            flex: 1;
            animation: heroTextReveal 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes heroTextReveal {
            from {
                opacity: 0;
                transform: translateX(-100px) rotate(-5deg);
            }
            to {
                opacity: 1;
                transform: translateX(0) rotate(0);
            }
        }
        
        .hero-text h1 {
            font-size: 48px;
            margin-bottom: 20px;
            line-height: 1.2;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .hero-text h1::before {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 0;
            height: 3px;
            background: var(--gradient);
            transition: width 0.5s ease;
        }
        
        .hero-text h1:hover::before {
            width: 100%;
            color: black;
        }
        
        .hero-text .title {
            font-size: 20px;
            color: var(--gray);
            margin-bottom: 30px;
            position: relative;
            display: inline-block;
            transition: transform 0.4s ease;
        }
        
        .hero-text .title:hover {
            transform: scale(1.1) skew(-5deg);
        }
        
        .hero-text .title::after {
            content: '';
            position: absolute;
            bottom: -10px;
            left: 0;
            width: 50px;
            height: 3px;
            background: var(--gradient);
            animation: pulseWidth 2s infinite;
        }
        
        @keyframes pulseWidth {
            0%, 100% { width: 50px; }
            50% { width: 80px; }
        }
        
        .hero-text p {
            margin-bottom: 30px;
            color: var(--gray);
            max-width: 600px;
            transition: transform 0.4s ease, color 0.3s ease;
        }
        
        .hero-text p:hover {
            transform: translateX(15px);
            color: var(--dark);
        }
        
        .hero-btns {
            display: flex;
            gap: 20px;
        }
        
        .btn {
            display: inline-block;
            padding: 12px 30px;
            border-radius: 50px;
            font-weight: 500;
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            cursor: pointer;
            position: relative;
            overflow: hidden;
            z-index: 1;
        }
        
        .btn::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 300%;
            height: 100%;
            background: var(--gradient-dark);
            transition: left 0.5s ease;
            z-index: -1;
        }
        
        .btn:hover::before {
            left: 0;
        }
        
        .btn-primary {
            background: var(--gradient);
            color: white;
            border: none;
            box-shadow: var(--shadow);
        }
        
        .btn-primary:hover {
            transform: translateY(-5px) rotate(2deg);
            box-shadow: 0 12px 24px rgba(37, 99, 235, 0.4);
        }
        
        .btn-outline {
            background: transparent;
            color: var(--primary);
            border: 2px solid var(--primary);
        }
        
        .btn-outline:hover {
            color: white;
            transform: translateY(-5px) rotate(-2deg);
            box-shadow: 0 12px 24px rgba(37, 99, 235, 0.4);
        }

        .btn-source {
            background: var(--gradient-source);
            color: white;
            border: none;
            padding: 10px 25px;
            border-radius: 8px;
            font-weight: 500;
            display: inline-flex;
            align-items: center;
            gap: 8px;
            transition: all 0.3s ease;
            box-shadow: var(--shadow);
        }
        
        .btn-source:hover {
            transform: translateY(-3px);
            box-shadow: 0 10px 20px rgba(59, 130, 246, 0.4);
            animation: pulseSource 1.5s infinite;
        }
        
        @keyframes pulseSource {
            0%, 100% { transform: translateY(-3px) scale(1); }
            50% { transform: translateY(-3px) scale(1.05); }
        }
        
        .btn-source .fab {
            font-size: 16px;
        }
        
        .hero-image {
            flex: 1;
            display: flex;
            justify-content: center;
            position: relative;
            animation: heroImageReveal 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        @keyframes heroImageReveal {
            from {
                opacity: 0;
                transform: translateX(100px) rotate(5deg);
            }
            to {
                opacity: 1;
                transform: translateX(0) rotate(0);
            }
        }
        
        .profile-img {
            width: 350px;
            height: 350px;
            border-radius: 20px;
            object-fit: cover;
            box-shadow: var(--shadow);
            border: 5px solid white;
            position: relative;
            z-index: 1;
            transition: transform 0.5s ease, filter 0.3s ease;
        }    
        .shape {
            position: absolute;
            z-index: 0;
        }
        
        .shape-1 {
            width: 200px;
            height: 200px;
            background: var(--gradient);
            opacity: 0.3;
            border-radius: 50%;
            top: -50px;
            left: 50px;
            animation: float 6s ease-in-out infinite, spin 10s linear infinite;
        }
        
        .shape-2 {
            width: 150px;
            height: 150px;
            border: 10px solid var(--secondary);
            opacity: 0.3;
            border-radius: 50%;
            bottom: -50px;
            right: 50px;
            animation: float 8s ease-in-out infinite, spinReverse 12s linear infinite;
        }
        
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-30px); }
        }
        
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        
        @keyframes spinReverse {
            from { transform: rotate(360deg); }
            to { transform: rotate(0deg); }
        }
        
        /* About Section */
        #about {
            padding: 100px 0;
            background: white;
            position: relative;
            overflow: hidden;
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 60px;
            position: relative;
        }
        
        .section-title h2 {
            font-size: 36px;
            margin-bottom: 15px;
            background: var(--gradient);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            position: relative;
            transition: transform 0.4s ease;
        }
        
        .section-title h2::before {
            content: '';
            position: absolute;
            top: -20px;
            left: 50%;
            width: 50px;
            height: 50px;
            background: radial-gradient(circle, rgba(37, 99, 235, 0.2), transparent);
            transform: translateX(-50%);
            animation: pulse 3s infinite;
        }
        
        @keyframes pulse {
            0%, 100% { transform: translateX(-50%) scale(1); opacity: 0.5; }
            50% { transform: translateX(-50%) scale(1.5); opacity: 0.2; }
        }
        
        .section-title h2:hover {
            transform: scale(1.1);
        }
        
        .section-title .underline {
            width: 80px;
            height: 4px;
            background: var(--gradient);
            margin: 0 auto;
            position: relative;
            transition: width 0.4s ease;
        }
        
        .section-title:hover .underline {
            width: 120px;
        }
        
        .section-title .underline::after {
            content: '';
            position: absolute;
            width: 30px;
            height: 4px;
            background: var(--primary);
            left: 10px;
            top: 0;
            transition: transform 0.4s ease;
        }
        
        .section-title:hover .underline::after {
            transform: translateX(30px) rotate(45deg);
        }
        
        .about-content {
            display: flex;
            gap: 50px;
            align-items: center;
        }
        
        .about-img {
            flex: 1;
            position: relative;
        }
        
        .about-img img {
            width: 100%;
            max-width: 400px;
            border-radius: 10px;
            box-shadow: var(--shadow);
            transition: transform 0.5s ease, filter 0.3s ease;
        }        
        .about-text {
            flex: 1;
        }
        
        .about-text h3 {
            font-size: 28px;
            margin-bottom: 20px;
            position: relative;
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .about-text h3::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient);
            transition: width 0.4s ease;
        }
        
        .about-text h3:hover::after {
            width: 100%;
        }
        
        .about-text h3:hover {
            color: var(--primary);
            transform: translateX(10px);
        }
        
        .about-text p {
            margin-bottom: 20px;
            color: var(--gray);
            transition: transform 0.4s ease, color 0.3s ease;
        }
        
        .about-text p:hover {
            transform: translateX(15px);
            color: var(--dark);
        }
        
        .skills {
            margin-top: 30px;
        }
        
        .skills h4 {
            margin-bottom: 15px;
            font-size: 20px;
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .skills h4:hover {
            color: var(--primary);
            transform: scale(1.05);
        }
        
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .skill-tag {
            background: var(--glass-bg);
            backdrop-filter: blur(5px);
            padding: 8px 15px;
            border-radius: 20px;
            font-size: 14px;
            font-weight: 500;
            border: var(--glass-border);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            cursor: default;
            position: relative;
            overflow: hidden;
        }
        
        .skill-tag::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient);
            transition: left 0.4s ease;
            z-index: -1;
        }
        
        .skill-tag:hover::before {
            left: 0;
        }
        
        .skill-tag:hover {
            transform: scale(1.15) rotate(3deg);
            color: white;
            box-shadow: var(--shadow);
        }
        
        .skill-tag.primary {
            color: var(--primary);
        }
        
        .skill-tag.secondary {
            color: var(--secondary);
        }
        
        .education {
            margin-top: 40px;
        }
        
        .education-item {
            margin-bottom: 25px;
            position: relative;
            padding-left: 30px;
            transition: transform 0.4s ease;
            animation: slideInLeft 0.8s ease-out;
        }
        
        .education-item:hover {
            transform: translateX(15px);
        }
        
        .education-item::before {
            content: '';
            position: absolute;
            left: 0;
            top: 5px;
            width: 15px;
            height: 15px;
            border-radius: 50%;
            background: var(--gradient);
            transition: transform 0.4s ease;
            animation: pulse 2s infinite;
        }
        
        .education-item:hover::before {
            transform: scale(1.5);
        }
        
        .education-item::after {
            content: '';
            position: absolute;
            left: 7px;
            top: 20px;
            bottom: -25px;
            width: 1px;
            background: linear-gradient(to bottom, var(--primary), transparent);
        }
        
        .education-item:last-child::after {
            display: none;
        }
        
        .education-item h4 {
            font-size: 18px;
            margin-bottom: 5px;
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .education-item h4:hover {
            color: var(--primary);
            transform: scale(1.05);
        }
        
        .education-item .institute {
            font-weight: 500;
            color: var(--primary);
            margin-bottom: 5px;
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .education-item .institute:hover {
            color: var(--primary-dark);
            transform: translateX(10px);
        }
        
        .education-item .date,
        .education-item .grade {
            font-size: 14px;
            color: var(--gray);
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .education-item:hover .date,
        .education-item:hover .grade {
            color: var(--dark);
            transform: translateX(10px);
        }
        
        /* Experience Section */
        #experience {
            padding: 100px 0;
            background: white;
            position: relative;
        }
        
        .experience-item {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 10px;
            border: var(--glass-border);
            box-shadow: var(--shadow);
            margin-bottom: 30px;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
            overflow: hidden;
        }
        
        .experience-item::before {
            content: '';
            position: absolute;
            top: -50%;
            left: -50%;
            width: 200%;
            height: 200%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.2), transparent);
            transition: transform 0.6s ease;
            z-index: -1;
        }
        
        .experience-item:hover::before {
            transform: translate(25%, 25%) scale(0.5);
        }
        
        .experience-item:hover {
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .experience-header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 15px;
        }
        
        .experience-header h3 {
            font-size: 20px;
            color:rgb(147, 107, 65);
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .experience-header h3:hover {
            color: var(--primary-dark);
            transform: scale(1.05);
        }
        
        .experience-header .date {
            background: var(--gradient);
            color: white;
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 14px;
            transition: transform 0.4s ease, box-shadow 0.3s ease;
        }
        
        .experience-header .date:hover {
            transform: scale(1.2) rotate(5deg);
            box-shadow: var(--shadow);
        }
        
        .experience-item p {
            color: var(--gray);
            margin-bottom: 15px;
            transition: transform 0.4s ease;
        }
        
        .experience-item p:hover {
            transform: translateX(10px);
        }
        
        .experience-item ul {
            padding-left: 20px;
            color: var(--gray);
        }
        
        .experience-item ul li {
            margin-bottom: 8px;
            transition: transform 0.4s ease, color 0.3s ease;
            position: relative;
        }
        
        .experience-item ul li::before {
            content: '•';
            position: absolute;
            left: -15px;
            color: var(--primary);
            transition: transform 0.4s ease;
        }
        
        .experience-item ul li:hover::before {
            transform: scale(1.5);
        }
        
        .experience-item ul li:hover {
            transform: translateX(15px);
            color: var(--dark);
        }
        
        /* Projects Section */
        #projects {
            padding: 100px 0;
            background: white;
        }
        
        .projects-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
            gap: 30px;
        }
        
        .project-card {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            border: var(--glass-border);
            overflow: hidden;
            box-shadow: var(--shadow);
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
        }
        
        .project-card::after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: var(--gradient);
            opacity: 0;
            transition: opacity 0.4s ease;
            z-index: -1;
        }
        
        .project-card:hover::after {
            opacity: 0;
        }
        
        .project-card:hover {
            
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .project-img {
            height: 200px;
            overflow: hidden;
            position: relative;
        }
        
        .project-img img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 0.6s ease, filter 0.3s ease;
        }
        
        .project-card:hover .project-img img {
            transform: scale(1.15) rotate(3deg);
            filter: brightness(1.2) contrast(1.1);
        }
        
        .project-content {
            padding: 20px;
            position: relative;
        }
        
        .project-content h3 {
            font-size: 20px;
            margin-bottom: 10px;
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .project-content h3:hover {
            color: var(--primary);
            transform: scale(1.05);
        }
        
        .project-content p {
            color: var(--gray);
            margin-bottom: 15px;
            font-size: 14px;
            transition: transform 0.4s ease, color 0.3s ease;
        }
        
        .project-content p:hover {
            transform: translateX(10px);
            color: var(--dark);
        }
        
        .project-tech {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-bottom: 15px;
        }
        
        .tech-tag {
            background: var(--glass-bg);
            backdrop-filter: blur(5px);
            color: var(--dark);
            padding: 5px 10px;
            border-radius: 20px;
            font-size: 12px;
            font-weight: 500;
            border: var(--glass-border);
            transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
            overflow: hidden;
        }
        
        .tech-tag::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: var(--gradient);
            transition: left 0.4s ease;
            z-index: -1;
        }
        
        .tech-tag:hover::before {
            left: 0;
        }
        
        .tech-tag:hover {
            transform: scale(1.2) rotate(5deg);
            color: white;
            box-shadow: var(--shadow);
        }
        
        .project-links {
            display: flex;
            gap: 15px;
        }
        
        /* Certifications Section */
        #certifications {
            padding: 100px 0;
            background: white;
        }
        
        .certifications-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 20px;
            margin-top: 50px;
        }
        
        .certification-card {
            perspective: 1000px;
            height: 300px;
            cursor: pointer;
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border-radius: 10px;
            border: var(--glass-border);
            box-shadow: var(--shadow);
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            position: relative;
        }
        
        .certification-card::before {
            content: '';
            position: absolute;
            top: 0;
            left: -10px;
            width: 10px;
            height: 100%;
            background: var(--gradient);
            opacity: 0;
            transition: opacity 0.4s ease, left 0.4s ease;
        }
        
        .certification-card:hover::before {
            opacity: 1;
            left: 0;
        }
        
        .certification-card:hover {
            transform: translateY(-10px) rotate(1deg);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .certification-card-inner {
            position: relative;
            width: 100%;
            height: 100%;
            transition: transform 0.6s;
            transform-style: preserve-3d;
        }
        
        .certification-card.flipped .certification-card-inner {
            transform: rotateY(180deg);
        }
        
        .certification-card-front,
        .certification-card-back {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            padding: 20px;
            border-radius: 10px;
            box-shadow: var(--shadow);
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            text-align: center;
        }
        
        .certification-card-front {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            border: var(--glass-border);
        }
        
        .certification-card-back {
            background: white;
            color: white;
            transform: rotateY(180deg);
        }
        
        .certification-card-back img {
            width: 100%;
            height: 180px;
            object-fit: cover;
            border-radius: 5px;
            margin-bottom: 15px;
        }
        
        .certification-icon {
            font-size: 40px;
            color: var(--primary);
            margin-bottom: 15px;
            transition: transform 0.4s ease;
        }
        
        .certification-card:hover .certification-icon {
            transform: scale(1.2) rotate(15deg);
        }
        
        .certification-card h3 {
            font-size: 18px;
            margin-bottom: 10px;
            color: rgb(147, 107, 65);;
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .certification-card h3:hover {
            color: var(--primary-dark);
            transform: scale(1.05);
        }
        
        .certification-card p {
            color: var(--gray);
            font-size: 14px;
            transition: transform 0.4s ease, color 0.3s ease;
        }
        
        .certification-card p:hover {
            transform: translateX(10px);
            color: var(--dark);
        }
        
        .click-indicator {
            display: flex;
            align-items: center;
            gap: 5px;
            color: var(--primary);
            font-size: 12px;
            margin-top: 10px;
            transition: transform 0.4s ease;
        }
        
        .click-indicator:hover {
            transform: scale(1.1);
        }
        
        /* Certification Modal */
        .certification-modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.8);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 2000;
        }
        
        .modal-content {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 10px;
            max-width: 800px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            border: var(--glass-border);
            box-shadow: var(--shadow);
            transition: transform 0.4s ease;
        }
        
        .modal-content:hover {
            transform: scale(1.02);
        }
        
        .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            background: none;
            border: none;
            font-size: 24px;
            color: var(--primary);
            cursor: pointer;
            transition: transform 0.4s ease;
        }
        
        .modal-close:hover {
            transform: rotate(90deg);
        }
        
        .modal-header h3 {
            font-size: 24px;
            color: var(--primary);
            margin-bottom: 20px;
            transition: transform 0.4s ease;
        }
        
        .modal-header h3:hover {
            transform: scale(1.05);
        }
        
        .modal-image img {
            width: 100%;
            max-height: 400px;
            object-fit: contain;
            margin: 20px 0;
            border-radius: 5px;
            box-shadow: var(--shadow);
            transition: transform 0.4s ease;
        }
        
        .modal-image img:hover {
            transform: scale(1.05);
        }
        
        .modal-description p {
            color: var(--gray);
            transition: transform 0.4s ease, color 0.3s ease;
        }
        
        .modal-description p:hover {
            transform: translateX(10px);
            color: var(--dark);
        }
        
        /* Contact Section */
        #contact {
            padding: 100px 0;
            background: white;
        }
        
        .contact-info {
            background: var(--glass-bg);
            backdrop-filter: blur(10px);
            padding: 30px;
            border-radius: 10px;
            border: var(--glass-border);
            box-shadow: var(--shadow);
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        }
        
        .contact-info:hover {
            transform: translateY(-10px);
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
        }
        
        .contact-details {
            margin-top: 30px;
        }
        
        .contact-item {
            margin-bottom: 25px;
            display: flex;
            align-items: flex-start;
            transition: transform 0.4s ease;
            position: relative;
        }
        
        .contact-item::after {
            content: '';
            position: absolute;
            bottom: -5px;
            left: 0;
            width: 0;
            height: 2px;
            background: var(--gradient);
            transition: width 0.4s ease;
        }
        
        .contact-item:hover::after {
            width: 100%;
        }
        
        .contact-item:hover {
            transform: translateX(15px);
        }
        
        .contact-icon {
            min-width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gradient);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 20px;
            margin-right: 20px;
            transition: all 0.4s ease;
        }
        
        .contact-item:hover .contact-icon {
            transform: scale(1.3) rotate(360deg);
            box-shadow: 0 0 20px rgba(252, 253, 255, 0.5);
        }
        
        .contact-text h4 {
            font-size: 18px;
            margin-bottom: 5px;
            color: var(--dark);
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .contact-text h4:hover {
            color: var(--primary);
            transform: scale(1.05);
        }
        
        .contact-link {
            color: var(--primary);
            transition: all 0.4s ease;
        }
        
        .contact-link:hover {
            color: var(--primary-dark);
            transform: translateX(10px);
            text-decoration: none;
        }
        
        .contact-address {
            color: var(--gray);
            margin: 0;
            transition: transform 0.4s ease, color 0.3s ease;
        }
        
        .contact-address:hover {
            transform: translateX(10px);
            color: var(--dark);
        }
        
        /* Footer */
        footer {
            background: var(--footer-bg);
            color: white;
            padding: 50px 0 20px;
            position: relative;
            overflow: hidden;
        }
        
        footer::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(circle, rgba(255, 255, 255, 0.05), transparent);
            z-index: 0;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            margin-bottom: 40px;
            position: relative;
            z-index: 1;
        }
        
        .footer-col h3 {
            font-size: 20px;
            margin-bottom: 20px;
            color: white;
            transition: color 0.3s ease, transform 0.4s ease;
        }
        
        .footer-col h3:hover {
            color: var(--secondary);
            transform: scale(1.1);
        }
        
        .footer-col p {
            color: white;
            margin-bottom: 15px;
            max-width: 300px;
            transition: transform 0.4s ease, color 0.3s ease;
        }
        
        .footer-col p:hover {
            transform: translateX(10px);
            color: var(--light-gray);
        }
        
        .social-links {
            display: flex;
            gap: 15px;
        }
        
        .social-link {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: var(--glass-bg);
            backdrop-filter: blur(5px);
            border: var(--glass-border);
            display: flex;
            align-items: center;
            justify-content: center;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            color: white;
        }
        
        .social-link:hover {
            transform: scale(1.3) rotate(360deg);
            background: var(--gradient);
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
        }
        
        .footer-links {
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        
        .footer-links a {
            color: white;
            transition: all 0.4s ease;
            position: relative;
        }
        
        .footer-links a::before {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 0;
            height: 1px;
            background: var(--gradient);
            transition: width 0.4s ease;
        }
        
        .footer-links a:hover::before {
            width: 100%;
        }
        
        .footer-links a:hover {
            color: var(--primary);
            transform: translateX(10px);
        }
        
        .footer-bottom {
            text-align: center;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: white;
            font-size: 14px;
            transition: color 0.3s ease, transform 0.4s ease;
            position: relative;
            z-index: 1;
        }
        
        .footer-bottom:hover {
            color: var(--light-gray);
            transform: scale(1.05);
        }
        
        /* Back to Top Button */
        .back-to-top {
            position: fixed;
            bottom: 30px;
            right: 30px;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: var(--gradient);
            color: white;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 20px;
            cursor: pointer;
            opacity: 0;
            visibility: hidden;
            transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
            z-index: 999;
            box-shadow: var(--shadow);
        }
        
        .back-to-top.active {
            opacity: 1;
            visibility: visible;
        }
        
        .back-to-top:hover {
            transform: scale(1.2) rotate(360deg);
            background: var(--gradient-dark);
            box-shadow: 0 0 20px rgba(37, 99, 235, 0.5);
        }
        
        /* Responsive Styles */
        @media (max-width: 992px) {
            .hero-content {
                flex-direction: column-reverse;
                text-align: center;
            }
            
            .hero-text .title::after {
                left: 50%;
                transform: translateX(-50%);
            }
            
            .hero-btns {
                justify-content: center;
            }
            
            .about-content {
                flex-direction: column;
            }
            
            .contact-container {
                flex-direction: column;
            }
            
            .certifications-grid {
              grid-template-columns: repeat(2, 1fr);
            }
        }
        
        @media (max-width: 768px) {
            .nav-links {
                position: fixed;
                top: 80px;
                left: -100%;
                width: 100%;
                height: calc(100vh - 80px);
                background: var(--glass-bg);
                backdrop-filter: blur(10px);
                flex-direction: column;
                align-items: center;
                justify-content: center;
                gap: 30px;
                transition: left 0.4s ease;
            }
            
            .nav-links.active {
                left: 0;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero-text h1 {
                font-size: 36px;
            }
            
            .hero-text .title {
                font-size: 18px;
            }
            
            .section-title h2 {
                font-size: 30px;
            }
            
            .projects-grid {
                grid-template-columns: 1fr;
            }
            
            .certifications-grid {
                grid-template-columns: 1fr;
            }
            
            .contact-item {
                flex-direction: column;
            }
            
            .contact-icon {
                margin-bottom: 10px;
                margin-right: 0;
            }
        }
        
        @media (max-width: 576px) {
            .hero-btns {
                flex-direction: column;
                gap: 15px;
            }
            
            .btn {
                width: 100%;
                text-align: center;
            }
            
            .profile-img {
                width: 250px;
                height: 250px;
            }
            
            .footer-content {
                flex-direction: column;
                gap: 30px;
            }
        }
        `}</style>
      </div>
    </>
  );
};

export default Portfolio;