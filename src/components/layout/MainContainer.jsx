import styled from 'styled-components'

import IconImages from '../Icones/IconImages'
import H1 from '../../typograph/H1'
import H2 from '../../typograph/H2'

const MainStyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 760px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const LeftContainer = styled.div`
  width: 50%;
  height: 80vh;
  background-color: ${(props) => props.theme.background};

  H1 {
    margin-top: 40vh;
    padding-left: 5vh;
    text-decoration: underline;
  }

  @media (max-width: 760px) {
    width: 100%;
    height: 40vh;

    H1 {
      margin-top: 15vh;
      padding-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 102px;
  position: absolute;

  @media (max-width: 1024px) {
    display: none;
  }
`

const RightContainer = styled.div`
  width: 50%;
  height: 80vh;
  background-color: ${(props) => props.theme.primary};

  H2 {
    margin-top: 40vh;
    padding-left: 60vh;
    text-decoration: underline;
  }

  @media (max-width: 760px) {
    width: 100%;
    height: 40vh;

    H2 {
      margin-top: 10vh;
      padding-left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
    }
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
