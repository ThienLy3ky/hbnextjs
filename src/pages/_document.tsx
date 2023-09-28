import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="deScription" content="Health and beautiful " />
        <link rel="manifest" href="/manifest.json" />
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
          src="/static/library/js/easing.min.js"
          strategy="beforeInteractive"
        ></Script>
        <Script
          type="text/javascript"
          src="/static/library/js/index.js"
        ></Script>
        <Script
          type="text/javascript"
          src="/static/library/font-awesome/js/fontawesome.min.js"
          strategy="beforeInteractive"
        ></Script>
      </body>
    </Html>
  );
}
