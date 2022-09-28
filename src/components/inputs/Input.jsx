import { forwardRef } from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
  padding: 10px 20px;
  display: flex;
  margin: 20px;
  border-radius: 10px;
  border-style: none;
  width: 30rem;
  height: 5rem;
  font-weight: bold;
  font-size: 12px;
  background-color: #d1d1d1;

  @media (max-width: 490px) {
    width: auto;
  }
`

const Input = forwardRef((props, ref) => {
  return <StyledInput {...props} ref={ref} />
})

Input.displayName = 'Input'

export default Input
