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
              I am a frontend developer dedicated to creating intuitive and
              engaging user experiences. I love transforming complex ideas into
              clean, beautiful, and functional interfaces.
            </p>

            <p>
              I specialize in building responsive and accessible web
              applications using HTML, CSS, JavaScript, React, and modern
              styling tools. I enjoy collaborating with designers and backend
              developers to craft seamless interfaces that look great and
              perform efficiently.
            </p>

            <p>
              I’m always eager to learn, grow, and explore new technologies.
              Currently, I’m looking for opportunities where I can contribute,
              improve my skills, and build meaningful digital experiences.
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
            <div className="about-skill"><p>React JS</p><hr style={{width: '70%'}}/></div>
            <div className="about-skill"><p>Tailwind CSS</p><hr style={{width: '70%'}}/></div>
        </div>
    </div>
  )
}

export default About