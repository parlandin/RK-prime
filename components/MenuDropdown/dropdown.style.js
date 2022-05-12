import styled, {keyframes} from "styled-components";


const Styles = {}

Styles.DropDownHover = styled.div`
    @media (max-width: 730px){
        display: ${({active}) => active ? "block" : "none" };
    }
`
Styles.MenuLink = styled.a``

Styles.DropDownText = styled.span`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: #000;
    cursor: pointer;
    padding-right:7px;
    padding-bottom: 5px;

    &::after {
        content: '';
        top: 9px;
        left: 89%;
        position: absolute;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #000;
        clear: both;
        transition: 0.2s ease-in-out;
    }

    ${Styles.DropDownHover}:hover &::after, &:hover::after {
        content: '';
        top: 9px;
        left: 89%;
        position: absolute;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #000;
        border-top: none;
    }

    @media (max-width: 730px) {
        color: white;
        font-size: 1.5em;
        &::after {
            border-top: 6px solid white;
        }

        ${Styles.DropDownHover}:hover &::after {
            border-bottom: 6px solid white;
        }
    }
`

Styles.MenuDropDown = styled.ul`
    display: flex;
    position: absolute;
    border: 1px solid #000;
    flex-direction: column;
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
    }

    @media (max-width:730px){
        background-color: #121010de;
    }
`

Styles.DropDownItem = styled.li`
    font-family: 'Roboto', sans-serif;
    margin: 5px 0;

`



export default Styles;