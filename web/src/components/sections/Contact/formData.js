import { encode } from "./utils"
export const cities = [
  "allenspark",
  "boulder",
  "coal creek canyon",
  "eldora",
  "eldorado springs",
  "erie",
  "gold hill",
  "gunbarrel",
  "hygiene",
  "jamestown",
  "lafayette",
  "longmont",
  "louisville",
  "lyons",
  "nederland",
  "niwot",
  "superior",
  "ward",
]

export const salesForceURL =
  "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"

export const salesForceFields = {
  oid: "00D30000000pZGD",
  first_name: "",
  last_name: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  zip: "",
  "00N5Y00000UB3YS": "",
  "00N5Y00000UB3YX": "",
  "00N5Y00000UB3Yc": "",
  // "00N2I00000Dqoqv": "",
  "00N30000006rptY": "",
}

// encodes the form data as uri strings www.site.com/someKey=someValue&key2=wow%20great

// replaces keys in obj with their value in another obj,
// e.g. : f: (
//           {abcd123: "Joe", efgh456: "Smith" },
//           {abcd123: "first_name", efgh456: "last_name"}
//           ) ->
//                 {first_name: "Joe", last_name: "Smith"}
//
// Used to pretty-print Netlify form based off of SalesForce keys.

// make sure these match the embed from salesforce web-to-lead
export const newKeys = {
  "00N5Y00000UB3YS": "Home Priority One",
  "00N5Y00000UB3YX": "Home Priority Two",
  "00N5Y00000UB3Yc": "Home Priority Three",
  first_name: "Name",
}

export const addLanguageField = (obj, location) => {
  if (location.match(/\/es\//)) {
    const newObj = { "00N2I00000Dqoqv": "Spanish", ...obj }
    return newObj
  } else {
    const newObj = { "00N2I00000Dqoqv": "English", ...obj }
    return newObj
  }
}

// **********THIS FUNCTION IS LEFT AS A WARNING*************
//
// salesforce does not provide any headers on their web-to-lead(w2l)
// backend and while they do allow setting CORS headers on their
// newer products, they do not provide any mechanism to alter w2l.
//
// POSTS will, at most, return a 200 ok response. This is not
// dependent on the success of the submission.
//
// However, any AJAX / fetch POST in the browser will result
// in a CORS error.
//
// Solutions:
//           1. POST to a server you control.
//           2. generate a transparent iframe containing the form
//              and populate it's values, then submit.
//
export const submitSalesForce = (values, location) => {
  const authorizedValues = {
    oid: "00D30000000pZGD",
    recordType: "01230000000jfZv",
    company: "Company",
    lead_source: "EnergySmart Website",
    ...values,
  }
  return fetch(
    "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        ...authorizedValues,
        // ...addLanguageField(authorizedValues, location),
      }),
    }
  )
}
