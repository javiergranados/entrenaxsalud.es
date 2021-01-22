import Presentation from './Presentation'
import Services from './Services'
import Individualization from './Individualization'
import Nutrition from './Nutrition'
import StyledHome from './Home.styles'

function Home() {
  return (
    <StyledHome>
      <Presentation />
      <Services />
      <Individualization />
      <Nutrition />
    </StyledHome>
  )
}

export default Home
