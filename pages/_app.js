import "../styles/globals.scss";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return <Component {...pageProps} />;
}

export default MyApp;
