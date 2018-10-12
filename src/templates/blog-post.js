import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"

import blogStyles from "./blog-post.module.scss"

function splitDate(date, output) {
  var dateArr = date.split('-');
  switch(output) {
    case "year":
      return dateArr[2]
    case "month":
      return dateArr[1]
    case "day":
      return dateArr[0]
  }
}

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div className={blogStyles.blog}>
        <Link className={blogStyles.backButton} to="/#updates">&#8249; Back</Link>
        <h1 className={blogStyles.title}>{post.frontmatter.title}</h1>
        <div className={blogStyles.date}>
          <span className={blogStyles.day}>{splitDate(post.frontmatter.date, 'day')}</span>/
          <span className={blogStyles.month}>{splitDate(post.frontmatter.date, 'month')}</span>
          <span className={blogStyles.year}>{splitDate(post.frontmatter.date, 'year')}</span>
        </div>
        <img href={post.frontmatter.thumbnail} alt={post.frontmatter.title}/>
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
        date(formatString: "DD-MMM-YYYY")
        thumbnail
      }
    }
  }
`