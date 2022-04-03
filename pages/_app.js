import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/layout/header";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
