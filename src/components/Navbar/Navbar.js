import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import Resume from './Coding_Resume.pdf'


export default function Navbar() {
    return (
        <header>
            <nav className="nav-wrapper transparent">
                <div className="container">
                    <a href="/#" className="brand-logo">Nate Worley</a>
                    <a href="/#" className="sidenav-trigger" data-target="mobile-menu">
                        <i className="material-icons">menu</i>
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
                    </ul>
                </div>
            </nav>
        </header>
    )
}