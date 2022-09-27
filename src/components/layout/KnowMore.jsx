import styled from 'styled-components'
import { Link } from 'react-scroll'

import IconImages from '../Icones/IconImages'
import H1 from '../../typograph/H1'
import H2 from '../../typograph/H2'

const MainStyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 1640px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`

const LeftContainer = styled.div`
  width: 50%;
  height: 15vh;
  background-color: ${(props) => props.theme.background};

  H1 {
    display: flex;
    justify-content: flex-end;
  }

  @media (max-width: 1640px) {
    width: 100%;
    height: 20vh;

    H1 {
      margin-top: 5vh;
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
  position: absolute;
  margin-top: 3vh;
  cursor: pointer;

  @media (max-width: 1640px) {
    margin-top: 35vh;
  }
`

const RightContainer = styled.div`
  width: 50%;
  height: 15vh;
  background-color: ${(props) => props.theme.primary};

  @media (max-width: 1640px) {
    width: 100%;
    height: 18vh;

    H2 {
      margin-top: 5vh;
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
          <H1>Know</H1>
        </LeftContainer>
        <RightContainer>
          <H2>more!</H2>
        </RightContainer>
        <StyledImage>
          <Link to="about" smooth={true} offset={0} duration={800}>
            <IconImages imageName="ArrowDown" type="svg" />
          </Link>
        </StyledImage>
      </MainStyledContainer>
    </>
  )
}
