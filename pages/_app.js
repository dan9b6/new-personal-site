import "../styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <>
      <Head>
        <title>Dan Burton - CV</title>
        <meta property="og:title" content="Dan Burton - CV" />
        <meta property="og:url" content="https://www.danburts.co.uk/" />
        <meta property="og:image" content="images/wave.gif" />
        <meta
          property="og:description"
          content="Check out my CV - I am a Web Developer looking to start a new chapter in the industry. Could that chapter start with you?"
        />
        <meta
          name="description"
          content="Check out my CV - I am a Web Developer looking to start a new chapter in the industry. Could that chapter start with you?"
        />
        <meta property="og:locale" content="en_GB" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
