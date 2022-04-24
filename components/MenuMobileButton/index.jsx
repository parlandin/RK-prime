import Styles from "./menuMobile"


const MenuMobileButton = ({onClick, activeButtonM}) => {
    return (
        <Styles.MenuMobile onClick={onClick}>
            <Styles.ButtonMobile className={activeButtonM ? "active" : ""}>
            </Styles.ButtonMobile>
        </Styles.MenuMobile>
    )
}

export default MenuMobileButton;