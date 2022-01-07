import '../styles/globals.css';
import Head from 'next/head';


function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>Vigilant</title>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta 
          name="Vigilant" 
          content="2 Week javascript referesher for Web Dev 4 class at BCIT D3. Created by William Alvarez,
          Josh Reyes, Aryan Heravi & Maggie Su" 
      />
    </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
