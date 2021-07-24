import React from 'react'

export default function Navbar() {
    return (
        <header>
            <nav class="nav-wrapper transparent">
                <div class="container">
                    <a class="brand-logo">Nate Worley</a>
                    <a href="#" class="sidenav-trigger" data-target="mobile-menu">
                        <i class="material-icons">menu</i>
                    </a>
                    <ul class="right hide-on-med-and-down">
                        <li><a href="#work">Work</a></li>
                        <li><a href="./assets/images/Coding_Resume.pdf" target="_blank"
                                download="Coding_Resume.pdf">Resume</a>
                        </li>
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                        <li><a href="https://www.linkedin.com/in/nathaniel-worley-a21030150/" target="_blank"
                                class="tooltipped btn-floating btn-small blue darken-2" data-position="bottom"
                                data-tooltip="LinkedIn">
                                <i class="fab fa-linkedin"></i>
                            </a></li>
                        <li><a href="https://github.com/ImMythz" target="_blank"
                                class="tooltipped btn-floating btn-small blue darken-2" data-position="bottom"
                                data-tooltip="github">
                                <i class="fab fa-github"></i>
                            </a></li>
                    </ul>
                    <ul class="sidenav grey lighten-2" id="mobile-menu">
                        <li><a href="#about-me">About Me</a></li>
                        <li><a href="#work">Work</a></li>
                        <li><a href="#contact">Contact Me</a></li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}