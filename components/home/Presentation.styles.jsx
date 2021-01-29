import styled from 'styled-components'
import Section from './Section.styles'

export default styled(Section)`
  q {
    display: block;
    font-style: italic;
    color: var(--silver);
    padding-top: 10px;
    font-size: 0.9rem;
    margin-bottom: 50px;
    font-family: 'bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  @media (max-width: 768px) {
    q {
      margin-bottom: 20px;
    }
  }
`
