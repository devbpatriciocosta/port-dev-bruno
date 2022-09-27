import styled from 'styled-components'

import LeftNav from './LeftNavbar'
import RightNav from './RightNav'

const StyledNavbar = styled.nav`
  width: 100%;
  height: 70px;
  display: flex;
  position: fixed;

  @media (max-width: 810px) {
    display: flex;
    flex-direction: column;
    align-items: center;
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
