import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import 'swiper/css';
import GlobalStyle from "../styles/GlobalStyle";
import "../public/style.css"
import React, {useState} from "react"

//custom swiper carousel 
import SwiperGlobal from "../styles/swiperGlobal" 


function MyApp({ Component, pageProps }) {
    const [menuMobile, setMenuMobile] = useState(false)

    function setStateMenu(){
        setMenuMobile(!menuMobile)
    }

  return (
    <>
        <GlobalStyle mobileAtive={menuMobile} />
        <SwiperGlobal />
        <Header mobileAtive={setStateMenu}/>
        <Component {...pageProps} />
        <Footer />
    </>
  )
}

export default MyApp
