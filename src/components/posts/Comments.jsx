import styled from 'styled-components'

const CommentContainer = styled.div`
  background-color: ${(props) => props.theme.postBackgroundColor};
  padding: 20px;
  border-radius: 10px;
  width: auto;
`

const SenderName = styled.p`
  font-weight: bold;
  font-size: 14px;
`

const StyledDate = styled.p`
  font-size: 12px;
`

const ContainerComment = styled.div`
  font-size: 10px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  width: 30rem;

  @media (max-width: 490px) {
    width: 15rem;
    padding: 10px;
  }
`

export default function Comments() {
  return (
    <CommentContainer>
      <SenderName>Sender Name</SenderName>
      <StyledDate>29 de setembro de 2022</StyledDate>
      <ContainerComment>Esse é um texto teste!</ContainerComment>
    </CommentContainer>
  )
}
