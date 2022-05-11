import Head from "next/head";
import Banner from '../components/Banner';
import Container from '../components/layout/Container';
import SectionCategorys from '../components/layout/SectionCategorys';
import {Styles} from "../styles/Home.Styles";
import { dehydrate, QueryClient, useQuery } from 'react-query';
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const getProducts = async () => await (await fetch("https://rk-prime.herokuapp.com/produtos")).json()

export async function getStaticProps(){
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery('products', getProducts)
    
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}

 const Home = (props) => {
    const [products, setProducts] = useState({spotlight: [], acessories: [], tattoos: [] })

    const {data, isLoading} = useQuery('products', getProducts, { initialData: props.dehydratedState, staleTime: 50000 })

    useEffect(() => {""
        if(!isLoading){
            setProducts({
                ...products, 
                spotlight:  getSpotlight(), 
                acessories: getAcessories(), 
                tattoos: getTattos()
            })
        }
    },[])


    function getSpotlight(){
        const newArray = data.filter((product) => product.destaque === true)
        return newArray
    }
    function getAcessories(){
        const newArray = data.filter((product) => product.categoria === "acessorios")
        return newArray.slice(0,9)
    }
    function getTattos(){
        const newArray = data.filter((product) => product.categoria === "tattoos")
        return newArray.slice(0,9)
    }

    return (
        <Container>
            <Head>
                <title>RK Prime | Riska Tattoo</title>
            </Head>

            {isLoading 
            ? <Styles.WrapperLoading> <Loading /> </Styles.WrapperLoading> 
            : <>
            
                <Styles.WrapperHome>
                <Banner />
                <SectionCategorys title="Destaques" more={false} products={products.spotlight}/>

                <SectionCategorys 
                title="Acessórios" 
                more={true} 
                categorys={"acessorios"} 
                products={products.acessories}/>

                <SectionCategorys
                 title="Tattoos" 
                 more={true}
                 categorys={"tattoos"}
                 products={products.tattoos}/>
                </Styles.WrapperHome>
    
            </>}
        </Container>
    )
}


export default Home;