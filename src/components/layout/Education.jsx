import styled from 'styled-components'

import H1 from '../../typograph/H1'
import H5 from '../../typograph/H5'

const StyledEducation = styled.div`
  height: 100vh;
`

const StyledEducationTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
  padding-bottom: 10vh;

  H1 {
    text-decoration: underline;
  }
`

const StyledEducationContainer = styled.div`
  display: flex;
  justify-content: center;
`

const StyledEducationText = styled.div`
  background-color: #fec350;
  height: 6rem;
  width: 40rem;
  margin: 2rem 39rem;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 15px;
`

export default function Education() {
  return (
    <StyledEducation>
      <StyledEducationTitle>
        <H1>Education</H1>
      </StyledEducationTitle>

      <StyledEducationContainer>
        <StyledEducationText>
          <H5>
            Web Developer certification in: <br />
            JavaScript, HTML5, CSS3, ReactJS, NodeJS, <br /> NextJS, SASS/Styled-Components,
            SQL/NO-SQL
          </H5>
        </StyledEducationText>
      </StyledEducationContainer>

      <StyledEducationContainer>
        <StyledEducationText>
          <H5>Ph.D. in Food Engineering focused in Biodegradadble Food Packaging</H5>
        </StyledEducationText>
      </StyledEducationContainer>

      <StyledEducationContainer>
        <StyledEducationText>
          <H5>English Fluency Certified by TOEFL Test</H5>
        </StyledEducationText>
      </StyledEducationContainer>

      <StyledEducationContainer>
        <StyledEducationText>
          <H5>French Intermidiate Level Certified by “Francês Simplificado”</H5>
        </StyledEducationText>
      </StyledEducationContainer>
    </StyledEducation>
  )
}
