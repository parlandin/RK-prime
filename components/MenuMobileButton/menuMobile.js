import styled from "styled-components";

const Styles = {};

Styles.MenuMobile = styled.button`
    display: none;
    margin: 0 10px 0 15px;
    position: relative;
    cursor: pointer;
    border: none;
    background: transparent;
    width: 30px;
    height: 30px;

    @media (max-width:730px){
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
   
   &::before, &::after {
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
        top: 10px;
        bottom: 0;
    }

`

export default Styles;