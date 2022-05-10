import Header from "../components/layout/header";
import Footer from "../components/layout/footer";
import Script from "next/script";
import React, {useState} from "react"
import { Hydrate, QueryClient, QueryClientProvider } from 'react-query'
import { ShoppingContextProvider } from "../context/shoppingTotal";
import {DefaultSeo} from "next-seo";
import Seo from "../next-seo-config";
//css
import GlobalStyle from "../styles/GlobalStyle";


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
        <DefaultSeo {...Seo}/>

        <Script 
            strategy="lazyOnload" 
            src="https://www.googletagmanager.com/gtag/js?id=G-N0NBQF7P8C"
        />
        <Script  id="googleAnalystic" strategy="lazyOnload">
            {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N0NBQF7P8C');`}
        </Script>

        

        <GlobalStyle mobileAtive={menuMobile} />
        <SwiperGlobal />
        <ShoppingContextProvider>
            <Header mobileAtive={setStateMenu}/>

            <QueryClientProvider client={queryClient}>
                <Hydrate state={pageProps.dehydratedState}>
                    <Component {...pageProps} />
                </Hydrate>
            </QueryClientProvider>

        </ShoppingContextProvider>
        <Footer />
    </>
  )
}

export default MyApp
