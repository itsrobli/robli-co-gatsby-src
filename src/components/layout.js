import React from "react"
import { Link } from "gatsby"
import { BackToPhotosButton } from "./custom-styled-components"
import { Container } from "react-bootstrap"

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
        <header className="global-header">{header}</header>
        <main>{children}</main>
        <BackToPhotosButton href="https://robli.co/photos/">Hi</BackToPhotosButton>
        <footer>
          © 2010 - {new Date().getFullYear()} Robert Li
          {` `}
          <a href="https://www.gatsbyjs.com">Privacy Policy</a>
        </footer>
      </div>
    </Container>
  )
}

export default Layout
