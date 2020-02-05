import styled from "styled-components"
import { Link } from "gatsby"

export const StyledHeader = styled.header`
  box-shadow: 0px 3px 6px #00000029;
  background-color: white;
  box-sizing: border-box;
  height: 222px;
  position: relative;
  z-index: 1;
  > div {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding-top: 25px;
    padding-bottom: 25px;
  }
  @media only screen and (min-width: 600px) {
    height: 152px;
    > div {
      flex-direction: row;
    }
  }
  @media only screen and (min-width: 1310px) {
    height: 195px;
    > div {
      flex-direction: row;
    }
  }
`

export const LogoContainer = styled(Link)`
  @media only screen and (min-width: 320px) {
    min-width: 200px;
  }
  @media only screen and (min-width: 375px) {
    padding: 0;
  }
  display: block;
  height: 100%;
  width: 100%;
  max-width: 343px;
  max-height: 102px;
  min-height: 102px;
  min-width: 343px;
  @media only screen and (min-width: 1200px) {
    max-width: 300px;
  }
  @media only screen and (min-width: 1400px) {
    max-width: 396px;
    max-height: 118px;
    margin-right: 50px;
  }
`
