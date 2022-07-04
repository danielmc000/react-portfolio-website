import './index.scss'
import LogoS from '../../assets/images/logopreload.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
<<<<<<< HEAD
import { faHome, faUser, faEnvelope, faFolder,faScrewdriverWrench } from '@fortawesome/free-solid-svg-icons'
=======
import { faHome, faUser, faEnvelope, faSuitcase } from '@fortawesome/free-solid-svg-icons'
>>>>>>> 24bfb64c0f51aa9d0b62f1790802e9d2a9d1dc7c
import { Link, NavLink } from 'react-router-dom'
import {AiFillSetting} from 'react-icons/ai'

const Sidebar = () => {
  return (
    <div className="nav-bar">
      <Link className="logo" to="/">
        <img src={LogoS} alt="Logo" />
      </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
<<<<<<< HEAD
        <NavLink activeclassname="active" className="experience-link" to="/experience">
          <FontAwesomeIcon icon={faFolder} color="#4d4d4e" />
        </NavLink>

=======
        <NavLink activeclassname="active" className="portfolio-link" to="/portfolio">
          <FontAwesomeIcon icon={faSuitcase} color="#4d4d4e" />
        </NavLink>
>>>>>>> 24bfb64c0f51aa9d0b62f1790802e9d2a9d1dc7c
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>        
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-alberto-montoya-carrasco-6084901a2/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/danielmc000"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar
