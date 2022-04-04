import Link from "next/link";
import Image from "next/image";
import React, {useState} from "react"

import Styles, {DropDownHover} from "./header.style";

import LogoPicture from "../../../public/images/logoMen.svg";
import ShppingCartIMG from "../../../public/images/shopping-cart.svg";


const Header = () => {

    const [activeButtonM, setAcitveButtonM] = useState(false)

    function toggleStatebutton(){
        return setAcitveButtonM(!activeButtonM)
    }


    return (
        <Styles.Wrapper active={activeButtonM}>
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
                <Styles.MenuList>

                    <Styles.MenuItem>
                        <Link href={"/"} passHref>
                            <Styles.MenuLink>Inicio</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                    <Styles.MenuItem>
                        <Link href={"/acessorios"} passHref>
                            <Styles.MenuLink>Acessorios</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                    <Styles.MenuItem>
                        <Link href={"/acessorios"} passHref>
                            <Styles.MenuLink>Roupas</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                    <Styles.MenuItem>
                        <DropDownHover>
                            <Styles.DropDownText>Geek</Styles.DropDownText>
                                <Styles.MenuDropDown>

                                    <Styles.DropDownItem>
                                        <Link href={"/acessorios"} passHref>
                                            <Styles.MenuLink>Cospalyer</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                    <Styles.DropDownItem>
                                        <Link href={"/acessorios"} passHref>
                                            <Styles.MenuLink>acessorios</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                    <Styles.DropDownItem>
                                        <Link href={"/acessorios"} passHref>
                                            <Styles.MenuLink>alguma c</Styles.MenuLink>
                                        </Link>
                                    </Styles.DropDownItem>

                                </Styles.MenuDropDown>
                            </DropDownHover>
                    </Styles.MenuItem>

                    <Styles.MenuItem>
                        <Link href={"/acessorios"} passHref>
                            <Styles.MenuLink>Tatto</Styles.MenuLink>
                        </Link>
                    </Styles.MenuItem>

                </Styles.MenuList>
            </Styles.Menu>

            <Styles.MenuMobile onClick={toggleStatebutton}>
                <Styles.ButtonMobile className={activeButtonM ? "active" : ""}>
                </Styles.ButtonMobile>
            </Styles.MenuMobile>
        </Styles.Wrapper>
    )
}

export default Header;