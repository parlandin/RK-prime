import styled from "styled-components";

const Styles = {}

Styles.Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 30px;
`

Styles.ProdutoInfo = styled.div`
    position: relative;
    display: flex;
    width: 100%;
    margin-bottom: 20px;
    justify-content: space-between;

    &::after {
        content: "";
        width: 100%;
        height: 1px;
        background-color: #7774748a;
        position: absolute;
        top: 105%;
        left: 50%;
        transform: translateX(-50%);
    }
`

export default Styles;