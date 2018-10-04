import React from "react"
import { StaticQuery, graphql } from "gatsby"

import footerStyles from "./footer.module.scss"
import logo from "../assets/images/HabitusCapital_Logo.svg"


const year = new Date().getFullYear();

const Footer = () => (
    <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            address
            email
            telephone
          }
        }
      }
    `
}
    render={data => (
        <footer className={footerStyles.footer}>
            <div className={footerStyles.wrapper}>
                <div className={footerStyles.blurb}>
                    <p><strong>Address:</strong> {data.site.siteMetadata.address}<br/>
                    <strong>Email:</strong> {data.site.siteMetadata.email}<br/>
                    <strong>Telephone:</strong> {data.site.siteMetadata.telephone}</p>
                    <p>&copy; {year} Habitus Capital Limited | All Rights Reserved</p>
                </div>
                <div className={footerStyles.logo}>
                    <img src={logo} alt="Habitus Capital Logo"></img>
                </div>
            </div>
        </footer>
    )}
    />
)

export default Footer