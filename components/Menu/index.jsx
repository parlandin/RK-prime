import Styles, {DropDownHover}  from "./menu.style"
import Link from "next/link";

const Menu = ({activeButtonM, toggleStatebutton}) => {
    return (
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
                    <Link href={"/tattoos"} passHref>
                        <Styles.MenuLink>Tattoos</Styles.MenuLink>
                    </Link>
                </Styles.MenuItem>

            </Styles.MenuList>
        </Styles.Menu>

    )
}

export default Menu;