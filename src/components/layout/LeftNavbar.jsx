import styled from 'styled-components'
import { Link } from 'react-scroll'
import H6 from '../../typograph/H6'

const StyledUl = styled.ul`
  width: 50%;
  padding-left: 5vh;
  list-style: none;
  display: flex;
  align-items: center;

  li {
    cursor: pointer;
  }
`

const LeftNav = () => {
  return (
    <StyledUl>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H6>Bruno Patrício - Web Dev</H6>
        </Link>
      </li>
    </StyledUl>
  )
}

export default LeftNav
