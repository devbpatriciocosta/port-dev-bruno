import styled from 'styled-components'

import H2 from '../../typograph/H2'

const StyledPortfolio = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 150vh;
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
`

export default function Portfolio() {
  return (
    <StyledPortfolio>
      <StyledTitle>
        <H2>Portfolio</H2>
      </StyledTitle>
    </StyledPortfolio>
  )
}
