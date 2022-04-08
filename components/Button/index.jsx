import Styles from "./button.style"
import Image from "next/image";

const Button = ({icon, text, onClick}) => {
    return (
        <Styles.Button onClick={onClick}>
            <Styles.ButtonIcon>
                <Image src={icon}  alt=""/>
            </Styles.ButtonIcon>
            <Styles.ButtonText>{text}</Styles.ButtonText>
        </Styles.Button>
    )
}

export default Button;