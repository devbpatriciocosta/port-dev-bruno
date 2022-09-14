import styled from 'styled-components'

import H2 from '../../typograph/H2'
import H5 from '../../typograph/H5'
import Button from '../buttons/Button'

const StyledEnjoyIt = styled.div`
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
`

const StyledEnjoyItTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 10vh;
  padding-bottom: 5vh;
`

const StyledDivInput = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3rem;
`

const StyledMessageInput = styled.input`
  border-radius: 20px;
  border-style: none;
  width: 30rem;
  height: 5rem;
  font-weight: bold;
  font-size: 12px;
  background-color: #d1d1d1;
  text-align: center;
`

export default function EnjoyIt() {
  return (
    <StyledEnjoyIt>
      <StyledEnjoyItTitle>
        <H2>Enjoy It?</H2>
        <H5>Consider leave a message to me!</H5>
      </StyledEnjoyItTitle>
      <StyledDivInput>
        <StyledMessageInput placeholder="Write your message here!" type="text" />
        <Button>Submit</Button>
      </StyledDivInput>
    </StyledEnjoyIt>
  )
}
