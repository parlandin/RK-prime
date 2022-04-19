import Image from "next/image";
import Link from "next/link";
import Styles from "./Cart.style";
import StarIcon from "../../public/images/star_icon.svg"


const CartProduct = ({img, desc, title, price, customClass}) => {
    return (
        <Styles.Wrapper className={customClass}>
            <Link href={`/produto/${title}`} passHref>
                <Styles.WrapperGereric>
                    <Styles.WrapperImage>
                        <Image src={img} alt={desc}  width="100%" height="100%" />
                    </Styles.WrapperImage>

                    <Styles.WrapperInfo >
                        <Styles.PTitle className={customClass}>
                            {title}
                        </Styles.PTitle>
                        <Styles.Price className={customClass}>R${price}</Styles.Price>

                        <Styles.WrapperRating className={customClass}>
                            <Styles.Icon className="title">Avaliação:</Styles.Icon>

                            <Styles.Icon>
                                <i className="icon-star_icon"></i>
                            </Styles.Icon>
                            <Styles.Icon>
                                <i className="icon-star_icon"></i>
                            </Styles.Icon>
                            <Styles.Icon>
                                <i className="icon-star_icon"></i>
                            </Styles.Icon>
                            <Styles.Icon>
                                <i className="icon-star_icon"></i>
                            </Styles.Icon>
                            <Styles.Icon>
                                <i className="icon-star_icon"></i>
                            </Styles.Icon>

                        </Styles.WrapperRating>
                        
                    </Styles.WrapperInfo>

                </Styles.WrapperGereric>
            </Link> 


                <Styles.WrapperButton>
                    <Styles.Button className="finish">Finalizar</Styles.Button>
                    <Styles.Button className="canceled">Remover</Styles.Button>
                    
                </Styles.WrapperButton>

        </Styles.Wrapper>
       
        
    )
}

export default CartProduct;

