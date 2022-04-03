import Link from "next/link";
import Image from "next/image";

import Styles, {DropDownHover} from "./header.style";

import LogoPicture from "../../../public/images/logo.svg";


const Header = () => {

    return (
        <Styles.Wrapper>
            <Styles.WrapperLogo>
                <Image src={LogoPicture} alt="" width="300px" height="100px"/>
            </Styles.WrapperLogo>
            <Styles.Menu>
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
        </Styles.Wrapper>
    )
}

export default Header;