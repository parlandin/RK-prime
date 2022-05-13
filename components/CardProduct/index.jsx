import Image from "next/image";
import Link from "next/link";
import Styles from "./Card.style";
import {MdOutlineStarOutline, MdOutlineStarPurple500} from "react-icons/md";
import {useEffect, useState} from "react";


const CardProduct = ({img, desc, title, price, customClass, id, rating}) => {
    const [stars, setStars] = useState([])

    useEffect(() => {
        const ratingStar = []
        for(let i = 0; i < rating; i++){
            ratingStar.push("fill")
        }
        if(ratingStar.length < 5){
            for(let i = rating; i < 5; i++){
                ratingStar.push("null")
            }
        }
        setStars(ratingStar)
    }, [rating])
    

    return (
        <Link href={`/produto/${title}&id=${id}`} passHref>
            <Styles.Wrapper className={customClass}>
            <Styles.WrapperImage>
                <Image src={img} alt={desc}  width="200" height="200" layout="responsive"/>
            </Styles.WrapperImage>

            <Styles.WrapperInfo >
                <Styles.PTitle className={customClass}>
                    {title}
                </Styles.PTitle>
                <Styles.Price className={customClass}>R${parseFloat(price).toFixed(2)}</Styles.Price>

                <Styles.WrapperRating className={customClass}>
                    <Styles.Icon className="title">Avaliação:</Styles.Icon>

                    {stars && stars.map((star, index) => {
                        return (
                            <Styles.Icon key={index}>
                                {star == "fill" 
                                  ? <MdOutlineStarPurple500 style={{height: "1em",width: "1em", color:"#ecd50b"}}/>
                                  : <MdOutlineStarOutline style={{height: "1em",width: "1em", color:"#5b5b5b"}}/>
                                }
                                
                            </Styles.Icon>
                        )
                    })}

                </Styles.WrapperRating>
            </Styles.WrapperInfo>
            
        </Styles.Wrapper>
        </Link>
        
    )
}

export default CardProduct;

