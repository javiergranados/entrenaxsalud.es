import StyledFooter from './styles/Footer'

function Footer() {
  return (
    <StyledFooter>
      <span className="footer-container">{`© ${new Date().getFullYear()} Entrena X Salud`}</span>
    </StyledFooter>
  )
}

export default Footer
