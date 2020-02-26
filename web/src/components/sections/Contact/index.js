import React, { useState, useEffect, useReducer } from "react"
import styled, { css } from "styled-components"

const cities = [
  "boulder",
  "erie",
  "jamestown",
  "lafayette",
  "longmont",
  "louisville",
  "lyons",
  "nederland",
  "superior",
  "ward",
  "allenspark",
  "coal creek canyon",
  "eldora",
  "eldorado springs",
  "gold hill",
  "gunbarrel",
  "hygiene",
  "niwot",
]

const capitalizeWords = str => {
  str = str.split(" ")
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
  }
  return str.join(" ")
}

const autofillMixin = css`
  :-webkit-autofill {
    -webkit-box-shadow: 0 0 0px 1000px white inset;
    background-color: transparent;
  }
`

const Section = styled.section``

const Form = styled.form``

const formElementStyles = css`
  box-sizing: border-box;
  height: 46px;
  margin: 0 1rem 11px 1rem;
  padding: 10px;
  width: 100%;
  max-width: ${props => props.maxWidth || `calc(100% - (2rem + 2px))`};
  outline: ${props => props.theme.colors.secondary};
  border: 1px solid ${props => props.theme.colors.gray};
  border-radius: 4px;
  font-size: 18px;
  background-color: ${props => props.theme.colors.white};
`

const Input = styled.input`
  ${formElementStyles};
  color: ${props => props.theme.colors.black};
  :placeholder {
    color: ${props => props.theme.colors.gray};
  }
  ${autofillMixin};
  @media only screen and (min-width: 768px) {
    /* TODO: change max-width here */
  }
`

const Select = styled.select`
  ${formElementStyles}
  background-color: ${props => props.theme.colors.white};
  option:first-of-type {
    color: ${props => props.theme.colors.gray};
  }
  :invalid {
    color: ${props => props.theme.colors.gray};
  }
  ${autofillMixin}; 
`

const Grid = styled.div``

const Row = styled.div`
  display: ${props => props.display || "block"}; /* initial style */
  flex-wrap: ${props => (props.wrap ? "wrap" : "nowrap")};
  @media only screen and (min-width: 768px) {
    display: flex;
  }
`

const Col = styled.div`
  box-sizing: border-box;
  flex: ${props => (props.basis ? `1 0 calc(${props.basis})` : "33%")};
`

const Contact = ({ location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [homePriorityOne, setHomePriorityOne] = useState("")
  const [homePriorityTwo, setHomePriorityTwo] = useState("")
  const [homePriorityThree, setHomePriorityThree] = useState("")

  return (
    <Section>
      <Form>
        <Grid>
          <Row>
            <Col>
              <Input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={e => setName(e.target.value)}
                aria-label="Full Name"
              />
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Email*"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-label="Email Address"
              />
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                aria-label="Phone Number"
              />
            </Col>
          </Row>
          <Row display="flex" wrap="true">
            <Col basis="100%">
              <Input
                type="text"
                placeholder="Address*"
                value={address}
                onChange={e => setAddress(e.target.value)}
                aria-label="Address"
              />
            </Col>
            <Col>
              <Select required onChange={e => setCity(e.target.value)}>
                <option value="" disabled selected>
                  City*
                </option>
                {cities.map(city => (
                  <option key={city} value={city} style={{ display: "flex" }}>
                    {capitalizeWords(city)}
                  </option>
                ))}
              </Select>
            </Col>
            <Col>
              <Input as="div">CO</Input>
            </Col>
          </Row>
          <Row>
            <Col>
              <Input
                type="text"
                placeholder="Home Priority 1"
                value={homePriorityOne}
                onChange={e => setHomePriorityOne(e.target.value)}
                aria-label="Home Priority One"
              />
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Home Priority 2"
                value={homePriorityTwo}
                onChange={e => setHomePriorityTwo(e.target.value)}
                aria-label="Home Priority Two"
              />
            </Col>
            <Col>
              <Input
                type="text"
                placeholder="Home Priority 3"
                value={homePriorityThree}
                onChange={e => setHomePriorityThree(e.target.value)}
                aria-label="Home Priority Three"
              />
            </Col>
          </Row>
        </Grid>
      </Form>
    </Section>
  )
}

export default Contact
