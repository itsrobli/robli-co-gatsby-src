import React from "react"
import { graphql } from "gatsby"

import { TitleHeader } from "../components/custom-styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../../src/components/bio"
import { Col, Row } from "react-bootstrap"
import { GatsbyImage } from "gatsby-plugin-image";


import AboutMarkdown from "../../content/assets/about.mdx"


const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`
  return (
      <Layout location={location} title={siteTitle}>
        <SEO title="About" />
        <TitleHeader>About</TitleHeader>
        <Bio />
        <h2>Personal projects</h2>
        <Row>
          <Col xs={3}>
            <a href="http://robli.org/know-time-zones/">
              <GatsbyImage image={data.pngKnowTimeZones.childImageSharp.gatsbyImageData} />
            </a>
          </Col>
          <Col xs={3}>
            <a href="http://robli.org/where-to/">
              <GatsbyImage image={data.pngWhereTo.childImageSharp.gatsbyImageData} />
            </a>
          </Col>
          <Col xs={3}>
            <a href="http://robli.org/nyc-eats/">
              <GatsbyImage image={data.pngNycEats.childImageSharp.gatsbyImageData} />
            </a>
          </Col>
          <Col xs={3}>
            <GatsbyImage image={data.pngTimely.childImageSharp.gatsbyImageData} />
          </Col>
        </Row>

        <AboutMarkdown />

      </Layout>
  );
}

export default About

export const pageQuery = graphql`{
  site {
    siteMetadata {
      title
    }
  }
  pngNycEats: file(absolutePath: {regex: "/about-proj-nyc-eats.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, layout: FULL_WIDTH)
    }
  }
  pngTimely: file(absolutePath: {regex: "/about-proj-timely.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, layout: FULL_WIDTH)
    }
  }
  pngWhereTo: file(absolutePath: {regex: "/about-proj-where-to.png/"}) {
    childImageSharp {
      gatsbyImageData(quality: 95, layout: FULL_WIDTH)
    }
  }
  pngKnowTimeZones: file(
    absolutePath: {regex: "/about-proj-know-time-zones.png/"}
  ) {
    childImageSharp {
      gatsbyImageData(quality: 95, layout: FULL_WIDTH)
    }
  }
}
`