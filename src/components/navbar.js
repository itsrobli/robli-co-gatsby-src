import React from "react"
import { Link } from "gatsby"
import { CustomNav, CustomNavHomeButton, CustomNavUl, CustomNavUlLi } from "./custom-styled-components"
import { FaRss } from "@react-icons/all-files/fa/FaRss"


const Navbar = () => {
  return (
    <CustomNav>
      <CustomNavHomeButton>
        <Link to="/">Rob Li.co</Link>
      </CustomNavHomeButton>
      <CustomNavUl>
        <CustomNavUlLi>
          <Link to="/blog/">Blog</Link>
        </CustomNavUlLi>
        <CustomNavUlLi>
          <Link to="/photos">Photos</Link>
        </CustomNavUlLi>
        <CustomNavUlLi>
          <a href="https://github.com/itsrobli">Code</a>
        </CustomNavUlLi>
        <CustomNavUlLi>
          <Link to="/about">About</Link>
        </CustomNavUlLi>
        <CustomNavUlLi>
          <Link to="/rss.xml"><FaRss /></Link>
        </CustomNavUlLi>
      </CustomNavUl>
    </CustomNav>
  )
}

export default Navbar
