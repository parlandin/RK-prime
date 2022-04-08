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
    }

    @media (max-width: 380px){
           min-width: 200px;
    }

    @media (max-width:940px){
        margin: 10px;
    }
`
export default Styles;