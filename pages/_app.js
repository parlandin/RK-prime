import GlobalStyle from "../styles/GlobalStyle";
import Header from "../components/layout/header";
import Footer from "../components/layout/footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
    </>
  )
}

export default MyApp
