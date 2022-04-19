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
        overflow: ${({mobileAtive}) => mobileAtive ? "hidden": "scroll" };
        background-color: #F5F5F5;
    }
`;


export default GlobalStyle;