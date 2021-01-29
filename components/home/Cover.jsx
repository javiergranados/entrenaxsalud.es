import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import StyledCover from './Cover.styles'

function Cover() {
  return (
    <StyledCover>
      <Col lg="12" sm="12" className="align-self-center">
        <Row className="text-center justify-content-center">
          <Col>
            <h1>Entrena X Salud</h1>
            <h3>Aprende a moverte, aprende a entrenar</h3>
          </Col>
        </Row>
      </Col>
    </StyledCover>
  )
}

export default Cover
