import { useRouter } from 'next/router'
import Container from "../components/layout/Container"
import TitleCategory from "../components/TitleCategory"
import {Styles} from '../styles/category.style'
import CardProduct from "../components/CardProduct"
import { dehydrate, QueryClient, useQuery } from 'react-query';


const getProducts = async () => await (await fetch("https://fakestoreapi.com/products")).json()

export async function getStaticProps(){
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery('posts', getProducts)
    
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        }
    }
}

const Category = (props) => {
    const router = useRouter()
    const { category } = router.query

    const {data} = useQuery('posts', getProducts, { initialData: props.dehydratedState, staleTime: 50000 })
    
    return (
        <Container>
            <Styles.Wrapper>
                <Styles.WrapperTitle>
                    <TitleCategory title={"Acessórios"}  />
                </Styles.WrapperTitle>
               
                <Styles.WrapperProducts>
                    {data.map((product) => {
                        return (
                        <Styles.WrapperGeneric key={product.id}>
                            <CardProduct 
                            img={product.image} 
                            title={product.title}
                            desc={product.description}
                            price={product.price}
                            customClass="mobile-direct"/>
                            
                        </Styles.WrapperGeneric>
                        )
                    })}

                </Styles.WrapperProducts>
            </Styles.Wrapper>
        </Container>
    )
}

export default Category;