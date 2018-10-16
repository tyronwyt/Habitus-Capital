import React from "react"
import { graphql, StaticQuery } from "gatsby"

import contactStyles from "./contact.module.scss"
import mountains from "../assets/images/mountains_960x350.jpg"
import twitter from "../assets/images/twitter.svg"
import youtube from "../assets/images/youtube.svg"
import linkedin from "../assets/images/linkedin.svg"

const Contact = () => (
    <StaticQuery query = {graphql`
    query {
        block_1: markdownRemark(fileAbsolutePath: {regex: "/contact_1/"}) {
          html
        }
        block_2: markdownRemark(fileAbsolutePath: {regex: "/contact_2/"}) {
          html
        }
        block_3: markdownRemark(fileAbsolutePath: {regex: "/contact_3/"}) {
            html
        }
      }
  `
} render = { data => (
    <section className={contactStyles.contact}>
        <div className="title-element">
            <div id="contact"/>
            <h2 className={contactStyles.title}>Contact Us</h2>
        </div>
        <div className={contactStyles.row}>
            <div className={`${contactStyles.block} ${contactStyles.black} ${contactStyles.left}`} 
            dangerouslySetInnerHTML={{__html: data.block_1.html}}>
            </div>
            <div className={contactStyles.block} 
                style={{background: "url(" + mountains + ")", 
                backgroundSize: "cover", 
                backgroundPosition: "center", 
                backgroundRepeat: "none" }}>
            </div>
        </div>
        <div className={contactStyles.row}>
            <div className={`${contactStyles.block} ${contactStyles.left}`} 
                style={{ background: "#307968", color: "#fff" }}
                dangerouslySetInnerHTML={{__html: data.block_2.html}}>
            </div>
            <div className={`${contactStyles.block} ${contactStyles.right} ${contactStyles.social}`}
                dangerouslySetInnerHTML={{__html: data.block_3.html}}>
                {/* <h3>Social Media</h3>
                <a href="https://twitter.com/HabitusCapital">
                    <img src={twitter} alt="Twitter" align="left"/>
                    <p>@habituscapital<br/>
                    #HabitusInvesting</p>
                </a>
                <a href="https://www.youtube.com">
                    <img src={youtube} alt="Youtube" align="left"/>
                    <p>Habitus Capital</p>
                </a>
                <a href="https://www.linkedin.com">
                    <img src={linkedin} alt="Linked In" align="left"/>
                    <p>Habitus Capital</p>
                </a> */}
            </div>
        </div>
    </section>
    )}
    />
)

export default Contact