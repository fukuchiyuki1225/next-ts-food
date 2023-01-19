import "../styles/globals.scss";
import Layout from "../layouts/layout/layout";

export default function App({ Component, pageProps }) {
  switch (pageProps.layout) {
    case "main": {
      return (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      );
    }
    default: {
      return (
        <Layout layout="sub">
          <Component {...pageProps} />
        </Layout>
      );
    }
  }
}
