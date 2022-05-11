import Styles from "./button.style"
import Image from "next/image";

const Button = ({children, text, onClick, disabled}) => {
    return (
        <Styles.Button onClick={onClick} type="button" disabled={disabled}>
            {children}
            <Styles.ButtonText>{text}</Styles.ButtonText>
        </Styles.Button>
    )
}

export default Button;