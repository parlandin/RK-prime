import { useEffect, useState } from "react";
import CartProduct from "../CartProduct";
import Styles from "./modal.style";
import {FiX} from "react-icons/fi";
import {BsWhatsapp} from "react-icons/bs";
import updateItemCart from "../../services/updateItemCart";
import getCartItens from "../../services/getCartItens";


const ShoppingCartModal = ({handleOnClick}) => {
    const [shopCart, setShopCart] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)

    useEffect(() => {
        let itens = localStorage.getItem("shopCart")
        if(itens){
            const array = JSON.parse(itens)
            setShopCart(array)
        }

    }, [])

    useEffect(() => {
        getTotal()
    }, [shopCart])

   

    function setAmountProduct(id, operation ){
        const newProductArray = [...shopCart]

        for(let product of shopCart){
            if(product.id == id){
                if(operation === "plus"){
                    product.qtd++
                }
                else {
                    product.qtd > 1 ? product.qtd-- : 0
                }
            }
        }
        setShopCart(newProductArray)
        updateItemCart(newProductArray)
        return
    }
    
    function getTotal(){
        const arrayProducts = getCartItens()
        const total = arrayProducts.reduce((prevValue, product) => {
            if(product.selected){
               return prevValue + (product.price * product.qtd)
            }
            else{
                return prevValue + 0
            }  
            
        }, 0)
        return setTotalPrice(total.toFixed(2))
    }

    function sendMessage(){
        let message = ""
        const arrayProducts = getCartItens()
        for(let product of arrayProducts){
            if(product.selected){
                message += `*nome:* ${product.name} \n*preço:* R$${product.price} \n*quantidade:* ${product.qtd}\n\n`
            }
           
        }
        const messageFinaly = `*Produtos* \n\n${message} \n *total:* ${totalPrice}`
        const urlText =  window.encodeURIComponent(messageFinaly)
        const link = `https://api.whatsapp.com/send/?phone=5566984359798&text=${urlText}`
        window.open(link)   
    }

    function updateCartOnRemoveItem(id){
        const newProductArray = [...shopCart]
        const arrayFilte = newProductArray.filter((product) =>  product.id != id)
        
        setShopCart(arrayFilte)
        updateItemCart(arrayFilte)
        return
    }


    return (
    <>
        <Styles.WrapperModal onClick={() => handleOnClick(false)} >
        </Styles.WrapperModal>

        <Styles.WrapperGeneric>
            <Styles.Title>Carrinho de compras</Styles.Title>
            <Styles.ClosedButton onClick={() => handleOnClick(false)} type="button">
                <FiX style={{height: "2em",width: "2em"}}/>
            </Styles.ClosedButton>
        
            {shopCart.length ==  0
                ? (
                    <Styles.WrapperNull>
                        <Styles.Textnull>seu carrinho está vazio</Styles.Textnull>
                    </Styles.WrapperNull>
                )
                : (<>
                <Styles.WrapperCart>
                    {shopCart.map((product, index) => {
                                return (
                                <Styles.CardCart key={index}>
                                    <CartProduct 
                                    img={product.image} 
                                    title={product.name}
                                    desc={product.descricao}
                                    price={product.price}
                                    amount={product.qtd}
                                    id={product.id}
                                    selected={product.selected}
                                    setAmountProduct={setAmountProduct}
                                    functionRemove={updateCartOnRemoveItem}
                                    updateTotal={getTotal}/>
                                    
                                </Styles.CardCart>
                                )
                            })}
                </Styles.WrapperCart>

                <Styles.WrapperTotal>
                    <Styles.GerericTotal>
                        <Styles.TotalText>Total:</Styles.TotalText>
                        <Styles.Total>
                            R$ {totalPrice}
                        </Styles.Total>
                    </Styles.GerericTotal>

                    <Styles.Button onClick={() =>  sendMessage()}>
                        <BsWhatsapp style={{marginRight: '10px'}}/>
                        Finalizar pedido
                    </Styles.Button>
                </Styles.WrapperTotal>
            </>)}

        </Styles.WrapperGeneric>
    </>
    )
}

export default ShoppingCartModal;