import Image from "next/image";
import Link from "next/link";
import Styles from "./Card.style";
import StarIcon from "../../public/images/star_icon.svg"


const CardProduct = ({img, desc, title, price, customClass}) => {
    return (
        <Link href={`/produto/${title}`} passHref>
            <Styles.Wrapper className={customClass}>
            <Styles.WrapperImage>
                <Image src={img} alt={desc}  width="200" height="200" />
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
            
        </Styles.Wrapper>
        </Link>
        
    )
}

export default CardProduct;

