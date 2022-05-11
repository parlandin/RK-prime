import Image from "next/image";
import Link from "next/link";
import Styles from "./Card.style";
import {MdOutlineStarOutline} from "react-icons/md"


const CardProduct = ({img, desc, title, price, customClass, id}) => {
    return (
        <Link href={`/produto/${title}&id=${id}`} passHref>
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
                       <MdOutlineStarOutline style={{height: "1em",width: "1em", color:"#5b5b5b"}}/>
                    </Styles.Icon>
                    <Styles.Icon>
                        <MdOutlineStarOutline style={{height: "1em",width: "1em", color:"#5b5b5b"}}/>
                    </Styles.Icon>
                    <Styles.Icon>
                        <MdOutlineStarOutline style={{height: "1em",width: "1em", color:"#5b5b5b"}}/>
                    </Styles.Icon>
                    <Styles.Icon>
                        <MdOutlineStarOutline style={{height: "1em",width: "1em", color:"#5b5b5b"}}/>
                    </Styles.Icon>
                    <Styles.Icon>
                        <MdOutlineStarOutline style={{height: "1em",width: "1em", color:"#5b5b5b"}}/>
                    </Styles.Icon>

                </Styles.WrapperRating>
                   
            </Styles.WrapperInfo>
            
        </Styles.Wrapper>
        </Link>
        
    )
}

export default CardProduct;

