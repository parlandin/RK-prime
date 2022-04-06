import Styles from "./category.style"

const TitleCategory = ({title}) => {
    return (
        <Styles.WrappeCategory>
            <Styles.Title>{title}</Styles.Title>
        </Styles.WrappeCategory>
    )
}


export default TitleCategory;