import StyledFooter from './Footer.styles'

function Footer() {
  return (
    <StyledFooter>
      <span className="footer-container">{`© ${new Date().getFullYear()} Entrena X Salud`}</span>
    </StyledFooter>
  )
}

export default Footer
