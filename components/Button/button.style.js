import styled from "styled-components";

const Styles = {}

Styles.Button = styled.button`
    display: flex;
    padding: 10px;
    border-radius: 5px;
    border: 1px solid #000;
    justify-content: center;
    cursor: pointer;
    background-color: transparent;
    margin: 5px 0;
    margin-right: 10px;
    align-items: center;
    position: relative;

    &:last-of-type {
        margin-right: 0px;
    }
`

Styles.ButtonText = styled.span`
    font-size: 1.1rem;
    font-weight: 400;
    margin-left: 5px;
`

export default Styles;