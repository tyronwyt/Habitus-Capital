import React from "react"

import headerStyles from "./header.module.scss"

import logo from "../assets/images/HabitusCapital_Logo.svg"

const Header = () => (
    <header className={headerStyles.header}>
        <div className={headerStyles.wrapper}>
            <a href="/" className={headerStyles.logo}><img src={logo} alt="Habitus Capital" /></a>
            <ul>
                <li><a href="#">Our Legacy</a></li>
                <li><a href="#">Investing</a></li>
                <li><a href="#">Performance</a></li>
                <li><a href="#">Live Updates</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </div>
    </header>
)

export default Header