import Head from "next/head"
import Container from '../../components/layout/Container'
import GalleryCarousel from '../../components/GalleryCarousel';
import SectionCategorys from "../../components/layout/SectionCategorys"
import {Styles} from '../../styles/produtos.style';
import DetailsProduct from '../../components/DetailsProduct';
import ProductDescription from "../../components/ProductDescription";

import { useRouter } from 'next/router'

const Produtos = () => {
    const router = useRouter()
    const { productID } = router.query

    return (
        <Container>
            <Head>
                <title>{`${productID} | RK Prime`}</title>
            </Head>
            <Styles.Wrapper>
                <Styles.ProdutoInfo>
                    <Styles.WrapperGeneric className="SlideImages">
                        <GalleryCarousel  />
                    </Styles.WrapperGeneric>
                    
                    <Styles.WrapperGeneric>
                        <DetailsProduct title={productID} />
                    </Styles.WrapperGeneric>
                   
                   
                </Styles.ProdutoInfo>

                <SectionCategorys  title={"Itens que podem ser do seu interesse"}/>
                
            </Styles.Wrapper>
        
            <ProductDescription  description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non ducimus vitae porro! Tenetur laboriosam recusandae nobis enim ea, aliquam, deleniti neque quidem provident esse sint quam, similique suscipit. Sapiente.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto amet sint voluptas minus neque ad repellendus eaque repudiandae id illum?"/>
        </Container>
        
    )
}

export default Produtos;