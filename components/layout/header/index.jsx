import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react"

import Styles, {DropDownHover} from "./header.style";

import LogoPicture from "../../../public/images/logoMen.svg";
import ShppingCartIMG from "../../../public/images/shopping-cart.svg";


const Header = ({mobileAtive}) => {
    const [activeButtonM, setAcitveButtonM] = useState(false)


    useEffect(()=> {
        window.addEventListener('resize', () => {
            setAcitveButtonM(false)
        })

    },[])

    function toggleStatebutton(){
        mobileAtive()
        return setAcitveButtonM(!activeButtonM)
    }

    return (
        <Styles.WrapperHeader active={activeButtonM}>
            <Styles.WrapperFistColum>
                <Styles.TempDiv></Styles.TempDiv>

                <Styles.WrapperLogo>
                    <Link href="/" passHref>
                        <a>
                            <Image  src={LogoPicture} alt="" width="300px" height="100px"/>
                        </a>
                       
                    </Link>
                    
                </Styles.WrapperLogo>

                <Link href={"/shoppingcart"} passHref>

                    <Styles.ShoppingCartLink>
                        <Image  src={ShppingCartIMG} alt="" width="16px" height="16px"/>
                        <Styles.ShoppingCartQntd>0</Styles.ShoppingCartQntd>
                    </Styles.ShoppingCartLink>

                </Link>
                    
            </Styles.WrapperFistColum>

            <Styles.Menu className={activeButtonM ? "active" : ""}>
                <Styles.MenuList >

                    <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>  
                        <Link href={"/"} passHref>
                            <Styles.MenuLink>Inicio</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                    <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                        <Link href={"/acessorios"} passHref>
                            <Styles.MenuLink>Acessórios</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                    <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                        <Link href={"/roupas"} passHref>
                            <Styles.MenuLink>Roupas</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                    <Styles.MenuItem>
                        <DropDownHover active={activeButtonM}>
                            <Styles.DropDownText>Geek</Styles.DropDownText>
                                <Styles.MenuDropDown>

                                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                                        <Link href={"/cospalyer"} passHref>
                                            <Styles.MenuLink>Cospalyer</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                                        <Link href={"/acessoriosGeek"} passHref>
                                            <Styles.MenuLink>Acessórios</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                                        <Link href={"/Mangas"} passHref>
                                            <Styles.MenuLink>Mangás</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                </Styles.MenuDropDown>
                            </DropDownHover>
                    </Styles.MenuItem>

                    <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                        <Link href={"/tattos"} passHref>
                            <Styles.MenuLink>Tattoos</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                </Styles.MenuList>
            </Styles.Menu>

            <Styles.MenuMobile onClick={toggleStatebutton}>
                <Styles.ButtonMobile className={activeButtonM ? "active" : ""}>
                </Styles.ButtonMobile>
            </Styles.MenuMobile>
        </Styles.WrapperHeader>
    )
}

export default Header;