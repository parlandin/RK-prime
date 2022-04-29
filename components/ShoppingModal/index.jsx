import { useEffect, useState } from "react"
import CartProduct from "../CartProduct"
import Styles from "./modal.style"
import {FiX} from "react-icons/fi"
import {BsWhatsapp} from "react-icons/bs"
import upadateItemCart from "../../services/updateItemCart"


import IMAGE from "../../public/images/product1.jpg"

const ShoppingCartModal = ({handleOnClick}) => {
    const [shopCart, setShopCart] = useState([])

    useEffect(() => {
        let itens = localStorage.getItem("shopCart")

        if(itens){
            const array = JSON.parse(itens)
            setShopCart(array)
        }
    }, [])


    function setAmountProduct(id, operation ){
        const newProductArray = [...shopCart]

        for(let product of shopCart){
            if(product.id == id){
                if(operation === "plus"){
                    product.qtd++
                }
                else {
                    product.qtd > 0 ? product.qtd-- : 0
                }
            }
        }
        setShopCart(newProductArray)
        upadateItemCart(newProductArray)
        return
    }
    function getTotal(){
        const total = shopCart.reduce((prev, current) => prev + (current.preco * current.qtd), 0)
        return total.toFixed(2)
    }

    if(shopCart.length == 0){
        return (
        <Styles.Wrapper>
            <Styles.ClosedButton onClick={() => handleOnClick(false)}>
                <FiX style={{height: "2em",width: "2em"}}/>
            </Styles.ClosedButton>

           <Styles.Textnull>seu carrinho está vazio</Styles.Textnull>
        </Styles.Wrapper>
    )}


    return (
    <>
        <Styles.WrapperGeneric>
            <Styles.Title>Carrinho de compras</Styles.Title>
            <Styles.ClosedButton onClick={() => handleOnClick(false)}>
                <FiX style={{height: "2em",width: "2em"}}/>
            </Styles.ClosedButton>
            
            <Styles.WrapperCart>
                {shopCart.map((product, index) => {
                            return (
                            <Styles.CardCart key={index}>
                                <CartProduct 
                                img={IMAGE} 
                                title={product.nome}
                                desc={product.descricao}
                                price={product.preco}
                                amount={product.qtd}
                                id={product.id}
                                setAmountProduct={setAmountProduct}/>
                                
                            </Styles.CardCart>
                            )
                        })}
            </Styles.WrapperCart>

            <Styles.WrapperTotal>
                <Styles.GerericTotal>
                    <Styles.TotalText>Total:</Styles.TotalText>
                    <Styles.Total>
                        R$ {getTotal()}
                    </Styles.Total>
                </Styles.GerericTotal>

                <Styles.Button>
                    <BsWhatsapp style={{marginRight: '10px'}}/>
                    Finalizar pedido
                </Styles.Button>
            </Styles.WrapperTotal>

        </Styles.WrapperGeneric>
    </>
    )
}

export default ShoppingCartModal;