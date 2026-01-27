import './Navbar.css'
import { Github, LucideLinkedin, Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  const handleScroll = (id) => {
    const section = document.getElementById(id)
    section?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  useEffect(() => {
    const sections = document.querySelectorAll('section')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { threshold: 0.6 }
    )

    sections.forEach(section => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  return (
    <nav className='navbar'>
      <p className='logo'>Meklit <span>Shiferaw</span></p>

      <div className="menu-icon" onClick={() => setOpen(!open)}>
        {open ? <X size={26} /> : <Menu size={26} />}
      </div>

      <ul className={`nav-menu ${open ? 'open' : ''}`}>
        <li onClick={() => handleScroll('home')} className={active === 'home' ? 'active' : ''}>Home</li>
        <li onClick={() => handleScroll('about')} className={active === 'about' ? 'active' : ''}>About Me</li>
        <li onClick={() => handleScroll('projects')} className={active === 'projects' ? 'active' : ''}>Projects</li>
        <li onClick={() => handleScroll('contact')} className={active === 'contact' ? 'active' : ''}>Contact</li>
      </ul>

      <div className='nav-connect'>
        <a href="https://github.com/Meklitshiferaw" target='_blank' rel="noreferrer">
          <Github size={20} className='icon'/>
        </a>
        <a href="https://linkedin.com/in/meklit-shiferaw" target='_blank' rel="noreferrer">
          <LucideLinkedin size={20} className='icon'/>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
