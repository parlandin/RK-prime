import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import React, {useState} from "react"
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'


//css
import GlobalStyle from "../styles/GlobalStyle";
import "../public/style.css"


//custom swiper carousel 
import 'swiper/css';
import SwiperGlobal from "../styles/swiperGlobal" 


function MyApp({ Component, pageProps }) {
    const [menuMobile, setMenuMobile] = useState(false)

    function setStateMenu(activeButtonM){
        setMenuMobile(!activeButtonM)
    }

    //react query
    const [queryClient] = React.useState(() => new QueryClient())

  return (
    <>
        <GlobalStyle mobileAtive={menuMobile} />
        <SwiperGlobal />
        <Header mobileAtive={setStateMenu}/>

        <QueryClientProvider client={queryClient}>
            <Hydrate state={pageProps.dehydratedState}>
                <Component {...pageProps} />
            </Hydrate>
        </QueryClientProvider>
        
        <Footer />
    </>
  )
}

export default MyApp
