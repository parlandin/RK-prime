import Styles from "./tooltip.style";
import { useState,  useEffect } from "react";

const ToolTip = ({message}) => {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        if(message){
            setVisible(true)
        }else {
            setVisible(false)
        }
    }, [message])

    return (
        <Styles.WrapperTool visible={visible}>
            <Styles.MessageText>{message}</Styles.MessageText>
        </Styles.WrapperTool>
    )
}

export default ToolTip;