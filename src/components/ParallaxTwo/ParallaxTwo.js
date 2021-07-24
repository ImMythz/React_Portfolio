import React from 'react'
import CodingPic from '../../images/code-horiseon.jpg'

export default function Parallax() {
    return (
        <div class="parallax-container">
            <div class="parallax">
                <img src={CodingPic} alt="Coding" class="responsive-img"/>
            </div>
        </div>
    )
}