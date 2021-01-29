import Home from '../components/home'

export async function getStaticProps() {
  return {
    props: {
      title: 'Inicio',
    },
  }
}

export default Home
