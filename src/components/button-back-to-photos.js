import styled from "styled-components"

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
