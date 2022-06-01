import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import StyledSection from './Section.styles'

function Rec() {
  return (
    <StyledSection className="flex-row-reverse">
      <Col lg="6" sm="12" className="order-1 align-self-center">
        <Row className="text-center justify-content-center">
          <Image src="/img/training/rec.png" alt="Entrenamiento REC" width={1080} height={1080} />
        </Row>
      </Col>
      <Col lg="6" sm="12" className="order-2 align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Entrenamiento REC</h3>
            <p>
              <q>La vida no se detiene, no lo hagas tú tampoco (Anónimo)</q>
              Entrenamiento enfocado a la prevención y/o rehabilitación de lesiones, re-educación postural, dolor de
              espalda... Con la posibilidad de contar con un profesional en fisioterapia.
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Rec
