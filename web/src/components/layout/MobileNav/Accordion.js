import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import slugify from "slugify"

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid
    ${props =>
      props.open ? props.theme.colors.secondary : props.theme.colors.black};
  transform: ${props => (!props.open ? "rotate(180deg)" : "rotate(0deg)")};
  transition: all 350ms ease-in;
`

const TriangleWrapper = styled.div`
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`

const StyledAccordionItem = styled.li`
  > div:first-of-type {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  > div:last-of-type {
    display: ${props => (props.open ? "block" : "none")};
    ul {
      transition: all 350ms ease-in;
      list-style: none;
      margin-left: 2ch;
      a {
        color: ${props => props.theme.colors.black};
        text-decoration: none;
        font-size: 16px;
      }
      a:hover {
        color: ${props => props.theme.colors.secondary};
      }
    }
  }
  > div:first-of-type a {
    color: ${props =>
      props.open ? props.theme.colors.secondary : props.theme.colors.black};
    text-decoration: ${props => (props.open ? "underline" : "none")};
    font-size: 18px;
  }
`

const AccordionItem = ({ linkTo, linkName, subNav }) => {
  const [open, setOpen] = useState(false)

  return (
    <StyledAccordionItem open={open}>
      <div>
        <Link to={`/${slugify(linkTo).toLowerCase()}/`}>{linkName}</Link>
        {subNav.length > 0 ? (
          <TriangleWrapper onClick={() => setOpen(!open)}>
            <Triangle open={open} />
          </TriangleWrapper>
        ) : null}
      </div>
      <div>
        <ul>
          {subNav.map((link, i) => (
            <li key={link._key}>
              <Link
                to={`/${slugify(link.linkDestination.pageName).toLowerCase()}/`}
              >
                {link.linkName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </StyledAccordionItem>
  )
}

const StyledAccordion = styled.ul`
  list-style: none;
  div li a:hover,
  li a:hover {
    color: ${props => props.theme.colors.black};
  }
  li a {
    padding: 10px 0;
  }
  div li {
    padding: 10px 0;
  }
`

const Accordion = ({ links }) => {
  return (
    <StyledAccordion>
      {links.map((link, i) => (
        <AccordionItem
          key={link._key}
          linkTo={`/${slugify(
            link.linkName.linkDestination.pageName
          ).toLowerCase()}/`}
          linkName={link.linkName.linkName}
          subNav={link.linkChildren}
        />
      ))}
    </StyledAccordion>
  )
}

export default Accordion
