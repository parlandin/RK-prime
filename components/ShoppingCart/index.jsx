import Styles from "./shoppCart.style";
import { useEffect, useState } from "react";
import ShoppingCartModal from "../ShoppingModal";
import {useTotalLengthCart} from "../../context/shoppingTotal";
import {FiShoppingCart} from "react-icons/fi";




const ShoppingCart = () => {
    const [cartLength, setCartLength] = useState(0)
    const [isOpen, setIsOpen] = useState(false)

    const [total, setTotal] = useTotalLengthCart()

    useEffect(()=> {
        setCartLength(total)
    },[total])

    function handleOnClick(bool){
        if(bool) return setIsOpen(bool)

        return setIsOpen(!isOpen)
    }

    return (
        <>
            <Styles.ShoppingCartLink onClick={handleOnClick} type="button">
                <Styles.ShoppingCartQntd>{cartLength}</Styles.ShoppingCartQntd>
                <FiShoppingCart style={{height: "1.1em",width: "1.1em"}}/>
            </Styles.ShoppingCartLink>
           
            {isOpen && <ShoppingCartModal handleOnClick={handleOnClick}/>}
        </>
    )
}

export default ShoppingCart;
