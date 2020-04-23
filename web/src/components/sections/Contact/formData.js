import { encode } from "./utils"
export const cities = [
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

export const salesForceURL =
  "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"

export const salesForceFields = {
  oid: "00DA0000000aMYj",
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
  "00NF0000008M7i9": "Home Priority One",
  "00NF0000008M7iE": "Home Priority Two",
  "00NF0000008M7iO": "Home Priority Three",
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
  const authorizedValues = { oid: "00DA0000000aMYj", ...values }
  return fetch(
    "https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: encode({
        ...addLanguageField(authorizedValues, location),
      }),
    }
  )
}
