import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import StyledSection from './Section.styles'

function Individualization() {
  return (
    <StyledSection>
      <Col lg="6" sm="12" className="order-1 align-self-center">
        <Row className="text-center justify-content-center">
          <Image src="/img/home/individualization.webp" alt="Entrenamiento personal" width={1430} height={1000} />
        </Row>
      </Col>
      <Col lg="6" sm="12" className="order-2 align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Entrenamiento personal</h3>
            <p>
              Programación de entrenamiento enfocado a la mejora de la condición física y la calidad de vida para
              personas sanas (mejora de la condición física, embarazo, preoperatorio...) o con patologías (hipertensión,
              diabetes, cáncer, obesidad, fragilidad, post-parto, post-operatorio...)
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Individualization
