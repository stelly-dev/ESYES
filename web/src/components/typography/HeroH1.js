import styled from "styled-components"
import { interpolateSizes } from "../../utils/index.bak2."

const HeroH1 = styled.h1`
  text-align: center;
  max-width: 50%;
  margin: 3rem auto;
  font-size: ${interpolateSizes(22, 25, 0, 350)};
  line-height: ${interpolateSizes(30, 35, 0, 350)};
  @media (min-width: 350px) {
    font-size: ${interpolateSizes(25, 36, 350, 768)};
    line-height: ${interpolateSizes(35, 51, 350, 768)};
  }
  @media (min-width: 1024px) {
    font-size: ${interpolateSizes(36, 65, 1024, 2000)};
    line-height: ${interpolateSizes(51, 82, 1024, 2000)};
  }

  @media (min-width: 2000px) {
    font-size: 65px;
    line-height: 85px;
  }
`

export default HeroH1
