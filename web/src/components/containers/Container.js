import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  @media only screen and (min-width: 1024px) {
    padding: 0 8.05vw;
  }

  @media only screen and (min-width: 1200px) {
  }
  /* @media only screen and (min-width: 1200px) {
    padding: 0 7vw;
  }
  @media only screen and (min-width: 1600px) {
    max-width: 83.7vw;
    padding: 0 1vw;
  }
  @media only screen and (min-width: 2000px) {
    max-width: 1674px;
    padding: 0;
    margin: 0 auto;
  } */
  @media only screen and (min-width: 2000px) {
    max-width: 1674px;
    margin: 0 auto;
  }
`

export default Container
