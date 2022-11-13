import React from 'react'

export default function Footer() {
    return (
        <footer className="page-footer grey darken-3">
            <div className="container">
                <div className="row">
                    <div className="col l6 s12">
                        <h5>About Me Personally</h5>
                        <p>I grew up in Fort Myers, FL before making the biggest move in my life to Dallas, TX in 2014. It
                            was here in Dallas where I finished High School and began working towards furthering my
                            education in the Software Engineering industry. I currently work as a Front End Developer.</p>
                        <p>My hobbies consist of rock climbing, coding and playing disc golf. I'm also deeply interested in
                            AI and Machine Learning and strive to one day have a career in and contribute to the AI/Machine Learning industry. </p>
                    </div>
                    <div className="col l4 offset-l2 s12">
                        <h5 className="white-text">Connect</h5>
                        <ul>
                            <li><a href="/#" className="grey-text text-lighten-3" rel="noopener noreferrer" aria-label="Phone Number">469.209.1779</a></li>
                            <li><a className="grey-text text-lighten-3" href="mailto:nate.worley12@gmail.com?subject=Subject&body=message%20goes%20here" rel="noopener noreferrer"
                                    aria-label="Email">nate.worley12@gmail.com</a></li>
                            <li><a className="grey-text text-lighten-3" href="https://github.com/ImMythz" target="_blank" rel="noopener noreferrer"
                                    aria-label="GitHub">GitHub</a></li>
                            <li><a className="grey-text text-lighten-3"
                                    href="https://www.linkedin.com/in/nathaniel-worley-a21030150/" target="_blank" rel="noopener noreferrer"
                                    aria-label="LinkedIn">LinkedIn</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer-copyright grey darken-4">
                <div className="container center-align">&copy; 2022 Nate Worley</div>
            </div>
        </footer>
    )
}