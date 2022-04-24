import { useEffect, useState } from "react"
import CartProduct from "../../components/CartProduct"
import Container from "../../components/layout/Container"
import Styles from "../../styles/shopingcart.style"

import IMAGE from "../../public/images/product1.jpg"

const ShoppingCart = () => {
    const [shopCart, setShopCart] = useState([])

    useEffect(() => {
        let itens = localStorage.getItem("shopCart")

        if(itens){
            setShopCart(JSON.parse(itens))
            console.log(shopCart)
        }
    }, [])
    

    if(shopCart.length == 0){
        return (
        <Styles.Wrapper>
           <Styles.Textnull>seu carrinho está vazio</Styles.Textnull>
        </Styles.Wrapper>
    )}

    return (
        <Container>
            <Styles.WrapperCart>
            {shopCart.map((product) => {
                        return (
                        <Styles.CardCart key={product.id}>
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
                   <Styles.Total>{shopCart.reduce((prev, current) => prev + current.preco, 0)}</Styles.Total>
               </Styles.GerericTotal>

               <Styles.Button>Finalizar Compra</Styles.Button>
           </Styles.WrapperTotal>
        </Container>
    )
}

export default ShoppingCart;