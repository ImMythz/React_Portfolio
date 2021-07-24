import React from 'react'

export default function Skills() {
    return (
        <section class="section container scrollspy" id="about-me">
            <div class="row">
                <div class="col s12 l4">
                    <h2 class="blue-text text-darken-2">Experience</h2>
                    <p>After graduating High School in 2015, I began to work in the freelance Grapahic Design and
                        Photograpahy
                        field. I began my Bachelor's degree at DeVry University in 2017 with a major in Software
                        Engineering.</p>
                    <p>Since before my start at DeVry University, I've been deeply interested in programming and coding. I
                        wanted to
                        take my developing skills to the next level and kickstart my career as a Full Stack Developer. This
                        ultimately lead to the decision to enroll in SMU's esteemed Coding Bootcamp.</p>
                    <p>From my time in SMU's Coding Bootcamp thus far, I have mastered the Front-End Development and I'm
                        working towards mastering the Back-End as well. I look forward to further developing my skills as a
                        Developer.</p>
                </div>
                <div class="col s12 l6 offset-l2">
                    <ul class="tabs">
                        <li class="tab col s6">
                            <a href="#skills" class="active blue-text text-darken-2">Skills</a>
                        </li>
                        <li class="tab col s6">
                            <a href="#education" class="blue-text text-darken-2">Education</a>
                        </li>
                    </ul>
                    <div id="skills" class="col s12">
                        <p class="flow-text blue-text text-darken-2">Skills</p>
                        <p>Here are few of my strongest skills as a young professional</p>
                        <p>Learning Agility</p>
                        <p>Time Management Skills</p>
                        <p>Leadership Ability</p>
                        <p>Critical Thinking</p>
                        <p>Teamwork</p>
                        <br></br>
                        <p>Below is a list of coding skills and languages I've learned</p>
                        <p>HTML / CSS </p>
                        <p>JavaScript / Node.js / React / React.js</p>
                        <p>JQuery / JSON / AJAX / ORM</p>
                        <p>Express / Express.js / Express Handlebars </p>
                        <p>MySQL / MongoDB </p>
                        <p>Python</p>
                    </div>
                    <div id="education" class="col s12">
                        <p class="flow-text blue-text text-darken-2">Education</p>
                        <p>Wylie High School - HS Diploma - GPA 3.6 (2015)</p>
                        <p>DeVry University - BS Software Engineering - GPA 3.8 (2017-present)</p>
                        <p>SMU Coding Bootcamp (currently attending)</p>
                    </div>
                </div>
            </div>
        </section>
    )
}