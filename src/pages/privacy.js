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
import PrivacyPolicyMarkdown from "../../content/assets/privacy.md"


const PrivacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Privacy policy" />
      <TitleHeader>Privacy policy</TitleHeader>
      <PrivacyPolicyMarkdown/>
    </Layout>
  )
}

export default PrivacyPolicy

export const pageQuery = graphql`
    query {
        site {
            siteMetadata {
                title
            }
        }
    }
`