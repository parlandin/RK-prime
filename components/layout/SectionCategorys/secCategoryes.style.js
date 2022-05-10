import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.section`
    width: 100%;
    margin: 30px 0;
`
Styles.WrapperLoading = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 10px 0;
`

Styles.TitleSection = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 10px;

    @media (max-width: 1035px){
        padding: 0 10px;
    }
`

Styles.Alink = styled.a`
    min-width: 63px;
    color: #000;
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    flex-direction: column;

    &::after {
        content: "";
        width: 0;
        height: 2px;
        background-color: #000;
    }

    &:hover {
        &::after {
            transition: 300ms ease-in-out;
            width: 100%;
        }
    }
`


export default Styles;