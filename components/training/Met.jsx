import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import StyledSection from './Section.styles'

function Met() {
  return (
    <StyledSection>
      <Col lg="6" sm="12" className="order-1 align-self-center">
        <Row className="text-center justify-content-center">
          <Image src="/img/training/met.png" alt="Entrenamiento MET" width={1080} height={1080} />
        </Row>
      </Col>
      <Col lg="6" sm="12" className="order-2 align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Entrenamiento MET</h3>
            <p>
              <q>
                Hay dos tipos de persona con una enfermedad... los que se quieren curar, y los que quieren que les curen
                (Anónimo)
              </q>
              Nosotros trabajamos por y para los primeros. Este programa de entrenamiento está enfocado a la prevención
              o mejora de alguna enfermedad, ya sea metabólica, cardiovascular, motora... Todo acompañado de un correcto
              seguimiento nutricional.
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Met
