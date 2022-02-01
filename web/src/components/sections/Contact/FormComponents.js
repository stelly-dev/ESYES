import React from "react"
import { useField } from "formik"
import Grid from "../../containers/Grid"
import { Input, SelectWrapper, Select, StyledErrorMessage } from "./styles"
import { FiChevronDown } from "react-icons/fi"
import { Helmet } from "react-helmet"

export const MyInput = ({ label, gridProps, ...props }) => {
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

export const Error = ({ error }) => {
  if (error.length > 0) {
    return (
      <div
        style={{
          textAlign: "center",
          margin: "0 auto 2rem auto",
          width: "100%",
        }}
      >
        <h1 style={{ color: "red" }}>Problem Connecting</h1>
        <p>Check your internet connection and try again.</p>
      </div>
    )
  }
  return null
}

export const MySelect = ({ children, label, gridProps, ...props }) => {
  const [field, meta] = useField(props)
  return (
    <Grid.Col {...gridProps}>
      <SelectWrapper>
        <Select
          {...field}
          {...props}
          error={meta.touched && meta.error}
          aria-label={label}
        >
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

export const Captcha = () => (
  <div
    className="g-recaptcha"
    data-sitekey="6LdsfscUAAAAAEss5fyjT4PqQUf-EDJbWMb6Za4W"
  />
)

export const Headers = () => {
  return (
    <Helmet>
      <script src="https://www.google.com/recaptcha/api.js"></script>
      {/* <script>
        {`
          if(typeof window !== 'undefined' && window && window.document){
            function timestamp() {
              var response = document.getElementById("g-recaptcha-response");
              if(response == null || response.value.trim == ""){
                var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value); 
                elems["ts"] = JSON.stringify(new Date().getTime()); 
                document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); 
              }
            }} 
            typeof timestamp !== 'undefined' ? setInterval(timestamp, 500) : null;
            `} */}
      {/* </script> */}
    </Helmet>
  )
}
