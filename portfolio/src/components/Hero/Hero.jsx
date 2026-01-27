import './Hero.css'

const Hero = () => {

  const handleConnectClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className='hero'>
      <h1><span>I'm Meklit Shiferaw,</span><br /> A frontend developer</h1>
      <p>
        I specialize in creating interactive, user-friendly web interfaces using
        modern technologies.
      </p>

      <div className='hero-action'>
        <div 
          className='hero-connect'
          onClick={handleConnectClick}
          role="button"
          tabIndex={0}
        >
          Connect with me
        </div>
      </div>
    </div>
  )
}

export default Hero
