import styled from 'styled-components'

import LeftNav from './LeftNavbar'
import RightNav from './RightNav'

const StyledNavbar = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <LeftNav />
      <RightNav />
    </StyledNavbar>
  )
}
