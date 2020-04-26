import React from "react"
import { FaQuoteLeft } from "react-icons/fa"
import { Link } from "gatsby"
import BubbleText from "./BubbleText"
import styled from "styled-components"
import Counter from "./Counter"
import Img from "gatsby-image"
import { getFluidGatsbyImage } from "gatsby-source-sanity"
import clientConfig from "../../../../client-config"
import Grid from "../../containers/Grid"

const Quote = ({ quote, author, children }) => (
  <QuoteWrapper>
    <i className="quote-icon_wrapper">
      <FaQuoteLeft className="quote-icon" />
    </i>
    <div className="quote-text_wrapper">
      <div className="quote-text">{quote}</div>
      <div className="quote-text_author">{author}</div>
    </div>
    <div className="quote-text_button">{children}</div>
  </QuoteWrapper>
)

const QuoteButton = styled(Link)`
  background-color: ${props => props.theme.colors.secondary};
  color: white;
  border: 1px solid ${props => props.theme.colors.secondary};
  :hover {
    background-color: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.secondary};
  }
  display: inline-flex;
  text-align: center;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0.5rem;
  transition: background-color 300ms ease-in-out;
  text-decoration: none;
  cursor: pointer;
  @media only screen and (min-width: 1024px) {
    padding: 0.5rem 2rem;
  }
`

const QuoteWrapper = styled.div`
  @media only screen and (min-width: 1024px) {
    position: absolute;
    top: 2rem;
    right: -5rem;
    left: 0;
    z-index: 1;
    background-color: white;
    padding: 1rem 1.4rem;
  }
  .quote-icon_wrapper {
    font-size: 4rem;
    color: #0ea6c6;
    opacity: 0.15;
    position: absolute;
  }
  .quote-text_wrapper {
    padding-left: 3rem;
    padding-top: 2.4rem;
  }
  .quote-text {
    font-size: 1rem;
    line-height: 1.5;
    font-weight: bold;
    font-style: italic;
    color: ${props => props.theme.colors.black};
  }
  .quote-text_author {
    text-align: right;
    font-size: 0.85rem;
    line-height: 3.5;
    color: ${props => props.theme.colors.gray};
  }
  .quote-text_button {
    margin-top: 1rem;
    display: flex;
    justify-content: center;
  }
  @media only screen and (min-width: 768px) {
  }
  @media only screen and (min-width: 1024px) {
    .quote-text_button {
      margin-top: 0;
    }
    .quote-text {
      font-size: 1.2rem;
    }
    .quote-text_author {
      line-height: 4;
    }
    .quote-text_wrapper {
      padding-top: 2.4rem;
    }
  }
  @media only screen and (min-width: 1200px) {
    .quote-text {
      font-size: 1.4rem;
    }
    .quote-text_wrapper {
      padding-top: 2rem;
    }
  }
`
// Note: Styles for the counter text
// are controlled in ./BubbleText
// using classNames counter_value
// and counter_title

const BubbleLayout = styled(Grid.Row)`
  @media only screen and (min-width: 1024px) {
    padding-top: 2rem;
    ${Grid.Col}:first-of-type {
      margin-right: 1rem;
    }
  }
`

const ReviewSection = ({
  altText,
  buttonText,
  buttonTo,
  image,
  quoteAuthor,
  quote,
  reviewCounters,
  key,
}) => {
  return (
    <Grid.Container key={key}>
      <Grid.Row
        display="flex"
        flexDirection={["column-reverse", "column-reverse", "row"]}
      >
        <Grid.Col
          marginRight={[0, 0, "2rem"]}
          flexBasis={["100%", "100%", "50%"]}
          display={[null, null, null, "flex"]}
          flexDirection={[null, null, null, "column"]}
        >
          <Grid.Row flexBasis={[null, null, null, "50%"]} position={"relative"}>
            <Quote quote={quote} author={quoteAuthor}>
              <QuoteButton to={buttonTo || ""}>{buttonText}</QuoteButton>
            </Quote>
          </Grid.Row>
          <BubbleLayout
            display={[null, null, null, "flex"]}
            flexBasis={[null, null, null, "50%"]}
          >
            {reviewCounters &&
              reviewCounters.map(counter => (
                <Grid.Col
                  key={counter["_key"]}
                  flexBasis={[null, null, null, "100%"]}
                >
                  <BubbleText>
                    <Counter
                      prefix={counter.prefix}
                      value={counter.counter}
                      title={counter.title}
                    />
                  </BubbleText>
                </Grid.Col>
              ))}
          </BubbleLayout>
        </Grid.Col>
        <Grid.Col flexBasis={("100%", "100%", "50%")}>
          <Img
            alt={altText}
            fluid={getFluidGatsbyImage(
              image,
              { maxWidth: 562 },
              clientConfig.sanity
            )}
          />
        </Grid.Col>
      </Grid.Row>
    </Grid.Container>
  )
}

export default ReviewSection
