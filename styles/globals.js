import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
:root {
  --cobaltBlue: '#004aad';
  --cobaltBlueDark: '#002352';
  --cultured: '#f7f7f7';
  --gainsBoro: '#e5e5ea';
  --ghostWhite: '#f5f8fb';
  --glaucous: '#517edb';
  --mustard: '#ffde59';
  --silver: '#c7c7cc';
}

@font-face {
  font-family: 'regular';
  font-weight: 400;
  font-style: normal;
  font-display: auto;
  src: url('/fonts/HindSiliguri-Regular.ttf');
}

@font-face {
  font-family: 'semi';
  font-weight: 600;
  font-style: normal;
  font-display: auto;
  src: url('/fonts/HindSiliguri-SemiBold.ttf');
}

@font-face {
  font-family: 'bold';
  font-weight: 700;
  font-style: normal;
  font-display: auto;
  src: url('/fonts/HindSiliguri-Bold.ttf');
}

html,
body {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  font-style: 20px;
}

body::-webkit-scrollbar {
  width: 7px;
  height: 7px;
}

body::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #002352;
}

body::-webkit-scrollbar-track {
  border-radius: 10px;
  background-color: #bccadc;
}

::selection {
  color: #fff;
  text-shadow: none;
  background: #8fa0f5;
}
`
export default GlobalStyle
