import React, { useState } from "react"
import Container from "../../containers/Container"
import {
  FormContainer,
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

const ContactForm = ({ location }) => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [priorityOne, setPriorityOne] = useState("")
  const [priorityTwo, setPriorityTwo] = useState("")
  const [priorityThree, setPriorityThree] = useState("")

  return (
    <ContactFormSection location={location}>
      <FormContainer location={location}>
        {/* <pre>{JSON.stringify(location, null, 2)}</pre> */}
        <Title>
          Contact <EnergySmart /> Today!
        </Title>
        <Container>
          <StyledContactForm location={location}>
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
                <option value="boulder">Boulder</option>
                <option value="Erie">Erie</option>
                <option value="Jamestown">Jamestown</option>
                <option value="Lafayette">Lafayette</option>
                <option value="Longmont">Longmont</option>
                <option value="Louisville">Louisville</option>
                <option value="Lyons">Lyons</option>
                <option value="Nederland">Nederland</option>
                <option value="Superior">Superior</option>
                <option value="Ward">Ward</option>
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
      </FormContainer>
    </ContactFormSection>
  )
}

export default ContactForm
