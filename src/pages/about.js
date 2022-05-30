import React from "react"
import { graphql } from "gatsby"

import { TitleHeader } from "../components/custom-styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bio from "../../src/components/bio"
import { Col, Row } from "react-bootstrap"
import Image from "gatsby-image"


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
            <Image fluid={data.pngKnowTimeZones.childImageSharp.fluid} />
          </a>
        </Col>
        <Col xs={3}>
          <a href="http://robli.org/where-to/">
            <Image fluid={data.pngWhereTo.childImageSharp.fluid} />
          </a>
        </Col>
        <Col xs={3}>
          <a href="http://robli.org/nyc-eats/">
            <Image fluid={data.pngNycEats.childImageSharp.fluid} />
          </a>
        </Col>
        <Col xs={3}>
          <Image fluid={data.pngTimely.childImageSharp.fluid} />
        </Col>
      </Row>

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
        pngNycEats: file(absolutePath: { regex: "/about-proj-nyc-eats.png/" }) {
            childImageSharp {
                fluid(quality: 95) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pngTimely: file(absolutePath: { regex: "/about-proj-timely.png/" }) {
            childImageSharp {
                fluid(quality: 95) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pngWhereTo: file(absolutePath: { regex: "/about-proj-where-to.png/" }) {
            childImageSharp {
                fluid(quality: 95) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
        pngKnowTimeZones: file(absolutePath: { regex: "/about-proj-know-time-zones.png/" }) {
            childImageSharp {
                fluid(quality: 95) {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`