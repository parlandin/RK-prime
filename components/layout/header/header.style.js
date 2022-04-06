import styled, { keyframes } from "styled-components";

const Styles = {};


Styles.WrapperHeader = styled.header`
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    &::after {
        content: " ";
        width: 70%;
        height: 1px;
        background-color: #000;
    }

    @media (max-width: 515px) {
        flex-direction: row;

        &::after {
            position: absolute;
            top: ${({active}) => active ? "-999px" : "70px"};
            left: 15%;
        }
    }
`

Styles.TempDiv = styled.div`
    width: 38.8px;
    @media (max-width: 515px) {
        display: none;
    }
`

Styles.WrapperFistColum = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
`

Styles.ShoppingCart = styled.button`
    display: flex;
    border: none;
    cursor: pointer;
    background-color: transparent;

    @media (max-width: 1009px){
        margin-right: 10px;
    }
`

Styles.ShoppingCartQntd = styled.div`
    margin-left: 5px;
`

Styles.WrapperLogo = styled.div`
    justify-content: center;

    @media (max-width: 515px){
        max-width: 200px;
    }
`

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

    @media (max-width: 515px) {
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

    @media (max-width: 515px) {

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

    @media (max-width: 515px) {
        color: white;
        font-size: 1.5em;
    }
`

export const DropDownHover = styled.div`
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

    &:hover::after {
        content: '';
        top: 9px;
        left: 89%;
        position: absolute;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #000;
        border-top: none;
        clear: both;
    }

    ${DropDownHover}:hover &::after {
        content: '';
        top: 9px;
        left: 89%;
        position: absolute;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-bottom: 6px solid #000;
        border-top: none;
        clear: both;
    }

    @media (max-width: 515px) {
        color: white;
        font-size: 1.5em;
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

    &:hover {
        display: flex;
    }

    @media (max-width:515px){
        background-color: #121010de;
    }
`

Styles.DropDownItem = styled.li`
    font-family: 'Roboto', sans-serif;
    margin: 5px 0;

`
Styles.MenuMobile = styled.button`
    display: none;
    margin: 0 10px 0 15px;
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    width: 30px;
    height: 30px;

    @media (max-width:515px){
        display: block;
    }
`

Styles.ButtonMobile = styled.div`
    position: absolute;
    background-color: #000;
    width: 30px;
    height: 4px;
    border-radius: 4px;
    right: 0;  
    transition: 0.5s;
    border-radius: 2px;
    box-shadow:  0px -1px 1px rgba(255, 255, 255, 0.534);
    z-index: 5;

    &.active {
        background-color: transparent;
        box-shadow: none;
        &::before {
            transform: rotate(45deg);
            bottom: 0;
            background-color: white;
        }

        &::after {
            transform: rotate(133deg);
            top: 0;
            background-color: white;
        }
    }
   
   &::before {
        display: block;
        content:" ";
        background-color: #000;
        width: 30px;
        height: 4px;
        position: absolute;
        right: 0;
        bottom:10px;
        transition: 0.5s;
        border-radius: 2px;
        box-shadow:  0px -1px 1px rgba(255, 255, 255, 0.534);
    }

    &::after {
        display: block;
        content:" ";
        background-color: #000;
        width: 30px;
        height: 4px;
        position: absolute;
        right: 0;
        top: 10px;
        transition: 0.5s;
        border-radius: 2px;
        box-shadow:  0px -1px 1px rgba(255, 255, 255, 0.534);
    }

`

export default Styles;