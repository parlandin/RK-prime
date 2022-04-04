import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react"

import Styles, {DropDownHover} from "./header.style";

import LogoPicture from "../../../public/images/logoMen.svg";
import ShppingCartIMG from "../../../public/images/shopping-cart.svg";


const Header = () => {
    const [activeButtonM, setAcitveButtonM] = useState(false)

    
    useEffect(()=> {
        window.addEventListener('resize', () => {
            setAcitveButtonM(false)
        })

    },[])

    function toggleStatebutton(){
        return setAcitveButtonM(!activeButtonM)
    }

    return (
        <Styles.WrapperHeader active={activeButtonM}>
            <Styles.WrapperFistColum>
                <Styles.TempDiv></Styles.TempDiv>

                <Styles.WrapperLogo>
                    <Image src={LogoPicture} alt="" width="300px" height="100px"/>
                </Styles.WrapperLogo>

                <Styles.ShoppingCart>
                    <Image  src={ShppingCartIMG} alt="" width="16px" height="16px"/>
                    <Styles.ShoppingCartQntd>10</Styles.ShoppingCartQntd>
                </Styles.ShoppingCart>
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
                        <Link href={"/acessorios"} passHref>
                            <Styles.MenuLink>Roupas</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                    <Styles.MenuItem>
                        <DropDownHover>
                            <Styles.DropDownText>Geek</Styles.DropDownText>
                                <Styles.MenuDropDown>

                                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                                        <Link href={"/acessorios"} passHref>
                                            <Styles.MenuLink>Cospalyer</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                                        <Link href={"/acessorios"} passHref>
                                            <Styles.MenuLink>Acessórios</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                                        <Link href={"/acessorios"} passHref>
                                            <Styles.MenuLink>alguma </Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                </Styles.MenuDropDown>
                            </DropDownHover>
                    </Styles.MenuItem>

                    <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                        <Link href={"/acessorios"} passHref>
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