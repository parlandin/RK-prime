import Styles from "./logo.style"
import Link from "next/link";
import Image from "next/image";


import LogoPicture from "../../public/images/logoMen.svg";


const Logo  = () => {
    return (
        <Styles.WrapperLogo>
            <Link href="/" passHref>
                <a><Image  src={LogoPicture} alt="" width="160px" height="60px"/></a>
            </Link>
        </Styles.WrapperLogo>
    )
}

export default Logo;