import styled from "styled-components";


const Styles = {}

Styles.WrapperGereric = styled.div`

    &:hover .swiper-button-prev, &:hover  .swiper-button-next{
        visibility: visible;
    }

    @media (max-width: 520px){
        margin:0 10px;
    }
`

Styles.WrapperCard = styled.div`

    @media (max-width: 290px){
        max-width: 200px;
        margin:0 auto;
    }
`



export default Styles;