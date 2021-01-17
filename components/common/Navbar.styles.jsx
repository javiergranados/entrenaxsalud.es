import styled from 'styled-components'

export default styled.nav`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  padding: 1.5rem;
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  background-color: var(--cultured);

  .image {
    align-items: center;
    flex-shrink: 0;
    display: flex;
    margin-right: 1.5rem;
    border-radius: 100%;
    cursor: pointer;
  }

  .hamburger {
    display: block;

    button {
      width: auto;
      display: flex;
      align-items: center;
      padding: 0.5rem 0.75rem;
      border: 1px solid var(--cobaltBlueDark);
      color: var(--cobaltBlueDark);
      border-radius: 0.25rem;
      text-decoration: none;
      background: transparent;
      transition: color 0.3s ease-in-out;

      &:focus {
        outline: 2px solid transparent;
      }

      svg.uno,
      svg.dos {
        width: 24px;
        height: 24px;
      }

      svg.uno {
        display: ${({ menu }) => (menu === 'show' ? 'none' : 'block')};
      }

      svg.dos {
        display: ${({ menu }) => (menu === 'show' ? 'block' : 'none')};
      }
    }
  }

  .navbar__options {
    display: flex;
    flex-grow: 1;
    width: auto;
    align-items: center;
    flex-direction: row;
    font-family: 'semi', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .navbar__button {
    max-width: 100%;
    padding: 1rem;
    margin-right: 1rem;
    margin-left: 1rem;
    transition: all 0.3s ease-in-out;
    outline: 2px solid transparent;
    color: var(--cobaltBlue);
    text-decoration: none;

    &:hover,
    &.selected {
      text-decoration: underline;
      color: var(--cobaltBlueDark);
    }

    &:target {
      color: white;
      background: none;
    }
  }

  .navbar__button.home {
    margin-top: 0.5rem;
  }

  @media (min-width: 769px) {
    .hamburger {
      display: none;
    }

    .navbar__button.home {
      display: none;
    }
  }

  @media (max-width: 768px) {
    .image {
      display: none;
    }

    .navbar__options {
      display: ${({ menu }) => (menu === 'show' ? 'flex' : 'none')};
      width: 100%;
      flex-direction: column;
      align-items: initial;
    }

    .navbar__button {
      padding: 0.5rem 0;
    }
  }
`
