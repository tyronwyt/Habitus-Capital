import React from "react"
import { graphql, StaticQuery } from "gatsby"

import contactStyles from "./contact.module.scss"
import tree from "../assets/images/tree_960x350.jpg"

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
            frontmatter {
                social {
                    image
                    name
                    text
                    url
                }
            }
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
                style={{background: "url(" + tree + ")", 
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
            <div className={`${contactStyles.block} ${contactStyles.right} ${contactStyles.social}`}>
                <h3>Social Media</h3>
                {data.block_3.frontmatter.social.map((item) => (
                    <div key={item.name}><a href={item.url}><img src={item.image} alt={item.name} align="left" />{item.text}</a></div>
                ))}
            </div>
        </div>
    </section>
    )}
    />
)

export default Contact