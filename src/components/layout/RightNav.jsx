import styled from 'styled-components'
import { Link } from 'react-scroll'

import H5 from '../../typograph/H5'

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
          <H5>Home |</H5>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H5>About |</H5>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H5>Portfolio |</H5>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H5>Education |</H5>
        </Link>
      </li>
      <li>
        <Link to="home" smooth={true} offset={0} duration={800}>
          <H5>Contact |</H5>
        </Link>
      </li>
    </StyledUl>
  )
}

export default RightNav
