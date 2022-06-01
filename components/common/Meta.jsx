import Head from 'next/head'

function Meta() {
  return (
    <Head>
      {/* HTML Meta Tags */}
      <title>Entrena X Salud</title>
      <link rel="shortcut icon" href="/img/favicon.ico" />
      <meta name="description" content="Moverte es importante, moverte bien es necesario" />
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

      {/* Open Graph Meta Tags */}
      <meta property="og:url" content="https://www.entrenaxsalud.es/" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Entrena X Salud" />
      <meta property="og:description" content="Moverte es importante, moverte bien es necesario 💪🏻" />
      <meta property="og:image" content="https://www.entrenaxsalud.es/img/logo.svg" />

      {/* Twitter Meta Tags */}
      <meta name="twitter:card" content="summary" />
      <meta property="twitter:url" content="https://www.entrenaxsalud.es/" />
      <meta name="twitter:title" content="Israel López Ríos" />
      <meta name="twitter:description" content="Moverte es importante, moverte bien es necesario 💪🏻" />
      <meta name="twitter:site" content="@HisraelLopez" />
      <meta name="twitter:image" content="https://www.entrenaxsalud.es/img/logo.svg" />
      <meta name="twitter:creator" content="@HisraelLopez" />

      {/* Bootstrap */}
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossOrigin="anonymous"
      />
    </Head>
  )
}

export default Meta
