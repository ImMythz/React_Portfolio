import React, {useEffect} from 'react'
import M from 'materialize-css'
import CodingPic from '../../images/code-horiseon.jpg'

export default function Parallax() {
    useEffect(()=> {
        let elements = document.querySelectorAll(".parallax")
        M.Parallax.init(elements)
    }, [])

    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={CodingPic} alt="Coding" className="responsive-img"/>
            </div>
        </div>
    )
}