import { useRouter } from 'next/router'
import Container from "../components/layout/Container"
import TitleCategory from "../components/TitleCategory"
import Styles from './category.style'
import CardProduct from "../components/CardProduct"


import Product1 from "../public/images/product1.jpg"
import Product2 from "../public/images/product2.jpg"


export async function getStaticProps(){
    const res = await fetch("https://fakestoreapi.com/products")
    const dateApi = await res.json()

    return {
        props: {
            dateApi,
        }
    }
}



const Category = ({dateApi}) => {
    const router = useRouter()
    const { category } = router.query

    return (
        <Container>
            <Styles.Wrapper>
                <TitleCategory title={"Acessorios"}  />

                <Styles.WrapperProducts>
                    {dateApi.map((product) => {
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