import React from "react"
import { Link, graphql } from "gatsby"

import {
  PhotosListCategoryLabel, PhotosListSpacer10px,
  PhotosListStyledLink,
  PhotosListTile, TitleHeader
} from "../components/custom-styled-components"
import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import Image from "gatsby-image"
import SEO from "../components/seo"


const PhotosList = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const photosManifest = data.allMdx.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Photos" />
      {/*<div style={{ maxWidth: `960px`, margin: `1.45rem` }}>*/}
        <TitleHeader>Photos</TitleHeader>
        <Row>
          {photosManifest.map((photoCollection, key) => {
            return (
              <Col xs={4} key={key}>
                <PhotosListTile>
                  <PhotosListStyledLink to={`/photos${photoCollection.fields.slug}`}>

                    <Image fluid={photoCollection.frontmatter.thumbnail.childImageSharp.fluid} />
                    <PhotosListSpacer10px />
                    {photoCollection.frontmatter.title}
                    <PhotosListCategoryLabel>{photoCollection.frontmatter.category}</PhotosListCategoryLabel>

                  </PhotosListStyledLink>
                </PhotosListTile>
              </Col>
            )
          })}
        </Row>


      {/*</div>*/}
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
    allMdx(filter: {fileAbsolutePath: {regex: "/content/photos/"}}, sort: {fields: [frontmatter___id, frontmatter___date], order: ASC}) {
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