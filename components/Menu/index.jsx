import Styles  from "./menu.style";
import Link from "next/link";
import MenuLink from "../MenuLink";
import MenuDropDown from "../MenuDropdown";

const Menu = ({activeButtonM, toggleStatebutton}) => {
    return (
        <Styles.Menu className={activeButtonM ? "active" : ""}>
            <Styles.MenuList >

                <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>  
                    <Link href={"/"} passHref>
                        <MenuLink>Inicio</MenuLink>
                    </Link>
                </Styles.MenuItem>

                <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                    <Link href={"/acessorios"} passHref>
                        <MenuLink>Acessórios</MenuLink>
                    </Link>
                </Styles.MenuItem>

                <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                    <Link href={"/roupas"} passHref>
                        <MenuLink>Roupas</MenuLink>
                    </Link>
                </Styles.MenuItem>

                <Styles.MenuItem>
                    <MenuDropDown activeButtonM={activeButtonM} toggleStatebutton={toggleStatebutton}/>
                </Styles.MenuItem>

                <Styles.MenuItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                    <Link href={"/tattoos"} passHref>
                        <MenuLink>Tattoos</MenuLink>
                    </Link>
                </Styles.MenuItem>

            </Styles.MenuList>
        </Styles.Menu>

    )
}

export default Menu;