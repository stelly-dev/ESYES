import styled from "styled-components"

export const BlockSection = styled.section`
  color: ${props => props.theme.colors.black};
  h1 {
    font-size: 65px;
    line-height: 85px;
    text-align: center;
  }
  h2 {
    color: ${props => props.theme.colors.primary};
    font-size: 45px;
    line-height: 58px;
    margin: 50px 0;
  }
  p {
    font-size: 20px;
    line-height: 34px;
  }
  em {
    width: 100%;
    display: block;
    text-align: center;
    margin-bottom: 50px;
  }
`
