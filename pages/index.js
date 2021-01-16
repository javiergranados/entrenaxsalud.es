import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 2rem;
  color: var(--cobaltBlue);
`

function IndexPage() {
  return <Paragraph>Página de inicio</Paragraph>
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Inicio',
    },
  }
}

export default IndexPage
