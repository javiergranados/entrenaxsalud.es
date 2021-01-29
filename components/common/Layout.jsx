import PropTypes from 'prop-types'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import StyledLayout from './Layout.styles'
import 'animate.css'

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Entrena X Salud`}</title>
      </Head>
      <StyledLayout>
        <div className="layout-container">
          <Navbar />
          <main>
            <div className="main-container">{children}</div>
          </main>
          <Footer />
        </div>
      </StyledLayout>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
