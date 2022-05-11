import Styles from "./menuMobile"


const MenuMobileButton = ({onClick, activeButtonM}) => {
    return (
        <Styles.MenuMobile onClick={onClick} type="button" aria-label="botão para abri menu mobile">
            <Styles.ButtonMobile className={activeButtonM ? "active" : ""}>
            </Styles.ButtonMobile>
        </Styles.MenuMobile>
    )
}

export default MenuMobileButton;