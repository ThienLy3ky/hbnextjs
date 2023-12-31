import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/public/static/favicon.ico" />
        <meta name="deScription" content="Health and beautiful " />
        <link rel="apple-touch-icon" href="/public/static/logo192.png" />
        <link rel="manifest" href="/public/static/manifest.json" />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css"
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          type="text/javascript"
          src="/static/library/jquery/jquery.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/static/library/js/bootstrap.bundle.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/static/library/js/owl.carousel.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/static/library/js/easing.min.js"
          strategy="beforeInteractive"
        ></Script>
        {/* <Script
          type="text/javascript"
          src="/static/library/js/main.js"
          strategy="beforeInteractive"
        ></Script> */}
      </body>
    </Html>
  );
}
