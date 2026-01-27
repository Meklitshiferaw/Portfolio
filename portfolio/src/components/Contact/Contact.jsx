import { Mail, MapPin, Phone, Github, LucideLinkedin} from "lucide-react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">
          Get In <span>Touch</span>
        </h2>
        <p className="section-subtitle">
          Have a project in mind or want to collaborate? Feel free to reach
          out. I’m always open to discussing new opportunities.
        </p>

        <div className="contact-grid">
          <div className="info-item">
            <div className="icon-box">
              <Mail className="icon" />
            </div>
            <div>
              <h4>Email</h4>
              <a href="mailto:meklitshiferaw61@gmail.com">
                meklitshiferaw61@gmail.com
              </a>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <Phone className="icon" />
            </div>
            <div>
              <h4>Phone</h4>
              <a href="tel:0945135756">0945135756</a>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <MapPin className="icon" />
            </div>
            <div>
              <h4>Location</h4>
              <span>Addis Ababa, Ethiopia</span>
            </div>
          </div>
        </div>
        <div className='connect'>
          <a href="https://github.com/Meklitshiferaw" target='_blank' rel="noreferrer">
            <Github size={20} className='icon'/>
          </a>
          <a href="https://linkedin.com/in/meklit-shiferaw" target='_blank' rel="noreferrer">
            <LucideLinkedin size={20} className='icon'/>
          </a>
        </div>
      </div>
    </div>
  );
};
export default Contact;