import styled from "styled-components"
import Container from "../../containers/Container"
import Img from "gatsby-image"
import { Link } from "gatsby"
import { FaChevronRight } from "react-icons/fa"

export const StyledImage = styled(Img)`
  height: 71.51vw;
  /* width: 91.94vw; */
  margin: 0 auto;
  @media only screen and (min-width: 768px) {
    width: 46.22vw;
    height: 35.94vw;
  }
  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 2000px) {
  }
`

export const StyledSection = styled.section`
  @media only screen and (min-width: 768px) {
    > ${Container} {
      display: flex;
      justify-content: space-between;
      ${Container} {
        padding: 1rem;
      }
    }
  }

  @media only screen and (min-width: 1024px) {
  }
  @media only screen and (min-width: 2000px) {
  }
`
export const Article = styled.article`
  @media only screen and (min-width: 768px) {
    width: 46.22vw;
    h3 {
      margin-top: 0;
    }
  }

  @media only screen and (min-width: 1024px) {
  }

  @media only screen and (min-width: 2000px) {
  }
`
export const ArticleLink = styled(Link)``

export const StyledChevron = styled(FaChevronRight)``

// export const StyledImage = styled(Img)`
//   width: 100%;
//   max-height: 275px;
//   @media only screen and (min-width: 1024px) {
//     max-height: 600px;
//     padding-top: calc(770 / 600);
//   }
// `

// export const StyledSection = styled.section`
//   ${Container} {
//     display: grid;
//     grid-template-columns: 1fr;
//     grid-template-rows: 1fr auto;
//   }
//   @media only screen and (min-width: 600px) {
//     ${Container} {
//       grid-gap: 40px;
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: 1fr;
//     }
//   }
// `

// export const Article = styled.article`
//   h3,
//   h4 {
//     color: ${props => props.theme.colors.primary};
//   }
//   h4 {
//     font-style: italic;
//   }
//   h3 {
//     font-size: 21px;
//     line-height: 28px;
//   }
//   strong {
//     color: ${props => props.theme.colors.secondary};
//   }
//   strong {
//     font-size: 16px;
//     line-height: 25.6px;
//     display: inline;
//   }
//   div {
//     margin-top: 33px;
//   }
//   @media only screen and (min-width: 600px) {
//     div:first-of-type {
//       margin-top: 0px;
//     }
//   }
//   p {
//     line-height: 25.6px;
//     color: ${props => props.theme.colors.black};
//   }
//   @media only screen and (min-width: 1200px) {
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     margin-left: 42px;
//     p,
//     strong {
//       font-size: 18px;
//       line-height: 1.7;
//     }
//     h3 {
//       font-size: 31px;
//       line-height: 58px;
//     }
//     h4 {
//       font-size: 25px;
//       line-height: 57px;
//     }
//   }
// `

// export const ArticleLink = styled(Link)`
//   text-decoration: none;
//   color: ${props => props.theme.colors.secondary};
//   font-weight: bold;
//   font-size: 18px;
//   line-height: 23px;
//   transition: color 250ms ease-in;
//   :visited {
//     color: ${props => props.theme.colors.secondary};
//   }
//   :hover {
//     color: ${props => props.theme.colors.primary};
//   }
//   @media only screen and (min-width: 1200px) {
//     font-size: 18px;
//     line-height: 33px;
//   }
// `

// export const StyledChevron = styled(FaChevronRight)`
//   vertical-align: center;
//   padding-top: 4px;
// `
