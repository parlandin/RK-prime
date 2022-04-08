import Container from '../../components/layout/Container'
import GalleryCarousel from '../../components/GalleryCarousel';
import SectionCategorys from "../../components/layout/SectionCategorys"
import Styles from './produtos.style';
import DetailsProduct from '../../components/DetailsProduct';

const Produtos = () => {
    return (
        <Container>
            <Styles.Wrapper>
                <Styles.ProdutoInfo>
                    <GalleryCarousel  />
                    <DetailsProduct />
                </Styles.ProdutoInfo>

                <SectionCategorys  title={"Itens que podem ser do seu interrese"}/>
                
            </Styles.Wrapper>
           
        </Container>
        
    )
}

export default Produtos;