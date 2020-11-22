function IndexPage() {
  return (
    <>
      <p className="text-3xl">Página de inicio</p>
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
