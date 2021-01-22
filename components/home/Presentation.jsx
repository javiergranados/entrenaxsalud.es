import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import StyledPresentation from './Presentation.styles'

function Presentation() {
  return (
    <StyledPresentation>
      <Col lg="12" sm="12" className="order-1 align-self-center">
        <Row className="text-center justify-content-center">
          <Image src="/img/home/presentation.webp" alt="Quiénes somos" width={1920} height={811} />
        </Row>
      </Col>
      <Col lg="12" sm="12" className="order-2 align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h3>Quiénes somos</h3>
            <p>
              La sociedad avanza tecnológicamente, llevándonos a hábitos de vida menos activos, y la medicina facilita
              la longevidad, lo que lleva a la población a VIVIR MÁS AÑOS...¿Pero con posibilidad de disfrutarlos?. Toda
              experiencia, todo momento, todo tiempo vivido tienen un precio, y los pagamos con la salud, para bien o
              para mal.
              <br />
              <br />
              Nuestro empeño es que disfrutes de todos y cada uno de los años de TU VIDA. Para hacerlo posible, debemos
              adaptarnos a los tiempos y prevenir la evolución a la sedentariedad y &quot;enfermedades modernas&quot;,
              como la obesidad, la hipertensión, la diabetes II, el cáncer...
              <br />
              <br />
              Nos preocupamos por mejorar LO QUE DE VERDAD IMPORTA, TU SALUD , mediante el ejercicio físico adaptado e
              individualizado; con entrenamientos basados en la evidencia científica.
              <q>¿PORQUÉ LUCHAR CONTRA LA ENFERMEDAD SI PUEDES PREVENIRLA?</q>
            </p>
          </Col>
        </Row>
      </Col>
    </StyledPresentation>
  )
}

export default Presentation
