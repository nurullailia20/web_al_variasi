import Layout from "../components/Layout";
// import { ToggleFormProvider } from "../hooks/useToggleForm";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    // <ToggleFormProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ToggleFormProvider>
  );
}

export default MyApp;
