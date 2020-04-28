import React, { useState, useRef, useEffect } from "react"
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
import { MyInput, MySelect, Error } from "./FormComponents"
import { cities } from "./formData"
import { capWord, phoneRegEx, firstAndLastFromName, isServer } from "./utils"
import ReCAPTCHA from "react-google-recaptcha"

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

const sfInitialValues = {
  captcha_settings: JSON.stringify({
    keyname: "ESWebsite2",
    fallback: true,
    orgId: "00DA0000000aMYj",
    ts: "",
  }),
  oid: "00DA0000000aMYj",
  first_name: "",
  last_name: "",
  zip: "", 
  email: "",
  phone: "",
  street: "",
  city: "",
  retURL: "",
  "00NF0000008M7i9": "",
  "00NF0000008M7iE": "",
  "00NF0000008M7iO": "",
  "00N2I00000Dqoqv": "",
}
const mapValuesToSF = (values, location, form, recaptcha) => {
  const { name, address, HP1, HP2, HP3, language, ...rest } = values
  return {
    ...sfInitialValues,
    ...firstAndLastFromName(name),
    "00NF0000008M7i9": HP1,
    "00NF0000008M7iE": HP2,
    "00NF0000008M7iO": HP3,
    "00N2I00000Dqoqv": location.match(/\.es\//)
      ? "Spanish"
      : "English",
    street: address,
    ...rest,
    retURL: location.match(/\/es\//)
      ? "https://www.energysmartyes.com/es/thank-you"
      : "https://www.energysmartyes.com/thank-you",
    captcha_settings: JSON.stringify({
      keyname: "ESWebsite2",
      fallback: true,
      orgId: "00DA0000000aMYj",
      ts: new Date().getTime(),
      "g-recaptcha-response": recaptcha,
    }),
  }
}

function createHiddenForm(init, config) {
  if (isServer()) {
    return null
  }
  const form = document.createElement("form")
  form.method = config.method
  form.action = config.action
  config.target
    ? form.setAttribute("target", config.target)
    : form.setAttribute("target", null)
  Object.keys(init).forEach(fieldName => {
    const hiddenInput = document.createElement("input")
    hiddenInput.setAttribute("aria-label", "hidden")
    hiddenInput.name = fieldName
    hiddenInput.value = init[fieldName]
    config.show
      ? hiddenInput.setAttribute("type", "text")
      : hiddenInput.setAttribute("type", "hidden")
    form.appendChild(hiddenInput)
  })
  document.body.appendChild(form)
  return form
}

function updateHiddenForm(form, newVals) {
  if (isServer()) {
    return null
  }
  Object.keys(newVals).forEach(fieldName => {
    form = updateSingleFormValue(form, fieldName, newVals[fieldName])
  })
  return form
}

function updateSingleFormValue(form, name, value) {
  if (form.elements[name]) {
    form.elements[name].value = value
  } else {
    if (isServer()) {
      return null
    }
    const newEl = document.createElement("input")
    newEl.setAttribute("aria-label", "hidden")
    newEl.name = name
    newEl.value = value
    newEl.setAttribute("type", "hidden")
    form.appendChild(newEl)
  }
  return form
}

const initForm = sfInitialValues

const formConfig = {
  method: "POST",
  action:
    "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
  show: false,
}

const Contact = ({ location }) => {
  const [hiddenForm, setHiddenForm] = useState(null)
  const [submissionError, setSubmissionError] = useState([])
  const recaptchaRef = useRef()
  const [isSubmitting, setIsSubmitting] = useState(false)
  useEffect(() => {
    const newForm = createHiddenForm(initForm, {
      ...formConfig,
    })
    setHiddenForm(newForm)
    return () => document.body.removeChild(newForm)
  }, [])

  useEffect(() => {
    if (isSubmitting) {
      hiddenForm.submit()
    }
    return () => setIsSubmitting(false)
  }, [hiddenForm, isSubmitting])

  function onRecaptchaChange(value) {
    if (isServer()) {
      return null
    }
    const newForm = updateSingleFormValue(
      hiddenForm,
      "g-recaptcha-response",
      value
    )
    setHiddenForm(newForm)
  }

  return (
    <>
      <FormContainer location={location}>
        <EnergySmart before={"Contact"} after={"Today!"} location={location} />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            const newVals = mapValuesToSF(values, location, recaptchaRef)
            const newForm = updateHiddenForm(hiddenForm, newVals)
            setHiddenForm(newForm)
            setIsSubmitting(true)
            setSubmitting(false)
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
                  gridProps={{ flexBasis: [null, null, null, "33.33%"] }}
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
                    {" "}
                    City*{" "}
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
                  gridProps={{ flexBasis: [null, null, null, "33.33%"] }}
                />
              </Grid.Row>
            </FormGrid>
            <Error error={submissionError} />
            <ReCAPTCHA
              sitekey="6LffI-8UAAAAADwgcs8Tkw5RMXmBNEuz86etgZwl"
              onChange={onRecaptchaChange}
              ref={recaptchaRef}
            />
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
    </>
  )
}

export default Contact
