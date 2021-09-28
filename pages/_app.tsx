import "tailwindcss/tailwind.css";
import { Provider } from "react-redux";
import store from "../redux";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store.default}>
      <Component {...pageProps} />
    </Provider>
  );
}
export default MyApp;
