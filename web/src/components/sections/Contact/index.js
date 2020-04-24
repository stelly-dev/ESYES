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
import { cities, addLanguageField } from "./formData"
import { capWord, phoneRegEx, encode, firstAndLastFromName } from "./utils"

// These are the values we will actually be receiving.
// Mostly meant to make transformation between netlify and
// salesForce more distinct when read.
const initialValues = {
  name: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  HP1: "",
  HP2: "",
  HP3: "",
}
// prettier-ignore
const validationSchema = Yup.object({
  name: Yup.string().min(3).max(120).test( "first_name_len", "First name must be less than 40 characters", value => value.split(" ")[0].length <= 40).test( "last_name_length", "Please submit a shorter name", value => value.split(" ").slice(1).join(" ").length <= 80).required("Please Enter Your Name"),
  email: Yup.string().max(80).email("Please enter a valid email address").required("Please enter your email"),
  phone: Yup.string().max(40).matches(phoneRegEx, "What is your phone number?"),
  address: Yup.string().min(3).required("What is your address?"),
  city: Yup.string().oneOf(cities, "Invalid City").required("Where are you located?"),
  HP1: Yup.string().max(225),
  HP2: Yup.string().max(225),
  HP3: Yup.string().max(225),
})
//
const submitNetlify = (values, location) => {
  return fetch("/?no-cache=1", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: encode({
      "form-name": "contact-netlify",
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

// the form is never touched by a user,
// instead - when formik successfully validates
// we populate a new sfValue in the parent component's state
// and
const W2LForm = ({ sfValues, isSubmitting }) => {
  const iframeRef = useRef(null)
  const formRef = useRef(null)
  const [hasSubmitted, setHasSubmitted] = useState(false)
  useEffect(() => {
    if (isSubmitting && !hasSubmitted) {
      console.log("sfValues", sfValues)
      console.log("isSubmitting", isSubmitting)
      console.log("iframeRef", iframeRef.current)
      console.log("formRef", formRef.current)
      console.log("firing submit!")
      formRef.current.submit()
      setHasSubmitted(true)
    }
  }, [hasSubmitted, formRef, sfValues, isSubmitting])

  return (
    <>
      <form
        ref={formRef}
        action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
        method="POST"
      >
        {Object.keys(sfValues).map((name, i) => {
          return (
            <input
              type="hidden"
              name={name}
              value={sfValues[name]}
              key={name}
            />
          )
        })}
      </form>
      <iframe title="sfIframe" ref={iframeRef} name="sfIframe" />
    </>
  )
}

const sfInitialValues = {
  //debugEmail: "matt.wilmoth@clearesult.com",
  captcha_settings: `{"keyname": "ESWebsite", "fallback":"true", "orgId":"00DA0000000aMYj", "ts": ""}`,
  oid: "00DA0000000aMYj",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  zip: "",
  retURL: "",
  "00NF0000008M7i9": "",
  "00NF0000008M7iE": "",
  "00NF0000008M7iO": "",
  "00N2I00000Dqoqv": "",
  // retURL: location.match(/\/es\//)
  //   ? "https://www.energysmartyes.com/es/thank-you/"
  //   : "https://www.energysmartyes.com/thank-you/",
}

const Contact = ({ location }) => {
  const [submissionError, setSubmissionError] = useState("")
  const salesforceRef = useRef(null)
  const [sfValues, setSfValues] = useState(sfInitialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <>
      {location.match(/\/contact-testing/) ? <Headers /> : null}
      <FormContainer location={location}>
        <EnergySmart before={"Contact"} after={"Today!"} location={location} />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            const { name, HP1, HP2, HP3, address, language, ...rest } = values
            setSfValues({
              ...sfInitialValues,
              ...firstAndLastFromName(name),
              "00NF0000008M7i9": HP1,
              "00NF0000008M7iE": HP2,
              "00NF0000008M7iO": HP3,
              "00N2I00000Dqoqv": location.match(/\/es\//)
                ? "Spanish"
                : "English",
              street: address,
              ...rest,
              retURL: location.match(/\/es\//)
                ? "https://www.energysmartyes.com/es/thank-you"
                : "https://www.energysmartyes.com/thank-you",
            })
            setSubmissionError("")
            if (location.match(/\/contact-testing/)) {
              console.log("submitting!")
              if (sfInitialValues !== sfValues) {
                console.log(
                  "if this is true, oh no",
                  sfInitialValues === sfValues
                )
                setIsSubmitting(true)
              }
              // if (typeof window !== "undefined" && window && window.document) {
              //   const form = document.createElement("form")
              //   form.method = "POST"
              //   form.action =
              //     "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
              //   form.setAttribute("target", salesforceRef.current)
              //   for (var fieldName in salesForceValues) {
              //     let iframeInput = document.createElement("input")
              //     iframeInput.name = fieldName
              //     iframeInput.value = salesForceValues[fieldName]
              //     iframeInput.setAttribute("type", "hidden")
              //     form.appendChild(iframeInput)
              //   }
              //   // script for handing reCAPTCHA

              //   document.body.appendChild(form)
              //   form.submit()
              // }
            } else {
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
          <Form data-netlify="true" name="contact-netlify">
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
            {location.match(/\/contact-testing/) ? <Captcha /> : null}
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
      <W2LForm
        sfValues={sfValues}
        isSubmitting={isSubmitting}
        style={{ display: none }}
      />
      {/* <iframe
        title="formHandler"
        src="about:blank"
        ref={salesforceRef}
        style={{ display: "none" }}
      ></iframe> */}
    </>
  )
}

export default Contact
