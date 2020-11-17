import PropTypes from 'prop-types'
import Meta from '../components/Meta'
import GlobalStyle from '../styles/GlobalStyle'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta />
      <GlobalStyle />
      {/* eslint-disable-next-line */}
      <Component {...pageProps} />
    </>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({}).isRequired,
}

export default MyApp
