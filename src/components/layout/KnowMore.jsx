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
  height: 15vh;
  background-color: ${(props) => props.theme.background};

  H1 {
    display: flex;
    justify-content: flex-end;
  }
`

const StyledImage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  margin-top: 3vh;
`

const RightContainer = styled.div`
  width: 50%;
  height: 15vh;
  background-color: ${(props) => props.theme.primary};
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
          <IconImages imageName="ArrowDown" type="svg" />
        </StyledImage>
      </MainStyledContainer>
    </>
  )
}
