function Footer() {
  return (
    <footer className="flex pt-5 pb-4 pl-0 border-t border-cobaltBlue bg-cobaltBlue md:pl-8">
      <span className="w-full text-center text-white font-semi md:text-left">{`© ${new Date().getFullYear()} Entrena X Salud`}</span>
    </footer>
  )
}

export default Footer
