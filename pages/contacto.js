import Contact from '../components/contact'

export async function getStaticProps() {
  return {
    props: {
      title: 'Contacto',
    },
  }
}

export default Contact
