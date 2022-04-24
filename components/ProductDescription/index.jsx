import Styles from "./description.style";


const ProductDescription = ({description}) => {
    return (
        <Styles.Wrapper id="comentario">
            <Styles.Title>Descrição</Styles.Title>
            <Styles.Text>{description}</Styles.Text>
        </Styles.Wrapper>
    )
}

export default ProductDescription;