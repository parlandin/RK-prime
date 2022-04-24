import styled from "styled-components";


const Styles = {};

Styles.ShoppingCartLink = styled.a`
    display: flex;
    align-items: center;
    color: #000;

    @media (max-width: 730px){
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 65px;
    }

`

Styles.ShoppingCartQntd = styled.div`
    margin-right: 5px;
    font-size: 1.05rem;
`

export default Styles;