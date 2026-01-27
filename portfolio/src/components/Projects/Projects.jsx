import './Projects.css'
import {My_Works} from '../../assets/Projects.js'
import {ArrowRight, ExternalLink, Github} from 'lucide-react'

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="container">
        <h2 className="title">
          Featured <span className="highlight">Projects</span>
        </h2>

        <p className="subtitle">
          Here are some of my recent projects. Each project was carefully crafted
          with attention to detail, performance, and user experience.
        </p>

        <div className="projects-grid">
          {My_Works.map((work, index) => (
            <div key={index} className="project-card">
              <div className="image-wrapper">
                <img src={work.image} alt={work.title} className="project-image" />
              </div>

              <div className="project-content">
                <div className="tags">
                  {work.tags.map((tag, i) => (
                    <span key={i} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="project-title">{work.title}</h3>
                <p className="project-description">{work.description}</p>

                <div className="project-links">
                  <a href={work.demoUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={20} className="icon" />
                  </a>
                  <a href={work.githubUrl} target="_blank" rel="noreferrer">
                    <Github size={20} className="icon" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="github-button-wrapper">
          <a
            className="github-button"
            href="https://github.com/Meklitshiferaw"
            target="_blank"
            rel="noreferrer"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects