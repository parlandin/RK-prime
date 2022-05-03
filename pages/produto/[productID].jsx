import Head from "next/head"
import Container from '../../components/layout/Container'
import GalleryCarousel from '../../components/GalleryCarousel';
import SectionCategorys from "../../components/layout/SectionCategorys"
import {Styles} from '../../styles/produtos.style';
import DetailsProduct from '../../components/DetailsProduct';
import ProductDescription from "../../components/ProductDescription";
import { dehydrate, QueryClient, useQuery } from 'react-query';



export async function getStaticProps(context){
    const {params} = context
    const [title, id] = params.productId.split("&id=")

    const queryClient = new QueryClient()
    console.log("product:", params.productId)

    await queryClient.prefetchQuery(`${id}`, 
        async () => await (await fetch(`http://localhost:5000/produtos/${id}`)).json()
    )
    
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
            productId: params
        }
    }
}

export  async function getStaticPaths(){
    const response = await (await fetch(`http://localhost:5000/produtos/`)).json()
    const paths = response.map((product) => {
        return {
            params: {
                productId: `${product.nome}&id=${product._id}`
            }
        }
    })
    
    return {paths, fallback:false}
    
}



const Produtos = (props) => {
    const {productId} = props.productId

    const [title, id] = productId.split("&id=")



    const {data, isLoading} = useQuery(
        `${id}`, 
        async () => await (await fetch(`http://localhost:5000/produtos/${id}`)).json(), 
        { initialData: props.dehydratedState, staleTime: 50000 })

    console.log(data)
    
    return (
        <Container>
            <Head>
                <title>{`${title} | RK Prime`}</title>
            </Head>
            <Styles.Wrapper>
                <Styles.ProdutoInfo>
                    <Styles.WrapperGeneric className="SlideImages">
                        <GalleryCarousel arrayImages={data.imagens} description={data.descricao}/>
                    </Styles.WrapperGeneric>
                    
                    <Styles.WrapperGeneric>
                        <DetailsProduct 
                        title={data.nome} 
                        price={data.preco}
                        amount={data.quantidade}
                        description={data.descricao}/>
                    </Styles.WrapperGeneric>
                   
                   
                </Styles.ProdutoInfo>

                <SectionCategorys  title={"Itens que podem ser do seu interesse"}/>
                
            </Styles.Wrapper>
        
            <ProductDescription  description={data.descricao}/>
        </Container>
        
    )
}

export default Produtos;