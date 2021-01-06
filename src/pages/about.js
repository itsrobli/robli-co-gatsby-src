import React from "react"
import { graphql } from "gatsby"

import { TitleHeader } from "../components/custom-styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import AboutMarkdown from "../../content/assets/about.mdx"


const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="About" />
      <TitleHeader>About</TitleHeader>
      <AboutMarkdown />

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
    }
`