import type { AppProps } from "next/app";
import "@/public/static/library/css/bootstrap.min.css";
import "@/public/static/library/css/owl.carousel.min.css";
import { useRouter } from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";

export default function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });
  // console.log(client);

  return <Component {...pageProps} />;
}
// export function reportWebVitals(metric) {
//   console.log(metric);
// }
