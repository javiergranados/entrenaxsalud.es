import Meta from '../components/Meta'
import GlobalStyle from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta/>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
