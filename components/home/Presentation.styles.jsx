import styled from 'styled-components'
import Section from './Section.styles'

export default styled(Section)`
  .order-1 {
    margin-bottom: 40px;

    img {
      max-width: 70%;
    }
  }

  q {
    display: block;
    font-style: italic;
    color: var(--silver);
    padding-top: 10px;
    font-size: 0.9rem;
    font-family: 'bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }
`
