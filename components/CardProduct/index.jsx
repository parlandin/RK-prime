import Image from "next/image";
import Styles from "./Card.style";


const CardProduct = ({img, desc, title, price, customClass}) => {
    return (
        <Styles.Wrapper className={customClass}>
            <Styles.WrapperImage>
                <Image src={img} alt={desc}  width="100%" height="100%" />
            </Styles.WrapperImage>

            <Styles.WrapperInfo >
                <Styles.PTitle className={customClass}>
                    {title}
                </Styles.PTitle>
                <Styles.Price className={customClass}>R${price}</Styles.Price>
            </Styles.WrapperInfo>
            
        </Styles.Wrapper>
    )
}

export default CardProduct;

