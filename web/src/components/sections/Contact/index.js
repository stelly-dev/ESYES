import React, { useState, useRef, useEffect } from "react"
import { navigate } from "@reach/router"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import EnergySmart from "./EnergySmart"
import Grid from "../../containers/Grid"
import {
  FormButton,
  Input,
  FormGrid,
  FormContainer,
  PrivacyLink,
} from "./styles"

import { MyInput, MySelect, Error, Captcha, Headers } from "./FormComponents"
import {
  cities,
  salesForceURL,
  salesForceFields,
  addLanguageField,
} from "./formData"
import {
  capWord,
  phoneRegEx,
  encode,
  firstAndLastFromName,
  changeKeys,
} from "./utils"

const salesForceInitialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  zip: "",
  "00NF0000008M7i9": "",
  "00NF0000008M7iE": "",
  "00NF0000008M7iO": "",
  "00N2I00000Dqoqv": "",
}

const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  HP1: "",
  HP2: "",
  HP3: "",
  language: "",
}
// TODO: Transform name field to first_name last_name

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3)
    .max(120)
    .test(
      "first_name_len",
      "First name must be less than 40 characters",
      value => value.split(" ")[0].length <= 40
    )
    .test(
      "last_name_length",
      "Characters after your first name must not exceed 80 letters",
      value =>
        value
          .split(" ")
          .slice(1)
          .join(" ").length <= 80
    )
    .required("Please Enter Your Name"),
  email: Yup.string()
    .max(80)
    .email("Please enter a valid email address")
    .required("Please enter your email"),
  phone: Yup.string()
    .max(40)
    .matches(phoneRegEx, "What is your phone number?"),
  address: Yup.string()
    .min(3)
    .required("What is your address?"),
  city: Yup.string()
    .oneOf(cities, "Invalid City")
    .required("Where are you located?"),
  HP1: Yup.string().max(225),
  HP2: Yup.string().max(225),
  HP3: Yup.string().max(225),
})

const submitNetlify = (values, location) => {
  return fetch("/?no-cache=1", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encode({
      "form-name": "contact",
      ...addLanguageField(values, location),
    }),
  })
}

const handleFormSuccess = (response, setSubmissionError, setSubmitting) => {
  console.log("Success!", response)
  setSubmissionError("")
  setSubmitting(false)
  navigate("/thank-you/")
}

const handleFormError = (error, setSubmissionError, setSubmitting) => {
  console.error("ERROR", error)
  setSubmissionError("error")
  setSubmitting(false)
}

const useInterval = (callback, delay) => {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

const Contact = ({ location }) => {
  const [submissionError, setSubmissionError] = useState("")
  const salesforceRef = useRef(null)
  return (
    <>
      <FormContainer location={location}>
        <EnergySmart before={"Contact"} after={"Today!"} location={location} />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            const { name, HP1, HP2, HP3, address, language, ...rest } = values
            const salesForceValues = {
              "00NF0000008M7i9": HP1,
              "00NF0000008M7iE": HP2,
              "00NF0000008M7iO": HP3,
              "00N2I00000Dqoqv": location.match(/\/es\//)
                ? "Spanish"
                : "English",
              street: address,
              ...firstAndLastFromName(name),
              ...rest,
              oid: "00DA0000000aaMYj",
              retURL: location.match(/\/es\//)
                ? "https://www.energysmartyes.com/es/thank-you/"
                : "https://www.energysmart.com/thank-you/",
            }
            setSubmissionError("")
            if (location.match(/\/contact-testing/)) {
              if (typeof window !== "undefined" && window && window.document) {
                const form = document.createElement("form")
                form.method = "POST"
                form.action =
                  "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
                form.setAttribute("target", salesforceRef.current)
                for (var fieldName in salesForceValues) {
                  let iframeInput = document.createElement("input")
                  iframeInput.name = fieldName
                  iframeInput.value = salesForceValues[fieldName]
                  iframeInput.setAttribute("type", "hidden")
                  form.appendChild(iframeInput)
                }
                salesforceRef.current.contentDocument.body.appendChild(form)
                console.log(salesforceRef.current)
              }
            } else {
              console.log("submitting to netlify")
              console.log("these are the values:", values)
              console.log("this is the location:", location)
              console.log("and these are the initialValues:", initialValues)
              submitNetlify(values, location)
                .then(response =>
                  handleFormSuccess(response, setSubmissionError, setSubmitting)
                )
                .catch(error =>
                  handleFormError(error, setSubmissionError, setSubmitting)
                )
            }
          }}
          validationSchema={validationSchema}
        >
          <Form data-netlify="true" name="contact">
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
                    flexBasis: [
                      "75%",
                      "75%",
                      "75%",
                      "calc(22.22% - 1rem + 5px)",
                    ],
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
                  name="HP1"
                  type="text"
                  placeholder="Home Priority 1"
                  gridProps={{
                    flexBasis: [null, null, null, "33.33%"],
                    marginRight: [null, null, null, "1rem"],
                  }}
                />
                <MyInput
                  label="Home Priority Two"
                  name="HP2"
                  type="text"
                  placeholder="Home Priority 2"
                  gridProps={{
                    flexBasis: [null, null, null, "33.33%"],
                    marginRight: [null, null, null, "1rem"],
                  }}
                />
                <MyInput
                  label="Home Priority Three"
                  name="HP3"
                  type="text"
                  placeholder="Home Priority 3"
                  gridProps={{
                    flexBasis: [null, null, null, "33.33%"],
                  }}
                />
              </Grid.Row>
            </FormGrid>
            <Error error={submissionError} />
            <FormButton
              value={
                submissionError.length > 0 ? "Try Again" : "Contact EnergySmart"
              }
            />
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
      <iframe
        title="formHandler"
        src="about:blank"
        ref={salesforceRef}
        style={{ display: "none" }}
      ></iframe>
    </>
  )
}

export default Contact
