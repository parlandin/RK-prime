import Image from "next/image";
import Styles from "./Card.style";


const CardProduct = ({img, desc, title, price}) => {
    return (
        <Styles.Wrapper>
            <Styles.WrapperImage>
                <Image src={img} alt={desc}  width="100%" height="100%" />
            </Styles.WrapperImage>
            <Styles.PTitle>
                {title}
            </Styles.PTitle>
            <Styles.Price>R${price}</Styles.Price>
        </Styles.Wrapper>
    )
}

export default CardProduct;

