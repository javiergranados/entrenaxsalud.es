function TrainingPage() {
  return (
    <>
      <p className="text-3xl">Página de entrenamientos</p>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Entrenamientos',
    },
  }
}

export default TrainingPage
