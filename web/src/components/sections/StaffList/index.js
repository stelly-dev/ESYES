import React from "react"
import Grid from "../../containers/Grid"
import StaffCard from "./StaffCard"
import { StyledStaffList } from "./styled"
const StaffList = props => {
  return (
    <StyledStaffList>
      <Grid.Container>
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
      </Grid.Container>
    </StyledStaffList>
  )
}

export default StaffList
