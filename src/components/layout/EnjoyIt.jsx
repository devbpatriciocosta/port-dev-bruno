import styled from 'styled-components'

import H2 from '../../typograph/H2'
import H5 from '../../typograph/H5'

const StyledEnjoyIt = styled.div`
  height: 90vh;
  background-color: ${(props) => props.theme.primary};
`

const StyledEnjoyItTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-top: 10vh;
  padding-bottom: 10vh;
`

const StyledDivInput = styled.div`
  display: flex;
  justify-content: center;
`
const StyledMessageInput = styled.input`
  border-radius: 20px;
  border-style: none;
  width: 40rem;
  height: 10rem;
  text-align: left;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  background-color: #d1d1d1;
`

export default function EnjoyIt() {
  return (
    <StyledEnjoyIt>
      <StyledEnjoyItTitle>
        <H2>Enjoy It?</H2>
        <H5>Consider leave a message to me!</H5>
      </StyledEnjoyItTitle>
      <StyledDivInput>
        <StyledMessageInput placeholder="Write your message here!"></StyledMessageInput>
      </StyledDivInput>
    </StyledEnjoyIt>
  )
}
