import React from "react"
import Container from "../../containers/Container"
import StaffCard from "./StaffCard"
import { StyledStaffList } from "./styled"
const StaffList = props => {
  return (
    <StyledStaffList>
      <Container>
        {props.members.map((member, i) => (
          <StaffCard
            image={member.image.asset["_id"]}
            bio={member.bio}
            jobTitle={member.jobTitle}
            jobPosition={member.jobPosition}
            name={member.name}
            key={member["_key"]}
          />
        ))}
      </Container>
    </StyledStaffList>
  )
}

export default StaffList
