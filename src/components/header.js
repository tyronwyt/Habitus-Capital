import React from "react"

import headerStyles from "./header.module.scss"

const Header = () => (
    <header className={headerStyles.header}>
        <div className="wrapper">
            <h1>Site Title</h1>
            <ul class="navigation">
                <li>Our Legacy</li>
                <li>Investing</li>
                <li>Performance</li>
                <li>Live Updates</li>
                <li>Contact</li>
            </ul>
        </div>
    </header>
)

export default Header