import Image from "next/image";
import Link from "next/link";
import Styles from "./Cart.style";
import StarIcon from "../../public/images/star_icon.svg"
import DeleteIcon from "../../public/images/deleteIcon.svg"



const CartProduct = ({img, desc, title, price, customClass}) => {
    return (
        <Styles.Wrapper className={customClass}>
            <Link href={`/produto/${title}`} passHref>
                <Styles.WrapperGereric>
                    <Styles.WrapperImage>
                        <Image src={img} alt={desc}  width="100" height="100" />
                    </Styles.WrapperImage>

                    <Styles.WrapperInfo >
                        <Styles.PTitle className={customClass}>
                            {title}
                        </Styles.PTitle>
                        <Styles.Price className={customClass}>R${price}</Styles.Price>

                        <Styles.WrapperRating className={customClass}>

                        </Styles.WrapperRating>
                        
                    </Styles.WrapperInfo>

                </Styles.WrapperGereric>
            </Link> 


                <Styles.WrapperButton>
                    <Styles.Button className="finish">
                        <label>
                            <input type="checkbox" name="" id="" />
                        </label>
                    </Styles.Button>

                    <Styles.Button className="canceled">
                        <Image src={DeleteIcon} alt="" height="16" width="16" />
                    </Styles.Button>
                    
                </Styles.WrapperButton>

        </Styles.Wrapper>
       
        
    )
}

export default CartProduct;

