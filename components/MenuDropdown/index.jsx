import Styles from "./dropdown.style";
import Link  from "next/link";
import MenuLink from "../MenuLink";

const MenuDropDown = ({activeButtonM, toggleStatebutton}) => {
    return (
        <Styles.DropDownHover active={activeButtonM}>
            <Styles.DropDownText>Geek</Styles.DropDownText>
                <Styles.MenuDropDown>

                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                        <Link href={"/cosplayers"} passHref>
                            <MenuLink>Cosplayer</MenuLink>
                        </Link>
                    </Styles.DropDownItem>

                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                        <Link href={"/acessoriosgeeks"} passHref>
                            <MenuLink>Acessórios</MenuLink>
                        </Link>
                    </Styles.DropDownItem>

                    <Styles.DropDownItem onClick={activeButtonM ? toggleStatebutton : () => {}}>
                        <Link href={"/mangas"} passHref>
                            <MenuLink>Mangás</MenuLink>
                        </Link>
                    </Styles.DropDownItem>

                </Styles.MenuDropDown>
        </Styles.DropDownHover>

    )
}

export default MenuDropDown;