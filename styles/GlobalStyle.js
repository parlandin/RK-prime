import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 16px;
    }
    ol, ul, a, li {
        list-style: none;
        text-decoration: none;
    }

    body {
        font-family: 'Roboto', sans-serif;
        width: 100%;
        min-height: 100vh;
    }
    
    span {

        &.swiper-pagination-bullet.swiper-pagination-bullet-active{
            
        }
    }
`;


export default GlobalStyle;