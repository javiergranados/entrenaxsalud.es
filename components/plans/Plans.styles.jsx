import styled from 'styled-components'

export default styled.div`
  .container {
    padding-top: 3vh;
  }

  h1 {
    color: var(--cobaltBlueDark);
    text-align: center;
    margin-bottom: 3rem;
    font-size: 24px;
    line-height: 24px;
    font-family: 'bold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .price-button {
    cursor: pointer;
    border: none;
    font-size: 1rem;
    min-width: 166px;
    box-shadow: none;
    align-items: center;
    padding: 1rem 1.6rem;
    color: var(--cobaltBlue);
    background: var(--gainsBoro);
    transition: all 0.15s ease-in-out;
    font-family: 'regular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  .price-button:nth-child(1) {
    border-top-left-radius: 30px;
    border-bottom-left-radius: 30px;
  }

  .price-button:nth-child(2) {
    border-top-right-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  .price-button:focus {
    outline: 0;
  }

  .price-button:active,
  .price-button:hover {
    color: white;
    background: var(--silver);
  }

  .price-button.selected {
    background: var(--glaucous);
    color: white;
  }

  .price-button.selected:active,
  .price-button.selected:hover {
    background: var(--cobaltBlue);
  }

  .plans {
    display: grid;
    grid-gap: 50px;
    margin-top: 5rem;
    align-items: center;
    grid-template-columns: minmax(250px, 1fr) minmax(300px, 1fr) minmax(250px, 1fr);
  }

  @media (min-width: 2560px) {
    .container {
      padding-bottom: 70px;
    }
  }

  @media (min-width: 992px) {
    .container {
      padding-bottom: 70px;
    }
  }

  @media (max-width: 768px) {
    .plans {
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    }
  }

  @media (max-width: 425px) {
    .container {
      padding-top: 13vh;
    }
  }

  @media (max-width: 320px) {
    .price-button {
      border-radius: 30px;
    }

    .price-button:nth-child(1) {
      margin-bottom: 1rem;
    }
  }
`
