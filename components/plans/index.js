import Plans from './Plans'

function IndexPlans() {
  const colorScheme = [
    {
      height: '100',
      mainColor: 'glaucous',
      priceColor: 'cobaltBlueDark',
    },
    {
      height: '110',
      mainColor: 'orange',
      priceColor: 'dark',
    },
    {
      height: '100',
      mainColor: 'cobaltBlueDark',
      priceColor: 'glaucous',
    },
  ]

  return (
    <div className="animate__animated animate__fadeIn">
      <Plans colorScheme={colorScheme} />
    </div>
  )
}

export default IndexPlans
