import styled from 'styled-components'

export default styled.div`
  cursor: pointer;
  border-radius: 30px;
  color: white;
  transform: translateZ(0);
  transition: transform 0.4s;
  background: var(--paleGrey);
  box-shadow: 1px 10px 5px 0 rgba(0, 0, 0, 0.3);
  font-family: 'exobold', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${({ height }) => `${height}%`};

  :hover,
  .active {
    transform: translateY(-5px);
  }

  span {
    display: block;
  }

  .header .content {
    padding: 20px;
    border-top-left-radius: 30px;
    border-top-right-radius: 30px;
    background-color: ${props => `var(--${props.mainColor}) `};

    span.name {
      font-size: 2rem;
    }

    span.price {
      font-size: 4rem;
      line-height: 4rem;
      color: ${props => `var(--${props.priceColor}) `};
    }

    span.type {
      font-family: 'exoregular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }
  }

  .arrow {
    display: flex;
    justify-content: center;
    border-left: 1px solid var(--paleLilac);
    border-right: 1px solid var(--paleLilac);

    .arrow__arrow-down {
      width: 0;
      height: 0;
      border-left: 30px solid transparent;
      border-right: 30px solid transparent;
      border-top: ${props => `30px solid var(--${props.mainColor}) `};
    }
  }

  .moreInfo {
    padding: 20px;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
    transition: background-color 0.15s ease-in-out;
    background-color: ${props => `var(--${props.mainColor}) `};

    span {
      font-size: 1.3rem;
    }
  }

  .body {
    color: var(--dark);
    padding: 0 20px 10px;
    border-left: 1px solid var(--paleLilac);
    border-right: 1px solid var(--paleLilac);

    span {
      padding: 1rem 0;
      border-bottom: 1px solid var(--dark);
      font-family: 'exoregular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    }

    span:last-child {
      border-bottom: none;
    }

    .rechargeMax {
      display: flex;
      padding: 0.5rem 0;
      min-height: 112px;
      flex-direction: column;
      justify-content: center;

      span {
        padding: 0;
        border-bottom: none;
      }

      span:last-child {
        font-size: 0.85rem;
        line-height: 24px;
      }
    }
  }

  @media (max-width: 768px) {
    height: 100%;
    order: ${({ height }) => (height === '110' && 2) || 'initial'};
    margin: ${({ height }) => `0 ${(height === '110' && '10rem') || ''}`};
    grid-column-end: ${({ height }) => `span ${height === '110' ? '2' : '1'}`};

    .body .rechargeMax {
      min-height: initial;
    }
  }

  @media (max-width: 425px) {
    margin: 0;
    order: initial;
    grid-column-end: span 1;
  }
`
