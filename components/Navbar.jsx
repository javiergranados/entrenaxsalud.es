import { useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import StyledNavbar from './styles/Navbar'

function Navbar() {
  const router = useRouter()
  const [showMenu, setShowMenu] = useState(false)

  const handleClick = () => setShowMenu(!showMenu)

  const handleLink = event => {
    event.preventDefault()
    setShowMenu(false)
    router.push(event.currentTarget.href)
  }

  return (
    <StyledNavbar menu={(showMenu && 'show') || 'hide'}>
      <div className="image">
        <a href="/" onClick={handleLink}>
          <Image src="/img/logo.svg" alt="logo" width={70} height={70} />
        </a>
      </div>
      <div className="hamburger">
        <button type="button" onClick={handleClick}>
          <svg className="uno" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg className="dos" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div className="navbar__options">
        <a
          href="/"
          onClick={handleLink}
          className={`navbar__button home${(router.pathname === '/' && ' selected') || ''}`}
        >
          INICIO
        </a>
        <a
          href="/entrenamientos"
          onClick={handleLink}
          className={`navbar__button${(router.pathname === '/entrenamientos' && ' selected') || ''}`}
        >
          ENTRENAMIENTOS
        </a>
        <a
          href="/planes"
          onClick={handleLink}
          className={`navbar__button${(router.pathname === '/planes' && ' selected') || ''}`}
        >
          PLANES
        </a>
        <a
          href="/contacto"
          onClick={handleLink}
          className={`navbar__button${(router.pathname === '/contacto' && ' selected') || ''}`}
        >
          CONTACTO
        </a>
      </div>
    </StyledNavbar>
  )
}

export default Navbar
