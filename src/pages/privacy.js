import React from "react"
import { graphql } from "gatsby"

import { TitleHeader } from "../components/custom-styled-components"
import Layout from "../components/layout"
import Seo from "../components/seo"
import PrivacyPolicyMarkdown from "../../content/assets/privacy.md"

const PrivacyPolicy = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Privacy policy" />
      <TitleHeader>Privacy policy</TitleHeader>
      <PrivacyPolicyMarkdown />
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
