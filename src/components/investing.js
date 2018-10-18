import React from "react"
import { graphql, StaticQuery } from "gatsby"

import investingStyles from "./investing.module.scss"

const Investing = ({data}) => (
    <StaticQuery query = {graphql `
        query {
            block_1: markdownRemark(fileAbsolutePath: {regex: "/investing_1/"}) {
            html
            }
            block_2: markdownRemark(fileAbsolutePath: {regex: "/investing_2/"}) {
            html
            }
            block_3: markdownRemark(fileAbsolutePath: {regex: "/investing_3/"}) {
                html
            }
            block_4: markdownRemark(fileAbsolutePath: {regex: "/investing_4/"}) {
                html
            }
        }
    `    
    }

    render = { data => (
        <section className={investingStyles.investing}>
            <div className="title-element">
                <div id="investing"/>
                <h2 className={investingStyles.title}>Investing</h2>
            </div>
            <div className={investingStyles.row}>
                <div dangerouslySetInnerHTML={{__html: data.block_1.html}}></div>
                <div dangerouslySetInnerHTML={{__html: data.block_2.html}}></div>
                <div dangerouslySetInnerHTML={{__html: data.block_3.html}}></div>
                <div dangerouslySetInnerHTML={{__html: data.block_4.html}} style={{ background: "#307968" }}></div>
            </div>
        </section>
        )}
    />
)

export default Investing