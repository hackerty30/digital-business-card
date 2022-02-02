import React from "react"
import cardPhoto from "../images/business_card_pic.jpg"
import "../css/TopOfCard.css"

export default function TopOfCard() {
    return(
        <div className="topDiv">
            <img src={cardPhoto} className="photo"></img>
        </div>
    )
}