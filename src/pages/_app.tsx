import type { AppProps } from "next/app";
import "@/public/static/library/css/bootstrap.min.css";
import "@/public/static/library/css/owl.carousel.min.css";
import "@/public/static/library/font-awesome/css/all.min.css";
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux";
import { store } from "../controller/store";
import { useEffect } from "react";
import ReduxService from "../controller/redux";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    Promise.allSettled([ReduxService.getSetting()]);
  });
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
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </QueryClientProvider>
  );
}
