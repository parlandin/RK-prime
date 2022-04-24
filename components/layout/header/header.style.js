import styled  from "styled-components";

const Styles = {};

Styles.WrapperHeader = styled.header`
    width: 100%;
    background-color: #fff;
    border-radius: 10px;
    position: relative;
`

Styles.Header = styled.div`
    margin: 0 auto;
    max-width: 1000px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 10px;
    //margin-top: 15px;

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