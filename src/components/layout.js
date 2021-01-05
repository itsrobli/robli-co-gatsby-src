import React from "react"
import { Link } from "gatsby"
import { BackToPhotosButton, SiteFooterNotices } from "./custom-styled-components"
import { Container } from "react-bootstrap"
import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <Container>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        {/*<header className="global-header">{header}</header>*/}
        <Navbar />
        <main>{children}</main>
        <SiteFooterNotices>
          © 2010 - {new Date().getFullYear()} Robert Li.
          {` `}
          <a href="https://www.gatsbyjs.com">Privacy policy</a>
        </SiteFooterNotices>
      </div>
    </Container>
  )
}

export default Layout
