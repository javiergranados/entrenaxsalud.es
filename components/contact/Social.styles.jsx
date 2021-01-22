import styled from 'styled-components'
import Container from 'react-bootstrap/Container'

export default styled(Container)`
  margin-top: 100px;

  h3 {
    color: var(--mustard);
    font-family: 'bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  p {
    color: var(--cobaltBlueDark);
  }

  .icon {
    color: var(--cobaltBlue);
    transition: color 0.3s ease-in-out;
  }

  .icon:hover {
    color: var(--cobaltBlueDark);
  }

  @media (max-width: 768px) {
    margin-top: 50px;

    h3 {
      margin-top: 20px;
    }
  }
`
