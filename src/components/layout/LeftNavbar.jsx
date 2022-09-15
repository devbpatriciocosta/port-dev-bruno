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
    transition: all 0.3s;
    position: relative;
  }

  li:after {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.primary};
    height: 2px;
    width: 0;
    left: 0;
    bottom: -10px;
    transition: 0.3s;
  }

  li:hover:after {
    width: 100%;
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
