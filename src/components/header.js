import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import logo from "../assets/images/HabitusCapital_Logo.svg"
import logo_sml from "../assets/images/HabitusCapital_Logo_sml.svg"

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
        <div className={headerStyles.wrapper}>
            <div className={headerStyles.logo}>
                <Link to="/">
                    <img id="logo" src={logo} alt="Habitus Capital" />
                    <img id="logo-sml" src={logo_sml} alt="Habitus Capital" />
                </Link>
            </div>
            <div className={headerStyles.nav}>
                <ul>
                    <li><Link to="/#" onClick={(e) => {scrollTo('#top', e)}}>OUR LEGACY</Link></li>
                    <li><Link to="/#investing" onClick={(e) => {scrollTo('#investing', e)}}>INVESTING</Link></li>
                    <li><Link to="/#performance" onClick={(e) => {scrollTo('#performance', e)}}>PERFORMANCE</Link></li>
                    <li><Link to="/#updates" onClick={(e) => {scrollTo('#updates', e)}}>LIVE UPDATES</Link></li>
                    <li><Link to="/#contact" onClick={(e) => {scrollTo('#contact', e)}}>CONTACT</Link></li>
                    <li><Link to="#">TEAM MEMBERS</Link></li>
                </ul>
            </div>
        </div>
    </header>
)

export default Header