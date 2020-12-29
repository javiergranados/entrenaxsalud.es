import PropTypes from 'prop-types'
import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import 'animate.css'

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Entrena X Salud`}</title>
      </Head>
      <div className="flex flex-col w-screen h-screen text-base bg-ghostWhite font-regular">
        <div className="relative flex flex-col flex-1 w-full overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-auto">
            <div className="w-full max-w-5xl px-4 pt-5 pb-10 mx-auto my-0 md:px-8">{children}</div>
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
