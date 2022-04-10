import styled from "styled-components";

const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
`

Styles.WrapperProducts = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 856px){
        justify-content: center;
    }

    @media (max-width: 438px){
        justify-content:flex-start;
    }
`

Styles.WrapperGeneric = styled.div`
    margin: 15px 0;
`

export default Styles;