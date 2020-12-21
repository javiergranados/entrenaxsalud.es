import Plans from '../components/plans/Plans'

export async function getStaticProps() {
  return {
    props: {
      title: 'Planes',
    },
  }
}

export default Plans
