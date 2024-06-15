// import { ToggleFormProvider } from "../hooks/useToggleForm";
import '../styles/globals.css'

import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
    // <ToggleFormProvider>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    // </ToggleFormProvider>
  )
}

export default MyApp
