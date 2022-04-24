import React, {useEffect, useState} from "react"
import Logo from "../../Logo"
import ShoppingCart from "../../ShoppingCart";
import MenuMobileButton from "../../MenuMobileButton";
import Menu from "../../Menu";

import Styles from "./header.style";



const Header = ({mobileAtive}) => {
    const [activeButtonM, setAcitveButtonM] = useState(false)

    useEffect(()=> {
        if(window.width > 700 ){
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
                <Menu activeButtonM={activeButtonM} toggleStatebutton={toggleStatebutton}/>
                <ShoppingCart />
                <MenuMobileButton onClick={toggleStatebutton} activeButtonM={activeButtonM}/>
            </Styles.Header>

        </Styles.WrapperHeader>
    )
}

export default Header;