import Image from "next/image";
import Styles from "./Card.style";


const CardProduto = ({img, desc, title, price}) => {
    return (
        <Styles.Wrapper>
            <Styles.WrapperImage>
                <Image src={img} alt="" />
            </Styles.WrapperImage>
            <Styles.PTitle>Brinco cruz styles new 
                limitado + par de anel
            </Styles.PTitle>
            <Styles.Price>R${'100,00'}</Styles.Price>
        </Styles.Wrapper>
    )
}

export default CardProduto;

