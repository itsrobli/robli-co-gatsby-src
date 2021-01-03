import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from "gatsby"
import Image from "gatsby-image"
import {
  BackToPhotosButton,
  PhotoCollectionHeroImage,
  PhotosListSpacer10px, TitleHeader
} from "../components/custom-styled-components"

const PhotoCollectionTemplate = ({ data, location }) => {
  const post = data.mdx
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
        <TitleHeader>{post.frontmatter.title}</TitleHeader>
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
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        filesystem_directory
      }
    }
    previous: mdx(id: { eq: $previousPhotoId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: mdx(id: { eq: $nextPhotoId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`
