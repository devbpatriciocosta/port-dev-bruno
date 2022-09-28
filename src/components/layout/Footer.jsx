import styled from 'styled-components'

import H5 from '../../typograph/H5'

const StyledFooter = styled.div`
  background-color: ${(props) => props.theme.primary};
  height: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`

export default function Footer() {
  return (
    <StyledFooter>
      <H5>All rights reserved - @devbpatriciocosta - August 2022</H5>
    </StyledFooter>
  )
}
