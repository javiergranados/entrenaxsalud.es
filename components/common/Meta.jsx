import Head from 'next/head'

function Meta() {
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>Entrena X Salud</title>
      <link rel="shortcut icon" href="/img/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
      <meta name="description" content="Aprende a moverte, aprende a entrenar" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
    </Head>
  )
}

export default Meta
