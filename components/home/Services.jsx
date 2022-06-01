import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyledSection from './Section.styles'

function Services() {
  return (
    <StyledSection>
      <Col lg="12" sm="12" className="align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Servicios</h3>
            <p>
              Nuestra forma de trabajar radica en la ética de nuestra profesión, educadores físicos, cuyo OBJETIVO
              PRINCIPAL es educar y enseñar a nuestros clientes a realizar ejercicio físico correctamente y tomar
              hábitos de vida saludables, dejando cada vez más autonomía a nuestros clientes, siempre asesorados y
              guiados individualmente.
              <br />
              <br />
              Con nuestros servicios, pretendemos otros objetivos como mejorar la calidad de vida y la condición física,
              ayudar a controlar o prevenir patologías, facilitar la iniciación y continuidad de una vida activa y
              saludable, entre otras cosas. Para ello ofrecemos un servicio combinado de entrenamiento físico y
              asesoramiento nutricional.
              <br />
              <br />
              Queremos aportar también la posibilidad de trabajar con fisioterapeuta, podólogo y psicólogo deportivo,
              aunque en este aspecto nos encontramos en crecimiento.
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Services
