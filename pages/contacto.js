function ContactPage() {
  return (
    <>
      <p className="text-3xl">Página de contacto</p>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Contacto',
    },
  }
}

export default ContactPage
