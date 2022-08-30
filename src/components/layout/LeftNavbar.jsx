import styled from 'styled-components'

import H6 from '../../typograph/H6'

const StyledUl = styled.ul`
  width: 50%;
  padding-left: 5vh;
  list-style: none;
  display: flex;
  align-items: center;
`

const LeftNav = () => {
  return (
    <StyledUl>
      <li>
        <H6>Bruno Patrício - Web Dev</H6>
      </li>
    </StyledUl>
  )
}

export default LeftNav
