import styled from 'styled-components'

import H1 from '../../typograph/H1'

const StyledEducation = styled.div`
  height: 100vh;
`

const StyledEducationTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
`

export default function Education() {
  return (
    <StyledEducation>
      <StyledEducationTitle>
        <H1>Education</H1>
      </StyledEducationTitle>
    </StyledEducation>
  )
}
