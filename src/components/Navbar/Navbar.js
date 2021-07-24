import React, {useEffect} from 'react'
import M from 'materialize-css'
import { Menu } from '@material-ui/icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resume from './Coding_Resume.pdf'


export default function Navbar() {
    useEffect(()=> {
        let elements = document.querySelectorAll(".sidenav")
        M.Sidenav.init(elements)
    }, [])

    return (
        <header>
            <nav className="nav-wrapper transparent">
                <div className="container">
                    <a href="/#" className="brand-logo">Nate Worley</a>
                    <a href="/#" className="sidenav-trigger" data-target="mobile-menu">
                        <Menu style={{ fontSize: "50", margin: "8 0 0 0" }}/>
                    </a>
                    <ul className="right hide-on-med-and-down">
                        <li><a href="#work">Work</a></li>
                        <li><a href={Resume} target="_blank" rel="noopener noreferrer"
                                download="Coding_Resume.pdf">Resume</a>
                        </li>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                        <li><a href="https://www.linkedin.com/in/nathaniel-worley-a21030150/" target="_blank" rel="noopener noreferrer"
                                className="tooltipped btn-floating btn-small blue darken-2" data-position="bottom"
                                data-tooltip="LinkedIn"> <FontAwesomeIcon icon={faLinkedin} />
                            </a></li>
                        <li><a href="https://github.com/ImMythz" target="_blank" rel="noopener noreferrer"
                                className="tooltipped btn-floating btn-small blue darken-2" data-position="bottom"
                                data-tooltip="github">
                                <FontAwesomeIcon icon={faGithub} />
                            </a></li>
                    </ul>
                    <ul className="sidenav grey lighten-2" id="mobile-menu">
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                        <li><a href={Resume} target="_blank" rel="noopener noreferrer"
                                download="Coding_Resume.pdf">Resume</a>
                        </li>
                        <li><a href="https://www.linkedin.com/in/nathaniel-worley-a21030150/" target="_blank" rel="noopener noreferrer"
                                data-tooltip="LinkedIn"> <FontAwesomeIcon className="fa-3x" icon={faLinkedin} />
                            </a></li>
                        <li><a href="https://github.com/ImMythz" target="_blank" rel="noopener noreferrer"
                                data-tooltip="github">
                                <FontAwesomeIcon className="fa-3x" icon={faGithub} />
                            </a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}