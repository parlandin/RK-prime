import Styles from "./amount.style";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";

const AmountButton = ({amount, setAmountProduct, id}) => {

    function setMinuQtd() {
        setAmountProduct(id, "min")
    }

    function setPlusQtd(){
        setAmountProduct(id, "plus")
    }

    return (
        <Styles.WrapperQtd>
            <Styles.ButtonQtd onClick={setMinuQtd}>
                <AiOutlineMinus />
            </Styles.ButtonQtd>

            <Styles.Span>Qtd: {amount ? amount : 1}</Styles.Span>

            <Styles.ButtonQtd onClick={setPlusQtd}>
                <AiOutlinePlus />
            </Styles.ButtonQtd>
        </Styles.WrapperQtd>
    )
}

export default AmountButton;