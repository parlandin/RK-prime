import Link from "next/link";
import Image from "next/image";
import React, {useEffect, useState} from "react"
import Logo from "../../Logo"
import ShoppingCart from "../../ShoppingCart";

import Styles, {DropDownHover} from "./header.style";
import MenuMobileButton from "../../MenuMobileButton";


const Header = ({mobileAtive}) => {
    const [activeButtonM, setAcitveButtonM] = useState(false)

    useEffect(()=> {
        if(window.width > 516 ){
            window.addEventListener('resize', () => {
                setAcitveButtonM(false)
                mobileAtive(true)
            })
        }
    },[mobileAtive])

    function toggleStatebutton(){
        mobileAtive(activeButtonM)
        return setAcitveButtonM(!activeButtonM)
    }

    return (
        <Styles.WrapperHeader>
            <Styles.Header active={activeButtonM}>
                <Logo />

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

                <ShoppingCart />

                <MenuMobileButton onClick={toggleStatebutton} activeButtonM={activeButtonM}/>

            </Styles.Header>
        </Styles.WrapperHeader>
    )
}

export default Header;