import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'
import StyledSocial from './Social.styles'

function Social() {
  return (
    <StyledSocial>
      <Row>
        <Col lg="6" sm="12" className="order-1 align-self-center">
          <Row className="text-center justify-content-center">
            <Image src="/img/contact.png" alt="profile" width={1080} height={1080} />
          </Row>
        </Col>
        <Col lg="6" sm="12" className="order-2 align-self-center">
          <Row className="text-center justify-content-center">
            <Col>
              <h3>¡Ponte en contacto conmigo!</h3>
              <p>Puedes encontrarme en todas las redes sociales o enviarme un correo, ¡como prefieras!</p>
              <Row className="text-center justify-content-center">
                <Col lg="3" md="4" sm="4" xs="4" className="mt-3 icon">
                  <a
                    title="Facebook"
                    href="https://www.facebook.com/EntrenaXSalud.iloprio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="icon" width="50" height="50" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.768,7.5H14.5V5.595 c0-0.896,0.594-1.105,1.012-1.105s2.988,0,2.988,0V0.548l-4.329-0.013c-3.927,0-4.671,2.938-4.671,4.82V7.5h-3v4h3 c0,5.212,0,12,0,12h5c0,0,0-6.85,0-12h3.851L18.768,7.5z" />
                    </svg>
                  </a>
                </Col>
                <Col lg="3" md="4" sm="4" xs="4" className="mt-3 icon">
                  <a title="Twitter" href="https://twitter.com/HisraelLopez" target="_blank" rel="noreferrer">
                    <svg className="icon" height="50" width="50" viewBox="0 0 25 25" fill="currentColor">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179.0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142.0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                </Col>
                <Col lg="3" md="4" sm="4" xs="4" className="mt-3 icon">
                  <a
                    title="Instagram"
                    href="https://www.instagram.com/entrenaxsalud_iloprio/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="icon" height="50" width="50" viewBox="0 0 25 25" fill="currentColor">
                      <path d="M12 2.2h4.8c3.3.2 4.8 1.7 5 5a83.4 83.4.0 010 9.7c-.2 3.2-1.7 4.7-5 4.9a83 83 0 01-9.6.0c-3.3-.2-4.8-1.7-5-5a83 83 0 010-9.6c.2-3.3 1.7-4.8 5-5H12zM12 0H7C2.8.4.4 2.8.0 7a84.3 84.3.0 000 10c.3 4.3 2.7 6.7 7 7a85.6 85.6.0 0010 0c4.3-.3 6.7-2.7 7-7a84.3 84.3.0 000-10c-.3-4.3-2.7-6.7-7-7h-5zm0 5.8a6.2 6.2 0 100 12.4 6.2 6.2 0 000-12.4zM12 16a4 4 0 110-8 4 4 0 010 8zm6.4-11.8a1.4 1.4 0 100 2.8 1.4 1.4 0 000-2.8z" />
                    </svg>
                  </a>
                </Col>
              </Row>
              <Row className="mt-5 text-center">
                <Col lg="6" md="6" sm="6" xs="6" className="icon">
                  <a title="Correo" href="mailto:info@entrenaxsalud.es">
                    <svg className="icon" width="50" height="50" viewBox="0 0 20 18" fill="currentColor">
                      <path d="M16.999,4.975L16.999,4.975C16.999,4.975,16.999,4.975,16.999,4.975c-0.419-0.4-0.979-0.654-1.604-0.654H4.606c-0.584,0-1.104,0.236-1.514,0.593C3.076,4.928,3.05,4.925,3.037,4.943C3.034,4.945,3.035,4.95,3.032,4.953C2.574,5.379,2.276,5.975,2.276,6.649v6.702c0,1.285,1.045,2.329,2.33,2.329h10.79c1.285,0,2.328-1.044,2.328-2.329V6.649C17.724,5.989,17.441,5.399,16.999,4.975z M15.396,5.356c0.098,0,0.183,0.035,0.273,0.055l-5.668,4.735L4.382,5.401c0.075-0.014,0.145-0.045,0.224-0.045H15.396z M16.688,13.351c0,0.712-0.581,1.294-1.293,1.294H4.606c-0.714,0-1.294-0.582-1.294-1.294V6.649c0-0.235,0.081-0.445,0.192-0.636l6.162,5.205c0.096,0.081,0.215,0.122,0.334,0.122c0.118,0,0.235-0.041,0.333-0.12l6.189-5.171c0.099,0.181,0.168,0.38,0.168,0.6V13.351z" />
                    </svg>
                  </a>
                </Col>
                <Col lg="6" md="6" sm="6" xs="6" className="icon">
                  <a
                    title="LinkedIn"
                    href="https://www.linkedin.com/in/israel-l%C3%B3pez-r%C3%ADos-6a9117100/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <svg className="icon" width="50" height="50" viewBox="0 0 455 455" fill="currentColor">
                      <path d="M455 0V455H0V0H455zM307.256 170.139C271.386 170.139 255.373 189.879 246.4 203.686V174.907H178.863C179.768 193.96 178.863 378.003 178.863 378.003H246.4V264.577C246.4 258.491 246.864 252.458 248.64 248.118 253.526 235.968 264.617 223.425 283.281 223.425 307.72 223.425 317.476 242.054 317.476 269.345V378.003H385V261.537C385 199.159 351.693 170.139 307.256 170.139zM141.522 174.906H74.016V378.002H141.522V174.906zM108.211 76.998C85.107 76.998 70 92.157 70 112.085 70 131.585 84.678 147.186 107.323 147.186H107.769C131.32 147.186 145.963 131.585 145.963 112.085 145.521 92.157 131.32 76.998 108.211 76.998z" />
                    </svg>
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </StyledSocial>
  )
}

export default Social
