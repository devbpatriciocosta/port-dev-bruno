import styled from 'styled-components'

import H2 from '../../typograph/H2'
import H5 from '../../typograph/H5'
import Button from '../buttons/Button'

const StyledEnjoyIt = styled.div`
  height: 40vh;
  background-color: ${(props) => props.theme.primary};
`

const StyledEnjoyItTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 10vh;
  padding-bottom: 3vh;

  H2 {
    text-decoration: underline;
  }
`

const StyledDivForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export default function EnjoyIt() {
  return (
    <StyledEnjoyIt>
      <StyledEnjoyItTitle>
        <H2>Enjoy It?</H2>
        <H5>Consider leave a message to me!</H5>
      </StyledEnjoyItTitle>
      <StyledDivForm>
        <Button type="submit">Click here to send your message!</Button>
      </StyledDivForm>
    </StyledEnjoyIt>
  )
}
