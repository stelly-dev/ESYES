import React, { useRef, useState, useEffect } from "react"
import { Formik, Form } from "formik"
import * as Yup from "yup"
import ReCAPTCHA from "react-google-recaptcha"
import { MyInput, MySelect } from "./FormComponents"
import { capWord } from "./utils"
import { cities } from "./formData"

const initialValues = {
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street: "",
  zip: "",
  "00N5w00000HSOsp": "",
  "00N5w00000HSOsu": "",
  "00N5w00000HSOsz": "",
  "00N5w00000HSOt4": "",
  oid: "00D5w000002v4Lg",
  captcha_settings: JSON.stringify({
    keyname: "key",
    fallback: true,
    orgId: "00D5w000002v4Lg",
    ts: "",
  }),
  retURL: "127.0.0.1",
}
// GOAL:
// Upon first render, we add both the hidden iframe
// and the basic form to the page (still hidden, obv.)

// upon submitting the FormikForm, we update the values
// of the the hidden form.

const useSalesforce = (ref, initialValues) => {
  useEffect(() => {
    // adds the hidden form to the page
    if (typeof window !== "undefined" && window && window.document) {
      const form = document.createElement("form")
      form.method = "POST"
      form.action =
        "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      form.setAttribute("target", ref.current)
      Object.keys(initialValues).forEach(fieldName => {
        let hiddenInput = document.createElement("input")
        hiddenInput.name = fieldName
        hiddenInput.value = initialValues[fieldName]
        hiddenInput.setAttribute("type", "hidden")
        form.appendChild(hiddenInput)
      })
      document.appendChild(form)
    }
    return () => {
      if (typeof window !== "undefined" && window && window.document) {
        document.removeChild(ref.current)
      }
    }
  }, [])
}

const Contact = () => {
  const [submission, setSubmission] = useState("")
  const recaptchaRef = useRef()
  const iframeRef = useRef()

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { setSubmitting }) => {
          setSubmission(JSON.stringify(values))
        }}
      >
        <Form>
          <input type="hidden" name="oid" value="00D5w000002v4Lg" />
          <MyInput
            label="First Name"
            name="first_name"
            type="text"
            placeholder="First Name*"
          />
          <MyInput
            label="Last Name"
            name="last_name"
            type="text"
            placeholder="Last Name*"
          />
          <MyInput
            label="Email"
            name="email"
            type="text"
            placeholder="Email*"
          />
          <MyInput
            label="Phone Number"
            name="phone"
            type="text"
            placeholder="Phone"
          />
          <MyInput
            label="Address"
            name="street"
            type="text"
            placeholder="Address*"
          />
          <MySelect label="City" name="city" required>
            <option value="" disabled>
              City*
            </option>
            {cities.map(city => (
              <option key={city} value={city}>
                {capWord(city)}
              </option>
            ))}
          </MySelect>
          <MyInput label="Zip" name="zip" type="text" placeholder="Zip" />
          <MyInput
            label="Home Priority One"
            name="00N5w00000HSOsp"
            type="text"
            placeholder="Home Priority One"
          />
          <MyInput
            label="Home Priority Two"
            name="00N5w00000HSOsu"
            type="text"
            placeholder="Home Priority Two"
          />
          <MyInput
            label="Home Priority Three"
            name="00N5w00000HSOsz"
            type="text"
            placeholder="Home Priority Three"
          />
          <MyInput
            label="This Field for robots, Language"
            name="00N5w00000HSOt4"
            type="hidden"
            placeholder="Language"
          />
          <MyInput
            label="First Name"
            name="first_name"
            type="text"
            placeholder="First Name*"
          />
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6Lexd-4UAAAAAHAymxYMWb1Z-lzqE-xzLsAm0qKR"
            onChange={value => console.log("Captcha value: ", value)}
          />
          <input type="submit" value="Submit" />
        </Form>
      </Formik>
      <iframe ref={iframeRef} />
    </>
  )
}

export default Contact
