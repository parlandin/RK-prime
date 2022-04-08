import Styles from "./container.style";

const Container = ({children}) => {
    return (
        <Styles.WrapperContainer>
            {children}
        </Styles.WrapperContainer>
    )
}

export default Container;