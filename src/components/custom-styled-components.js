import styled from "styled-components"
import { Link } from "gatsby"


export const BackToPhotosButton = styled.a`

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
