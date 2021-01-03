import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import {
  BackToPhotosButton,
  PhotoCollectionHeroImage,
  PhotosListSpacer10px
} from "../components/custom-styled-components"

const PhotoCollectionTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const photosCollection = data.photosCollection.nodes
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        {
          photosCollection.map((photo, key) => {
              return (
                <div>
                  <PhotosListSpacer10px />
                  <PhotoCollectionHeroImage
                    key={key}
                    fluid={photo.childImageSharp.fluid}
                  />

                  <PhotosListSpacer10px />
                </div>
              )
            }
          )
        }
      </article>
      <div>
        Hi from template
      </div>
      <BackToPhotosButton to="/photos">Back to photos</BackToPhotosButton>
    </Layout>
  )
}

export default PhotoCollectionTemplate

export const pageQuery = graphql`
  query PhotoCollectionBySlug(
    $id: String!
    $previousPhotoId: String
    $nextPhotoId: String
    $photoCollectionLocationRegex: String  
  ) {
    site {
      siteMetadata {
        title
      }
    }
    photosCollection: allFile(
        filter: {
            sourceInstanceName: {eq: "photos"}, 
            dir: {regex: $photoCollectionLocationRegex},
            ext: {eq: ".jpg"}
        }, 
        sort: {fields: [childImageSharp___fluid___originalName], order: ASC}
    ) {
        nodes {
            childImageSharp {
                fluid (quality: 100) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        filesystem_directory
      }
    }
    previous: markdownRemark(id: { eq: $previousPhotoId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPhotoId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
