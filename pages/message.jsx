import styled from 'styled-components'
import { useState } from 'react'

import H2 from '../src/typograph/H2'
import H5 from '../src/typograph/H5'
import Button from '../src/components/buttons/Button'
import Input from '../src/components/inputs/Input'
import Comments from '../src/components/posts/Comments'
import Navbar from '../src/components/layout/Navbar'

const StyledEnjoyIt = styled.div`
  height: 140vh;
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

const StyledDivInfo = styled.div`
  display: flex;

  @media (max-width: 490px) {
    display: flex;
    flex-direction: column-reverse;
  }
`

const StyledInputInfo = styled.input`
  padding: 10px 20px;
  margin: 12px;
  display: flex;
  border-radius: 10px;
  border-style: none;
  font-weight: bold;
  font-size: 12px;
  background-color: ${(props) => props.theme.postBackgroundColor};
`

const StyledRecentComments = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 5vh;
  padding-bottom: 3vh;

  H5 {
    font-size: 28px;
    text-decoration: underline;
  }
`

const CommentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export default function EnjoyIt() {
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  const handleComment = (event) => {
    event.preventDefault()
    console.log(message, email, name)
  }

  return (
    <>
      <Navbar />
      <StyledEnjoyIt>
        <StyledEnjoyItTitle>
          <H2>Enjoy It?</H2>
          <H5>Consider leave a message to me!</H5>
        </StyledEnjoyItTitle>
        <StyledDivForm onSubmit={handleComment}>
          <Input
            placeholder="Write your message!"
            type="text"
            required
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <StyledDivInfo>
            <StyledInputInfo
              placeholder="E-mail"
              type="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
            <StyledInputInfo
              placeholder="Name"
              type="text"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </StyledDivInfo>
          <Button type="submit">Submit</Button>
        </StyledDivForm>
        <StyledRecentComments>
          <H5>Recent comments</H5>
        </StyledRecentComments>
        <StyledDivForm>
          <CommentsContainer>
            <Comments />
            <Comments />
            <Comments />
          </CommentsContainer>
        </StyledDivForm>
      </StyledEnjoyIt>
    </>
  )
}
