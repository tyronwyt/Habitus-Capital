import React, { Component } from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

import logo from "../assets/images/logo_text.png"
import lock from "../assets/images/lock.svg"

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navIsToggledOn: false,
        }

        // This binding is necessary to make `this` work in the callback
        this.handleNavToggle = this.handleNavToggle.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    handleNavToggle() {
        this.setState(state => ({
            navIsToggledOn: !state.navIsToggledOn
        }));

        // Prevent scrolling when modal is open
        const body = document.getElementsByTagName('body');
        if (!this.state.navIsToggledOn) {  
            body[0].setAttribute('style', 'overflow: hidden');
        } else {
            body[0].removeAttribute('style');
        }
    }

    handleScroll(position, e) {
        e.preventDefault(); // prevent the link navigating to the target immediately

        // hide the navigation modal when a link is clicked if open
        if (this.state.navIsToggledOn){ 
            this.handleNavToggle();
        }
        
        // Smooth scroll effect to target position
        document.querySelector(position).scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        })
    }

    render() {
        return (
            <header className={headerStyles.header} id="header">
            <div className={headerStyles.top}>
                <div className={headerStyles.wrapper}>
                    <div className={headerStyles.logo}>
                    <Link to="/"><img id="logo" src={logo} alt="Habitus Capital" /></Link>
                    </div>
                    <div className={`${headerStyles.hamburgerIcon}`} data-toggled={this.state.navIsToggledOn ? 'true' : 'false' } onClick={this.handleNavToggle}>
                        <div className={headerStyles.bar1}></div>
                        <div className={headerStyles.bar2}></div>
                        <div className={headerStyles.bar3}></div>
                    </div>
                </div>
            </div>
            <div className={headerStyles.bottom} data-toggled={this.state.navIsToggledOn ? 'true' : 'false' }>
                <div className={headerStyles.wrapper}>
                    <div className={headerStyles.nav}>
                        <ul>
                            <li><Link to="/#" onClick={(e) => {this.handleScroll('#top', e)}} id="nav-top" data-selected="true">OUR LEGACY</Link></li>
                            <li><Link to="/#investing" onClick={(e) => {this.handleScroll('#investing', e)}} id="nav-investing">INVESTING</Link></li>
                            <li><Link to="/#performance" onClick={(e) => {this.handleScroll('#performance', e)}} id="nav-performance">PERFORMANCE</Link></li>
                            <li><Link to="/#updates" onClick={(e) => {this.handleScroll('#updates', e)}} id="nav-updates">LIVE UPDATES</Link></li>
                            <li><Link to="/#contact" onClick={(e) => {this.handleScroll('#contact', e)}} id="nav-contact">CONTACT</Link></li>
                            <li><Link to="#"><img src={lock} width="8px" alt=""/> TEAM MEMBERS</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}

export default Header