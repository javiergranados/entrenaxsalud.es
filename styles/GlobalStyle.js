import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --bluePurple: #8FA0F5;
    --cobaltBlue: #004aad;
    --cobaltBlueDark: #002352;
    --mustard: #ffde59;
    --steelBlue: #BCCADC;
    --whiteTwo: #ffffff;
  }
  @font-face {
    font-family: 'siliguriRegular';
    src: url('/fonts/HindSiliguri-Regular.ttf');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  @font-face {
    font-family: 'siliguriSemiBold';
    src: url('/fonts/HindSiliguri-SemiBold.ttf');
    font-weight: normal;
    font-style: normal;
    font-display: auto;
  }
  html,
  body {
    padding: 0;
    margin: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    overflow-x: hidden;
    font-family: 'siliguriRegular', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    background-size: cover;
    background: var(--cobaltBlue);
    color: var(--whiteTwo);
  }
  body::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }
  body::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: var(--cobaltBlueDark);
  }
  body::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: var(--steelBlue);
  }
  ::selection {
    color: var(--whiteTwo);
    text-shadow: none;
    background: var(--bluePurple);
  }
`;

export default GlobalStyle;
