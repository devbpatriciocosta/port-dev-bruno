import MainContainer from '../src/components/layout/MainContainer'
import Navbar from '../src/components/layout/Navbar'
import LineBar from '../src/components/layout/LineBar'
import KnowMore from '../src/components/layout/KnowMore'
import About from '../src/components/layout/About'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainContainer />
      <KnowMore />
      <LineBar />
      <About />
      <LineBar />
    </>
  )
}
