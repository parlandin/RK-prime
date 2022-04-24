import styled, { keyframes } from "styled-components";

const Styles = {}

const visibleMenuAnim = keyframes`
    0% {
        transform: translateX(0px);
    }
    100% {
        transform: translateX(100px);
    }
`

Styles.Menu = styled.nav`
    display: flex;
    justify-content: center;

    @media (max-width: 730px) {
        position:fixed;
        top: 0px;
        left: -100px;
        visibility: hidden;
        background-color: #000000f5;
        width: 100%; 
        min-height:100vh;
        transition: .50ms ease-in-out;
        z-index: 5;

        &.active {
            animation: ${visibleMenuAnim} 300ms  forwards; 
            visibility: visible;
            color: white;
        }
       
    }
`

Styles.MenuList = styled.ul`
    display: flex;
  /*   position: absolute; */

    @media (max-width: 730px) {

        ${Styles.Menu}.active &{
            flex-direction: column;
            justify-content: center;
            width: 100%;
            min-height: 100%;
            align-items: center;
        }
        
    }
`

Styles.MenuItem = styled.li`
    position: relative;
    margin: 10px;
    padding: 1px;
`

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

    &::after {
        content: " ";
        width: 0%;
        height: 2px;
        border-radius: 1px;
        background-color: #000;
    }

    &:hover::after {
        animation: ${menuhover} 200ms forwards ;
    }

    @media (max-width: 730px) {
        color: white;
        font-size: 1.5em;
    }
`

export const DropDownHover = styled.div`
    @media (max-width: 730px){
        display: ${({active}) => active ? "block" : "none" };
    }
`

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

    ${DropDownHover}:hover &::after, &:hover::after {
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

        ${DropDownHover}:hover &::after {
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

    ${DropDownHover}:hover &{
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