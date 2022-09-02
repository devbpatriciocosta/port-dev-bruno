import styled from 'styled-components'

import IconImages from '../Icones/IconImages'
import H1 from '../../typograph/H1'
import H2 from '../../typograph/H2'

const MainStyledContainer = styled.div`
  display: flex;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding-top: 50vh;

  H2 {
    padding-left: 5vh;
  }

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 20vh;
  }
`

const RightContainer = styled.div`
  width: 50%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  padding-top: 50vh;
  text-align: right;

  H1 {
    padding-right: 5vh;
  }
`

const StyledBrunoImage = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 560px) {
    display: none;
  }
`

export default function MainContainer() {
  return (
    <>
      <MainStyledContainer>
        <LeftContainer>
          <H2>Web</H2>
          <H2>Developer</H2>
        </LeftContainer>
        <StyledBrunoImage>
          <IconImages imageName="Bruno" type="svg" />
        </StyledBrunoImage>
        <RightContainer>
          <H1>Passionate</H1>
          <H1>Learner</H1>
        </RightContainer>
      </MainStyledContainer>
    </>
  )
}
