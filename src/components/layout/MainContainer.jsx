import styled from 'styled-components'

import IconImages from '../Icones/IconImages'
import H1 from '../../typograph/H1'
import H2 from '../../typograph/H2'

const MainStyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 390px) {
    display: flex;
    flex-direction: column;
  }
`

const LeftContainer = styled.div`
  width: 50%;
  height: 84vh;
  background-color: ${(props) => props.theme.background};

  H1 {
    margin-top: 40vh;
    padding-left: 5vh;
  }
`

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 102px;
  position: absolute;
`

const RightContainer = styled.div`
  width: 50%;
  height: 84vh;
  background-color: ${(props) => props.theme.primary};

  H2 {
    margin-top: 40vh;
    padding-left: 60vh;
  }
`
export default function MainContainer() {
  return (
    <>
      <MainStyledContainer>
        <LeftContainer>
          <H1>
            Web<br></br>Developer
          </H1>
        </LeftContainer>
        <StyledImage>
          <IconImages imageName="BrunoTwo" type="svg" />
        </StyledImage>
        <RightContainer>
          <H2>
            Passionate <br></br> Learner
          </H2>
        </RightContainer>
      </MainStyledContainer>
    </>
  )
}
