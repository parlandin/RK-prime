import styled, {keyframes} from "styled-components";

const Styles = {}

const menuhover = keyframes`
    0% {
        width: 0;
    }
    100% {
        width: 100%;
    }
`

Styles.MenuLink = styled.a`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    text-decoration: none;
    color: #000;
    z-index: 4;
    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: pointer;

    &::after {
        content: " ";
        width: 0%;
        height: 2px;
        border-radius: 1px;
        background-color: #000;

        @media (max-width:730px){
            background-color: #fff;
        } 
    }

    &:hover::after {
        animation: ${menuhover} 200ms forwards ;
    }

    @media (max-width: 730px) {
        color: white;
        font-size: 1.5em;
    }
`

export default Styles;