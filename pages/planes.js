import Plans from '../components/plans'

export async function getStaticProps() {
  return {
    props: {
      title: 'Planes',
    },
  }
}

export default Plans
