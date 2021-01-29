import styled from 'styled-components'
import Row from 'react-bootstrap/Row'

export default styled(Row)`
  min-height: 320px;
  border-radius: 30px;
  margin-bottom: 50px;
  background: url('/img/home/cover.webp');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  h1 {
    color: var(--cobaltBlue);
    font-family: 'bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  h3 {
    color: var(--glaucous);
    font-family: 'bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`
