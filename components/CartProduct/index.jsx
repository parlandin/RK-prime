import Image from "next/image";
import Link from "next/link";
import Styles from "./Cart.style";
import {VscTrash} from "react-icons/vsc"
import removeItemCart from "../../services/removeItemCart";
import AmountButton from "../AmountButton";
import { useState } from "react";


const CartProduct = ({img, desc, title, price, customClass, amount, setAmountProduct, id, selected}) => {
    const [productSelected, setProductSelected] = useState(selected)


    return (
        <Styles.Wrapper className={customClass}>
            <Link href={`/produto/${title}&id=${id}`} passHref>
                <Styles.LinkProduct></Styles.LinkProduct>
            </Link> 

            <Styles.WrapperGereric>
                <Styles.WrapperImage>
                    <Image src={img} alt={desc}  width="60" height="60" />
                </Styles.WrapperImage>

                <Styles.WrapperInfo >

                    <Styles.PTitle className={customClass}>{title}</Styles.PTitle>

                    <Styles.Price className={customClass}>R${price}</Styles.Price>

                    <Styles.WrapperQtd>
                        <AmountButton amount={amount} setAmountProduct={setAmountProduct} id={id}/>
                    </Styles.WrapperQtd>

                </Styles.WrapperInfo>

            </Styles.WrapperGereric>
           


            <Styles.WrapperButton>
                <Styles.Button className="finish">
                    <label>
                        <input 
                        type="checkbox" 
                        name="" 
                        id=""  
                        checked={productSelected} onChange={() => setProductSelected(!productSelected)}/>
                    </label>
                </Styles.Button>

                <Styles.Button className="canceled" onClick={() => removeItemCart(id)}>
                    <VscTrash style={{color: "#000", height:"1.3em", width: "1.3em"}} />
                </Styles.Button>
                
            </Styles.WrapperButton>

        </Styles.Wrapper>
       
        
    )
}

export default CartProduct;

