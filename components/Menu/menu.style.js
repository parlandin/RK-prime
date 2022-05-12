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

export default Styles;