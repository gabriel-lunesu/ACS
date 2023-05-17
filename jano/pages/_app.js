import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";
import "../styles/index.scss";
import ScrollToTop from "../components/common/ScrollTop";
import Script from "next/script";
import Head from "next/head";
import '../styles/global.css';




if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export default function App({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
    {/* <!-- Google tag (gtag.js) --> */}
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-J1ZR5RCLCN"></script>
    <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J1ZR5RCLCN"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-J1ZR5RCLCN');
        `}
      </Script>

    
      {/* <Head> 

      <link href="https://cdn.jsdelivr.net/npm/daisyui@2.51.6/dist/full.css" rel="stylesheet" type="text/css" />
      
    </Head>
    <Script src="https://cdn.tailwindcss.com" />
     */}



    <div className="main-page-wrapper">
      <Component {...pageProps} />
      <ScrollToTop />
    </div>
    </>
  );
}
