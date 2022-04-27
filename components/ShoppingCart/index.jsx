import Link from "next/link";
import Image from "next/image";
import Styles from "./shoppCart.style";
import getCartLength from "../../services/getItemCart"
import { useEffect, useState } from "react";
import ShoppingCartModal from "../ShoppingModal";

import ShppingCartIMG from "../../public/images/shopping-cart.svg";


const ShoppingCart = () => {
    const [cartLength, setCartLength] = useState(0)

    useEffect(()=> {
        setCartLength(getCartLength())
    },[])

    return (
        <>
            <Link href={"/shoppingcart"} passHref>
                <Styles.ShoppingCartLink>
                    <Styles.ShoppingCartQntd>{cartLength}</Styles.ShoppingCartQntd>
                    <Image  src={ShppingCartIMG} alt="" width="16px" height="16px"/>
                </Styles.ShoppingCartLink>
            </Link>

            <ShoppingCartModal />
        </>
    )
}

export default ShoppingCart;
