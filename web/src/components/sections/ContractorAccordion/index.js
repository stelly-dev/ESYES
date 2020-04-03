import React, { useState } from "react"
import styled from "styled-components"
import Grid from "../../containers/Grid"
import Block from "../Block"
import { FiPlus, FiMinus } from "react-icons/fi"

const InfoBox = styled.article`
  strong {
    margin-right: 1ch;
    font-size: 1rem;
    color: ${props => props.theme.colors.black};
  }
  max-height: ${props => (props.open ? "600px" : "0px")};
  display: flex;
  flex-direction: column;
  transition: all 500ms;
  overflow: hidden;
  border-left: 2px solid ${props => props.theme.colors.secondary};
  border-right: 2px solid ${props => props.theme.colors.secondary};
  opacity: ${props => (props.open ? 1 : 0)};
  padding: ${props => (props.open ? "1rem" : 0)};
  a,
  a:visited {
    color: ${props => props.theme.colors.secondary};
  }

  a:hover {
    color: ${props => props.theme.colors.secondary};
  }
  div {
    font-weight: normal;
  }
`

const TitleBox = styled(Grid.Row)`
  color: ${props => props.theme.colors.secondary};
  font-weight: bold;
  transition: all 500ms ease-in-out;
`

const IconWrapper = styled.div`
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 1rem;
`

const TitleContainer = styled.div`
  border: 2px solid ${props => props.theme.colors.secondary};
  padding: 0.5rem 1rem;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  transition: all 300ms ease-in-out;
  background-color: ${props =>
    props.open ? props.theme.colors.secondary : "white"};
  color: ${props => (props.open ? "white" : props.theme.colors.secondary)};
  :hover {
    background-color: ${props => props.theme.colors.secondary};
    color: ${props => (props.open ? "white" : "white")};
    margin-left: ${props => (props.open ? 0 : "-5px")};
    margin-right: ${props => (props.open ? 0 : "-5px")};
    box-shadow: ${props =>
      props.open ? "none" : "0px 3px 2px #00002242, 0px -3px 2px #00002242"};
  }
`
const getShortWebsiteFromURL = url => {
  const website = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "")
  return website
}

const ContactInfo = styled.div`
  > div {
  }
`

const Contractor = ({ contractor }) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <TitleBox>
        <TitleContainer open={open} onClick={() => setOpen(!open)}>
          <IconWrapper>{open ? <FiMinus /> : <FiPlus />}</IconWrapper>{" "}
          {contractor.name}
        </TitleContainer>
        <InfoBox open={open} onClick={e => {}}>
          <ContactInfo>
            <div style={{ margin: "0.6em 0 1.6em 0" }}>
              <strong>Website:</strong>
              <a href={contractor.website}>
                {/* {contractor.website.replace(/^(https?:|)\/\//)} */}
                {getShortWebsiteFromURL(contractor.website)}
                {/* {contractor.website} */}
              </a>
            </div>
            <div>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${contractor.phone}`}>{contractor.phone}</a>
            </div>
          </ContactInfo>
          <div>
            {contractor && contractor.description && (
              <Block blocks={contractor.description} />
            )}
          </div>
        </InfoBox>
      </TitleBox>
    </>
  )
}

const ContractorContainer = styled.div`
  ${TitleBox}:first-of-type ${TitleContainer} {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }
  ${TitleBox}:last-of-type ${TitleContainer} {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }
  ${TitleBox}:not(:last-of-type) ${TitleContainer} {
    border-bottom: none;
  }

  ${TitleBox}:last-of-type > ${InfoBox}:last-of-type {
    border-bottom: 2px solid ${props => props.theme.colors.secondary};
  }
`

const ContractorAccordion = props => {
  return (
    <>
      <Grid.Container>
        <ContractorContainer>
          {props.contractors.map((contractor, i) => {
            return <Contractor contractor={contractor} key={contractor.id} />
          })}
        </ContractorContainer>
      </Grid.Container>
    </>
  )
}

export default ContractorAccordion
