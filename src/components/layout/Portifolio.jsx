import styled from 'styled-components'

import IconImages from '../Icones/IconImages'
import H2 from '../../typograph/H2'
import H4 from '../../typograph/H4'
import H6 from '../../typograph/H6'

const StyledPortfolio = styled.div`
  background-color: ${(props) => props.theme.primary};
  width: 100%;
  height: 170vh;
`

const StyledTitle = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10vh;
`

const StyledProject = styled.div`
  margin-top: 5rem;
  margin-left: 18rem;
  display: flex;
  gap: 10rem;
`

const StyledText = styled.div`
  background-color: black;
  height: 12.05rem;
  width: 50rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 15px;
`

export default function Portfolio() {
  return (
    <StyledPortfolio>
      <StyledTitle>
        <H2>Portfolio</H2>
      </StyledTitle>
      <StyledProject>
        <IconImages imageName="CB" type="svg" />
        <StyledText>
          <H4>Challenge do bem</H4>
          <H6>
            Passionate developer looking for a great team to build Apps and WebPages together. Im
            always looking forward to learning new technologies and overcome new challenges. Happy
            to relocate for any great opportunity.
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="SocialDev" type="svg" />
        <StyledText>
          <H4>Social Dev</H4>
          <H6>
            Passionate developer looking for a great team to build Apps and WebPages together. Im
            always looking forward to learning new technologies and overcome new challenges. Happy
            to relocate for any great opportunity.
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="TikTakToe" type="svg" />
        <StyledText>
          <H4>Tik Tak Toe</H4>
          <H6>
            Passionate developer looking for a great team to build Apps and WebPages together. Im
            always looking forward to learning new technologies and overcome new challenges. Happy
            to relocate for any great opportunity.
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="ToDoList" type="svg" />
        <StyledText>
          <H4>To Do List</H4>
          <H6>
            Passionate developer looking for a great team to build Apps and WebPages together. Im
            always looking forward to learning new technologies and overcome new challenges. Happy
            to relocate for any great opportunity.
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="Bank" type="svg" />
        <StyledText>
          <H4>Currency Enchange for non-conventional currencies</H4>
          <H6>
            Passionate developer looking for a great team to build Apps and WebPages together. Im
            always looking forward to learning new technologies and overcome new challenges. Happy
            to relocate for any great opportunity.
          </H6>
        </StyledText>
      </StyledProject>
    </StyledPortfolio>
  )
}
