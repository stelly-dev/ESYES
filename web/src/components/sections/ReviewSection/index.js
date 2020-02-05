import React from "react"
import BlockContent from "@sanity/block-content-to-react"
import Container from "../../containers/Container"
import {
  StyledSection,
  StyledImage,
  BlockQuote,
  LeftQuote,
  QuoteFooter,
  ReviewButton,
  ContentWrapper,
  CountersContainer,
  QuoteContainer,
} from "./styled.js"
import Counter from "./Counter"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"

const ReviewSection = props => (
  <StyledSection>
    <Container>
      <StyledImage
        fluid={getFluidGatsbyImage(
          props.image,
          { maxWidth: "822px" },
          clientConfig.sanity
        )}
        alt={props.altText}
      />
      <BlockQuote>
        <LeftQuote />
        <QuoteContainer>
          <BlockContent blocks={props.quote} />
          <QuoteFooter>{props.quoteAuthor}</QuoteFooter>
        </QuoteContainer>
        <ReviewButton to={props.buttonTo}>{props.buttonText}</ReviewButton>
      </BlockQuote>
      <CountersContainer>
        {props.reviewCounters.map((counter, i) => {
          return (
            <Counter
              key={counter["_key"]}
              prefix={counter.numberType === "DollarValue" ? "$" : ""}
              value={counter.counter}
              title={counter.title}
            />
            // <pre>{JSON.stringify(counter, null, 2)}</pre>
          )
        })}
      </CountersContainer>
    </Container>
  </StyledSection>
)

export default ReviewSection
