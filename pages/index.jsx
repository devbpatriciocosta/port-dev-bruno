import MainContainer from '../src/components/layout/MainContainer'
import Navbar from '../src/components/layout/Navbar'
import LineBar from '../src/components/layout/LineBar'
import KnowMore from '../src/components/layout/KnowMore'
import About from '../src/components/layout/About'
import Portfolio from '../src/components/layout/Portifolio'
import Education from '../src/components/layout/Education'
import EnjoyIt from '../src/components/layout/EnjoyIt'
import Contact from '../src/components/layout/Contact'
import Footer from '../src/components/layout/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <div id="home">
        <MainContainer />
      </div>
      <KnowMore />
      <LineBar />
      <div id="about">
        <About />
      </div>
      <LineBar />
      <div id="port">
        <Portfolio />
      </div>
      <LineBar />
      <div id="education">
        <Education />
      </div>
      <LineBar />
      <EnjoyIt />
      <LineBar />
      <div id="contact">
        <Contact />
      </div>
      <LineBar />
      <Footer />
    </>
  )
}
