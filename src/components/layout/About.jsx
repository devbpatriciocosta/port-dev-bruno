import styled from 'styled-components'
import H1 from '../../typograph/H1'
import H4 from '../../typograph/H4'
import H6 from '../../typograph/H6'

const WIDTH_BREAK = '900px'

const StyledFlex = styled.div`
  display: flex;
  color: ${(props) => props.theme.primary};
  text-align: center;
`

const StyledImageCb = styled.div`
  background-image: url('${(props) => props.image}');
  background-position: right;
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 100vh;

  @media (max-width: ${WIDTH_BREAK}) {
    display: none;
  }
`

const StyledContainer = styled.div`
  background-color: ${(props) => props.theme.background};
  padding: 30px 50px;

  H1 {
    text-decoration: underline;
  }

  H6 {
    font-weight: lighter;
  }

  @media (min-width: ${WIDTH_BREAK}) {
    min-width: calc(${WIDTH_BREAK} - 100px);
  }
  @media (max-width: ${WIDTH_BREAK}) {
    width: 100%;
  }
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  &:before,
  &:after {
    content: '';
    margin: auto;
  }
`

const StyledContainerText = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 40px;

  H6 {
    font-weight: lighter;
  }
`

const StyledContainerPragraph = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  padding-top: 40px;
  gap: 40px;

  p {
    font-weight: bolder;
  }
`

export default function ImageCode({ children, image }) {
  return (
    <>
      <StyledFlex>
        <StyledImageCb image={image} />
        <StyledContainer>
          {children}
          <H1>About</H1>
          <StyledContainerText>
            <H4>Bruno Patrício Costa </H4>
            <H6>Full Stack Web Developer</H6>
            <StyledContainerPragraph>
              <p>
                Passionate developer looking for a great team to build Apps and WebPages together.
                Im always looking forward to learning new technologies and overcome new challenges.
                Happy to relocate for any great opportunity.
              </p>
            </StyledContainerPragraph>
          </StyledContainerText>
        </StyledContainer>
      </StyledFlex>
    </>
  )
}

ImageCode.defaultProps = {
  image: '/SetupTwo.jpg'
}
