import Container from "../components/layout/Container";
import TitleCategory from "../components/TitleCategory";
import {Styles} from '../styles/category.style';
import CardProduct from "../components/CardProduct";
import { dehydrate, QueryClient, useQuery } from 'react-query';
import Head from 'next/head';
import Loading from "../components/Loading";


export async function getStaticProps(context){
    const {params} = context
    const queryClient = new QueryClient()
   
    await queryClient.prefetchQuery(`${params.categorys}`, 
        async () => await (await fetch(`http://localhost:5000/produtos/categoria/${params.categorys}`)).json()
    )
    
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            category: params
        }
    }
}


export  async function getStaticPaths(){
    const response = await (await fetch(`http://localhost:5000/produtos/categorias/`)).json()
    const paths = response.map((category) => {
        return {
            params: {
                categorys: `${category}`
            }
        }
    })
    
    return {paths, fallback:false}
    
}


const Category = (props) => {
    const {categorys} = props.category

    const {data, isLoading} = useQuery(
        `${categorys}`, 
        async () => await (await fetch(`http://localhost:5000/produtos/categoria/${categorys}`)).json(), 
        { initialData: props.dehydratedState, staleTime: 50000 })
    
    function trasnformTitleText(title) {
        const texts = {
            acessorios: "Acessórios",
            roupas: "Roupas",
            tattoos: "Tattoos",
            acessoriosgeeks: "Acessórios Geeks",
            cospalyers: "Cospalyers",
            mangas: "Mangas"
        }

        return texts[title] || "essa pagina não existe"
    }

    return (
        <>
            <Head>
                <title>{`${trasnformTitleText(categorys)} | RK Prime`}</title>
            </Head>

            <Container>
                <Styles.Wrapper>
                    <Styles.WrapperTitle>
                        <TitleCategory title={trasnformTitleText(categorys)}  />
                    </Styles.WrapperTitle>

                    {isLoading
                     ?  <Styles.WrapperLoading> <Loading/> </Styles.WrapperLoading>
                     :  <Styles.WrapperProducts>
                            {data.map((product) => {
                                return (
                                <Styles.WrapperGeneric key={product._id}>
                                    <CardProduct 
                                    img={product.imagens[0]} 
                                    title={product.nome}
                                    desc={product.descricao}
                                    price={product.preco}
                                    id={product._id}
                                    customClass="mobile-direct"
                                    rating={product.nota}/>
                                    
                                </Styles.WrapperGeneric>
                                )
                            }) }
                        </Styles.WrapperProducts>
                    }   

                </Styles.Wrapper>
            </Container>    
        </>
    )
}

export default Category;