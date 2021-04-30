import React from 'react'
import about from '../img/about.jpg'

function ImageSection () {
    return (
        <div className="ImageSection">
                <div className="img">
                    <img src={about}  alt="" />
                </div>
                <div className="about-info" >
                    <h4>I am <span> Akash Singh Kushwaha</span></h4>
                    <p>
                        lorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        lorem ipsumlorem ipsum
                        lorem ipsumlorem ipsum
                    </p>
                    <div className="about-details">

                    </div>
                </div>
        </div>
    )
}

export default ImageSection;