import styled from 'styled-components'

export default styled.footer`
  display: flex;
  padding: 1.25rem 0 1rem 2rem;
  border-top: 1px solid var(--cobaltBlue);
  background-color: var(--cobaltBlue);

  span.footer-container {
    width: 100%;
    text-align: left;
    color: white;
    font-family: 'semi', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  @media (max-width: 768px) {
    padding-left: 0;

    span.footer-container {
      text-align: center;
    }
  }
`
