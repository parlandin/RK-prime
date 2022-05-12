import Styles from "./menuLink.styled";
import React from "react"

// eslint-disable-next-line react/display-name
const MenuLink = React.forwardRef(({ onClick, href, children}, ref ) => {
    
    return (
        <Styles.MenuLink href={href} onClick={onClick} ref={ref}>
            {children}
        </Styles.MenuLink>
    )
})

export default MenuLink;