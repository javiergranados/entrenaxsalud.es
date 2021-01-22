import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import StyledSection from './Section.styles'

function Nutrition() {
  return (
    <StyledSection className="flex-row-reverse">
      <Col lg="6" sm="12" className="order-1 align-self-center">
        <Row className="text-center justify-content-center">
          <Image src="/img/home/nutrition.webp" alt="Nutrición" width={1430} height={1000} />
        </Row>
      </Col>
      <Col lg="6" sm="12" className="order-2 align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Nutrición</h3>
            <p>
              El valor del ejercicio físico es alto en todos los aspectos, pero insuficiente sin unos correctos hábitos
              de vida y una correcta alimentación. Por eso ofrecemos la opción de esta importante ayuda, ofertando un
              seguimiento nutricional, consejos y recomendaciones, planificación de dietas, etc.
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Nutrition
