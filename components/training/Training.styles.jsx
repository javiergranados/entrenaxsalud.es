import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export default styled(Container)`
  margin-top: 100px;

  @media (max-width: 768px) {
    margin-top: 50px;
  }
`
