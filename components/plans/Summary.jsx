import { useState } from 'react'

function Summary() {
  const [selected, setSelected] = useState('month')

  const handleClick = ({ target }) => setSelected(target.value)

  return (
    <div className="container mx-auto text-center">
      <h1 className="py-5 text-2xl font-bold text-cobaltBlueDark">PLANES DE PRECIOS</h1>
      <button
        value="month"
        type="button"
        onClick={handleClick}
        className={`mb-4 rounded-l-full price-button mobileS:rounded-r-full mobileM:rounded-r-none sm:mb-0${
          (selected === 'month' && ' selected') || ''
        }`}
      >
        PAGO MENSUAL
      </button>
      <button
        value="year"
        type="button"
        onClick={handleClick}
        className={`mb-4 rounded-r-full price-button mobileS:rounded-l-full mobileM:rounded-l-none sm:mb-0${
          (selected === 'year' && ' selected') || ''
        }`}
      >
        PAGO ANUAL
      </button>
      <div className="grid items-center gap-12 mt-20 grid-cols-mobile lg:grid-cols-desktop">
        <p>My plan</p>
        <p>My plan</p>
        <p>My plan</p>
      </div>
    </div>
  )
}

export default Summary
