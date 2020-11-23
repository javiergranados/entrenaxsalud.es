function IndexPage() {
  return (
    <>
      <p className="text-3xl text-cobaltBlue">Próximamente...</p>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Inicio',
    },
  }
}

export default IndexPage
