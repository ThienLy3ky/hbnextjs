import type { AppProps } from "next/app";
import "@/public/static/library/css/bootstrap.min.css";
import "@/public/static/library/css/owl.carousel.min.css";
import "@/public/static/library/css/style.css";
export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
export function reportWebVitals(metric) {
  console.log(metric);
}
