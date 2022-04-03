import styled from "styled-components";

const Styles = {};

Styles.Wrapper = styled.header`
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
`

Styles.WrapperLogo = styled.div`
    justify-content: center;
`
Styles.Menu = styled.nav`
    display: flex;
    justify-content: center;
`

Styles.MenuList = styled.ul`
    display: flex;
    justify-content: center;
`

Styles.MenuItem = styled.li`
    position: relative;
    margin: 10px;
    padding: 1px;
`
Styles.MenuLink = styled.a`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    text-decoration: none;
    color: #000;

    &:hover {
        border-bottom: 1px solid #000;
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

    &::after {
        content: '';
        top: 9px;
        left: 89%;
        position: absolute;
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid #000;
        clear: both;
    }
`


Styles.MenuDropDown = styled.ul`
    position: absolute;
    border: 1px solid #000;
    display: flex;
    flex-direction: column;
    left: 50%;
    top: 35px;
    transform: translateX(-50%);
    padding: 5px;
    border-radius: 5px;
    display: none;
    z-index: 2;
    background-color: white;

    &::after {
        content: "";
        width: 0;
        height: 0;
        position: absolute;
        border-left: 12px solid transparent;
        border-right: 12px solid transparent;
        border-bottom: 12px solid #000;
        top: -12px; 
        left: 40%;
    }

    ${DropDownHover}:hover &{
        transition: 1s ease-in-out;
        display: flex;
    }

    &:hover {
        display: flex;
    }

`


Styles.DropDownItem = styled.li`
    font-family: 'Roboto', sans-serif;
    margin: 5px 0;

    &:hover {
        border-bottom: 1px solid #000;
    }
`

export default Styles;