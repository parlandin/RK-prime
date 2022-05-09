import Image from "next/image";
import Link from "next/link";
import Styles from "./Cart.style";
import {VscTrash} from "react-icons/vsc"
import AmountButton from "../AmountButton";
import { useState , useEffect } from "react";
import {useTotalLengthCart} from "../../context/shoppingTotal";
import updateItemCart from "../../services/updateItemCart";
import getCartItens from "../../services/getCartItens";


const CartProduct = (props) => {
    const {
        img, 
        desc, 
        title, 
        price, 
        customClass, 
        amount, 
        setAmountProduct, 
        id, 
        selected, 
        functionRemove, 
        updateTotal} = props

    const [hasSelected, setHasSelected] = useState(selected)
    const [total, setTotal] = useTotalLengthCart()

    
    function removeProduct(){
        functionRemove(id)
        setTotal(total - 1)
    }

    function setProductSelectedInCart() {
        setHasSelected(!hasSelected)
        let arrayProducts = getCartItens()
        for(let product of arrayProducts){
            if(product.id == id){
                product.selected = !hasSelected
            }
        }
        updateItemCart(arrayProducts)
        updateTotal()
    }

    return (
        <Styles.Wrapper className={customClass} selected={hasSelected}>
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
                    <Styles.Label>
                        <Styles.InputCheck 
                        type="checkbox" 
                        name="" 
                        id=""  
                        checked={hasSelected} onChange={setProductSelectedInCart}/>
                    </Styles.Label>
                </Styles.Button>

                <Styles.Button className="canceled" onClick={removeProduct}>
                    <VscTrash style={{color: "#000", height:"1.3em", width: "1.3em"}} />
                </Styles.Button>
                
            </Styles.WrapperButton>

        </Styles.Wrapper>
       
        
    )
}

export default CartProduct;

