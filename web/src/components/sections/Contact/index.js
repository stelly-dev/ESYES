import React from "react"
import { Formik, Form, useField } from "formik"
import { FiChevronDown } from "react-icons/fi"
import * as Yup from "yup"
import EnergySmart from "./EnergySmart"
import styled from "styled-components"
import Grid from "../../containers/Grid"
import {
  SelectWrapper,
  FormButton,
  Input,
  Select,
  FormGrid,
  FormContainer,
  PrivacyLink,
} from "./styles"
// Input components and styling
//
const MyInput = ({ label, gridProps, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Grid.Col {...gridProps}>
      <Input
        {...field}
        {...props}
        aria-label={label}
        error={meta.touched && meta.error}
      />
      {meta.touched && meta.error ? (
        <StyledErrorMessage>{meta.error}</StyledErrorMessage>
      ) : null}
    </Grid.Col>
  )
}

const StyledErrorMessage = styled.div`
  display: none;
  color: red;
  text-align: right;
`

const StyledLabel = styled.label``

const MySelect = ({ children, label, gridProps, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Grid.Col {...gridProps}>
      <SelectWrapper>
        <Select {...field} {...props} error={meta.touched && meta.error}>
          {children}
        </Select>
        {meta.touched && meta.error ? (
          <StyledErrorMessage>{meta.error}</StyledErrorMessage>
        ) : null}
        <i className="select-icon">
          <FiChevronDown />
        </i>
      </SelectWrapper>
    </Grid.Col>
  )
}

// TODO:
//
// Consider receiving list of cities and form elements from
// Sanity. Since the design isn't static it may be easier to
// just have me / future developers update this component in the future

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

// capWord: str -> str : capWord foo bar -> Foo Bar
const capWord = str => {
  str = str.split(" ")
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
  }
  return str.join(" ")
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  priority_1: "",
  priority_2: "",
  priority_3: "",
}

const phoneRegEx = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/

const validationSchema = Yup.object({
  name: Yup.string().required("Please Enter Your Name"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  phone: Yup.string().matches(phoneRegEx, "What is your phone number?"),
  address: Yup.string()
    .min(3)
    .required("What is your address?"),
  city: Yup.string()
    .oneOf(cities, "Invalid City")
    .required("Where are you located?"),
  priority_1: Yup.string(),
  priority_2: Yup.string(),
  priority_3: Yup.string(),
})

const Contact = ({ location }) => {
  return (
    <FormContainer location={location}>
      <EnergySmart before={"Contact"} after={"Today!"} location={location} />
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 700)
        }}
        validationSchema={validationSchema}
      >
        <Form>
          <FormGrid>
            <Grid.Row display={[null, null, null, "flex"]}>
              <MyInput
                label="Full Name"
                name="name"
                type="text"
                placeholder="Name*"
                gridProps={{
                  flexBasis: [null, null, null, "33.33%"],
                  marginRight: [null, null, null, "1rem"],
                }}
              />
              <MyInput
                label="Email Address"
                name="email"
                type="email"
                placeholder="Email*"
                gridProps={{
                  flexBasis: [null, null, null, "33.33%"],
                  marginRight: [null, null, null, "1rem"],
                }}
              />
              <MyInput
                label="Phone Number"
                name="phone"
                type="tel"
                placeholder="Phone"
                gridProps={{
                  flexBasis: [null, null, null, "33.33%"],
                }}
              />
            </Grid.Row>
            <Grid.Row
              display={["flex"]}
              flexWrap={["wrap", "wrap", "wrap", "nowrap"]}
            >
              <MyInput
                label="Address"
                name="address"
                type="text"
                placeholder="Address*"
                gridProps={{
                  flexBasis: [
                    "100%",
                    "100%",
                    "100%",
                    "calc(66.66% + 2rem - 4px)",
                  ],
                  marginRight: [null, null, null, "1rem"],
                }}
              />
              <MySelect
                label="City"
                name="city"
                gridProps={{
                  flexBasis: ["75%", "75%", "75%", "calc(22.22% - 1rem + 5px)"],
                  marginRight: ["1rem"],
                }}
                required
              >
                <option value="" disabled>
                  City*
                </option>
                {cities.map((city, i) => (
                  <option key={city} value={city}>
                    {capWord(city)}
                  </option>
                ))}
              </MySelect>
              <Grid.Col
                flexBasis={[
                  "calc(25% - 1rem - 2px)",
                  "calc(25% - 1rem - 2px)",
                  "calc(25% - 1rem - 2px)",
                  "11.11%",
                ]}
              >
                <Input as="div">CO</Input>
              </Grid.Col>
            </Grid.Row>
            <Grid.Row display={[null, null, null, "flex"]}>
              <MyInput
                label="Home Priority One"
                name="priority_1"
                type="text"
                placeholder="Home Priority 1"
                gridProps={{
                  flexBasis: [null, null, null, "33.33%"],
                  marginRight: [null, null, null, "1rem"],
                }}
              />
              <MyInput
                label="Home Priority Two"
                name="priority_2"
                type="text"
                placeholder="Home Priority 2"
                gridProps={{
                  flexBasis: [null, null, null, "33.33%"],
                  marginRight: [null, null, null, "1rem"],
                }}
              />
              <MyInput
                label="Home Priority Three"
                name="priority_3"
                type="text"
                placeholder="Home Priority 3"
                gridProps={{
                  flexBasis: [null, null, null, "33.33%"],
                }}
              />
            </Grid.Row>
          </FormGrid>
          <FormButton value={"Contact EnergySmart"} />
        </Form>
      </Formik>
      <PrivacyLink
        href="https://www.bouldercounty.org/privacy-policy/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Privacy Policy
      </PrivacyLink>
    </FormContainer>
  )
}

export default Contact
