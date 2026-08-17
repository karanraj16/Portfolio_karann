import React from 'react';
import { 
  FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, 
  FaGraduationCap, FaCode, FaBriefcase, FaAward, FaCertificate, FaTrophy 
} from 'react-icons/fa';
// Add these new imports to the top of App.jsx
import 
{ SiMongodb, SiExpress, SiReact, SiNodedotjs, SiPython, SiVercel, SiRender }
 from 'react-icons/si';
import { SiUpwork, SiFiverr } from 'react-icons/si';

function App() {
  const skills = [
    { name: 'HTML5', bg: '#e34f26' },
    { name: 'CSS3', bg: '#1572b6' },
    { name: 'JavaScript', bg: '#f7df1e', color: '#000' },
    { name: 'MongoDB', bg: '#47a248' },
    { name: 'React.js', bg: '#61dafb', color: '#000' },
    { name: 'Node.js', bg: '#339933' },
    { name: 'Python', bg: '#3776ab' },
  ];

  const projects = [
    {
      title: "SaaS Business Dashboard",
      description: "Implemented secure JWT authentication, interactive data visualizations using Recharts, and a highly responsive data table with real-time search and filtering.",
      link: "https://saas-dashboard-green-xi.vercel.app/login"
    },
    {
      title: "Task Manager Web App",
      description: "Developed a full-stack MERN task management application with RESTful APIs, full CRUD operations, and persistent MongoDB storage with real-time UI updates.",
      link: "https://task-manager-rhkhgf8w5-karan-e373.vercel.app/"
    },
    {
      title: "LinkedIn Profile Audit Tool",
      description: "Interactive landing page featuring form validation, error handling, and actionable user insights. Built with HTML, CSS, JS and Google App Script.",
      link: "https://project2-rho-beryl.vercel.app/"
    }
  ];

  return (
    <>
      <nav>
        <div className="logo-container">
          <div className="logo-badge">KR</div>
          <div>
            <div>Karan Raj</div>
            <div style={{ fontSize: '0.7rem', color: '#94a3b8' }}>MERN Developer</div>
          </div>
        </div>
        
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#hr-snapshot"> About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="mailto:karanraj.sankar16@gmail.com" className="btn-primary" style={{padding: '8px 20px'}}>
          <FaEnvelope style={{marginRight: '8px', verticalAlign: 'middle'}}/> Hire Me
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <div className="availability">
            <span className="dot"></span> Available for freelance & full-time roles
          </div>
          
          <h2>Hey there! I'm</h2>
          <h1>Karan<br/>Raj</h1>
          <h2>I'm a <span className="gradient-text">Full-Stack MERN Developer</span></h2>
          
          <p className="hero-desc">
            Transforming ideas into responsive, real-world web applications. Eager to begin contributing to collaborative projects and helping freelance clients scale their businesses.
          </p>

          <div className="skill-pills">
            {skills.map((skill, index) => (
              <span key={index} className="pill" style={{ backgroundColor: skill.bg, color: skill.color || '#fff' }}>
                {skill.name}
              </span>
            ))}
          </div>

          <div className="action-group" style={{marginTop: '2rem'}}>
            <a href="/Karan_Raj_Resume1.pdf" download="Karan_Raj_Resume.pdf" className="btn-primary">
              Download Resume 📄
            </a>
            <div className="icon-btn-group" style={{gap: '10px'}}>
              <a href="https://github.com/karanraj16" target="_blank" rel="noreferrer" className="icon-btn" style={{padding: '12px'}} title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/karan-raj-9aa931285" target="_blank" rel="noreferrer" className="icon-btn" style={{padding: '12px'}} title="LinkedIn">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>

        <div className="hero-image-container">
          <div className="profile-circle">
             <img src="/profile.jpg" alt="Karan Raj Profile" />
          </div>
        </div>
      </section>

      {/* Infinite Tech Marquee Section */}
      <div className="marquee-container">
        <div className="marquee-content">
      
          <div className="marquee-item"><SiMongodb style={{color: '#47a248'}}/> MongoDB</div>
          <div className="marquee-item"><SiExpress style={{color: '#fff'}}/> Express.js</div>
          <div className="marquee-item"><SiReact style={{color: '#61dafb'}}/> React.js</div>
          <div className="marquee-item"><SiNodedotjs style={{color: '#339933'}}/> Node.js</div>
          <div className="marquee-item"><SiPython style={{color: '#3776ab'}}/> Python</div>
          <div className="marquee-item"><FaCode style={{color: '#f7df1e'}}/> REST APIs</div>
          <div className="marquee-item"><SiVercel style={{color: '#fff'}}/> Vercel</div>
          
          <div className="marquee-item"><SiMongodb style={{color: '#47a248'}}/> MongoDB</div>
          <div className="marquee-item"><SiExpress style={{color: '#fff'}}/> Express.js</div>
          <div className="marquee-item"><SiReact style={{color: '#61dafb'}}/> React.js</div>
          <div className="marquee-item"><SiNodedotjs style={{color: '#339933'}}/> Node.js</div>
          <div className="marquee-item"><SiPython style={{color: '#3776ab'}}/> Python</div>
          <div className="marquee-item"><FaCode style={{color: '#f7df1e'}}/> REST APIs</div>
          <div className="marquee-item"><SiVercel style={{color: '#fff'}}/> Vercel</div>
        </div>
      </div>

      {/* BIG FEATURE: HR Fast-Track Snapshot */}
      <section id="hr-snapshot" className="section-padding">
        <h2 className="section-title">Recruiter Fast-Track</h2>
        <div className="hr-snapshot-container">
          <div className="hr-info">
            <h3>Why Hire Me? (TL;DR)</h3>
            <div className="hr-grid">
              <div className="hr-item"><FaCode className="hr-icon"/> <span><strong>Core Stack:</strong> MERN & Python</span></div>
              <div className="hr-item"><FaGraduationCap className="hr-icon"/> <span><strong>Education:</strong> B.Sc. CS (7.7 CGPA)</span></div>
              <div className="hr-item"><FaMapMarkerAlt className="hr-icon"/> <span><strong>Location:</strong> Chennai, India</span></div>
              <div className="hr-item"><FaBriefcase className="hr-icon"/> <span><strong>Status:</strong> Web Dev Intern @ InAmigos</span></div>
            </div>
            <p style={{color: '#94a3b8', fontSize: '0.95rem', maxWidth: '500px'}}>
              I bridge the gap between frontend aesthetics and robust backend architecture. Ready to join a fast-paced team and write clean, scalable code from Day 1.
            </p>
          </div>
          <div>
            <a href="mailto:karanraj.sankar16@gmail.com?subject=Interview Invitation: Karan Raj" className="btn-primary" style={{display: 'block', textAlign: 'center', marginBottom: '1rem', padding: '15px 30px', fontSize: '1.1rem'}}>
              Schedule Interview 📅
            </a>
          </div>
        </div>
      </section>

      {/* Services Section with Freelance Icons */}
      <section id="services" className="section-padding" style={{backgroundColor: 'rgba(11, 15, 25, 0.5)'}}>
        <h2 className="section-title">Freelance Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <div className="service-icon" style={{fontSize: '2.5rem', color: '#3b82f6', marginBottom: '15px'}}><FaCode /></div>
            <h3>Frontend Development</h3>
            <p>Building highly responsive web interfaces using React.js, HTML5, CSS3, and JavaScript.</p>
          </div>
          <div className="service-card">
            <div className="service-icon" style={{fontSize: '2.5rem', color: '#ec4899', marginBottom: '15px'}}><FaCode /></div>
            <h3>Backend & APIs</h3>
            <p>Developing secure RESTful APIs and server-side logic using Node.js, Express.js, and Python.</p>
          </div>
        </div>
        <div className="icon-btn-group" style={{marginTop: '3rem'}}>
            <a href=" https://www.upwork.com/freelancers/~0126e457d187bc03ef" target="_blank" rel="noreferrer" className="icon-btn">
              <SiUpwork /> Upwork
            </a>
            <a href=" https://www.fiverr.com/users/freelancekaran/seller_dashboard" target="_blank" rel="noreferrer" className="icon-btn">
              <SiFiverr /> Fiverr
            </a>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section id="experience" className="section-padding">
        <h2 className="section-title">Experience & Education</h2>
        <div className="timeline-container">
          
          <div className="timeline-item">
            <span className="timeline-date">Aug 2026 – Present</span>
            <div className="timeline-content">
              <h3><FaBriefcase style={{color: '#3b82f6', marginRight: '10px'}}/> Web Developer Intern</h3>
              <h4>InAmigos Foundation | Remote</h4>
              <ul>
                <li>Improving the foundation's website (UI, features, performance, updates).</li>
                <li>Conducting research on web/AI tools and suggesting practical implementations.</li>
                <li>Supporting basic development tasks and assisting in technical problem-solving.</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <span className="timeline-date">2021 – 2024</span>
            <div className="timeline-content">
              <h3><FaGraduationCap style={{color: '#ec4899', marginRight: '10px'}}/> B.Sc. Computer Science</h3>
              <h4>St. Joseph's College of Arts & Science, Chennai</h4>
              <ul>
                <li>Graduated with a CGPA of 7.7.</li>
                <li>Built a strong foundation in programming, database management, and web technologies.</li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding" style={{backgroundColor: 'rgba(11, 15, 25, 0.5)'}}>
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-links">
                <a href={project.link} target="_blank" rel="noreferrer">Live Demo →</a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="section-padding">
        <h2 className="section-title">Certifications</h2>
        <div className="cert-grid">
          <div className="cert-card">
            <div className="cert-icon"><FaCertificate style={{color: '#f59e0b'}}/></div>
            <div className="cert-info">
              <h4>MERN Stack</h4>
              <p style={{color: '#94a3b8', fontSize: '0.85rem'}}>Apollo Institute</p>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-icon"><FaTrophy style={{color: '#f59e0b'}}/></div>
            <div className="cert-info">
              <h4>Career Edge – Young Professional</h4>
              <p style={{color: '#94a3b8', fontSize: '0.85rem'}}>TCS iON</p>
            </div>
          </div>
          <div className="cert-card">
            <div className="cert-icon"><FaAward style={{color: '#f59e0b'}}/></div>
            <div className="cert-info">
              <h4>Microsoft Digital Training</h4>
              <p style={{color: '#94a3b8', fontSize: '0.85rem'}}>Office 365, Word, Excel</p>
            </div>
          </div>
        </div>
      </section>

{/* Contact Section with Form & Icons */}
      <section id="contact" className="section-padding" style={{backgroundColor: 'rgba(11, 15, 25, 0.8)'}}>
        <h2 className="section-title">Let's Connect</h2>
        
        <div className="contact-wrapper">
          {/* Left Side: Info & Icons */}
          <div className="contact-info-side">
            <h3 style={{fontSize: '2rem', marginBottom: '1rem'}}>Get In Touch</h3>
            <p className="contact-text" style={{textAlign: 'left', marginBottom: '2rem'}}>
              I'm currently based in Chennai, India and open to full-time roles, freelance projects, and collaborations. Drop a message below and let's build something amazing together!
            </p>
            
            <div className="icon-btn-group" style={{justifyContent: 'flex-start', gap: '15px'}}>
              <a href="mailto:karanraj.sankar16@gmail.com" className="icon-btn" title="Email">
                <FaEnvelope />
              </a>
              <a href="https://github.com/karanraj16" target="_blank" rel="noreferrer" className="icon-btn" title="GitHub">
                <FaGithub />
              </a>
              <a href="https://linkedin.com/in/karan-raj-9aa931285" target="_blank" rel="noreferrer" className="icon-btn" title="LinkedIn">
                <FaLinkedin />
              </a>
              <a href="tel:+918682004275" className="icon-btn" title="Call Me">
                <FaPhoneAlt />
              </a>
            </div>
          </div>

          {/* Right Side: The Working Form */}
          <div className="contact-form-side">
             {/* Replace YOUR_FORMSPREE_ID with the ID you get from Formspree.io */}
             <form action="https://formspree.io/f/mzepjkbk" method="POST" className="contact-form">
                <div className="input-group">
                  <input type="text" name="name" placeholder="Your Name" required />
                </div>
                <div className="input-group">
                  <input type="email" name="email" placeholder="Your Email" required />
                </div>
                <div className="input-group">
                  <textarea name="message" placeholder="How can I help you?" required></textarea>
                </div>
                <button type="submit" className="btn-primary" style={{width: '100%', fontSize: '1.1rem'}}>
                  Send Message 🚀
                </button>
             </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;