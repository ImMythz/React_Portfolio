import React from 'react'

export default function Contact() {
    return (
        <section className="section container scrollspy" id="contact">
            <div className="row">
                <div className="col s12 l5">
                    <h2 className="blue-text text-darken-2">Get in Touch</h2>
                    <p>I'm continuing my ever evolving journey of learning new skills and programming proficiencies each and
                        everyday
                    </p>
                    <p>If you like some of my work or are interested in getting in touch, feel free to send me an email at 
                        <a id="emailGetInTouch" href="mailto:nate.worley12@gmail.com" rel="noopener noreferrer"
                            aria-label="Email"> nate.worley12@gmail.com
                        </a>
                    </p>
                    <p>
                        I look forward to hearing from you!
                    </p>
                </div>
            </div>
        </section>
    )
}