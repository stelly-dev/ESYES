import React, { useState, useEffect, useReducer } from "react"
import styled, { css } from "styled-components"
import Grid from "../../containers/Grid"
import EnergySmart from "./EnergySmart"
import { navigate } from "@reach/router"
import { FiAlertTriangle, FiChevronDown } from "react-icons/fi"
import { IoMdInformationCircleOutline } from "react-icons/io"
import {
  SelectWrapper,
  Form,
  FormButton,
  Input,
  Select,
  FormContainer,
  FormGrid,
  PrivacyLink,
  ErrorBox,
} from "./styles"

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

const Error = ({ error = "" }) =>
  error.length > 0 ? (
    <ErrorBox>
      <FiAlertTriangle color="red" fontSize="3rem" />
      <span>{error}</span>
    </ErrorBox>
  ) : null

const Contact = ({ location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [city, setCity] = useState("")
  const [homePriorityOne, setHomePriorityOne] = useState("")
  const [homePriorityTwo, setHomePriorityTwo] = useState("")
  const [homePriorityThree, setHomePriorityThree] = useState("")
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState({
    name: false,
    email: false,
    address: false,
    city: false,
    form: false,
    message: "",
  })

  const validateEmail = email => {
    return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
  }

  const validateName = name => {
    return name.length > 2
  }

  const validateAddress = address => {
    return address.length > 5
  }

  const validateCity = city => {
    return city != ""
  }
  const onSubmit = e => {
    e.preventDefault()
    const result = {
      name,
      email,
      phone,
      address,
      city,
      homePriorityOne,
      homePriorityTwo,
      homePriorityThree,
    }
    if (validateForm()) {
      setSubmitted(true)
      setTimeout(() => {
        navigate("/thank-you/")
      }, 1000)
    } else {
      setError({
        name: validateName(name),
        address: validateAddress(address),
        email: validateEmail(email),
        city: validateCity(city),
        message: "There are items that require your attention",
      })
    }
  }

  const validateForm = () => {
    const emailError = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
      email
    )
    const nameError = name.length > 2
    const addressError = address.length > 5
    const cityError = city != ""

    return (
      email.length > 0 &&
      name.length > 0 &&
      address.length > 0 &&
      city.length > 0
    )
  }

  return (
    <FormContainer location={location}>
      <EnergySmart location={location} before={"Contact"} after={"Today!"} />
      {/* <Error error={error.message} /> */}
      <Form>
        <FormGrid>
          <Grid.Row display={[null, null, null, "flex"]}>
            <Grid.Col
              flexBasis={[null, null, null, "33.33%"]}
              marginRight={[null, null, null, "1rem"]}
            >
              <Input
                type="text"
                placeholder="Name*"
                value={name}
                onChange={e => setName(e.target.value)}
                aria-label="Full Name"
                isError={error.name}
              />
            </Grid.Col>
            <Grid.Col
              marginRight={[null, null, null, "1rem"]}
              flexBasis={[null, null, null, "33.33%"]}
            >
              <Input
                type="text"
                placeholder="Email*"
                value={email}
                onChange={e => setEmail(e.target.value)}
                aria-label="Email Address"
                isError={error.email}
              />
            </Grid.Col>
            <Grid.Col flexBasis={[null, null, null, "33.33%"]}>
              <Input
                type="text"
                placeholder="Phone"
                value={phone}
                onChange={e => setPhone(e.target.value)}
                aria-label="Phone Number"
              />
            </Grid.Col>
          </Grid.Row>
          <Grid.Row
            display={["flex"]}
            flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
          >
            <Grid.Col
              flexBasis={["100%", "100%", "100%", "calc(66.66% + 2rem - 4px)"]}
              marginRight={[null, null, null, "1rem"]}
            >
              <Input
                type="text"
                placeholder="Address*"
                value={address}
                onChange={e => setAddress(e.target.value)}
                aria-label="Address"
                isError={error.address}
              />
            </Grid.Col>
            <Grid.Col
              flexBasis={["75%", "75%", "75%", "calc(22.22% - 1rem + 5px)"]}
              marginRight={["1rem"]}
            >
              <SelectWrapper>
                <Select
                  isError={error.city}
                  required
                  onChange={e => setCity(e.target.value)}
                  defaultValue=""
                >
                  <option value="" disabled>
                    City*
                  </option>
                  {cities.map(city => (
                    <option key={city} value={city} style={{ display: "flex" }}>
                      {capitalizeWords(city)}
                    </option>
                  ))}
                </Select>
                <i className="select-icon">
                  <FiChevronDown />
                </i>
              </SelectWrapper>
            </Grid.Col>
            <Grid.Col
              flexBasis={[
                "calc(25% - 1rem - 2px)",
                "calc(25% - 1rem - 2px)",
                "calc(25% - 1rem - 2px)",
                "11.11%",
              ]}
            >
              <Input as="div" style={{ color: "#777" }}>
                CO
              </Input>
            </Grid.Col>
          </Grid.Row>
          <Grid.Row display={[null, null, null, "flex"]}>
            <Grid.Col
              flexBasis={[null, null, null, "33.33%"]}
              marginRight={[null, null, null, "1rem"]}
            >
              <Input
                type="text"
                placeholder="Home Priority 1"
                value={homePriorityOne}
                onChange={e => setHomePriorityOne(e.target.value)}
                aria-label="Home Priority One"
              />
            </Grid.Col>
            <Grid.Col
              flexBasis={[null, null, null, "33.33%"]}
              marginRight={[null, null, null, "1rem"]}
            >
              <Input
                type="text"
                placeholder="Home Priority 2"
                value={homePriorityTwo}
                onChange={e => setHomePriorityTwo(e.target.value)}
                aria-label="Home Priority Two"
              />
            </Grid.Col>
            <Grid.Col flexBasis={[null, null, null, "33.33%"]}>
              <Input
                type="text"
                placeholder="Home Priority 3"
                value={homePriorityThree}
                onChange={e => setHomePriorityThree(e.target.value)}
                aria-label="Home Priority Three"
              />
            </Grid.Col>
          </Grid.Row>
        </FormGrid>
        <FormButton
          onClick={e => onSubmit(e)}
          value={error.form ? "Submit Form" : "Contact EnergySmart"}
        />
      </Form>
      <PrivacyLink href="https://www.bouldercounty.org/privacy-policy/">
        Privacy Policy
      </PrivacyLink>
    </FormContainer>
  )
}

export default Contact
