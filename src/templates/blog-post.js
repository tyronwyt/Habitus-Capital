import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import blogStyles from "./blog-post.module.scss"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={blogStyles.blog}>
        <Link className={blogStyles.backButton} to="/#updates">&#8249; Back</Link>
        <h1 className={blogStyles.title}>{post.frontmatter.title}</h1>
        <div className={blogStyles.date}>
          <span className={blogStyles.day}>{post.frontmatter.day}</span>/
          <span className={blogStyles.month}>{post.frontmatter.month}</span>
          <span className={blogStyles.year}>{post.frontmatter.year}</span>
        </div>
        <div className={blogStyles.article} dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        day
        month
        year
      }
    }
  }
`