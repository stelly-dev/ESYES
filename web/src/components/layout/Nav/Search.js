import React from "react"
import styled from "styled-components"
import { FiSearch } from "react-icons/fi"

const StyledSearchIcon = styled(FiSearch)`
  vertical-align: middle;
  width: 22px;
  height: 20px;
  @media only screen and (min-width: 1024px) {
    width: 1.1vw;
    height: 1.1vw;
  }
  @media only screen and (min-width: 2000px) {
    width: 22px;
    height: 20px;
  }
`

const Search = () => <StyledSearchIcon />

export default Search
