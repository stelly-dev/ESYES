import React, { useState } from "react"
import Container from "../../containers/Container"
import {
  Title,
  EnergySmart,
  StyledContactForm,
  ContactFormSection,
  Input,
  PrivacyLink,
} from "./styled"

const useInput = (placeHolder, isRequired = false) => {
  const [value, setValue] = useState("")

  return {
    value,
    setValue,
    bind: {
      value,
      onChange: e => {
        setValue(e.target.value)
      },
    },
    reset: () => setValue(""),
  }
}

const ContactForm = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [priorityOne, setPriorityOne] = useState("")
  const [priorityTwo, setPriorityTwo] = useState("")
  const [priorityThree, setPriorityThree] = useState("")

  return (
    <ContactFormSection>
      <Title>
        Contact <EnergySmart /> Today!
      </Title>
      <Container>
        <StyledContactForm>
          <Input
            type="text"
            placeholder="Name*"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <Input
            type="email"
            placeholder="Email*"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <Input
            type="tel"
            placeholder="Phone"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Address*"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
          <div>
            <select>
              <option value="city of boulder">City Of Boulder</option>
              <option value="town of Erie">Town of Erie</option>
              <option value="town of Jamestown">Town of Jamestown</option>
              <option value="city of Lafayette">City of Lafayette</option>
              <option value="city of Longmont">City of Longmont</option>
              <option value="city of Louisville">City of Louisville</option>
              <option value="town of Lyons">Town of Lyons</option>
              <option value="town of Nederland">Town of Nederland</option>
              <option value="town of Superior">Town of Superior</option>
              <option value="town of Ward">Town of Ward</option>
              <option value="Allenspark">Allenspark</option>
              <option value="Coal Creek Canyon">Coal Creek Canyon</option>
              <option value="Eldora">Eldora</option>
              <option value="Eldorado Springs">Eldorado Springs</option>
              <option value="Gold Hill">Gold Hill</option>
              <option value="Gunbarrel">Gunbarrel</option>
              <option value="Hygiene">Hygiene</option>
              <option value="Niwot">Niwot</option>
            </select>
            <Input as="div">Colorado</Input>
          </div>
          <Input
            type="text"
            placeholder="Home Priority One"
            value={priorityOne}
            onChange={e => setPriorityOne(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Home Priority Two"
            value={priorityTwo}
            onChange={e => setPriorityTwo(e.target.value)}
          />
          <Input
            type="text"
            placeholder="Home Priority Three"
            value={priorityThree}
            onChange={e => setPriorityThree(e.target.value)}
          />
          <Input type="submit" value="Contact EnergySmart" />
        </StyledContactForm>
      </Container>
      <PrivacyLink href="https://www.bouldercounty.org/privacy-policy/">
        Privacy Policy
      </PrivacyLink>
    </ContactFormSection>
  )
}

export default ContactForm
