import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: 2rem;
  color: var(--cobaltBlue);
`

function TrainingPage() {
  return <Paragraph>Página de entrenamientos</Paragraph>
}

export async function getStaticProps() {
  return {
    props: {
      title: 'Entrenamientos',
    },
  }
}

export default TrainingPage
