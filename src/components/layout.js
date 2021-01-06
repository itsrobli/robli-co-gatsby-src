import React from "react"
import { Link } from "gatsby"
import { SiteFooterNotices } from "./custom-styled-components"
import { Container } from "react-bootstrap"
import Navbar from "./navbar"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath

  return (
    <Container>
      <div className="global-wrapper" data-is-root-path={isRootPath}>
        <Navbar />
        <main>{children}</main>
        <SiteFooterNotices>
          © 2010 - {new Date().getFullYear()} Robert Li.
          {` `}
          <Link to="/privacy">Privacy policy</Link>
        </SiteFooterNotices>
      </div>
    </Container>
  )
}

export default Layout
