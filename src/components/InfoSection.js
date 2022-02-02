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
                <p className="additionalInfoText">about me</p>
                <h1 className="additionlInfoTitle">Interests</h1>
                <p className="additionalInfoText">my likes</p>
            </div>
        </div>
    )
}