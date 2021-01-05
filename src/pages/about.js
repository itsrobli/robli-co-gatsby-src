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


const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const photosManifest = data.allMdx.nodes
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      {/*<div style={{ maxWidth: `960px`, margin: `1.45rem` }}>*/}
      <TitleHeader>About</TitleHeader>


      {/*</div>*/}
    </Layout>
  )
}

export default About

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