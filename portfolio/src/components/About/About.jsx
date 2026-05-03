import './About.css'
import {Code} from 'lucide-react'
import { User } from 'lucide-react'
import resume from '../../assets/Resume.pdf'

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="container">
        <h2 className="title">
          About <span className="highlight">me</span>
        </h2>

        <div className="about-grid">
          <div className="about-text">
            <p>
              Full Stack Developer with a strong focus on building scalable and user-centric web applications. Experienced in developing responsive frontends and robust backend systems using modern technologies such as React, Node.js, Express, and MongoDB.
            </p>

            <p>
              Skilled in designing and integrating RESTful APIs, implementing secure authentication mechanisms, and delivering clean, maintainable code. Committed to creating efficient, accessible, and high-performing applications that provide a seamless user experience.
            </p>

            <p>
              Demonstrates a continuous learning mindset and a proactive approach to problem-solving. Seeking opportunities to contribute to innovative projects while further developing technical and professional expertise.
            </p>

            <div className="button-wrapper">
              <a className="resume-btn" href={resume} target="_blank" rel="noreferrer">
                Resume
              </a>
            </div>
          </div>

          <div className="about-cards">
            <div className="card">
              <div className="card-icon">
                <Code className="icon" />
              </div>
              <div>
                <h4 className="card-title">Web Developer</h4>
                <p>Creating responsive websites and web apps with modern frameworks.</p>
              </div>
            </div>

            <div className="card">
              <div className="card-icon">
                <User className="icon" />
              </div>
              <div>
                <h4 className="card-title">UI/UX Designer</h4>
                <p>Designing intuitive interfaces and seamless user experiences.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
        <div className="about-skills">
            <div className="about-skill"><p>HTML/CSS</p><hr style={{width: '90%'}}/></div>
            <div className="about-skill"><p>Javascript</p><hr style={{width: '80%'}}/></div>
            <div className="about-skill"><p>Tailwind CSS</p><hr style={{width: '80%'}}/></div>
            <div className="about-skill"><p>React JS</p><hr style={{width: '70%'}}/></div>
            <div className="about-skill"><p>ExpressJs</p><hr style={{width: '70%'}}/></div>
        </div>
    </div>
  )
}

export default About