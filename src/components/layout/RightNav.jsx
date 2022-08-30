import styled from 'styled-components'

import H2 from '../../typograph/H2'

const StyledUl = styled.ul`
  width: 50%;
  padding-right: 5vh;
  list-style: none;
  display: flex;
  align-items: center;
`

const RightNav = () => {
  return (
    <StyledUl>
      <li>
        <H2>Home</H2>
      </li>
    </StyledUl>
  )
}

export default RightNav
