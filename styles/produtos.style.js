import styled from "styled-components";

export  const Styles = {}

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
    background-color: #fff;
    box-shadow: 1px 1px 5px 1px #e2e2e2;
    padding-top: 10px;
    border-radius: 4px;


    @media (max-width:660px){
        flex-wrap: wrap;
        justify-content: center;
    }
`

Styles.WrapperGeneric = styled.div`
    min-width: 243px;

    &.SlideImages {
        min-width: 360px;
        margin-bottom: 20px;

        @media (max-width: 360px){
            min-width: 200px;
        }
    }

    @media (max-width: 380px){
           min-width: 200px;
    }

    @media (max-width:940px){
        margin: 10px;
    }
`