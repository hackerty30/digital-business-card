import React from "react"
import TopOfCard from './components/TopOfCard'
import "./App.css"
import InfoSection from "./components/InfoSection"
import Footer from "./components/Footer"

export default function App() {
    return(
        <div className="outerDiv">
            <TopOfCard />
            <InfoSection />
            <Footer />
        </div>
    )
}