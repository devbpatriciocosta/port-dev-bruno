import styled from 'styled-components'

import H1 from '../../typograph/H1'
import H2 from '../../typograph/H2'

const MainStyledContainer = styled.div`
  display: flex;
`

const LeftContainer = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding-top: 50vh;
  margin-left: 5vh;
`

const RightContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding-top: 50vh;
  padding-right: 5vh;
  text-align: right;
`

export default function MainContainer() {
  return (
    <>
      <MainStyledContainer>
        <LeftContainer>
          <H1>Web</H1>
          <H1>Developer</H1>
        </LeftContainer>
        <RightContainer>
          <H2>Passionate</H2>
          <H2>Learner</H2>
        </RightContainer>
      </MainStyledContainer>
    </>
  )
}
