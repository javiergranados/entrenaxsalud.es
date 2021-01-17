import PropTypes from 'prop-types'
import { useState } from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from './Card'
import StyledPlans from './styles/Plans'

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
              <Card
                type={selected}
                height={colorScheme[0].height}
                mainColor={colorScheme[0].mainColor}
                priceColor={colorScheme[0].priceColor}
              />
              <Card
                type={selected}
                height={colorScheme[1].height}
                mainColor={colorScheme[1].mainColor}
                priceColor={colorScheme[1].priceColor}
              />
              <Card
                type={selected}
                height={colorScheme[2].height}
                mainColor={colorScheme[2].mainColor}
                priceColor={colorScheme[2].priceColor}
              />
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
