import Styles from "./secCategoryes.style"
import TitleCategory from '../../TitleCategory';
import CarouselProducts from "../../CarouselProducts";
import Link from "next/link";
import {useEffect, useState} from "react";
import Loading from "../../Loading";



const SectionCategorys = ({title, categorys, more, products, tags}) => {
    const [recomendedProduct, setRecomendedProduct] = useState([])
    const [isLoanding, setIsLoanding] = useState(true)

    useEffect(() => {
        if(categorys === "recomended" && !products){
            setIsLoanding(true)
            async function getProducts(){
                const respose = await (await fetch(`https://rk-prime.herokuapp.com/produtos/like/tags=${tags}`)).json()
                setRecomendedProduct(respose)
                setIsLoanding(false)
            }
            getProducts()
        }
    }, [])

    return (
        <Styles.Wrapper>
            <Styles.TitleSection>
                <TitleCategory title={title}/>
                {more && 
                    <Link href={`/${categorys}`} passHref>
                    <Styles.Alink>Ver mais</Styles.Alink>
                 </Link>
                }
                
            </Styles.TitleSection>

            {isLoanding && categorys === "recomended"
             ? <Styles.WrapperLoading> <Loading/> </Styles.WrapperLoading>
             : <CarouselProducts arrayProducts={products ? products : recomendedProduct} categorys={categorys} />
            }
        </Styles.Wrapper>
    )
}

export default SectionCategorys;