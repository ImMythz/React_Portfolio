import React from 'react'
import Desk from '../../images/desk_blur.jpg'

export default function Parallax() {
    return (
        <div class="parallax-container">
            <div class="parallax">
                <img src={Desk} alt="Desk" class="responsive-img"/>
            </div>
        </div>
    )
}
