import type { AppProps } from "next/app";
import "@/public/static/library/css/bootstrap.min.css";
import "@/public/static/library/css/owl.carousel.min.css";
import { QueryClientProvider, QueryClient } from "react-query";

export default function MyApp({ Component, pageProps }: AppProps) {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });
  return (
    <QueryClientProvider client={client}>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}
