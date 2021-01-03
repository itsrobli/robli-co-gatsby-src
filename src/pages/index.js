import React from "react"
import { Link, graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import photos from "./photos"
import { Col, Row } from "react-bootstrap"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const posts = data.allMarkdownRemark.nodes

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />

      <section>

        <Row>
          <Col xs={4}>
            <Link to="/blog">Blog</Link>
            <p>I write about various things. More recently about technology and business.</p>
          </Col>
          <Col xs={4}>
            <Link to="/photos">Photos</Link>
            <p>I first learned to code because I couldn't find photo hosting with gallery templates to my liking.</p>
          </Col>
          <Col xs={4}>
            <Link to="/about">About me</Link>
            <p>My past and present projects.</p>
            <Bio />
          </Col>
        </Row>
        <Row>
          <Col xs={4}>
            <Link to="https://github.com/itsrobli">Code</Link>
            <p>I've recently started to open source some stuff.</p>
          </Col>
        </Row>
      </section>

    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          category
        }
      }
    }
  }
`
