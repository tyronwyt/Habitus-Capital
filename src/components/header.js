import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import logo from "../assets/images/logo_text.png"
import flair from "../assets/images/flair.png"

// Smooth scroll effect
function scrollTo(position, e) {
    e.preventDefault();

    document.querySelector(position).scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
    })
}

const Header = () => (
    <header className={headerStyles.header} id="header">
        <div className={headerStyles.top}>
            <div className={headerStyles.wrapper}>
                <div className={headerStyles.logo}>
                <Link to="/"><img id="logo" src={logo} alt="Habitus Capital" /></Link>
                <div className={headerStyles.flair}>
                    <img src={flair} alt=""></img>
                </div>
                </div>
            </div>
        </div>
        <div className={headerStyles.bottom}>
            <div className={headerStyles.wrapper}>
                <div className={headerStyles.nav}>
                    <ul>
                        <li><Link to="/#" onClick={(e) => {scrollTo('#top', e)}} id="nav-top" data-selected="true">OUR LEGACY</Link></li>
                        <li><Link to="/#investing" onClick={(e) => {scrollTo('#investing', e)}} id="nav-investing">INVESTING</Link></li>
                        <li><Link to="/#performance" onClick={(e) => {scrollTo('#performance', e)}} id="nav-performance">PERFORMANCE</Link></li>
                        <li><Link to="/#updates" onClick={(e) => {scrollTo('#updates', e)}} id="nav-updates">LIVE UPDATES</Link></li>
                        <li><Link to="/#contact" onClick={(e) => {scrollTo('#contact', e)}} id="nav-contact">CONTACT</Link></li>
                        <li><Link to="#">TEAM MEMBERS</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
)

export default Header