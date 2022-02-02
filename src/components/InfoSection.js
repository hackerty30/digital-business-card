import React from "react"
import "../css/InfoSection.css"
import linkedinIcon from "../images/linkedin-brands.svg"
import mailIcon from "../images/envelope-solid.svg"

export default function() {
    return(
        <div>
            <div className="info">
                <h6 className="name">Tyler Horvat</h6>
                <p className="title">Software Engineer</p>
                <p className="website">tylerhorvat.website</p>
            </div>
            <div className="outsideLinks">
                <a href="mailto:tyler.m.horvat@gmail.com">
                    <button className="emailLink">
                        <img src={mailIcon} className="mail"></img>
                        Email
                    </button>
                </a>
                <a href="http://www.linkedin.com/in/tylerhorvat">
                    <button className="linkedinLink">
                        <img src={linkedinIcon} className="linkedinLogo"></img>
                        LinkedIn
                    </button>
                </a>
            </div>
            <div className="additionalInfo">
                <h1 className="additionalInfoTitle">About</h1>
                <p className="additionalInfoText">I am a full stack engineer for Sunquest Information Systems. My primary focus is maintaining and adding new features to our Mitogen LIMS software using HTML, CSS, Javascript, JQuery, Java, Python, and MySQL.</p>
                <h1 className="additionlInfoTitle">Interests</h1>
                <p className="additionalInfoText">In my free time I enjoy spending time with my wife and child. I also enjoy video games and cats.</p>
            </div>
        </div>
    )
}