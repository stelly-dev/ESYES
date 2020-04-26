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
import { MyInput, MySelect, Error,  Headers } from "./FormComponents"
import { cities, } from "./formData"
import { capWord, phoneRegEx,  firstAndLastFromName } from "./utils"

function useInterval(callback, delay) {
  const savedCallback = useRef()

  //Memoize the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval
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

// const captchaSettings = {
//   keyname: "ESWebsite",
//   fallback: true,
//   orgId: "00DA0000000aMYj",
//   ts: ""
// }

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

const checkRecaptcha = (captchaSettings, setCaptchaSettings) => {
    if (typeof window !== "undefined" && window && window.document) {
      let response = document.getElementById("g-recaptcha-response")
      if (response === null || response.value.trim() === "") {
        const elems = JSON.parse(captchaSettings)
        elems["ts"] = JSON.stringify(new Date().getTime())
        setCaptchaSettings(JSON.stringify(elems))
      }
    }
}

// const initialCaptchaSettings = JSON.stringify({
//   keyname: "ESWebsite",
//   fallback: true,
//   orgId: "00DA0000000aMYj",
//   ts: ""
// })

const initialCaptchaSettings = JSON.stringify({
  keyname: "key",
  fallback: true,
  orgId: "00D5w000002v4Lg",
  ts: "",
})

// the form is never touched by a user,
// instead - when formik successfully validates
// we populate a new sfValue in the parent component's state
// and
const W2LForm = React.forwardRef((props, ref) => {
  const [captchaSettings, setCaptchaSettings] = useState(initialCaptchaSettings)
  useInterval(() => {
    checkRecaptcha(captchaSettings, setCaptchaSettings)
  }, 500)
  console.log(captchaSettings)
  return (
    <form
      ref={ref}
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
    >
      {Object.keys(props.sfValues).map((name, i) => {
        return name === "captcha-settings" ? (
          <input
            type="hidden"
            name={"captcha_settings"}
            value={captchaSettings}
            key={name}
          />
        ) : (
          <input
            type="hidden"
            name={name}
            value={props.sfValues[name]}
            key={name}
          />
        )
      })}
    </form>
  )
})

const sfInitialValues = {
  //debugEmail: "matt.wilmoth@clearesult.com",
  captcha_settings: JSON.stringify({
    keyname: "reCAPTCHA",
    fallback: true,
    orgId: "00D5w000002v4Lg",
    ts: "",
  }),
  // captcha_settings: `{"keyname": "ESWebsite", "fallback":"true", "orgId":"00DA0000000aMYj", "ts": ""}`,
  oid: "00D5w000002v4Lg", //"00DA0000000aMYj",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  zip: "",
  retURL: "",
  "00N5w00000HSOsp": "",
  "00N5w00000HSOsu": "",
  "00N5w00000HSOsz": "",
  "00N5w00000HSOt4": "",

  // "00NF0000008M7i9": "",
  // "00NF0000008M7iE": "",
  // "00NF0000008M7iO": "",
  // "00N2I00000Dqoqv": "",
  // retURL: location.match(/\/es\//)
  //   ? "https://www.energysmartyes.com/es/thank-you/"
  //   : "https://www.energysmartyes.com/thank-you/",
}
const mapValuesToSF = (values, location, ref) => {
  const { name, address, HP1, HP2, HP3, language, ...rest } = values
  return {
    ...sfInitialValues,
    ...firstAndLastFromName(name),
    "00N5w00000HSOsp": HP1,
    "00N5w00000HSOsu": HP2,
    "00N5w00000HSOsz": HP3,
    "00N5w00000HSOt4": location.match(/\.es\//)
      ? // "00NF0000008M7i9": HP1,
        // "00NF0000008M7iE": HP2,
        // "00NF0000008M7iO": HP3,
        // "00N2I00000Dqoqv": location.match(/\/es\//)
        "Spanish"
      : "English",
    street: address,
    ...rest,
    retURL: location.match(/\/es\//)
      ? "https://www.energysmartyes.com/es/thank-you"
      : "https://www.energysmartyes.com/thank-you",
    captcha_settings: ref.current.elements.captcha_settings.value,
  }
}
const Contact = ({ location }) => {
  const [submissionError, setSubmissionError] = useState("")
  const sfFormRef = useRef(null)
  const [sfValues, setSfValues] = useState(sfInitialValues)
  const [isSubmitting, setIsSubmitting] = useState(false)
  return (
    <>
      <Headers />
      <FormContainer location={location}>
        <EnergySmart before={"Contact"} after={"Today!"} location={location} />
        <Formik
          initialValues={initialValues}
          onSubmit={(values, { setSubmitting }) => {
            setSfValues(mapValuesToSF(values, location, sfFormRef))
            setIsSubmitting(true)
            setTimeout(() => sefFormRef.current.submit(), 1000); 
          }}
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
            <div
              className="g-recaptcha"
              data-sitekey="6Lexd-4UAAAAAHAymxYMWb1Z-lzqE-xzLsAm0qKR"
            />
            {/* <div className="g-recaptcha" data-sitekey="6LfDf-gUAAAAADmj72yTU6ANmCyOa4q1Ea7uh4Gn"/> */}
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
        ref={sfFormRef}
        sfValues={sfValues}
        isSubmitting={isSubmitting}
        style={{ display: "none" }}
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
