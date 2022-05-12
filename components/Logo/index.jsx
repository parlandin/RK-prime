import Styles from "./logo.style"
import Link from "next/link";
import Image from "next/image";


import LogoPicture from "../../public/images/logoMen.svg";


const Logo  = () => {
    return (
        <Styles.WrapperLogo>
            <Link href="/" passHref>
                <Styles.logoImage>
                    <Image  src={LogoPicture} alt="logo do site" width="160px" height="60px" layout="responsive"/>
                </Styles.logoImage>
            </Link>
        </Styles.WrapperLogo>
    )
}

export default Logo;