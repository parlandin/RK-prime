import styled from "styled-components";


const Styles = {}

Styles.Wrapper = styled.div`
    max-width: 220px;
    display: flex;
    flex-direction: column;
    cursor: pointer;
    padding: 5px;

    &:hover {
        background-color: #faf2f2;
    }
`

Styles.WrapperImage = styled.div`
    padding: 5px;
    border: 1px solid #000;
    max-height: 180px;
    min-height: 180px;
    max-width: 140px;
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
`

Styles.PTitle = styled.p`
    font-size: 1.25rem;
    font-weight: 400px;
    margin: 5px 5px 5px 0px;
` 

Styles.Price = styled.span`
    font-size: 1.5rem;
    font-weight: 400px;
    align-self: center;
    margin: 10px 0;
`

export default Styles;