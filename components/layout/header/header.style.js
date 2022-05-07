import styled  from "styled-components";

const Styles = {};

Styles.WrapperHeader = styled.header`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    min-height: 64px;
`
Styles.WrapperGeneric = styled.div`
    background-color: #fff;
    z-index: 20;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    box-shadow: 0px 0px 3px 0px #b1abab;
`

Styles.Header = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;

    @media (max-width: 515px) {
        flex-direction: row;

        &::after {
            position: absolute;
            top: ${({active}) => active ? "-999px" : "70px"};
            left: 15%;
        }
    }
`

export default Styles;