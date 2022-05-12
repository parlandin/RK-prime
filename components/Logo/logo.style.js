import styled from "styled-components";

const Styles = {};

Styles.WrapperLogo = styled.div`
    cursor: pointer;
`
Styles.logoImage = styled.div`
    display: block;
    height: 60px;
    width: 160px;
    position: relative;

    @media (max-width: 299px){
        max-width: 130px;
        top: 7px;
    }

    @media (max-width: 260px){
        max-width: 110px;
        top: 8px
    }
`

export default Styles;