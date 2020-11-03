import '../styles/globals.css'
import "../components/styles/App.css";
import Meta from '../components/Meta'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Meta/>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
