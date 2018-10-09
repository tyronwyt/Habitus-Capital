import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

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
            fields {
                slug
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
          <div id="title-element">
            <div id="updates"/>
            <h2 className={updateStyles.title}>Live Updates</h2>
          </div>
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
                
                <Link
                to={node.fields.slug} className={updateStyles.button}>
                    <strong>Read More</strong>
                </Link>
                
            </div>
          </div>
        ))}
        </section>
    )}
    />

)

export default Update