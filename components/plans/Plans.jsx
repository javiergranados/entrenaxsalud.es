import PropTypes from 'prop-types'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from './Card'
import StyledPlans from './Plans.styles'

const trainingPlans = [
  {
    name: 'FREE',
    monthPrice: '0,00 €',
    yearPrice: '0,00 €',
  },
  {
    name: 'BASIC',
    monthPrice: '0,99 €',
    yearPrice: '8,99 €',
  },
  {
    name: 'PRO',
    monthPrice: '9,99 €',
    yearPrice: '59,99 €',
  },
]
function Plans({ colorScheme }) {
  const [selected, setSelected] = useState('month')

  const handleClick = ({ target }) => setSelected(target.value)

  return (
    <StyledPlans>
      <Container>
        <h1>PLANES DE PRECIOS</h1>
        <Row className="text-center">
          <Col lg="12">
            <button
              value="month"
              type="button"
              onClick={handleClick}
              className={`price-button${(selected === 'month' && ' selected') || ''}`}
            >
              PAGO MENSUAL
            </button>
            <button
              value="year"
              type="button"
              onClick={handleClick}
              className={`price-button${(selected === 'year' && ' selected') || ''}`}
            >
              PAGO ANUAL
            </button>
            <div className="plans">
              {trainingPlans.map((plan, i) => (
                <Card
                  key={plan.name}
                  plan={plan}
                  type={selected}
                  height={colorScheme[i].height}
                  mainColor={colorScheme[i].mainColor}
                  priceColor={colorScheme[i].priceColor}
                />
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </StyledPlans>
  )
}

Plans.propTypes = {
  colorScheme: PropTypes.arrayOf(
    PropTypes.shape({
      height: PropTypes.string,
      mainColor: PropTypes.string,
      priceColor: PropTypes.string,
    })
  ).isRequired,
}

export default Plans
