import React from "react"
import { Link } from "gatsby"
import { StyledNav } from "./styled"
import Search from "./Search"

const Nav = ({ links }) => (
  <StyledNav>
    <ul>
      {links.map(link => (
        <li key={link.title}>
          <Link to={link.to}>{link.title}</Link>
        </li>
      ))}
      <li>
        <Search />
      </li>
    </ul>
  </StyledNav>
)

export default Nav
