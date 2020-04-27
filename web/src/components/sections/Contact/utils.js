// 'some string'  -> 'Some String'
export const capWord = str => {
  str = str.split(" ")
  for (let i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1)
  }
  return str.join(" ")
}

export const phoneRegEx = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)$/

export function isServer(){
  if(typeof window !== "undefined" && window && window.document){
    return false;
  } 
  return true; 
}

export const firstAndLastFromName = name => {
  name = name.split(" ")
  const firstName = name[0]
  const lastName = name.slice(1).join(" ") // every word after first name (if available)
  return {
    first_name: firstName,
    last_name: lastName,
  }
}

export const changeKeys = (obj, newKeys) => {
  const keyValues = Object.keys(obj).map(key => {
    const newKey = newKeys[key] || key
    return { [newKey]: obj[key] }
  })
  return Object.assign({}, ...keyValues)
}

export const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}
