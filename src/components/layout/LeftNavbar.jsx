import styled from 'styled-components'

import H5 from '../../typograph/H5'

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
        <H5>Bruno Patrício - Web Dev</H5>
      </li>
    </StyledUl>
  )
}

export default LeftNav
