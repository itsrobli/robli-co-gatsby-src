import React from "react"
import { Link, graphql } from "gatsby"

import { PhotosListCategoryLabel, PhotosListStyledLink } from "../components/custom-styled-components"
import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"


const PhotosList = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const photosManifest = data.allMarkdownRemark.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Photos" />
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <h1>Photos</h1>
        <Row>
          {photosManifest.map(photoCollection => {
            return (
              <PhotosListStyledLink to={`/photos/${photoCollection.frontmatter.title}`}>
                <Col xs={4}>
                  <Image fluid={photoCollection.frontmatter.thumbnail.childImageSharp.fluid} />
                  {photoCollection.frontmatter.title}
                  <PhotosListCategoryLabel>{photoCollection.frontmatter.category}</PhotosListCategoryLabel>
                </Col>
              </PhotosListStyledLink>
            )
          })}
        </Row>


      </div>
    </Layout>
  )
}

export default PhotosList

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/photos/"}}, sort: {fields: [frontmatter___id, frontmatter___date], order: ASC}) {
      nodes {
        excerpt
        fields {
          slug
        }
        frontmatter {
          date(formatString: "MMMM DD, YYYY")
          title
          description
          id
          category
          thumbnail {
            publicURL
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`