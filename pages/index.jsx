import MainContainer from '../src/components/layout/MainContainer'
import Navbar from '../src/components/layout/Navbar'
import LineBar from '../src/components/layout/LineBar'
import KnowMore from '../src/components/layout/KnowMore'
import About from '../src/components/layout/About'
import Portfolio from '../src/components/layout/Portifolio'
import Education from '../src/components/layout/Education'
import EnjoyIt from '../src/components/layout/EnjoyIt'
import Contact from '../src/components/layout/Contact'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainContainer />
      <KnowMore />
      <LineBar />
      <About />
      <LineBar />
      <Portfolio />
      <LineBar />
      <Education />
      <LineBar />
      <EnjoyIt />
      <LineBar />
      <Contact />
    </>
  )
}
