import { useEffect, useState } from "react"
import CartProduct from "../CartProduct"
import Styles from "./modal.style"
import {FaTimes} from "react-icons/fa"


import IMAGE from "../../public/images/product1.jpg"

const ShoppingCartModal = () => {
    const [shopCart, setShopCart] = useState([])

    useEffect(() => {
        let itens = localStorage.getItem("shopCart")

        if(itens){
            setShopCart(JSON.parse(itens))
            //console.log(shopCart)
        }
    }, [])
    

    if(shopCart.length == 0){
        return (
        <Styles.Wrapper>
           <Styles.Textnull>seu carrinho está vazio</Styles.Textnull>
        </Styles.Wrapper>
    )}

    return (
    <>
        <Styles.WrapperGeneric>
            <Styles.Title>Carrinho de compras</Styles.Title>
            <Styles.ClosedButton>
                <FaTimes />
            </Styles.ClosedButton>
            

            <Styles.WrapperCart>
                {shopCart.map((product, index) => {
                            return (
                            <Styles.CardCart key={index}>
                                <CartProduct 
                                img={IMAGE} 
                                title={product.nome}
                                desc={product.descricao}
                                price={product.preco}/>
                                
                            </Styles.CardCart>
                            )
                        })}
            </Styles.WrapperCart>

            <Styles.WrapperTotal>
                <Styles.GerericTotal>
                    <Styles.TotalText>Total</Styles.TotalText>
                    <Styles.Total>R$ {shopCart.reduce((prev, current) => prev + current.preco, 0)}</Styles.Total>
                </Styles.GerericTotal>

                <Styles.Button>Finalizar pedido</Styles.Button>
            </Styles.WrapperTotal>

        </Styles.WrapperGeneric>
    </>
    )
}

export default ShoppingCartModal;