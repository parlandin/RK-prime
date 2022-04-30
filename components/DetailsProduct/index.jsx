import Image from "next/image";
import Styles from "./details.style";
import Button from "../Button";

import CartImage from "../../public/images/shopping-cart-button.svg"
import WhatImage from "../../public/images/whatsapp-logo-button.svg"

const DetailsProduct = ({title}) => {

    function sendMessage(name, price, qtd){
        const message = `*Produtos*\n*nome*: ${name} \n*preço*: R$${price} \n*quantidade:* ${5}`
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
            
            <Styles.WrapperSize>
                <Styles.SizeText>Tamanhos</Styles.SizeText>
                <Styles.WrapperCheckBox>
                    <Styles.SelectSize >
                        <Styles.CheckSize id="productSize_P" type="checkbox" name="productSize"  required/>
                        <Styles.CheckText htmlFor="productSize_P">P</Styles.CheckText>
                    </Styles.SelectSize>

                    <Styles.SelectSize>
                        <Styles.CheckSize id="productSize_M" type="checkbox" name="productSize" />
                        <Styles.CheckText htmlFor="productSize_M">M</Styles.CheckText>
                    </Styles.SelectSize>

                    <Styles.SelectSize>
                        <Styles.CheckSize id="productSize_G" type="checkbox" name="productSize" />
                        <Styles.CheckText htmlFor="productSize_G">G</Styles.CheckText>
                    </Styles.SelectSize>
                </Styles.WrapperCheckBox>
        
            </Styles.WrapperSize>

            <Styles.Availability>Disponivel na loja</Styles.Availability>

            <Styles.WrapperGereric>
                <Styles.WrapperButtons>
                    <Button icon={CartImage} text="Adicionar no carrinho" />
                    
                    <Button 
                    icon={WhatImage}
                    text="Fazer pedido"
                    onClick={() => sendMessage(title, 10.00)}/>
                </Styles.WrapperButtons>

                <Styles.Warning>*obs: todos os pedidos e compras são feitos atraves do Whatsapp</Styles.Warning>
            </Styles.WrapperGereric>
        </Styles.Wrapper>
    )
}

export default  DetailsProduct;