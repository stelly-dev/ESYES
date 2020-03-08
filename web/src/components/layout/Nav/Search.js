import React, { useState, useEffect } from "react"
import styled from "styled-components"
import { FiSearch } from "react-icons/fi"

const StyledSearchIcon = styled(FiSearch)`
  vertical-align: middle;
  width: 22px;
  height: 20px;
  margin-top: -3px;
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    width: ${props => (props.scrolled ? "1rem" : "1.2rem")};
    height: ${props => (props.scrolled ? "1rem" : "1.2rem")};
  }
`

const SearchForm = styled.form`
  position: absolute;
  right: 0;
  top: 50px;
`

const Input = styled.input`
  display: ${props => (props.searchActive ? "block" : "none")};
`

const Search = ({ scrolled }) => {
  const [state, setState] = useState({
    searchActive: false,
    searchTerm: "",
  })
  return (
    <>
      <StyledSearchIcon
        onClick={() =>
          setState({ ...state, searchActive: !state.searchActive })
        }
        scrolled={scrolled}
      />
      <SearchForm searchActive={state.searchActive}>
        <Input
          type="text"
          onChange={e => setState({ ...state, searchTerm: e.target.value })}
          searchActive={state.searchActive}
        />
      </SearchForm>
    </>
  )
}

export default Search
