import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import logo from "../assets/images/HabitusCapital_Logo.svg"
import logo_sml from "../assets/images/HabitusCapital_Logo_sml.svg"



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
                    <li><Link to="/#">Our Legacy</Link></li>
                    <li><Link to="/#investing">Investing</Link></li>
                    <li><Link to="/#performance">Performance</Link></li>
                    <li><Link to="/#updates">Live Updates</Link></li>
                    <li><Link to="/#contact">Contact</Link></li>
                </ul>
            </div>
        </div>
    </header>
)

export default Header