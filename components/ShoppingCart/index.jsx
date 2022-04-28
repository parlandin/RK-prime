import Link from "next/link";
import Image from "next/image";
import Styles from "./shoppCart.style";
import getCartLength from "../../services/getItemCart"
import { useEffect, useState } from "react";
import ShoppingCartModal from "../ShoppingModal";

import ShppingCartIMG from "../../public/images/shopping-cart.svg";


const ShoppingCart = () => {
    const [cartLength, setCartLength] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(()=> {
        setCartLength(getCartLength())
    },[])

    function handleOnClick(bool){
        if(bool) return setIsOpen(bool)

        return setIsOpen(!isOpen)
    }

    return (
        <>
            <Styles.ShoppingCartLink onClick={handleOnClick}>
                <Styles.ShoppingCartQntd>{cartLength}</Styles.ShoppingCartQntd>
                <Image  src={ShppingCartIMG} alt="" width="16px" height="16px"/>
            </Styles.ShoppingCartLink>
           
            {isOpen && <ShoppingCartModal handleOnClick={handleOnClick}/>}
        </>
    )
}

export default ShoppingCart;
