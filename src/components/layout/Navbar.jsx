import styled from 'styled-components'

import LeftNav from './LeftNavbar'
import RightNav from './RightNav'

const StyledNavbar = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;

  @media (max-width: 460px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 80px;
  }
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <LeftNav />
      <RightNav />
    </StyledNavbar>
  )
}
