import Image from "next/image";
import Styles from "./details.style";
import Button from "../Button";

import CartImage from "../../public/images/shopping-cart-button.svg"
import WhatImage from "../../public/images/whatsapp-logo-button.svg"

const DetailsProduct = () => {
    return (
        <Styles.Wrapper>
            <Styles.Title>
                Kit Cosplayer kimetsu no yaiba inosuke trousers + Cabeça 
            </Styles.Title>
            <Styles.Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem eum, pariatur alias voluptatibus labore placeat sequi eveniet debitis assumenda iusto voluptate ullam nam consequuntur aspernatur ea qui.
            </Styles.Description>
            
            <Styles.Availability>Disponivel na loja</Styles.Availability>

            <Styles.WrapperGereric>
                <Styles.WrapperButtons>
                    <Button icon={CartImage} text="Adicionar no carrinho" />
                    <Button icon={WhatImage} text="Fazer pedido"/>
                </Styles.WrapperButtons>

                <Styles.Warning>*obs: todos os pedidos e compras são feitos atraves do Whatsapp</Styles.Warning>
            </Styles.WrapperGereric>
        </Styles.Wrapper>
    )
}

export default  DetailsProduct;