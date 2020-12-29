import React from "react"
import { Link, graphql } from "gatsby"

import PhotosManifest from "../../content/photos/photos-manifest.yaml"
import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"


const PhotosList = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <div style={{ maxWidth: `960px`, margin: `1.45rem` }}>
        <h1>{PhotosManifest.title}</h1>
        <ul>
          {PhotosManifest.map((data, index) => {
            return <li key={`content_item_${index}`}>{data.title + " " + data.category}</li>
          })}
        </ul>
        <Row>
          <Col xs={4}>

            {PhotosManifest.map((data, index) => {
              return <li key={`content_item_${index}`}>{data.title + " " + data.category}</li>
            })}

          </Col>
        </Row>
            {PhotosManifest.map((data, index) => {
              return <Row key={`content_item_${index}`}>{data.title + " " + data.category}</Row>
            })}
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
        }
      }
    }
  }
`