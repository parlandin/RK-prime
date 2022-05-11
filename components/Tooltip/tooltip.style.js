import styled from "styled-components"

const Styles = {}

Styles.WrapperTool = styled.div`
    display: ${({visible}) => visible ? "block" : "none"};
    position: absolute;
    padding: 8px 12px;
    background-color: #000000fc;
    top: 52px;
    left: 0;
    color: #fff;
    border-radius: 5px;
    z-index: 2;
    
    &:after { 
    display: ${({visible}) => visible ? "block" : "none"};
    content: "";
    width: 0;
    height: 0;
    position: absolute;
    border-left: 11px solid transparent;
    border-right: 11px solid transparent;
    border-bottom: 11px solid #000000fc;
    top: -10px; 
    left: 6%;
    }

`

Styles.MessageText = styled.p`
    font-size: 1.1rem;
`

export default Styles;