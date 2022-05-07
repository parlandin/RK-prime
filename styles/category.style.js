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
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    margin: 0 auto;
    gap: 40px 60px;

    @media (max-width: 1021px){
        gap: 40px 40px;
    }

    @media (max-width: 965px){
        gap: 40px 20px;
    }


    @media (max-width: 919px){
        grid-template-columns: 1fr 1fr 1fr;
        gap: 40px 30px;
    }

    @media (max-width: 695px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 476px){
        grid-template-columns: 1fr ;
    }
`

Styles.WrapperGeneric = styled.div`
    @media (max-width: 476px) and (min-width: 350px){
        width: 100%;
    }
`