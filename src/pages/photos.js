import React from "react"
import { graphql } from "gatsby"

import {
  PhotosListCategoryLabel, PhotosListSpacer10px,
  PhotosListStyledLink,
  PhotosListTile, TitleHeader
} from "../components/custom-styled-components"
import { Col, Row } from "react-bootstrap"
import Layout from "../components/layout"
import { GatsbyImage } from "gatsby-plugin-image";
import Seo from "../components/seo"


const PhotosList = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const photosManifest = data.allMdx.nodes.filter(node => node.fields.source === 'photos')

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Photos" />
        <TitleHeader>Photos</TitleHeader>
        <Row>
          {photosManifest.map((photoCollection, key) => {
            return (
              <Col xs={4} key={key}>
                <PhotosListTile>
                  <PhotosListStyledLink to={`/photos${photoCollection.fields.slug}`}>

                    <GatsbyImage
                      image={photoCollection.frontmatter.thumbnail.childImageSharp.gatsbyImageData} />
                    <PhotosListSpacer10px />
                    {photoCollection.frontmatter.title}
                    <PhotosListCategoryLabel>{photoCollection.frontmatter.category}</PhotosListCategoryLabel>

                  </PhotosListStyledLink>
                </PhotosListTile>
              </Col>
            );
          })}
        </Row>


    </Layout>
  );
}

export default PhotosList

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(
      sort: [{ frontmatter: { id: ASC } }, { frontmatter: { date: ASC } }]
    ) {
      nodes {
        excerpt
        fields {
          source
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
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
      }
    }
  }
`
