// import React, { useState  } from "react"
// import styled, {css} from "styled-components"
// import { FiSearch } from "react-icons/fi"
// import {useFlexSearch} from 'react-use-flexsearch'
// import {graphql, StaticQuery} from 'gatsby'
// import {Formik, Form, Field} from 'formik'
// import {navigate, Location} from "@reach/router"

// export const searchQuery = graphql`
//     query SearchQuery {
//       localSearchPages {
//         index
//         store
//     }
//   }
// `

// const checkLocale = location => {
//   return location.pathname.match(/\/es\//)
// }

// const SearchQueryComponent = ({data, searchActive, scrolled}) => {
//   const [searchTerm, setSearchTerm] = useState(null);
//   // see https://github.com/angeloashmore/gatsby-plugin-local-search/issues/18
//   // for why we're parsing return from gatsby.
//   const results = useFlexSearch(searchTerm, data.localSearchPages.index, JSON.parse(data.localSearchPages.store));
//   console.log(results);
//   return (
//     <SearchForm scrolled={scrolled} searchActive={searchActive ? 1 : 0}>
//       <Location>
//         {({location}) =>
//           <Formik
//             initialValues={{searchTerm: ''}}
//             onSubmit={(values, {setSubmitting}) => {
//               setSearchTerm(values.searchTerm)
//               setSubmitting(false)
//               checkLocale(location) ? navigate('/es/search/', {state: {results}}) : navigate('/search/', {state: {results}});
//             }}
//          >
//             <Form>
//               <StyledField name="searchTerm" placeholder="SEARCH" />
//           </Form>
//           </Formik>
//         }
//       </Location>
//     </SearchForm>
//   )
// }

// const Search = props => {
//   const [searchActive, setSearchActive] = useState(false);
//   const {scrolled} = props;
//   return (
//     <>
//       <Input searchActive={searchActive ? 1 : 0}>
//       <StaticQuery
//         query={searchQuery}
//         render={(data) => data && data.localSearchPages ? <SearchQueryComponent data={data} searchActive={searchActive ? 1 : 0} scrolled={scrolled}/> : null}
//       />
//       </Input>
//       <SearchIconContainer>
//       <StyledSearchIcon
//         onClick={() =>
//           setSearchActive(!searchActive)
//         }
//         scrolled={scrolled}
//       />
//       </SearchIconContainer >

//     </>
//   )
// }

// export const autofillMixin = css`
//   :-webkit-autofill {
//     -webkit-box-shadow: 0 0 0px 1000px white inset;
//     background-color: transparent;
//   }
// `

// export const formElementStyles = css`
//   box-sizing: border-box;
//   height: 3rem;
//   padding: 1rem;
//   outline: ${props => props.theme.colors.secondary};
//   border: 1px solid ${props => props.theme.colors.gray};
//   border-radius: 1px;
//   font-size: 18px;
//   background-color: ${props => props.theme.colors.white};
//   position: relative;
//   :focus {
//     border: ${props =>
//       props.error
//         ? "3px solid red"
//         : `2px solid ${props.theme.colors.secondary}`};
//   }
// `
// export const StyledField = styled(Field)`
//   ${formElementStyles};
//   color: ${props => props.theme.colors.black};
//   :placeholder {
//     color: ${props => props.theme.colors.gray};
//   }
//   ${autofillMixin};
//   border: ${props =>
//     props.error
//       ? "3px solid #ff22255a"
//       : `1px solid ${props => props.theme.colors.gray}`};
//   background-color: ${props => (props.error ? "#ff222220" : "white")};
// `

// const StyledSearchIcon = styled(FiSearch)`
//   vertical-align: middle;
//   width: 22px;
//   height: 20px;
//   margin-top: -3px;
//   margin-bottom: -1px;
//   cursor: pointer;
//   @media only screen and (min-width: 1024px) {
//     width: ${props => (props.scrolled ? "1rem" : "1.2rem")};
//     height: ${props => (props.scrolled ? "1rem" : "1.2rem")};
//   }
//   position: relative;
// `

// const SearchIconContainer = styled.div`
//   ::after  {
//    content: "";
//    position: absolute;
//    top: calc(100% + 1px);
//    left: 50%;
//    transform: translateX(-50%);
//    height: 4px;
//    width: ${props => (props.searchActive ? "100px" : "0%")};
//    background-color: ${props => props.theme.colors.secondary};
//    transition: all 250ms ease-in-out;
//   }
//   :hover:after {
//     width: 100%;
//   }
// `

// const SearchForm = styled.div`
//   position: absolute;
//   right: -2px ;
//   top: ${props => props.scrolled ? `calc(100% + 1rem )` : `calc(100% + 1.5rem - 4px)`}
// `

// const Input = styled.div`
//   display: ${props => (props.searchActive ? "block" : "none")};
// `

//       export default Search
import React from "react"

const Search = () => {
  return <div />
}

export default Search
