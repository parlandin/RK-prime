import styled from "styled-components";

export const Styles = {}

Styles.Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 35px;
    margin-bottom: 35px;

    @media (max-width: 700px){
        margin-top: 20px;
    }
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

    @media (max-width: 936px){
        justify-content: center;
    }

    @media (max-width: 476px){
        justify-content:flex-start;
    }

    @media (max-width: 350px){
        justify-content: center;
    }
`

Styles.WrapperGeneric = styled.div`
    margin: 20px 15px;
    @media (max-width: 476px) and (min-width: 350px){
        width: 100%;
    }
`