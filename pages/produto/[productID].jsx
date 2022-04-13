import Head from "next/head"
import Container from '../../components/layout/Container'
import GalleryCarousel from '../../components/GalleryCarousel';
import SectionCategorys from "../../components/layout/SectionCategorys"
import {Styles} from '../../styles/produtos.style';
import DetailsProduct from '../../components/DetailsProduct';

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
            <div style={{margin: "20px 0", borderRadius:"5px", padding: "10px"}}>
                <h1 style={{marginBottom: "5px",fontSize:"1.2rem" }}>Descrição</h1>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem non ducimus vitae porro! Tenetur laboriosam recusandae nobis enim ea, aliquam, deleniti neque quidem provident esse sint quam, similique suscipit. Sapiente.
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto amet sint voluptas minus neque ad repellendus eaque repudiandae id illum?
                </p>
            </div>
           
        </Container>
        
    )
}

export default Produtos;