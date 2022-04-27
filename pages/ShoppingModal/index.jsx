import { useEffect, useState } from "react"
import CartProduct from "../CartProduct"
import Container from "../layout/Container"
import Styles from "./shopingcart.style"
import Head from "next/head"
import TitleCategory from "../TitleCategory"
import IMAGE from "../../public/images/product1.jpg"

const ShoppingCart = () => {
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
        <Head>
        <title>Carrinho de compras</title>
        </Head>

        <Styles.WrapperGeneric>
            <TitleCategory title="Carrinho de compras"/>

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

                <Styles.Button>Finalizar Compra</Styles.Button>
            </Styles.WrapperTotal>
        </Styles.WrapperGeneric>
        
    </>
    )
}

export default ShoppingCart;