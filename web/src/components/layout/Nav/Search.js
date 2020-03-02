import React from "react"
import styled from "styled-components"
import { FiSearch } from "react-icons/fi"

const StyledSearchIcon = styled(FiSearch)`
  vertical-align: middle;
  width: 22px;
  height: 20px;
  @media only screen and (min-width: 1024px) {
    width: ${props => (props.scrolled ? "1rem" : "1.2rem")};
    height: ${props => (props.scrolled ? "1rem" : "1.2rem")};
  }
`

const Search = ({ scrolled }) => <StyledSearchIcon scrolled={scrolled} />

export default Search
