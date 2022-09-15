import styled from 'styled-components'

import H1 from '../../typograph/H1'
import H6 from '../../typograph/H6'

import IconImages from '../Icones/IconImages'

const StyledContact = styled.div`
  height: 50vh;
`

const StyledContactTitle = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  padding-top: 10vh;
  padding-bottom: 8vh;

  H1 {
    text-decoration: underline;
  }
`

const StyledContactLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 1rem;
  padding: 1rem;

  a {
    text-decoration: none;
    color: ${(props) => props.theme.primary};
  }
`

export default function Contact() {
  return (
    <>
      <StyledContact>
        <StyledContactTitle>
          <H1>Contact</H1>
        </StyledContactTitle>
        <StyledContactLink>
          <a href="https://github.com/devbpatriciocosta" target="_blank" rel="noreferrer">
            <IconImages imageName="GitIcon" type="svg" />
          </a>
          <H6>
            <a href="https://github.com/devbpatriciocosta" target="_blank" rel="noreferrer">
              @devbpatriciocosta
            </a>
          </H6>
        </StyledContactLink>
        <StyledContactLink>
          <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
            <IconImages imageName="MailIcon" type="svg" />
          </a>
          <H6>
            <a href="https://mail.google.com/mail/u/0/#inbox" target="_blank" rel="noreferrer">
              @bpatriciocosta@gmail.com
            </a>
          </H6>
        </StyledContactLink>
        <StyledContactLink>
          <a href="https://www.linkedin.com/in/brunopatricioc/" target="_blank" rel="noreferrer">
            <IconImages imageName="LinkedinIcon" type="svg" />
          </a>
          <H6>
            <a href="https://www.linkedin.com/in/brunopatricioc/" target="_blank" rel="noreferrer">
              linkedin.com/brunopatricioc/
            </a>
          </H6>
        </StyledContactLink>
      </StyledContact>
    </>
  )
}
