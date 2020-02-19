import styled from "styled-components"
import { Link } from "gatsby"
import Container from "../../containers/Container"
import BackgroundImage from "gatsby-background-image"

export const CircleLink = styled(Link)`
  color: white;
  text-decoration: none;
  :visited {
    color: white;
  }
  h1 {
    font-size: 4.84vw;
    line-height: 1.333;
    margin: 0;
    margin-bottom: 0.81vw;
    margin-top: -8vw;
  }
  p {
    font-size: 3.23vw;
    line-height: 0.75;
    font-weight: bold;
    font-style: italic;
  }

  @media only screen and (min-width: 768px) {
    h1 {
      font-size: 2.34vw;
      line-height: 1;
      margin-top: -3.5vw;
    }
    p {
      font-size: 1.56vw;
    }
  }
  @media only screen and (min-width: 1024px) {
    h1 {
      font-size: 2.1vw;
      margin-top: -3vw;
      line-height: 1.238;
    }
    p {
      font-size: 1.1vw;
      line-height: 1.2273;
    }
  }
  @media only screen and (min-width: 2000px) {
    h1 {
      margin-top: -60px;
      font-size: 38px;
      line-height: 52px;
    }
    p {
      font-size: 18px;
      line-height: 27px;
    }
    /* width: calc(100% - 20px); */
    /* height: calc(100% - 20px); */
  }
`

export const CircleContainer = styled.div`
  background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
    no-repeat padding-box;
  /* border-radius: 50%; */
  width: 44.35vw;
  height: 44.35vw;
  max-width: 44.35vw;
  max-height: 44.35vw;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (min-width: 768px) {
    max-width: 21.48vw;
    max-height: 21.48vw;
  }
  @media only screen and (min-width: 1024px) {
    max-width: 19.8vw;
    max-height: 19.8vw;
  }

  @media only screen and (min-width: 2000px) {
    max-width: 396px;
    max-height: 396px;
  }
`

export const CircleSection = styled.section`
  margin-top: 13.44vw;
  margin-bottom: 13.44vw;
  ${Container} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    height: 91.94vw;
  }

  @media only screen and (min-width: 768px) {
    max-height: 22.66vw;
    margin-top: 5.6vw;
    margin-bottom: 6.51vw;
    ${Container} {
    }
  }
  @media only screen and (min-width: 1024px) {
    margin-top: 5.5vw;
    margin-bottom: 6vw;
    max-height: 19.8vw;
    ${Container} {
      min-height: 19.8vw;
      max-height: 19.8vw;
    }
  }
  @media only screen and (min-width: 2000px) {
    max-height: 396px;
    margin-top: 110px;
    margin-bottom: 120px;

    ${Container} {
      padding: 0 !important;
      max-width: 1674px;
      min-height: 396px;
      max-height: 396px;
      flex-wrap: nowrap;
    }
  }
`

export const CircleBackgroundImage = styled(BackgroundImage)`
  border-radius: 50%;
  overflow: hidden;
  height: 41.2vw;
  width: 41.2vw;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    width: 41.2vw;
    height: 41.2vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center; /* padding-bottom: 1.5rem; */
    text-shadow: 0px 3px 6px #00000029;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 50%;
    transition: background-color 0.3s ease-in;
    :hover {
      background-color: transparent;
    }
  }
  @media only screen and (min-width: 768px) {
    max-width: 19.53vw;
    max-height: 19.53vw;
    div {
      max-width: 19.53vw;
      max-height: 19.53vw;
    }
  }

  @media only screen and (min-width: 1024px) {
    max-width: 17.9vw;
    max-height: 17.9vw;
    div {
      max-width: 17.9vw;
      max-height: 17.9vw;
    }
  }

  @media only screen and (min-width: 2000px) {
    max-height: 358px;
    max-width: 358px;
    div {
      max-height: 358px;
      max-width: 358px;
    }
  }
`

// export const CircleLink = styled(Link)`
//   text-decoration: none;
//   color: inherit;
//   :visited {
//     color: inherit;
//   }
// `

// export const CircleSection = styled.section`
//   ${Container} {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: space-between;
//     text-align: center;
//   }
//   @supports (display: grid) {
//     ${Container} {
//       display: grid;
//       grid-template-columns: 1fr 1fr;
//       grid-template-rows: 1fr 1fr;
//       grid-gap: 12px;
//       justify-content: center;
//       margin: 0 auto;
//     }
//   }
//   @media only screen and (min-width: 720px) {
//     @supports (display: grid) {
//       ${Container} {
//         grid-template-columns: repeat(4, 20vw);
//         grid-template-rows: 20vw;
//         justify-content: space-around;
//       }
//     }
//   }

// `

// export const CircleContainer = styled.div`
//   display: flex;
//   width: calc(50vw - 2rem - 20px);
//   height: calc(50vw - 2rem - 20px);
//   justify-content: center;
//   align-items: center;

//   @media only screen and (min-width: 768px) {
//     width: calc(25vw - 2rem - 20px);
//     height: calc(25vw - 2rem - 20px);
//   }

//   @supports (display: grid) {
//     width: 100%;
//     height: 100%;
//     border-radius: 50%;
//     background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0%
//       0% no-repeat padding-box;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     ::after {
//       content: "";
//       padding-bottom: 100%;
//     }
//   }
// `

// export const CircleBackgroundImage = styled(BackgroundImage)`
//   width: calc(50vw - 2rem);
//   height: calc(50vw - 2rem);
//   border-radius: 50%;
//   overflow: hidden;
//   color: white;
//   div {
//     width: 100%;
//     height: 100%;
//     display: flex;
//     flex-direction: column;
//     justify-content: center;
//     align-items: center;
//     /* padding-bottom: 1.5rem; */
//     text-shadow: 0px 3px 6px #00000029;
//     background-color: rgba(0, 0, 0, 0.4);
//     border-radius: 50%;
//     transition: all 0.3s ease-in;
//     :hover {
//       background-color: transparent;
//     }
//   }

//   h1 {
//     font-size: 18px;
//     margin: 0;
//   }
//   p {
//     font-size: 12px;
//     line-height: 16px;
//     font-weight: 700;
//     font-style: italic;
//   }
//   @media only screen and (min-width: 720px) {
//     width: calc(100% - 20px);
//     height: calc(100% - 20px);
//     h1 {
//       font-size: 2vw;
//       line-height: 1.8;
//     }
//     p {
//       font-size: 1.4vw;
//     }
//   }
// `
