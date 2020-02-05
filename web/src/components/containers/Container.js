import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media only screen and (min-width: 992px) {
    padding: 0 5vw;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 7vw;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 83.7vw;
    padding: 0 1vw;
  }
  @media only screen and (min-width: 2000px) {
    padding: 0 4rem;
  }
`

export default Container
