import styled from "styled-components"
import Img from "gatsby-image"
export const StyledStaffList = styled.div`
  margin-bottom: 50px;
  padding-bottom: 100px;
  margin-top: 73px;
`

export const BioContainer = styled.div`
  display: grid;
  max-width: 964px;
  grid-template-columns: 1fr;
  grid-template-rows: 37px 37px 1fr;
  color: ${props => props.theme.colors.black};
  margin-top: 30px;
  p {
    font-size: 16px;
    line-height: 27px;
  }
  @media only screen and (min-width: 1310px) {
    grid-gap: 27px;
    p {
      font-size: 20px;
      line-height: 34px;
    }
    h3 {
      font-size: 27px;
      line-height: 33px;
    }
  }
`

export const StyledStaffCard = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  /* grid-template-columns: 180px 1fr; */
  margin-top: 50px;
  grid-gap: 10px;

  h3 {
    color: ${props => props.theme.colors.secondary};
    text-transform: uppercase;
  }
  @media only screen and (min-width: 1310px) {
    grid-template-columns: 420px 1fr;
  }
`

export const CircleContainer = styled.div`
  width: 249px;
  height: 249px;
  border-radius: 50%;
  background: transparent linear-gradient(90deg, #f9a33e 0%, #fee006 100%) 0% 0%
    no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  @media only screen and (min-width: 1310px) {
    width: 396px;
    height: 396px;
  }
`

export const StyledCircleImage = styled(Img)`
  width: 225px;
  height: 225px;
  border-radius: 50%;
  @media only screen and (min-width: 1310px) {
    width: 357px;
    height: 357px;
  }
`
