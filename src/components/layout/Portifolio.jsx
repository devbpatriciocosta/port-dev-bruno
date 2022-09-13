/* eslint-disable react/no-unescaped-entities */
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

  H6 {
    width: 45rem;
  }
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
            This project was a great opportunity to build a HomePage for a non-profit organization
            without lucrative founds with a parternship of Ruan and Adriano. It was applied ReactJS
            knowledge and also Styled-Components. I learned more about how Git and Git Hub works on
            todays organizations. Still need to implement the back end to register Users and show
            then how they are going through the monthly exercise.
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="SocialDev" type="svg" />
        <StyledText>
          <H4>Social Dev</H4>
          <H6>
            Did ever heard about a Social Network opened to any dev to say whatever he wants? Share
            information? Share the lattest news about the TECH world? YOU FIND IT ALL HERE! This
            project was designed with SejaDev Course using React JS + Styled-Components
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="TikTakToe" type="svg" />
        <StyledText>
          <H4>Tik Tak Toe</H4>
          <H6>
            Who never thougth about develop your own game? So, that's was a start to me! This a Tik
            tak toe game, or in Brazil, Jogo da Velha (Old Woman Game haha). It was build using
            react reusing through props and children components as we use many different icons to
            build the game. Also, it was used SASS!
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="ToDoList" type="svg" />
        <StyledText>
          <H4>To Do List</H4>
          <H6>
            It was my first SOLO PROJECT using REACT JS. It was just time do experimental things and
            put in the world what I have learned
          </H6>
        </StyledText>
      </StyledProject>
      <StyledProject>
        <IconImages imageName="Bank" type="svg" />
        <StyledText>
          <H4>Currency Enchange for non-conventional currencies</H4>
          <H6>
            As a person and human being, I've always curious and passionate to learn new things.
            Thus, as all changing of carrer is extremmelly challanging, I decide to design my real
            first projet using only JavaScript, HTML and CSS. This project was very important to me
            because it was my first of all!
          </H6>
        </StyledText>
      </StyledProject>
    </StyledPortfolio>
  )
}
