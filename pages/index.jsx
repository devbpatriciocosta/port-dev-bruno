import MainContainer from '../src/components/layout/MainContainer'
import Navbar from '../src/components/layout/Navbar'
import LineBar from '../src/components/layout/LineBar'
import KnowMore from '../src/components/layout/KnowMore'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <MainContainer />
      <KnowMore />
      <LineBar />
    </>
  )
}
