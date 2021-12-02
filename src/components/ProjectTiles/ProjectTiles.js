import React, {useEffect} from 'react';
import M from 'materialize-css'
import './style.css';
import BarScout from '../../images/web-homepage.PNG';
import WeatherDashboard from '../../images/Weather_Dashboard_Screenshot.png';
import PasswordGenerator from '../../images/Password_Generator_Screenshot.png'
import StolenCanvas from '../../images/SC_screenshot_1.png'
import NoteTaker from '../../images/sc_1.png'
import TechBlog from '../../images/TB-screenshot-2.png'


export default function ProjectTiles() {
    useEffect(()=> {
        let elements = document.querySelectorAll(".materialboxed")
        M.Materialbox.init(elements)
    }, [])

    return (
        <section className="container section scrollspy" id="work">
            <div className="row">
                <div className="col s12 l4">
                    <img src={BarScout} alt="BarScout Screenshot"
                        className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1">
                    <a href="https://github.com/ImMythz/BarScout" target="_blank" rel="noopener noreferrer">
                        <h2 className="blue-text text-darken-2">BarScout</h2>
                    </a>
                    <p>This web application allows you to find bars in different cities, states, and counties. You will also
                        be able to locate the bars near the searched location on a map. Deployed application <a href="https://immythz.github.io/BarScout/" target="_blank" rel="noopener noreferrer">Here</a>.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src={WeatherDashboard} alt="Weather Dashboard Screenshot"
                        className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <a href="https://github.com/ImMythz/Weather_Dashboard" target="_blank" rel="noopener noreferrer">
                        <h2 className="blue-text text-darken-2">Weather Dashboard</h2>
                    </a>
                    <p>A weather application that allows you to search for a city and get the daily weather report for that
                        city. You will also be able to get the 5-day forecast of that searched city. Your recent
                        searches will also be saved. Deployed application <a href="https://immythz.github.io/Weather_Dashboard/" target="_blank" rel="noopener noreferrer">Here</a>.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4">
                    <img src={PasswordGenerator} alt="Password Generator Screenshot"
                        className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1">
                    <a href="https://github.com/ImMythz/Password_Generator" target="_blank" rel="noopener noreferrer">
                        <h2 className="blue-text text-darken-2">Password Generator</h2>
                    </a>
                    <p>This is a password generator application. The user can choose between different criteria to include
                        in their password and a random password will be generated based on the user selected criteria. You
                        also
                        have the option to copy your generated password to your clipboard. Deployed application <a href="https://immythz.github.io/Password_Generator/" target="_blank" rel="noopener noreferrer">Here</a>.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src={StolenCanvas} alt="Stolen Canvas"
                        className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <a href="https://github.com/ImMythz/Stolen-Canvas" target="_blank" rel="noopener noreferrer">
                        <h2 className="blue-text text-darken-2">Stolen Canvas</h2>
                    </a>
                    <p>This web application is a full fledged E-Commerce site that is based on the premise of pseudo-selling famous 
                        pieces of art as well as MS Paint drawing from the creators of the site. Deployed application <a href="https://afternoon-ocean-89274.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here</a>.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4">
                    <img src={NoteTaker} alt="Note Taker Screenshot"
                        className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1">
                    <a href="https://github.com/ImMythz/Note_Taker" target="_blank" rel="noopener noreferrer">
                        <h2 className="blue-text text-darken-2">Note Taker</h2>
                    </a>
                    <p>This application Note Taker application allows the user to write, save, and delete notes to help them organize and keep track of thoughts and tasks. Deployed application <a href="https://note-taking-app-express.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here</a>.</p>
                </div>
            </div>
            <div className="row">
                <div className="col s12 l4 offset-l1 push-l7">
                    <img src={TechBlog} alt="Tech Blog Screenshot"
                        className="responsive-img materialboxed"/>
                </div>
                <div className="col s12 l6 offset-l1 pull-l5 right-align">
                    <a href="https://github.com/ImMythz/Tech_Blog" target="_blank" rel="noopener noreferrer">
                        <h2 className="blue-text text-darken-2">Tech Blog</h2>
                    </a>
                    <p>This is a Tech Blog application that creates a CMS-style blog site. This site allows users to create an account, sign in to an existing account, leave posts, edit posts, delete posts, and comment on posts. Deployed application <a href="https://young-woodland-81817.herokuapp.com/" target="_blank" rel="noopener noreferrer">Here</a>.</p>
                </div>
            </div>
        </section>
    )
}