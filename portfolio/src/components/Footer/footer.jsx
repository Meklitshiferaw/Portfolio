import './footer.css'
const footer = () => {
  return (
    <footer>
        {" "}
        <p className="footer-par">
            {" "}
            &copy; {new Date().getFullYear()} Meklit Shiferaw. All rights reserved.
        </p>
    </footer>
  )
}

export default footer