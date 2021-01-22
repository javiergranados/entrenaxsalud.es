import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

export default styled(Row)`
  margin-bottom: 70px;

  h3 {
    color: var(--cobaltBlue);
    font-family: 'bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p {
    color: var(--cobaltBlueDark);
  }

  @media (max-width: 768px) {
    h3 {
      margin-top: 20px;
    }
  }
`
