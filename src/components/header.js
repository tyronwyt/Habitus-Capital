import React from "react"

import headerStyles from "./header.module.scss"

import logo from "../assets/images/HabitusCapital_Logo.svg"



const Header = () => (
    <header className={headerStyles.header} id="header">
        <div className={headerStyles.wrapper}>
            <div className={headerStyles.logo}>
                <a href="/" className={headerStyles.logo}><img src={logo} alt="Habitus Capital" /></a>
            </div>
            <div className={headerStyles.nav}>
                <ul>
                    <li><a href="#">Our Legacy</a></li>
                    <li><a href="#investing">Investing</a></li>
                    <li><a href="#performance">Performance</a></li>
                    <li><a href="#live-updates">Live Updates</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </div>
    </header>
)

export default Header