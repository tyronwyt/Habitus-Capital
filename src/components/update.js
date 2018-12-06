import React, { Component } from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import globalStyles from "./shared.module.scss"
import updateStyles from "./update.module.scss"

function splitDate(date, output) {
  var dateArr = date.split('-');
  switch(output) {
    case "year":
      return dateArr[2]
    case "month":
      return dateArr[1]
    case "day":
      return dateArr[0]
    default:
      return ""
  }
}

class Update extends Component {
    constructor(props) {
      super(props)
      this.state = {
        page: 0,
        totalPosts: 11,
      }
      this.nextPage = this.nextPage.bind(this);
      this.prevPage = this.prevPage.bind(this);
      this.renderPosts = this.renderPosts.bind(this);
    }

    nextPage() {
      let page = this.state.page + 5;
      if (page < this.state.totalPosts) {
      this.setState({page: page});
        }
    }

    prevPage() {
      let page = this.state.page - 5;
      if (page >= 0) {
        this.setState({page: page});
      }
    }

    pageButtons(data) {
      
      if (this.state.page === 0 && data.length > 5) {
        return (
          <div className={updateStyles.pagination}>
            <span className={updateStyles.pageButtons} onClick={this.nextPage}>Next Page</span>
          </div>
          )
      } else if (this.state.page >= 5 && (this.state.page + 5) < data.length) {
        return (
          <div className={updateStyles.pagination}>
            <span className={updateStyles.pageButtons} onClick={this.prevPage}>Previous Page</span> 
            <span className={updateStyles.pageButtons} onClick={this.nextPage}>Next Page</span>
          </div>
        )
      } else if (this.state.page >= 5 && (this.state.page + 5) >= data.length) {
        return (
          <div className={updateStyles.pagination}>
            <span className={updateStyles.pageButtons} onClick={this.prevPage}>Previous Page</span> 
          </div>
        )
      } 
      else {
        return null;
      }
    }
    
    renderPosts(posts) {
      const pagePosts = posts.slice(this.state.page, (this.state.page + 5));
      return pagePosts
    }

  render() {
    return (
      <StaticQuery
      query={graphql`
      query {
        allMarkdownRemark(
          sort: { fields: [frontmatter___date], order: DESC },
          filter: { fileAbsolutePath: {regex : "\/posts/"} },) {
          totalCount
          edges {
            node {
              id
              frontmatter {
                title
                date(formatString: "DD-MMM-YYYY")
                thumbnail
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
            <div className="title-element">
              <div id="updates"/>
              <h2 className={globalStyles.title}>Live Updates</h2>
            </div>
              {this.renderPosts(data.allMarkdownRemark.edges).map(({ node }) => (
            <div key={node.id} className={updateStyles.postContainer}>
              <div className={updateStyles.date}>
                  <span className={updateStyles.day}>{splitDate(node.frontmatter.date, 'day')}</span>/
                  <span className={updateStyles.month}>{splitDate(node.frontmatter.date, 'month')}</span>
                  <span className={updateStyles.year}>{splitDate(node.frontmatter.date, 'year')}</span>
              </div>
              <div className={updateStyles.image} >
                  <img src={node.frontmatter.thumbnail} alt=""/>
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
          {this.pageButtons(data.allMarkdownRemark.edges)}
          {/* <a onClick={this.prevPage}>Previous Page</a> <a onClick={this.nextPage}>Next Page</a> */}
          </section>
      )}
      />
    )
  }
}

export default Update