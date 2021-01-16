import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 2rem;
  color: var(--cobaltBlue);
`

function ContactPage() {
  return <Paragraph>Página de contacto</Paragraph>
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Contacto',
    },
  }
}

export default ContactPage
