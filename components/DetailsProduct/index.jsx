import Image from "next/image";
import Styles from "./details.style";
import Button from "../Button";
import AmountButton from "../AmountButton";
import {FaWhatsapp} from "react-icons/fa"
import {FiShoppingCart} from "react-icons/fi"



const DetailsProduct = ({title}) => {

    function sendMessage(name, price, qtd){
        const message = `*Produtos*\n*nome:* ${name} \n*preço:* R$${price} \n*quantidade:* ${5}`
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
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eum, pariatur alias voluptatibus labore placeat sequi eveniet debitis assumenda iusto voluptate ullam nam consequuntur aspernatur ea qui.<Styles.DescriptionButton href="#comentario">ler mais</Styles.DescriptionButton>
            </Styles.Description>
            
            <Styles.WrapperQtd>
                <AmountButton />
            </Styles.WrapperQtd>

            <Styles.Availability>Disponivel na loja</Styles.Availability>

            <Styles.WrapperGereric>
                <Styles.WrapperButtons>
                    <Button  text="Adicionar no carrinho">
                        <FiShoppingCart style={{height: "1.3em",width: "1.3em"}}/>
                    </Button>
                    
                    <Button 
                    text="Fazer pedido"
                    onClick={() => sendMessage(title, 10.00)}>
                         <FaWhatsapp style={{height: "1.4em",width: "1.4em"}}/>
                    </Button>
                </Styles.WrapperButtons>

                <Styles.Warning>*obs: todos os pedidos e compras são feitos atraves do Whatsapp</Styles.Warning>
            </Styles.WrapperGereric>
        </Styles.Wrapper>
    )
}

export default  DetailsProduct;