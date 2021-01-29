import Training from '../components/training'

export async function getStaticProps() {
  return {
    props: {
      title: 'Entrenamientos',
    },
  }
}

export default Training
