import React from "react"
import { Link, graphql } from "gatsby"

import PhotosManifest from "../../content/photos/photos-manifest.yaml"
import { PhotosListCategoryLabel, PhotosListStyledLink } from "../components/custom-styled-components"
import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Image from "gatsby-image"


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
          <Col xs={12}>

            {PhotosManifest.map((data, index) => {
              return <li key={`content_item_${index}`}>{data.title + " " + data.category}</li>
            })}

          </Col>
        </Row>
        <Row>
          {PhotosManifest.map((data, index) => {
            return (
              <PhotosListStyledLink to={`/photos/${data.title}`}>
                <Col Col xs={4} key={`content_item_${index}`}>
                  <img src={`./${data.filesystem_directory}/${data.filesystem_directory}_thumbnail.jpg`}></img>
                  {data.title}
                  <PhotosListCategoryLabel>{data.category}</PhotosListCategoryLabel>
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
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/content/photos/"}}, sort: {fields: [frontmatter___id, frontmatter___date], order: DESC}) {
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
        }
      }
    }
  }
`