import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import LazyImage from '../common/LazyImage'
import StyledSection from './Section.styles'

function Opo() {
  return (
    <StyledSection>
      <Col lg="6" sm="12" className="order-1 align-self-center">
        <Row className="text-center justify-content-center">
          <LazyImage src="/img/training/opo.webp" className="photo" alt="Entrenamiento OPO" />
        </Row>
      </Col>
      <Col lg="6" sm="12" className="order-2 align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Entrenamiento OPO</h3>
            <p>
              <q>
                Algunas personas quieren que algo ocurra, otras sueñan con que ocurra, otras trabajan para que ocurra
                (M. Jordan).
              </q>
              Entrenamiento enfocado en la mejora de las capacidades físicas básicas (fuerza, resistencia, flexibilidad
              y velocidad) para la mejora del rendimiento en pruebas físicas de cualquier estilo.
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Opo
