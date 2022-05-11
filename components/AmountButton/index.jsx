import Styles from "./amount.style";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";

const AmountButton = ({amount, setAmountProduct, id=0}) => {

    function setMinuQtd() {
        setAmountProduct(id, "min")
    }

    function setPlusQtd(){
        setAmountProduct(id, "plus")
    }

    return (
        <Styles.WrapperQtd>
            <Styles.ButtonQtd onClick={setMinuQtd} type="button"aria-label="botão para diminuir quantiade de productos" >
                <AiOutlineMinus />
            </Styles.ButtonQtd>

            <Styles.Span>Qtd: {amount ? amount : 1}</Styles.Span>

            <Styles.ButtonQtd onClick={setPlusQtd} type="button" aria-label="botão para aumentar quantiade de productos">
                <AiOutlinePlus />
            </Styles.ButtonQtd>
        </Styles.WrapperQtd>
    )
}

export default AmountButton;