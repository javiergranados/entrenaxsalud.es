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
              Con nuestros servicios, algunos de los objetivos son mejorar la calidad de vida y la condición física de
              todas las personas que apuesten por nosotros, para ello ofrecemos un servicio combinado de entrenamiento
              físico y nutrición.
              <br />
              <br />
              No obstante, nuestra forma de trabajar radica en la ética de nuestra profesión, educadores físicos, cuyo
              OBJETIVO PRINCIPAL es educar y enseñar a nuestros clientes a realizar ejercicio físico correctamente y
              tomar hábitos de vida saludables, dejando cada vez más independencia al entrenado.
              <br />
              <br />
              Queremos aportar también la posibilidad de trabajar con fisioterapeuta, podólogo, psicólogo deportivo y
              enfermero, en este aspecto nos encontramos en crecimiento.
            </p>
          </Col>
        </Row>
      </Col>
    </StyledSection>
  )
}

export default Services
