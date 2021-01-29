import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import StyledSection from './Section.styles'

function Met() {
  return (
    <StyledSection className="flex-row-reverse">
      <Col lg="6" sm="12" className="order-1 align-self-center">
        <Row className="text-center justify-content-center">
          <Image src="/img/training/ep.webp" alt="Entrenamiento E+P" width={1450} height={1120} />
        </Row>
      </Col>
      <Col lg="6" sm="12" className="order-2 align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Entrenamiento E+P</h3>
            <p>
              <q>El parto es la única cita a ciegas en el que conocerás al amor de tu vida (Anónimo).</q>
              Entrenamiento destinado a mujeres embarazadas y post-parto. La ciencia, así como la ACOG, recomiendan a
              las mujeres gestantes llevar una vida activa. Nosotros ponemos a disposición de estas mujeres un
              entrenamiento personalizado y asistido desde el momento que quieran empezarlo hasta el post-parto.
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Met
