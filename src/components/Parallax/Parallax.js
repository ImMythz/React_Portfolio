import React, {useEffect} from 'react';
import M from 'materialize-css';
import Desk from '../../images/desk_blur.jpg';

export default function Parallax() {
    useEffect(()=> {
        let elements = document.querySelectorAll(".parallax")
        M.Parallax.init(elements)
    }, [])


    return (
        <div className="parallax-container">
            <div className="parallax">
                <img src={Desk} alt="Desk" className="responsive-img"/>
            </div>
        </div>
    )
}
