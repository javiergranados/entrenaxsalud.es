function PlanPage() {
  return (
    <>
      <p className="text-3xl text-cobaltBlue">Página de planes</p>
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
