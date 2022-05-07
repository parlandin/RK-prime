import Styles from "./details.style";
import Button from "../Button";
import AmountButton from "../AmountButton";
import {FaWhatsapp} from "react-icons/fa";
import {FiShoppingCart} from "react-icons/fi";
import { useEffect, useState } from "react";
import upadateItemCart from "../../services/updateItemCart";
import {useTotalLengthCart} from "../../context/shoppingTotal";
import getCartItens from "../../services/getCartItens"



const DetailsProduct = ({title, price, max, description, id, image}) => {
    const [amount, setAmount] = useState(1)
    const [shopCart, setShopCart] = useState([])

    const [total, setTotal] = useTotalLengthCart()


    useEffect(() => {
        setShopCart(getCartItens())
    },[])


    function setAmountProduct(id,operation){
        if(operation === "plus"){
            setAmount(amount + 1)
        }
        else {
             setAmount(amount > 1 ? amount -1 : amount)
        }

        return
    }

    const productObjt =  {
        id: id, 
        name: title, 
        price: price, 
        qtd: amount, 
        selected: true,
        image: image,
        description: description
    }

    function addProductInCart(){
        const products = getCartItens()
        if(products.length > 0){
            for (let product of products){
                if(product.id === id ){
                    console.log("nada")
                    return
                }
            }
            const arrayProducts =  [...products, productObjt]
            upadateItemCart(arrayProducts)
            setShopCart(arrayProducts)
            setTotal(total + 1)
            return
        }
        else{
            const arrayProducts =  [...products, productObjt]
            upadateItemCart(arrayProducts)
            setShopCart(arrayProducts)
            setTotal(total + 1)
            return
        }
    }

    function sendMessage(name, price, qtd){
        const message = `*Produtos*\n*nome:* ${name} \n*preço:* R$${price} \n*quantidade:* ${qtd}`
        const urlText =  window.encodeURIComponent(message)
        const link = `https://api.whatsapp.com/send/?phone=5566984359798&text=${urlText}`
        window.open(link)   
    }

    return (
        <Styles.Wrapper>
            <Styles.Title>
               {title}
            </Styles.Title>
            <Styles.Description>
                {`${description.substring(0, 160)}...`}
                <Styles.DescriptionButton href="#comentario">ler mais</Styles.DescriptionButton>
            </Styles.Description>

            <Styles.Price>R$:{price * amount}</Styles.Price>
            
            <Styles.WrapperQtd>
                <AmountButton  amount={amount} setAmountProduct={setAmountProduct}/>
            </Styles.WrapperQtd>

            <Styles.Availability>Disponivel na loja</Styles.Availability>

            <Styles.WrapperGereric>
                <Styles.WrapperButtons>
                    <Button  text="Adicionar no carrinho" onClick={addProductInCart}>
                        <FiShoppingCart style={{height: "1.3em",width: "1.3em"}}/>
                    </Button>
                    
                    <Button 
                    text="Fazer pedido"
                    onClick={() => sendMessage(title, price * amount, amount)}>
                         <FaWhatsapp style={{height: "1.4em",width: "1.4em"}}/>
                    </Button>
                </Styles.WrapperButtons>

                <Styles.Warning>*obs: todos os pedidos e compras são feitos atraves do Whatsapp</Styles.Warning>
            </Styles.WrapperGereric>
        </Styles.Wrapper>
    )
}

export default  DetailsProduct;