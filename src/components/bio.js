/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import { Col, Row } from "react-bootstrap"
// import { FaGithub, FaTwitter, FaInstagram } from "@react-icons/all-files"
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin"
import { FaGithub } from "@react-icons/all-files/fa/FaGithub"
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter"
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram"



const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width:80, height: 80, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      <Row>
        <Col xs={8}>
          <p>{author?.summary || null}</p>
          <p>You can find me on: <a href="https://github.com/itsrobli"><FaGithub/></a> <a
            href="https://www.linkedin.com/in/itsrobli/"><FaLinkedin/></a> <a
            href={`https://twitter.com/${social?.twitter || ``}`}><FaTwitter/></a> <a
            href="https://www.instagram.com/itsrobli/"><FaInstagram/></a></p>
        </Col>
        <Col xs={4}>
          {avatar && (
            <Image
              fixed={avatar}
              alt={author?.name || ``}
              className="bio-avatar"
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
          )}
        </Col>
      </Row>
    </div>

  )
}

export default Bio
