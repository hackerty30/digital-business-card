import React from "react"
import "../css/Footer.css"
import twitterLogo from "../images/twitter-brands.svg"
import facebookLogo from "../images/facebook-square-brands.svg"
import instaLogo from "../images/instagram-square-brands.svg"
import githubLogo from "../images/github-square-brands.svg"

export default function Footer() {
    return(
        <div className="footer">
            <a>
                <img className="logo" src={twitterLogo}></img>
            </a>
            <a>
                <img className="logo" src={facebookLogo}></img>
            </a>
            <a>
                <img className="logo" src={instaLogo}></img>
            </a>
            <a href="https://github.com/hackerty30">
                <img className="logo" src={githubLogo}></img>
            </a>
        </div>
    )
}