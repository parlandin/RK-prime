import styled from "styled-components";

const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
`

Styles.WrapperTitle = styled.div`
    @media (max-width: 1030px){
        margin-left: 10px;
    }
`

Styles.WrapperProducts = styled.div`
    display:flex;
    flex-wrap: wrap;
    justify-content: space-between;

    @media (max-width: 856px){
        justify-content: center;
    }

    @media (max-width: 476px){
        justify-content:flex-start;
    }

    @media (max-width: 300px){
        justify-content: center;
    }
`

Styles.WrapperGeneric = styled.div`
    margin: 15px;
`

export default Styles;