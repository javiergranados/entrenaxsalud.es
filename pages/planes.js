function PlanPage() {
  return (
    <>
      <p className="text-3xl">Página de planes</p>
    </>
  )
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Planes',
    },
  }
}

export default PlanPage
