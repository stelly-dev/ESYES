import React from "react"
import slugify from "slugify"
import { Location } from "@reach/router"
import {
  TextLink,
  LeftQuote,
  Slim,
  ArticleLink,
  StyledChevron,
  Centered,
  QuoteText,
  QuoteSection,
} from "./styled"

const internalLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return (
    <Location>
      {({ location }) => (
        <LocaleTextLink
          location={location}
          to={to === "/home-page/" ? "/" : to}
        >
          {children}
        </LocaleTextLink>
      )}
    </Location>
  )
}

const LocaleTextLink = ({ to, children, location }) => {
  if (location.pathname.match(/\/es\//)) {
    console.log("MATCH", to)
    return <TextLink to={`/es/${to}`}>{children}</TextLink>
  } else {
    return <TextLink to={to}>{children}</TextLink>
  }
}

const link = ({ mark, children }) => {
  const { href = "" } = mark
  const tabProps = mark.newTab ? { target: "_blank" } : null
  return (
    <TextLink as="a" href={href} {...tabProps}>
      {children}
    </TextLink>
  )
}

const telephone = ({ mark, children }) => {
  const { number = "" } = mark
  return (
    <TextLink as="a" href={`tel:${number}`}>
      {children}
    </TextLink>
  )
}

const fileLink = ({ mark, children }) => {
  const tabProps = mark.newTab ? { target: "_blank" } : null
  return (
    <TextLink as="a" href={mark.reference.file.asset.url} {...tabProps}>
      {children}
    </TextLink>
  )
}

const slim = props => {
  return <Slim>{props.children}</Slim>
}

const chevronLink = ({ mark, children }) => {
  const { reference = {} } = mark
  const to = `/${slugify(reference.pageName).toLowerCase()}/`
  return (
    <>
      <br />
      <ArticleLink to={to}>
        {children}
        <StyledChevron />
      </ArticleLink>
    </>
  )
}

const Quote = props => {
  return (
    <QuoteSection>
      <LeftQuote />
      <QuoteText>{props.children}</QuoteText>
    </QuoteSection>
  )
}

const center = props => {
  return <Centered>{props.children}</Centered>
}

export {
  internalLink,
  LocaleTextLink,
  link,
  telephone,
  fileLink,
  slim,
  chevronLink,
  Quote,
  center,
}
