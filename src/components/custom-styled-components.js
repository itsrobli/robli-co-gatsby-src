import styled from "styled-components"
import { Link } from "gatsby"
import Image from "gatsby-image"


export const BackToPhotosButton = styled(Link)`

  text-transform: uppercase;
  font-size: 17px;
  text-decoration: none;
  display: inline-block;
  padding: 0.2rem 0.6rem;
  border: 2px solid #fc7e0f;
  border-radius: 5px;
  color: #fc7e0f;

  // See https://styled-components.com/docs/advanced#referring-to-other-components
  // & references the parent to cleanly inherit styles
  &:hover,
  &:active,
  &:focus {
    background-color: #fc7e0f;
    border: 2px solid #fc7e0f;
    color: white
  }

`

export const PhotosListTile = styled.div`

  padding-bottom: 30px;
  //padding-left: 10px;
  //padding-right: 10px;

`
export const PhotosListSpacer10px = styled.div`

  padding-bottom: 10px;

`

export const PhotosListCategoryLabel = styled.span`

  color: #888;
  border-bottom: none;
  padding-left: 0.5em;
  text-decoration: none;
  font-size: 85%;
  text-align: right;
  &:hover,
  &:active,
  &:focus {
    font-weight: 500;
  }

`

export const PhotosListStyledLink = styled(Link)`
  
  &,
  &:hover,
  &:active,
  &:focus {
    border-bottom: none;
  }
  &:hover {
    font-weight: 500;
  }

`
export const PhotoCollectionHeroImage = styled(Image)`
  
  width: 90vw;
  max-width: 100vw;
  left: calc(-45vw + 50%);

`

export const TitleHeader = styled.h1`

  text-transform: uppercase;
  font-weight: 300;
  letter-spacing: 3px;
  margin-top: 20px;
  margin-bottom: 10px;

`

export const BlogPostMetadata = styled.div`

  font-size: 85%;
  color: #888;
  margin-bottom: 1.5em;
  line-height: 1.25em;
  
  a {
    color: #888;
    border-bottom: none;
    text-decoration: none;
    font-weight: normal;
  }
  
  a:hover {
    border-bottom: 2px solid #fc7e0f;
    font-weight: normal;
  }
`
export const CustomNav = styled.nav`
  
  margin-bottom: 50px;
  margin-top: 10px;
  padding-bottom: 20px;
  
`

export const CustomNavUl = styled.ul`

  float: right;
  margin: 0;
  padding: 0;
  display: inline;
  
`

export const CustomNavUlLi = styled.ul`

  margin-left: 0;
  padding: 5px;
  list-style: none;
  display: inline;
  text-transform: uppercase;
  
  a {
    text-decoration: none;
    color: #888;
    font-size: 13px;
    line-height: 13px;
  }
  
  &:hover {
    color: #333;
  }
  
`

export const CustomNavHomeButton = styled.span`

  text-transform: none;
  float: left;
  
  a {
    text-decoration: none;
    color: #888;
    font-size: 13px;
    line-height: 13px;
  }
  
  &:hover {
    color: #333;
  }
  
`