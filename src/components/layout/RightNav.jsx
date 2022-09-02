import styled from 'styled-components'
import { Link } from 'react-scroll'

import H6 from '../../typograph/H6'

const StyledUl = styled.ul`
  width: 50%;
  padding-right: 5vh;
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 20px;
`

const RightNav = () => {
  return (
    <StyledUl>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H6>Home</H6>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H6>About</H6>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H6>Portfolio</H6>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H6>Education</H6>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H6>Contact</H6>
        </Link>
      </li>
    </StyledUl>
  )
}

export default RightNav
