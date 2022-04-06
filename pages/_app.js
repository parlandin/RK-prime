import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import 'swiper/css';
import GlobalStyle from "../styles/GlobalStyle";

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
