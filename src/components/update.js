import React from "react"
import { StaticQuery, graphql } from "gatsby"

import updateStyles from "./update.module.scss"

const Update = () => (
    <StaticQuery
    query={graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        totalCount
        edges {
          node {
            id
            frontmatter {
              title
              day
              month
              year
              image
            }
            excerpt
          }
        }
      }
    }
  `
}
    render={data => (
        <section className={updateStyles.update}>
            <h2 className={updateStyles.title} id="updates">Live Updates</h2>
            {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id} className={updateStyles.postContainer}>
            <div className={updateStyles.date}>
                <span className={updateStyles.day}>{node.frontmatter.day}</span>/
                <span className={updateStyles.month}>{node.frontmatter.month}</span>
                <span className={updateStyles.year}>{node.frontmatter.year}</span>
            </div>
            <div className={updateStyles.image} >
                <img src={node.frontmatter.image} alt=""/>
            </div>
            <div className={updateStyles.article}>
                <h3 className={updateStyles.postTitle}>
                {node.frontmatter.title}
                </h3>
                <p>{node.excerpt}</p>
                <div className={updateStyles.button}><strong>Read More</strong></div>
            </div>
          </div>
        ))}
        </section>
    )}
    />

)

export default Update