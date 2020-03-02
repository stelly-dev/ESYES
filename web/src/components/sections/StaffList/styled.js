import styled from "styled-components"
import Img from "gatsby-image"
import Grid from "../../containers/Grid"
export const StyledStaffList = styled.div``

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-size: 1.05rem;
  line-height: 1.5;
  max-width: 500px;
  margin: 0 auto;
  h3 {
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
    margin: 1rem 0;
  }
  p {
    margin: 1rem 0;
  }

  @media only screen and (min-width: 768px) {
    max-width: none;
  }
`

export const IconContainer = styled.div`
  width: 33vw;
  margin: 0 auto;
  margin-top: 1rem;
  text-align: center;
  border-top: 1px solid #0005;
  a {
    color: ${props => props.theme.colors.gray};
    text-align: center;
    padding: 12px;
    display: inline-block;
  }

  a:hover {
    color: white;
    background-color: ${props => props.theme.colors.gray};
  }
  :visited {
    color: ${props => props.theme.colors.gray};
  }
  @media only screen and (min-width: 768px) {
    text-align: right;
    margin: 1rem 0 0 0;
    margin-left: auto;
  }
`

export const StyledStaffCard = styled(Grid.Container)`
  margin: 1rem 0;
  padding: 1rem 0;
`

export const CircleContainer = styled.div`
  width: 100%;
  padding: 1rem;
  max-width: 300px;
  margin: 0 auto;
  border-radius: 50%;
  background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
    no-repeat padding-box;
`

export const DetailsContainer = styled.div``

export const StyledCircleImage = styled(Img)`
  height: 0;
  padding-bottom: 100%;
  width: 100%;
  border-radius: 50%;
  margin: 0 auto;
`

// export const StyledStaffList = styled.div`
//   margin-bottom: 50px;
//   padding-bottom: 100px;
//   margin-top: 73px;
// `

// export const BioContainer = styled.div`
//   display: grid;
//   max-width: 964px;
//   grid-template-columns: 1fr;
//   grid-template-rows: 37px 37px 1fr;
//   color: ${props => props.theme.colors.black};
//   margin-top: 30px;
//   p {
//     font-size: 16px;
//     line-height: 27px;
//   }
//   @media only screen and (min-width: 1200px) {
//     grid-gap: 27px;
//     p {
//       font-size: 20px;
//       line-height: 34px;
//     }
//     h3 {
//       font-size: 27px;
//       line-height: 33px;
//     }
//   }
// `

// export const StyledStaffCard = styled.div`
//   display: grid;
//   grid-template-columns: 1fr;
//   /* grid-template-columns: 180px 1fr; */
//   margin-top: 50px;
//   grid-gap: 10px;

//   h3 {
//     color: ${props => props.theme.colors.secondary};
//     text-transform: uppercase;
//   }
//   @media only screen and (min-width: 1200px) {
//     grid-template-columns: 420px 1fr;
//   }
// `

// export const CircleContainer = styled.div`
//   width: 249px;
//   height: 249px;
//   border-radius: 50%;
//   background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
//     no-repeat padding-box;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   margin: 0 auto;
//   @media only screen and (min-width: 1200px) {
//     width: 396px;
//     height: 396px;
//   }
// `

// export const StyledCircleImage = styled(Img)`
//   width: 225px;
//   height: 225px;
//   border-radius: 50%;
//   @media only screen and (min-width: 1200px) {
//     width: 357px;
//     height: 357px;
//   }
// `
