import styled, {keyframes, css} from "styled-components";

const Styles = {}

const Arrow = css`
    content: '';
    top: 9px;
    left: 89%;
    position: absolute;
    border-left: 6px solid transparent;
    border-right: 6px solid transparent;
`

Styles.DropDownHover = styled.button`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    color: #000;
    cursor: pointer;
    border: none;
    background-color: transparent;
    padding-right: 5px;

    &::after {
        ${Arrow}
        border-top: 6px solid #000;
        clear: both;
        transition: 0.2s ease-in-out;
    }

    &:hover::after {
        ${Arrow}
        border-bottom: 6px solid #000;
        border-top: none;
    }

    @media (max-width: 730px) {
        color: white;
        font-size: 1.5em;
        &::after {
            border-top: 6px solid white;
        }

        &:hover::after {
            border-bottom: 6px solid white;
        }
    }

    @media (max-width: 730px){
        display: ${({active}) => active ? "block" : "none" };
    }
`

Styles.MenuDropDown = styled.ul`
    display: flex;
    flex-direction: column;
    position: absolute;
    border: 1px solid #000;
    left: 50%;
    top: -300px;
    transform: translateX(-50%)  rotateX(90deg); 
    visibility: hidden;
    padding: 10px;
    border-radius: 5px;
    z-index: 2;
    background-color: white;
    transition: transform 0.2s ease-in-out;

    ${Styles.DropDownHover}:hover &{
        transform: translateX(-50%) rotatex(0deg);
        visibility: visible;
        top: 25px;

        @media (max-width:730px){
            top: 30px;
        }
    }

    @media (max-width:730px){
        background-color: #100f0f;
    }
`

Styles.DropDownItem = styled.li`
    font-family: 'Roboto', sans-serif;
    margin: 5px 0;
`
export default Styles;